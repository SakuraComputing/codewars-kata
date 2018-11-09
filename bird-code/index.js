function birdCode(birds) {
    
    let birdCode = [];
    for (let bird of birds) {
        bird = bird.replace(/-/g, ' ').split(' ');
        let code = '';
        let count = 0;
        for (const word of bird) {
            count++;
            if(bird.length === 1) {
                code = word.slice(0, 4);
            } else if (bird.length === 2) {
                code += word.slice(0, 2);
            } else if(bird.length === 3) {
                if(count < 3) {
                    code += word.slice(0, 1);
                } else {
                    code += word.slice(0, 2);
                }
            } else if(bird.length === 4) {
                code += word.slice(0, 1);
            }
        }
        birdCode.push(code.toUpperCase());
    }
    return birdCode;
}

// console.log(birdCode(["KooKoo","Common Tern", "Black-Capped Chickadee", "BoboLink"]))
console.log(birdCode(["Black-crowned Night-Heron"]))