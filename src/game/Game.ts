import { Chunk } from "./Chunk";
import { ChunkGrid } from "./ChunkGrid";
import { Position } from "./Position";

export class Game {
  private _chunks: ChunkGrid;  
  public get chunks(): ChunkGrid {
    return this._chunks;
  }

  private _playerPos: Position;
  public get playerPos(): Position {
    return this._playerPos;
  }

  constructor(playerPos: Position) {
    this._chunks = new ChunkGrid();
    this._playerPos = playerPos;
  }

  addChunk(x: number, y: number, chunk: Chunk) {
    this._chunks.setChunk(x, y, chunk);
  }
}
