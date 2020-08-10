export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  const valueArray = Object.values(source);
  valueArray.forEach(value => {
    sum += Number(value);
  });
  return sum;
}
