import { chunkSize } from "./Chunk";

export class Position {
  x: number;
  y: number;

  public get cellPosX() {
    const dev = this.x % chunkSize;
    return dev < 0 ? dev + chunkSize : dev;
  }

  public get cellPosY() {
    const dev = this.y % chunkSize;
    return dev < 0 ? dev + chunkSize : dev;
  }

  public get chunkX() {
    return Math.floor(this.x / chunkSize);
  }
  public get chunkY() {
    return Math.floor(this.y / chunkSize);
  }

  public get crossChunkX() {
    return Math.floor(this.x / chunkSize + 0.5);
  }
  public get crossChunkY() {
    return Math.floor(this.y / chunkSize + 0.5);
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

}