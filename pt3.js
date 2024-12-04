setTimeout(() => {
  console.log(1);
}, 0);


const promise = new Promise((resolve, reject) => {
  console.log(2);
  resolve();
});

promise.then(() => {
  console.log(3);
});

console.log(4);

/**
 * promise fulfilled undefined
 * 延时队列 f1
 * 微队列 f3
 * 输出
 * 2 4 3 1
 */