export class AverageQueue {
  private maxLength: number;
  private length: number;
  private sum: number;
  private pointer: number;
  private array: number[];

  constructor(maxLength: number) {
    this.maxLength = maxLength;
    this.array = new Array<number>(maxLength);
    this.array.fill(0);
    this.pointer = 0;
    this.length = 0;
    this.sum = 0;
  }

  push(value: number) {
    this.sum += value - this.array[this.pointer];

    this.array[this.pointer++] = value;

    if (this.length < this.maxLength)
      this.length++;

    if (this.pointer == this.maxLength)
      this.pointer = 0;
  }
  
  average() {
    if (this.length == 0)
      return 0;

    return this.sum / this.length;
  }
}