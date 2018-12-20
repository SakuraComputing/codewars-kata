function squares(x, n) {

    if(n <= 0) return [];
    let sq = [x];
    for (let i = 1; i < n; i++) sq.push(Math.pow(sq[i  - 1], 2));
    return sq;
}

console.log(squares(3, 3));

