export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const number = { serialNumber: '12345' };
  Object.assign(source, number);
  source.properties.status = 'processed';
  return source;
}
