const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    resolve();
    console.log(3);
  });
});

// 当promise变为fulfilled状态时，then方法中的回调函数会加入微队列
promise.then(() => {
  console.log(4);
});

console.log(5);

/**
 * 
 * 输出
 * 1 5 2 3 4
 */