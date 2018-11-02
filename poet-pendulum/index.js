function pendulum(values) {
    let answer = [];
    values = values.sort(((a,b) => a - b));
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        ((i + 1) % 2 === 0) ? answer.push(value) :answer.unshift(value);
    }
    return answer // Do your magic!
}

console.log(pendulum([4,10,9]));