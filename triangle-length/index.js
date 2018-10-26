function isTriangle(a,b,c)
{
  if( a = 0) return false;
  let isTriangle = false;
  if( a + b > c && a + c > b && b + c > a) {
     return true;
  } 
  return false;
}

console.log(isTriangle(0,2,2));