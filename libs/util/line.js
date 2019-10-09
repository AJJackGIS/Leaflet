/**
 * 判断2条直线是否相交
 * @param line1
 * @param line2
 * @returns {number}
 */
function isIntersect(line1, line2) {
  let p1 = line1[0];
  let p2 = line1[1];
  let q1 = line2[0];
  let q2 = line2[1];

  // let a1 = (p2.x - p1.x) * (q1.y - p1.y) - (q1.x - p1.x) * (p2.y - p1.y);
  // let a2 = (p2.x - p1.x) * (q2.y - p1.y) - (q2.x - p1.x) * (p2.y - p1.y);
  //
  // let b1 = (q2.x - q1.x) * (p1.y - q1.y) - (p1.x - q1.x) * (q2.y - q1.y);
  // let b2 = (q2.x - q1.x) * (p2.y - q1.y) - (p2.x - q1.x) * (q2.y - q1.y);
  //
  // if (a1 * a2 < 0 && b1 * b2 < 0) {
  //   return true
  // }
  // return false

  let a1 = (q1.x - p2.x) * (q2.y - p2.y) - (q2.x - p2.x) * (q1.y - p2.y);
  let a2 = (q1.x - p1.x) * (q2.y - p1.y) - (q2.x - p1.x) * (q1.y - p1.y);

  return a1 * a2;

}

var a = [{x: 1, y: 3}, {x: 2, y: 4}];
var b = [{x: 2, y: 2}, {x: 1, y: 2}];
console.log(isIntersect(a, b));