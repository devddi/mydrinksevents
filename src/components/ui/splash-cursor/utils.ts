
import type { PointerData } from './types';

export function generateColor() {
  // Using color #FF5400 with variations
  const baseColor = { r: 1.0, g: 0.329, b: 0.0 }; // #FF5400 normalized
  
  // Adding small variations to maintain dynamism
  const variation = 0.3;
  const r = Math.max(0, Math.min(1, baseColor.r + (Math.random() - 0.5) * variation));
  const g = Math.max(0, Math.min(1, baseColor.g + (Math.random() - 0.5) * variation));
  const b = Math.max(0, Math.min(1, baseColor.b + (Math.random() - 0.5) * variation));
  
  return { r: r * 0.3, g: g * 0.3, b: b * 0.3 }; // Reducing intensity to 30%
}

export function wrap(value: number, min: number, max: number) {
  const range = max - min;
  if (range === 0) return min;
  return ((value - min) % range) + min;
}

export function correctRadius(radius: number, canvas: HTMLCanvasElement) {
  let aspectRatio = canvas.width / canvas.height;
  if (aspectRatio > 1) radius *= aspectRatio;
  return radius;
}

export function correctDeltaX(delta: number, canvas: HTMLCanvasElement) {
  let aspectRatio = canvas.width / canvas.height;
  if (aspectRatio < 1) delta *= aspectRatio;
  return delta;
}

export function correctDeltaY(delta: number, canvas: HTMLCanvasElement) {
  let aspectRatio = canvas.width / canvas.height;
  if (aspectRatio > 1) delta /= aspectRatio;
  return delta;
}

export function updatePointerDownData(
  pointer: PointerData,
  id: number,
  posX: number,
  posY: number,
  canvas: HTMLCanvasElement
) {
  pointer.id = id;
  pointer.down = true;
  pointer.moved = false;
  pointer.texcoordX = posX / canvas.width;
  pointer.texcoordY = 1.0 - posY / canvas.height;
  pointer.prevTexcoordX = pointer.texcoordX;
  pointer.prevTexcoordY = pointer.texcoordY;
  pointer.deltaX = 0;
  pointer.deltaY = 0;
  const color = generateColor();
  pointer.color = [color.r, color.g, color.b];
}

export function updatePointerMoveData(
  pointer: PointerData,
  posX: number,
  posY: number,
  color: { r: number; g: number; b: number },
  canvas: HTMLCanvasElement
) {
  pointer.prevTexcoordX = pointer.texcoordX;
  pointer.prevTexcoordY = pointer.texcoordY;
  pointer.texcoordX = posX / canvas.width;
  pointer.texcoordY = 1.0 - posY / canvas.height;
  pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX, canvas);
  pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY, canvas);
  pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
  pointer.color = [color.r, color.g, color.b];
}

export function updatePointerUpData(pointer: PointerData) {
  pointer.down = false;
}
