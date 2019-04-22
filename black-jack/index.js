'user strict'
function winners(player1, player2, player3, croupier, deck) {
    
    let p1Count = 0, aceCount = 0, p1Won = false;

    for (const card of player1) {
        if(!isNaN(card)) {
            p1Count += parseInt(card);
            console.log(parseInt(card), p1Count);
        } else if (card.match(/[JQK]/g)) {
            p1Count += 10;
        } else if (card === 'A') {
            aceCount++;
            p1Count += 11;
        }
    }
    if(p1Count === 21 && player1.length === 2) {
        p1Won = true;
    } else if (p1Count <= 21) {
        p1Won = true;
    } else if (p1Count > 21 && aceCount > 0) {
        p1Count = p1Count - (aceCount * 9)
        if(p1Count <= 21) {
           p1Won = true; 
        }
    }

    



    return p1Won ? 'Player 1' : '';
}

console.log(
winners(
    ["J", "A", "2", "Q", "3"],
    ["5", "8"],
    ["6", "Q", "2"],
    ["3", "10"],
    ["A", "4", "10", "5", "4", "A", "Q", "2", "6", "A", "5", "7", "9", "Q", "2", "8", "9", "A", "K", "2", "8"]
)
);