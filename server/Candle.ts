
export default class Candle {
  y: number[];
  x: Date;

  constructor(openTime: string | number | Date, open: number, high: number, low: number, close: number){
    this.x = new Date(openTime);
    this.y = [open, high, low, close];
  }
}