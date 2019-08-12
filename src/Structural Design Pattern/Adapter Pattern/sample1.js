
class point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  toString () {
    return `(${this.x}, ${this.y})`
  }
}

let drawPoint = function (point) {
  process.stdout.write('.')
}

class VectorObject extends Array {}
class VectorRectangle extends VectorObject {
  constructor (x, y, width, height) {
    super()
    this.push(new Line(new Point(x, y), new Point(x + width, y)))
    this.push(new Line(new Point(x + width, y), new Point(x + width, y + height)))
    this.push(new Line(new Point(x, y), new Point(x, y + height)))
    this.push(new Line(new Point(x, y + height), new Point(x + width, y + height)))
  }
}

class Line {
  constructor (start, end) {
    this.start = start
    this.end = end
  }

  toString () {
    return `${this.start.toString()}->${this.end.toString()}}`
  }
}

let vectorObjects = [
  new VectorRectangle(1, 1, 10, 10),
  new VectorRectangle(3, 3, 6, 6)
]

class LinePointAdapter extends Array {
  constructor (line) {
    super()
    console.log(`${LinePointAdapter.count++}: Generationg ` +
        `point for line ${line.toString()} (no caching)`)
  }
}
