function isTuringEquation(s) {
    
    p = s.split("=")[0];
    r = s.split("=")[1];
    a = p.split("+")[0];
    b = p.split("+")[1];

    return parseInt(r.split("").reverse().join('')) === parseInt(a.split("").reverse().join('')) + parseInt(b.split("").reverse().join('')) ? true : false;
        
 }

console.log(isTuringEquation("73+42=16"));
console.log(isTuringEquation("5+8=13"));
console.log(isTuringEquation("10+20=30"),true);
console.log(isTuringEquation("0001000+000200=00030"),true)
console.log(isTuringEquation("1234+5=1239"),false)
console.log(isTuringEquation("1+0=0"),false)
console.log(isTuringEquation("7000+8000=51"),true)
console.log(isTuringEquation("0+0=0"),true)