function menFromBoys(arr) {

    let men = [], boys = [];

    arr.map(char => { 
        if(char % 2 === 0)  
            !men.includes(char) ? men.push(char) : null 
         else 
            !boys.includes(char) ? boys.push(char) : null
    });

   men.sort((a, b) => { return a - b; });
   boys.sort((a, b) => { return b - a; });

   return men.concat(boys);
}

console.log(menFromBoys([7,3,14,17]));
console.log(menFromBoys([82,91,72,76,76,100,85]));
