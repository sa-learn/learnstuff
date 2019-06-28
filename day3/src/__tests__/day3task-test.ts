// Implement Me

function createCounter() {
  const value = 0;
  return {
    increment: () => {},
    decrement: () => {},
    value,
  };
}

it('Should start with 0', () => {
  const counter = createCounter();

  expect(counter.value).toEqual(0);
});

it('Should be 1 when incremented by one', () => {
  const counter = createCounter();

  counter.increment();

  expect(counter.value).toEqual(1);
});

it('Should be -1 when decremented by one', () => {
  const counter = createCounter();

  counter.decrement();

  expect(counter.value).toEqual(-1);
});
