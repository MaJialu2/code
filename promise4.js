// 下面代码的输出结果是什么

const p = new Promise((resolve, reject) => {
  resolve(1);
})
  .then((res) => {
    console.log(res);
    return new Error(2);
  })
  .catch((err) => {
    throw err;
    return 3;
  })
  .then((res) => {
    console.log(res);
  });



/*
p1 rejected Error(1)
p2 rejected Error(1)
p3 rejected Error(1)
p4 rejected Error(1)
*/