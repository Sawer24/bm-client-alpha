import { Game } from "@/game/Game";
import { tError } from "@/helpers/throwError";
import { GameMetrics } from "./GameMetrics";
import { Chunk, chunkSize } from "@/game/Chunk";

const cellRenderDistance = 6;
const cellSize = 32;

export class GameRender {

  private game: Game;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private looped: boolean;

  private sprites: Map<number, HTMLImageElement>;

  private isDebug: boolean;
  private metrics: GameMetrics;

  constructor(game: Game, canvasName: string) {
    this.game = game;
    this.canvas = (document.querySelector(canvasName) ?? tError("Failed to get canvas.")) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') ?? tError("Failed to get canvas context.");
    this.looped = false;
    this.isDebug = false;
    this.metrics = new GameMetrics();

    this.sprites = new Map<number, HTMLImageElement>();
    this.sprites.set(0, new Image());
    this.sprites.get(0)!.src = "tile.png";
  }

  debug(debugMode: boolean = true) {
    if (this.isDebug == debugMode) return;

    if (debugMode) {
        this.metrics.on();
        this.isDebug = true;
    }
    else {
        this.isDebug = false;
        this.metrics.off();
    }
  }

  start() {
    if (this.looped) return;
    this.looped = true;
    requestAnimationFrame(() => this.gameLoop());
  }

  stop() {
    this.looped = false;
  }

  private gameLoop() {
    this.clear();

    if (!this.looped) {
      this.metrics.reset();
      return;
    }
    const delay = this.metrics.tick();

    this.drawFrame(delay);

    if (this.isDebug)
      this.drawDebug(delay);

    requestAnimationFrame(() => this.gameLoop());
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawDebug(delay: number) {
    this.context.fillStyle = "black";
    this.context.fillText(`fps: ${+this.metrics.getAvgFps().toFixed(2)}`, 1, 8);
    this.context.fillText(`mspt: ${delay}`, 1, 16);
    this.context.fillText(`avg: ${+this.metrics.getAvgMspt().toFixed(2)}`, 1, 24);
  }

  private drawFrame(delay: number) {
    this.game.playerPos.x += delay / 300;
    this.game.playerPos.y += delay / 300;
    this.drawCells();
    this.context.fillStyle = "white";
    this.context.fillRect(158, 174, 2, 2);
  }

  private drawCells() {
    const playerPos = this.game.playerPos;
    
    const minX = Math.floor(playerPos.x - cellRenderDistance);
    const minY = Math.floor(playerPos.y - cellRenderDistance);

    const maxX = Math.floor(playerPos.x + cellRenderDistance);
    const maxY = Math.floor(playerPos.y + cellRenderDistance);

    const maxChunkX = Math.floor(maxX / chunkSize);
    const maxChunkY = Math.floor(maxY / chunkSize);

    for (let cx = Math.floor(minX / chunkSize); cx <= maxChunkX; cx++)
      for (let cy = Math.floor(minY / chunkSize); cy <= maxChunkY; cy++)
      {
        const chunk = this.game.chunks.getChunk(cx, cy);
        if (!chunk)
          continue;

        const startX = this.inChunkPos(Math.max(minX, cx * chunkSize));
        const startY = this.inChunkPos(Math.max(minY, cy * chunkSize));

        const endX = this.inChunkPos(Math.min(maxX, (cx + 1) * chunkSize - 1));
        const endY = this.inChunkPos(Math.min(maxY, (cy + 1) * chunkSize - 1));

        const offsetX = 159 + cellSize * (cx * chunkSize - playerPos.x);
        const offsetY = 175 - cellSize * (cy * chunkSize - playerPos.y + 1);

        for (let i = startX; i <= endX; i++)
          for (let j = startY; j <= endY; j++)
            this.context.drawImage(this.sprites.get(chunk.cells[i][j].floorId)!, offsetX + cellSize * i, offsetY - cellSize * j, cellSize, cellSize);
      }
  }

  inChunkPos(n: number) {
    const dev = n % chunkSize;
    return dev < 0 ? dev + chunkSize : dev;
  }
}
