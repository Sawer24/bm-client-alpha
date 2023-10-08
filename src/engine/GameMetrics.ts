import { AverageQueue } from "@/helpers/AverageQueue";

export class GameMetrics {
  private lastTick: number | undefined;

  private totalTicks: number = 0;

  private msptQueue: AverageQueue | undefined;

  reset() {
    this.lastTick = undefined;
    this.totalTicks = 0;
  }

  tick(): number {
    const now = performance.now();
    const delay = this.lastTick ? now - this.lastTick : 0;

    if (this.msptQueue)
      this.msptQueue.push(delay);
    
    this.lastTick = now;
    this.totalTicks++;
    return delay;
  }

  on() {
    this.msptQueue = new AverageQueue(300);
  }

  off() {
    this.msptQueue = undefined;
  }

  getAvgMspt(): number {
    if (!this.msptQueue)
      return 0;

    return this.msptQueue.average();
  }

  getAvgFps() {
    const avg = this.getAvgMspt();

    if (avg == 0)
      return 0;

    return 1000 / avg;
  }

  getTotalFrames() {
    return this.totalTicks;
  }
}