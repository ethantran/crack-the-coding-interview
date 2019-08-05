function maxSquareMatrix(m) {
  // prefix sums
  let ps = Array(m.length)
    .fill()
    .map(() =>
      Array(m.length)
        .fill()
        .map(() => [0, 0])
    );
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      if (m[r][c]) {
        ps[r][c][0] = (ps[r - 1] ? ps[r - 1][c][0] : 0) + m[r][c];
        ps[r][c][1] = (ps[r][c - 1] ? ps[r][c - 1][1] : 0) + m[r][c];
      }
    }
  }
  let max = 0;
  for (let r = m.length - 1; r >= 0; r--) {
    for (let c = m[r].length - 1; c >= 0; c--) {
      // is square dimensionally
      if (ps[r][c][0] > 0 && ps[r][c][0] > max && ps[r][c][0] === ps[r][c][1]) {
        // has border
        if (hasBorder(m, r, c, ps[r][c][0])) {
          max = ps[r][c][0];
        }
      }
    }
  }
  return max;
}

function hasBorder(m, row, col, size) {
  // top and bottom borders
  for (let r = row + 1; r >= row - size - 1; r -= size + 1) {
    if (!m[r]) {
      return false;
    }
    for (let c = col + 1; c >= col - size; c--) {
      if (m[r][c] === 1) {
        return false;
      }
    }
  }
  // left and right borders
  for (let c = col + 1; c >= col - size - 1; c -= size + 1) {
    for (let r = row + 1; r >= row - size; r--) {
      if (m[r][c] === 1) {
        return false;
      }
    }
  }
  return true;
}

let m;
let a;
/**
 * 0,0,0,0,0
 * 0,1,1,1,0
 * 0,1,1,1,0
 * 0,1,1,1,0
 * 0,0,0,0,0
 */
m = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0]
];
a = maxSquareMatrix(m);
a;

/**
1,0,0,0,0,0,0
0,1,1,0,0,0,0
0,1,1,0,0,0,0
0,0,0,1,1,1,0
0,0,0,1,1,1,0
0,0,0,1,1,1,0
0,0,0,0,0,0,0
 */
m = [
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
a = maxSquareMatrix(m);
a;

m = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1]
];
a = maxSquareMatrix(m);
a;

m = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1]
];
a = maxSquareMatrix(m);
a;
