class Point
{
  public x: number;
  public y: number;
  constructor(x: number, y: number)
  {
    this.x = x;
    this.y = y;
  }
  deepCopy()
  {
      return new Point(
          this.x,
          this.y
      );
  }
}

class Line
{
  public start: Point;
  public end: Point;
  constructor(start: Point, end: Point)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
    // todo
    return new Line(
        this.start.deepCopy(),
        this.end.deepCopy()
    );
  }

  toString(){
      return `Start point: ${start.x}, ${start.y}, End point: ${end.x}, ${end.y}`;
  }
}

let start = new Point(2,3);
let end = new Point(4,5);
let line1 = new Line(start, end);

let line2 = line1.deepCopy();

console.log(line1.toString());
console.log(line2.toString());
