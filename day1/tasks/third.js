// * Task 3: given an array of objects,
//    pluck a specific property from each

let students = [
	{ name: 'Yupoy', university: 'Polban' },
	{ name: 'Edo', university: 'UG Manuk' },
	{ name: 'Irkham', university: 'SLB' }
];

// function getNames(students) {
// 	let names = [];
// 	for (let student of students) {
// 		names.push(student.name);
// 	}

// 	return names;
// }

function getNames(students) {
	let names = students.map(student => {
		return student.name;
	});

	return names;
}

let names = getNames(students); // ['Yupoy', 'Edo', 'Irkham']
console.log(names);

function pluck(arrayOfObject, propertyName) {
	let result = [];
	for (let item of arrayOfObject) {
		if (item[propertyName] != undefined) {
			result.push(item[propertyName]);
		}
	}

	return result;
}

let hasilPluck1 = pluck(students, 'university'); // ['Polban', 'UG Manuk', 'SLB']
let hasilPluck2 = pluck(students, 'name'); // ['Yupoy', 'Edo', 'Irkham']

console.log(pluck(students, 'name'), ['Yupoy', 'Edo', 'Irkham']);
console.log(pluck(students, 'university'), ['Polban', 'UG Manuk', 'SLB']);
console.log(pluck(students, 'age'), []);
