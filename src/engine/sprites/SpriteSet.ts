export class SpriteSet {
  source: "server" | "client";
  path: string;

  constructor(source: "server" | "client", path: string) {
    this.source = source;
    this.path = path;
  }
}

export class SpritesMetaModel {
  image: string;

  constructor(image: string) {
    this.image = image;
  }
}

export class SpriteModel {
  x: number;
  y: number;
  w: number;
  h: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}
