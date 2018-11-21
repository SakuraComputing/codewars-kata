function capitalsFirst(str) {

    let l = [], u = [];

    str.split(' ').map(word => {
        if(word.charAt(0).match(/^[A-Z]+$/i))
          word.charAt(0) == word.charAt(0).touCase() ?
            u.push(word.trim()) : l.push(word.trim());
        }
    );

    if(u.length > 0 && l.length > 0) 
        capStr = u.join(' ') + " " + l.join(' ') 
    else if (u.length > 0) {
        capStr = u.join(' ')
    } else if (l.length > 0){
        capStr = l.join(' ')
    }
    return capStr;
}


console.log(capitalsFirst("bis42a ku g+5b"));