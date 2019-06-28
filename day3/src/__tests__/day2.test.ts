function compareObjects(objectOne: unknown, objectTwo: unknown) {
  if (typeof objectOne !== typeof objectTwo) {
    return false;
  }

  if (typeof objectOne === 'object' && typeof objectTwo === 'object') {
    if (objectOne != null && objectTwo != null) {
      const keysCountOne = Object.keys(objectOne);
      const keysCountTwo = Object.keys(objectTwo);

      if (keysCountOne.length !== keysCountTwo.length) {
        return false;
      }

      for (const key of keysCountOne) {
        if (objectOne[key] !== objectTwo[key]) {
          return false;
        }
      }

      return true;
    }
  }

  return objectOne === objectTwo;
}

it('Should return true when given 5 and 5', () => {
  // Arrange

  // Act
  const result = compareObjects(5, 5);

  // Assert
  expect(result).toEqual(true);
});

it('Should return false when given 5 and 4', () => {
  // Arrange

  // Act
  const result = compareObjects(5, 4);

  // Assert
  expect(result).toEqual(false);
});

it('Should return false when given 5 and "5"', () => {
  // Arrange

  // Act
  const result = compareObjects(5, '5');

  // Assert
  expect(result).toEqual(false);
});

it('Should return true when given {a: 1} and {a: 1}', () => {
  // Arrange

  // Act
  const result = compareObjects({ a: 1 }, { a: 1 });

  // Assert
  expect(result).toEqual(true);
});

it('Should return false when given { a: 1, b: 2 } and { a: 1 }', () => {
  // Arrange

  // Act
  const result = compareObjects({ a: 1, b: 2 }, { a: 1 });

  // Assert
  expect(result).toEqual(false);
});

it('Should return false when given { c: 1 } and { a: 1 }', () => {
  // Arrange

  // Act
  const result = compareObjects({ c: 1 }, { a: 1 });

  // Assert
  expect(result).toEqual(false);
});

it('Should return true when given { a: 1, b: 2 } and { b: 2, a: 1 }', () => {
  // Arrange

  // Act
  const result = compareObjects({ a: 1, b: 2 }, { b: 2, a: 1 });

  // Assert
  expect(result).toEqual(true);
});

/*
// * Task: Create a “compareObjects” similar to array compare.
*/
