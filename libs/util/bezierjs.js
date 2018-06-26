if (typeof BezierDirection == "undefined") {
    var BezierDirection = {};
    BezierDirection.OUTSIDE = 0; // 外扩
    BezierDirection.INSIDE = 1; // 内扩
}

/**
 *
 * @param x1 起始点x
 * @param y1 起始点y
 * @param x2 终点x
 * @param y2 终点y
 * @param radius 半径比率(0-1)
 * @param direction 外扩内扩
 */
function getBezierControlPoint(x1, y1, x2, y2, radius, direction) {

    var dir = 1; // 默认外扩
    if (direction === undefined || direction === BezierDirection.OUTSIDE) {
        y2 - y1 > 0 ? dir = 1 : dir = -1;
    } else if (direction === BezierDirection.INSIDE) {
        y2 - y1 > 0 ? dir = -1 : dir = 1;
    }

    var a = x1 - x2;
    var b = y1 - y2;
    var c = x1 * x1 - x2 * x2 + y1 * y1 - y2 * y2;
    var d = (x1 + x2) / 2;
    var e = (y1 + y2) / 2;
    var f = (a * a / 4 + b * b / 4) * radius * radius;
    var g = c / (2 * a);
    var h = b / a;
    var i = f - d * d - e * e;
    var j = h * h + 1;
    var k = 2 * g * h - 2 * d * h + 2 * e;
    var l = i - g * g + 2 * d * g;
    var y = (k - dir * Math.sqrt(k * k + 4 * j * l)) / (2 * j);
    var x = g - h * y;
    return {lat: y, lng: x};
}