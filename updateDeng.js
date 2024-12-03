function sendMessage(name) {
  return new Promise((resolve, reject) => {
    // 模拟，发送表白短信
    console.log(`给${name}发送表白短信`);

    console.log(`等待${name}回复...`);

    // 模拟，女神回复需要一段时间
    setTimeout(() => {
      // 模拟 有 10% 的几率成功
      if (Math.random() < 0.1) {
        resolve('我们在一起');
      } else {
        reject('你是个好人');
      }
    });
  });
}

sendMessage('李建刚').then(
  (reply) => {
    console.log(reply);
  },
  (reply) => {
    console.log(reply);
  },
);
