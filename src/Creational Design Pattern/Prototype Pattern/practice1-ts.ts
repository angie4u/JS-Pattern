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

  toString = () => {
      return `Start point: ${this.start.x}, ${this.start.y}, End point: ${this.end.x}, ${this.end.y}`;
  }
}

export const practiceTest = () => {
  const start = new Point(2,3);
  const end = new Point(4,5);
  let line1 = new Line(start, end);

  let line2 = line1.deepCopy();
  line2.start = new Point(6,7);

  console.log(line1.toString());
  console.log(line2.toString());
}