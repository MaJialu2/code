function sendMessage(name, onFulfilled, onRejected) {
  // 模拟，发送表白短信
  console.log(`给${name}发送表白短信`);

  console.log(`等待${name}回复...`);

  // 模拟，女神回复需要一段时间
  setTimeout(() => {
    // 模拟 有 10% 的几率成功
    if (Math.random() < 0.1) {
      onFulfilled("我们在一起");
    } else {
      onRejected("你是个好人");
    }
  }, 1000);
}
