// * Task 2: compare two values, shallow comparing content in arrays

function compareIt(arraySatu, arrayDua) {
	let panjangSatu = arraySatu.length;
	let panjangDua = arrayDua.length;

	if (panjangSatu !== panjangDua) {
		return false;
	}

	for (let i = 0; i < panjangSatu; i++) {
		if (arraySatu[i] !== arrayDua[i]) {
			return false;
		}
	}

	return true;
}

console.log(compareIt([1, 2, 3], [1, 2, 3]), true);
console.log(compareIt([1, 3, 3], [1, 2, 3]), false);
console.log(compareIt([1, 2], [1, 2, 3]), false);
