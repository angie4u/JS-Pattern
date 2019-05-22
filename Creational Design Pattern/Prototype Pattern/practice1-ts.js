var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.deepCopy = function () {
        return new Point(this.x, this.y);
    };
    return Point;
}());
var Line = /** @class */ (function () {
    function Line(start, end) {
        this.start = start;
        this.end = end;
    }
    Line.prototype.deepCopy = function () {
        // todo
        return new Line(this.start.deepCopy(), this.end.deepCopy());
    };
    Line.prototype.toString = function () {
        return "Start point: " + start.x + ", " + start.y + ", End point: " + end.x + ", " + end.y;
    };
    return Line;
}());
var start = new Point(2, 3);
var end = new Point(4, 5);
var line1 = new Line(start, end);
var line2 = line1.deepCopy();
console.log(line1.toString());
console.log(line2.toString());
