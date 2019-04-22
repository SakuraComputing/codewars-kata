function depth(obj) {

  if(obj == null || Array.isArray(obj) && obj.findIndex(value => {typeof value == 'object' == -1})) return 0;
    
  let d = 0;
    
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!Array.isArray(obj)) d++
    }
  }
  return d;
}

console.log(depth({a: 1}));
console.log(depth(null));
console.log(depth({a: 1, b: {c: 2}}));
