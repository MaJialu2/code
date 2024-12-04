async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}

m();
console.log(2);

/**
 * promise fulfilled 1
 * 宏队列
 * 微队列
 * 输出
 * 0 2 1 
 */