// 下面的任务的最终状态是什么，相关的数据或失败的原因是什么，最终输出什么？

new Promise((resolve, reject) => {
  console.log('任务开始');
  resolve(1);
  reject(2);
  resolve(3);
  console.log('任务结束');
});
// fulfilled 1

