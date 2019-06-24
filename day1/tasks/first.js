// * Task 1: given an array of numbers,
//   return a new array in which each number is doubled

// Solusi Pertama
function doubleIt(arrayOfNumber) {
	const doubledArray = arrayOfNumber.map(number => {
		return number * 2;
	});

	return doubledArray;
}

let satu = doubleIt([1, 2, 3]);
let dua = doubleIt([3, 2, 1]);
let tiga = doubleIt([2, 1, 3]);

console.log(satu);
console.log(dua);
console.log(tiga);

// Solusi Kedua
function doubleThat(arrayOfNumber) {
	let result = [];
	for (let number of arrayOfNumber) {
		result.push(number * 2);
	}

	return result;
}

let pertama = doubleThat([1, 2, 3]);
let kedua = doubleThat([3, 2, 1]);
let ketiga = doubleThat([2, 1, 3]);

console.log(pertama);
console.log(kedua);
console.log(ketiga);
