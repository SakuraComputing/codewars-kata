function find_all(array, n){

    return array.reduce(function(a, e ,i) {
        if (e === n) 
            a.push(i);
        return a;
    }, []);

}
console.log(find_all([6, 9, 3, 4, 3, 82, 11], 3));
