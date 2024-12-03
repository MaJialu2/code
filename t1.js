// 1. 完成下面的函数

/**
 * 延迟一段指定的时间
 * @param {number} duration 等待的时间
 * @returns {Promise}
 */

function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve()
    },duration)

  });
}

delay(1000).then(() => {
  console.log('finish');
});

// 2. 按照要求，调用delay函数，完成程序

// 利用delay函数，等待1秒钟， 输出finish
