
import { compileShader, createProgram, getUniforms, hashCode, baseVertexShader, fragmentShaders } from './shaders';

export class Material {
  vertexShader: WebGLShader;
  fragmentShaderSource: string;
  programs: any;
  activeProgram: WebGLProgram | null;
  uniforms: any;
  gl: WebGLRenderingContext | WebGL2RenderingContext;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShaderSource: string) {
    this.gl = gl;
    this.vertexShader = vertexShader;
    this.fragmentShaderSource = fragmentShaderSource;
    this.programs = [];
    this.activeProgram = null;
    this.uniforms = [];
  }
  
  setKeywords(keywords: string[]) {
    let hash = 0;
    for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]);
    let program = this.programs[hash];
    if (program == null) {
      let fragmentShader = compileShader(
        this.gl,
        this.gl.FRAGMENT_SHADER,
        this.fragmentShaderSource,
        keywords
      );
      program = createProgram(this.gl, this.vertexShader, fragmentShader);
      this.programs[hash] = program;
    }
    if (program === this.activeProgram) return;
    this.uniforms = getUniforms(this.gl, program);
    this.activeProgram = program;
  }
  
  bind() {
    this.gl.useProgram(this.activeProgram);
  }
}

export class Program {
  uniforms: any;
  program: WebGLProgram;
  gl: WebGLRenderingContext | WebGL2RenderingContext;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    this.gl = gl;
    this.uniforms = {};
    this.program = createProgram(gl, vertexShader, fragmentShader);
    this.uniforms = getUniforms(gl, this.program);
  }
  
  bind() {
    this.gl.useProgram(this.program);
  }
}

export function createAllPrograms(gl: WebGLRenderingContext | WebGL2RenderingContext, ext: any) {
  const baseVertex = compileShader(gl, gl.VERTEX_SHADER, baseVertexShader);
  
  const copyShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.copy);
  const clearShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.clear);
  const splatShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.splat);
  const advectionShader = compileShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaders.advection,
    ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]
  );
  const divergenceShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.divergence);
  const curlShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.curl);
  const vorticityShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.vorticity);
  const pressureShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.pressure);
  const gradientSubtractShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaders.gradientSubtract);

  return {
    copyProgram: new Program(gl, baseVertex, copyShader),
    clearProgram: new Program(gl, baseVertex, clearShader),
    splatProgram: new Program(gl, baseVertex, splatShader),
    advectionProgram: new Program(gl, baseVertex, advectionShader),
    divergenceProgram: new Program(gl, baseVertex, divergenceShader),
    curlProgram: new Program(gl, baseVertex, curlShader),
    vorticityProgram: new Program(gl, baseVertex, vorticityShader),
    pressureProgram: new Program(gl, baseVertex, pressureShader),
    gradientSubtractProgram: new Program(gl, baseVertex, gradientSubtractShader),
  };
}
