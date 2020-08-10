function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(n => n % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((word, index) => collection.indexOf(word) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
