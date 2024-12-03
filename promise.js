const pro = new Promise((resolve, reject) => {
  // 本函数用来描述任务过程，会被立即执行
  console.log('开始百米短跑');
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // 成功
      resolve(duration); // 将任务从挂起->完成
    } else {
      // 失败，脚扭了
      reject('脚扭了'); // 将任务从挂起->失败
    }
  }, duration);
});


pro.then(
  (data) => {
    // 如果成功运行该函数，data形参就是resolve函数传递的值
    console.log(`成功，用时${data}ms`);
  },
  (reason) => {
    // 如果失败运行该函数，reason形参就是reject函数传递的值
    console.log(`失败，${reason}`);
  },
);
