function stockList(listOfArt, listOfCat) {

    let result = "";

    for (const cat of listOfCat) {
        count = 0;
        for (const elem of listOfArt) {
            if(elem.charAt(0) === "") {
                count = ""
            } else if(elem.charAt(0) === cat) {
                count += parseInt(elem.substring(5, 8)) 
            }
        }

        result += ` - (${cat} : ${count})`;
    }
    return result.substr(3);
}

// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// console.log(stockList(b, c));

// b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
// c = ["A", "B", "C", "W"];
// console.log(stockList(b, c));

b = ["", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
c = ["A", "B", "C", "W"];
console.log(stockList(b, c));