function bordeom(staff) {

    // const assess = [ 
    //     { id: 1, dept: 'accounts' },
    //     { id: 2, dept: 'finance' },
    //     { id: 10, dept: 'canteen' },
    //     { id: 3, dept: 'regulation' },
    //     { id: 6, dept: 'trading' },
    //     { id: 6, dept: 'change' },
    //     { id: 8, dept: 'IS' },
    //     { id: 5, dept: 'retail' },
    //     { id: 4, dept: 'cleaning' },
    //     { id: 25, dept: 'pissing about' }
    // ]

    // let count = 0;
    // for (const name in staff) {
    //     const dept = staff[name];
    //     for (let i = 0; i < assess.length; i++) {
    //         if(assess[i].dept === dept) {
    //             count += assess[i].id;
    //         }
    //     }
    // }
    // if(count > 100) {
    //     return 'party time!!'
    // } else if (count <= 100 && count > 80) {
    //     return 'i can handle this'
    // } else if (count <= 80) {
    //     return 'kill me now'
    // }

    var map = {
        accounts:1,
        finance:2,
        canteen:10,
        regulation:3,
        trading: 6,
        change:6,
        IS:8,
        retail:5,
        cleaning:4,
        'pissing about':25
      };
      
      console.log(Object.keys(staff));

      var score = Object.keys(staff).reduce(
        function(a,b){     
          console.log(map[staff[b]]);
          return a+map[staff[b]]
       },0); 
      
      return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}

console.log(bordeom({ tim: 'finance',
jim: 'trading',
randy: 'pissing about',
sandy: 'retail',
andy: 'canteen',
katie: 'change',
laura: 'change',
saajid: 'regulation',
alex: 'pissing about',
john: 'trading',
mr: 'trading'}));
