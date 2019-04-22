function capitalsFirst(str) {

    let l = [], u = [];

    str.split(' ').map(w => {
        if(w.charAt(0).match(/^[A-Z]+$/i))
          w.charAt(0) == w.charAt(0).toUpperCase() ? u.push(w) : l.push(w);
    });

    if(u.length > 0 && l.length > 0) 
        cap = u.join(' ') + " " + l.join(' ') 
    else if (u.length > 0) {
        cap = u.join(' ')
    } else if (l.length > 0){
        cap = l.join(' ')
    }
    return cap;
}


console.log(capitalsFirst("bis42a ku g+5b"));