// class Point
// {
//   constructor(x, y)
//   {
//     this.x = x;
//     this.y = y;
//   }
//   deepCopy()
//   {
//       return new Point(
//           this.x,
//           this.y
//       );
//   }
// }

// class Line
// {
//   constructor(start, end)
//   {
//     this.start = start;
//     this.end = end;
//   }

//   deepCopy()
//   {
//     // todo
//     return new Line(
//         this.start.deepCopy(),
//         this.end.deepCopy()
//     );
//   }

//   toString(){
//       return `Start point: ${start.x}, ${start.y}, 
//                 End point: ${this.end.x}, ${end.y}`;
//   }
// }

// let start2 = new Point(2,3);
// let end2 = new Point(4,5);

// let line1 = new Line(start2, end2);

// let line2 = line1.deepCopy();

// // let line2 = line1;
// console.log("line2: ",line2);

// line2.start = new Point(6,7);
// console.log("line2: ",line2);

// console.log(line1.toString());
// console.log(line2.toString());
