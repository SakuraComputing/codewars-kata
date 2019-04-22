function mergeArrays(arr1, arr2) {
  
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

  

}

console.log(mergeArrays([1,3,2],[3,4]));