import name, { age, life } from './second';
import OS from 'os';
// let second = require('./second');
//second = { name: 'Nysvna' }

let greetings = 'Halo ';
// console.log(greetings + name);
// console.log(`I am ${age} years old`);
// console.log(`${life}/100`);

// console.log(OS.platform());

// truthy/falsy
/* 
-  false
-  null
-  undefined
-  0
-  ''

-  0n
-  NaN
-  ""
-  ``
-  document.all
*/

let nama = null;

if (nama) {
	// ??
	console.log('Halo');
}

/*
Word-kind Operator
typeof
instanceof

Symbol-kind Operator
+
-
*
/
!
~

Unary Operator
!
~
typeof

Binary Operator
+
-


*/

// let a = 5 - 5;
// let b = !5;
// console.log(b);

// console.log(typeof 5 === 'number');
// console.log(typeof '5');
// console.log(typeof false);

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof [1, 2, 3]);

// let func = () => {};
// console.log(typeof func);

// console.log(typeof { a: '1' });

// console.log(Array.isArray([1, 2, 3]));

// let something;
// console.log(something == null);

/*
Logical Operator

- &&
  Dari semua perbandingan,
  ambil falsy pertama,
  Jika tidak ada, ambil truthy terakhir

  console.log('hello' && 'hai');
  console.log('' && 'tidak kosong');

- ||
  Dari semua perbandingan,
  ambil truthy pertama,
  Jika tidak ada, ambil falsy terakhir

  console.log('hello' || 'hai');
  console.log('' || 'tidak kosong');
*/

// console.log(1 && 5);
// console.log(1 || 5);
// console.log(false || 5);
// console.log({} || 5);
// console.log([] || 5);

let agus = {
	name: 'Agus',
	level: 99,
	job: {
		name: 'Wizard',
		level: 50
	}
};

let dimas = {
	name: 'Dimas',
	level: 1
};

function sayJob(person) {
	// Safeguarding dengan && and Defaulting dengan ||
	console.log((person.job && person.job.name) || 'No Job Yet !');
}

sayJob(agus);
sayJob(dimas);

function getJob(person) {
	let job = person.job ? person.job.name : 'Notto Jobbo Yetto';
	return job;
}

let jobAgus = getJob(agus);
let jobDimas = getJob(dimas);

console.log(jobAgus);
console.log(jobDimas);
