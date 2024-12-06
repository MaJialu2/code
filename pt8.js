Promise.resolve(1).then(2).then(3).then(Promise.resolve(3)).then(console.log);

/**
 * 输出 1
 * 如果then方法传递的不是一个函数，则相当于没有then方法
 */