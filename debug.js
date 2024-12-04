const sum = (a, b) => {
  if(a <=0 || b <= 0) {
    console.log('a,b必须大于0');
    return;
  }else {
    return a + b;
  }
}

const result = sum(1,2);
console.log(result);