async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}

(async () => {
  await m();
  console.log(2);
})();

console.log(3);

/**
 * promise1
 * promise2
 * 
 * 宏队列
 * 微队列 
 * 输出
 * 0 3 1 2
 */