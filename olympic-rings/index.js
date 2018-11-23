function olympicRing(a){

    let rings = ['a','b','d','e', 'g','o', 'p','q', 'A', 'D', 'O', 'P','Q','R'];
    let dblRings = ['B']
    let count= 0;

    for (const letter of a.split('')) {
        if(rings.includes(letter)) { count++ }
        if(dblRings.includes(letter)) { count += 2 }
    }
    r = Math.floor(((count / 2)));

    return (r < 2) ? 'Not even a medal!' : r === 2 ? 'Bronze!' : r === 3 ? 'Silver!' : 'Gold!';
}

console.log(olympicRing('wHjMudLwtoPGocnJ'));
console.log(olympicRing('eCEHWEPwwnvzMicyaRjk'));
console.log(olympicRing('JKniLfLW'));
console.log(olympicRing('lQzEVGakxioBggKnnTg'));
console.log(olympicRing('fKYdZtVdUFugbtOjeuYjlaxi'));
console.log(olympicRing('PftnnSXtPQOkhGlfq'));
