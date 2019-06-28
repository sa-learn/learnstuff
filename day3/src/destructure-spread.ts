const personA = {
  name: 'Irkham',
  age: 5,
};

// personA.name // 'Irkham'
// personA.age // 5

// Destructuring Object with `favoriteColor` defaults to Merah
// const { name, age, favoriteColor = 'Merah' } = personA;

// console.log(name);
// console.log(age);
// console.log(favoriteColor);

const personB = {
  // Spread Operator
  ...personA,
  favoriteColor: 'Coklat',
};

// console.log(personB);

const personC = {
  // Spread Operator
  ...personA,
  // Overwrite `name`
  name: 'Yupoy',
};

// console.log(personC);

const personZ = {
  name: 'Irkham',
  age: 5,
  favoriteColor: 'Biru',
  favoriteFood: 'Momogi',
};

const { name, ...others } = personZ;
// console.log(name);
// console.log(others);

const arrayOfNumber = [1, 2, 3, 4, 5, 6];

const [one, two, ...theOthers] = arrayOfNumber;
// console.log(one);
// console.log(two);
// console.log(theOthers);

const arrayOfString = ['a', 'b', 'c'];
// console.log([...arrayOfNumber, ...arrayOfString]);

function makeAnimal() {
  return {
    dogName: 'Goro',
    type: 'Dog',
  };
}

const { dogName, type } = makeAnimal();
console.log(dogName);
console.log(type);

// function makeCar(name, color = 'Merah') -> color is optional
// function makeCar(color = 'Merah', name) -> color cannot be optional
function makeCar({ name, color }) {
  return {
    name,
    color,
  };
}

const car = makeCar({ name: 'Kijang', color: 'Putih' });
const carB = makeCar({ name: 'Kijang' });
console.log(car);
console.log(carB);
