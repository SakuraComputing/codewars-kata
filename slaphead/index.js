function bald(x) {

    let name;

    const count = x.match(/\//ig);

    if(count) {
        switch (count.length) {
            case 1:
                name = "Unicorn!";
                break;
            case 2:
                name = "Homer!";
                break;
            case 3:
            case 4:
            case 5:
                name = "Careless!";
                break;
            default:
                name = "Hobo!"
        }
    } else {
        name = "Clean!"
    }

    return new Array(x.replace(/\//g, '-'), name);

}

console.log(bald('----------'));  // '----------'
console.log(bald('/-----/-'));  // '----------'
console.log(bald('--/--/---/-/---'));  // '----------'
