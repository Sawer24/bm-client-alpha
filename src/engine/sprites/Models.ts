export class ClientSpriteListModel {
  image: HTMLImageElement;
  frames: Map<string, SpriteModel>;

  constructor(image: HTMLImageElement, sprites: Map<string, SpriteModel>) {
    this.image = image;
    this.frames = sprites;
  }
}

export class SpriteListModel {
  meta: SpritesMetaModel;
  frames: Map<string, SpriteModel>;

  constructor(meta: SpritesMetaModel, sprites: Map<string, SpriteModel>) {
    this.meta = meta;
    this.frames = sprites;
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
