export class Sprite {
  sourceImage: HTMLImageElement;
  sx: number;
  sy: number;
  sw: number;
  sh: number;

  constructor(sourceImage: HTMLImageElement, sx: number, sy: number, sw: number, sh: number) {
    this.sourceImage = sourceImage;
    this.sx = sx;
    this.sy = sy;
    this.sw = sw;
    this.sh = sh;
  }
}
