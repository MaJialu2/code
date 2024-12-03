const pro1 = new Promise((resolve) => {
  console.log('学习');
  resolve();
});
const pro2 = pro1.then(() => {
  console.log('考试');
});

const pro3 = pro2.then(() => {
  console.log('出成绩');
});

console.log(pro2);
