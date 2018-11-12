function shoot(x) {
    
    let peteScore = 0, philScore = 0; 

    for (let i = 0; i < 3; i++) {
        const round = x[i];
        const shots = round[0];
        const smokeClay = round[1]
        for (const key in shots) {
            let shotsMade = shots[key].split('').reduce(function(acc, curr) {
                return acc + (curr === 'X')
            }, 0)
            if(key === 'P1') {
                smokeClay ? peteScore += (shotsMade * 2) : peteScore += (shotsMade * 1);
            } else {
                smokeClay ? philScore += (shotsMade * 2) : philScore += (shotsMade * 1);
            }
        }
    }

    if(peteScore > philScore) {
        return 'Pete Wins!';   
    } else if (philScore > peteScore) {
        return 'Phil Wins!'
    } else {
        return 'Draw!'   
    };
}

console.log(shoot([[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]))