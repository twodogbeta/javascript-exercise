export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(p => p.age <= 20 && p.age > 10).name;
}
