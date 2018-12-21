function skiJump(mountain) {

    let speed = (mountain.length * 1.5);

    let jump = ((mountain.length * speed * 9) / 10).toFixed(2);

    switch(true) {
        case (jump < 10):
            return `${jump} metres:He\'s crap!`;
        case jump > 10 && jump < 25:
            return `${jump} metres:He\'s ok!`;
        case jump > 25 && jump < 50:
            return `${jump} metres:He\'s flying!`;
        case jump > 50:
            return `${jump} metres:Gold!!!`;
    }
}

console.log(skiJump(['*']));
console.log(skiJump(['*', '**', '***', '****', '*****', '******']))