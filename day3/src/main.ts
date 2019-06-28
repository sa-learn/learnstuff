// tslint:disable-next-line: no-console
console.log('Hello World');

type DoubleItInput = string | number | boolean | null;

const a = 1;
const b = '5 Rupiah';
const c = true;

function doubleIt(angka: DoubleItInput) {
  if (angka == null) {
    console.log('Angka adalah null');
    return 0;
  }

  if (typeof angka === 'string') {
    console.log('Angka adalah string');
    return 0;
  }

  if (typeof angka === 'boolean') {
    console.log('Angka adalah boolean');
    return 0;
  }

  return angka * 2;
}

const hasil = doubleIt(null);

console.log(hasil);

type Person = {
  name?: string;
  age: number;
  favorite?: {
    color: 'Biru' | 'Coklat' | 'Kuning';
  };
};

const person = {
  name: 'Yupoy',
  age: 17,
};

const noName = {
  age: 17,
};

const noAge = {
  name: 'Irkham',
};

const personWithFavorite: Person = {
  name: 'Yupoy',
  age: 17,
  favorite: {
    color: 'Coklat',
  },
};

function sayPersonName(p: Person) {
  console.log(p.name);
}

sayPersonName(person);

function addPersonAge(p: Person) {
  return p.age + 1;
}

const umurBaru = addPersonAge(person);
console.log(umurBaru);

type Success = {
  type: 'Success';
  result: {
    person: Person;
  };
};

type Fail = {
  type: 'Fail';
  errorMessage: string;
};

type Loading = {
  type: 'Loading';
};

type LoadStatus = Success | Fail | Loading;

function handleLoading(status: LoadStatus) {
  if (status.type === 'Loading') {
    console.log('Program is Loading');
  }

  if (status.type === 'Fail') {
    console.log('Loading Error!');
    console.log(`Status ${status.errorMessage}`);
  }

  if (status.type === 'Success') {
    console.log(status.result.person.name);
    console.log(status.result.person.age);
  }
}

handleLoading({
  errorMessage: '404 Not Found',
  type: 'Fail',
});

handleLoading({
  type: 'Loading',
});

handleLoading({
  type: 'Success',
  result: {
    person,
  },
});
