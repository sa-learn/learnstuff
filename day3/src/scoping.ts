/*
 * variable scope, lexical scope, closure
 * Using closure to create private state
 * Factories (functions that create objects/functions)
 */

const name = 'Bayu';

function makePerson(name) {
  let privateName = name;

  const setName = (newName) => {
    privateName = newName;
  };
  const greet = () => {
    console.log(`Hello ${privateName}`);
  };

  return {
    greet,
    setName,
  };
}

const p = makePerson('Edops');

p.greet();
p.setName('Fendi');
p.greet();
