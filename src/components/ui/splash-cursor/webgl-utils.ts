import type { SplashCursorConfig, WebGLExtensions, FBO, DoubleFBO } from './types';

export function getWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext | WebGL2RenderingContext | null {
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  return gl;
}

export function getWebGLExtensions(gl: WebGLRenderingContext | WebGL2RenderingContext): WebGLExtensions {
  const isWebGL2 = gl instanceof WebGL2RenderingContext;
  
  let supportLinearFiltering: any;
  if (isWebGL2) {
    supportLinearFiltering = gl.getExtension('EXT_color_buffer_float');
  } else {
    const gl1 = gl as WebGLRenderingContext;
    supportLinearFiltering = gl1.getExtension('OES_texture_float_linear');
  }

  let formatRGBA: any;
  let formatRG: any;
  let formatR: any;
  if (isWebGL2) {
    formatRGBA = gl.RGBA16F;
    formatRG = gl.RG16F;
    formatR = gl.R16F;
  } else {
    formatRGBA = gl.RGBA;
    formatRG = gl.RGBA;
    formatR = gl.RGBA;
  }

  let halfFloatTexType: any;
  if (isWebGL2) {
    halfFloatTexType = gl.HALF_FLOAT;
  } else {
    const gl1 = gl as WebGLRenderingContext;
    halfFloatTexType = gl1.getExtension('OES_texture_half_float')?.HALF_FLOAT_OES;
  }

  return {
    formatRGBA,
    formatRG,
    formatR,
    halfFloatTexType,
    supportLinearFiltering,
  };
}

export function createFBO(
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  width: number,
  height: number,
  internalFormat: number,
  format: number,
  type: number,
  param: number
): FBO {
  gl.activeTexture(gl.TEXTURE0);

  const texture = gl.createTexture() as WebGLTexture;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, format, type, null);

  const fbo = gl.createFramebuffer() as WebGLFramebuffer;
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  gl.viewport(0, 0, width, height);
  gl.bindTexture(gl.TEXTURE_2D, null);

  return {
    texture,
    fbo,
    width,
    height,
    texelSizeX: 1 / width,
    texelSizeY: 1 / height,
    attach(id: number) {
      gl.activeTexture(gl.TEXTURE0 + id);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      return id;
    },
  };
}

export function createDoubleFBO(
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  width: number,
  height: number,
  internalFormat: number,
  format: number,
  type: number,
  param: number
): DoubleFBO {
  let fbo1 = createFBO(gl, width, height, internalFormat, format, type, param);
  let fbo2 = createFBO(gl, width, height, internalFormat, format, type, param);

  return {
    width,
    height,
    texelSizeX: fbo1.texelSizeX,
    texelSizeY: fbo1.texelSizeY,
    read: fbo1,
    write: fbo2,
    swap() {
      let temp = fbo1;
      fbo1 = fbo2;
      fbo2 = temp;
      this.read = fbo1;
      this.write = fbo2;
    },
  };
}

export function createTextureAsync(gl: WebGLRenderingContext | WebGL2RenderingContext, url: string): Promise<WebGLTexture> {
  return new Promise((resolve) => {
    let texture = gl.createTexture() as WebGLTexture;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const img = new Image();
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      resolve(texture);
    };
    img.src = url;
  });
}
