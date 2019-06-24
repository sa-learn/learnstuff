// Complex Types: Array, Plain Object, Function

let kumpulanAngka = [1, 2, 3];
// Diakses menggunakan Posisi
// kumpulanAngka[0] // 1
// kumpulanAngka[1] // 2
// kumpulanAngka[2] // 3

// Key-Value Pair
// Diakses menggunakan `kunci` / `keyword`
// key itu selalu string
let murid = {
	1: 'Ini Value Dari Satu',
	nama: 'Edops',
	warnaKesukaan: ['Biru', 'Hijau', 'Merah']
};

// murid.nama // 'Edops'
// murid['nama']; // 'Edops'
// murid.1 // Failed
// murid['1']; // 'Ini Value Dari Satu'
let kata = 'nama';
let a = murid[kata]; // 'Edops'

function sayHello(nama) {
	// console.log('Halo ' + nama);
}

let coba = sayHello('Bayu');
// console.log(coba); // undefined

let sayHelloArrow = nama => {
	// console.log('Halo ' + nama);
};

sayHelloArrow('Bayu');

function register(email, password) {
	console.log(email, password);

	return 'Sukses !';
}

let hasilnya = register('something@abc.com', 'super');
let userEmail = 'a';
let pwd = 'b';
let hasil2 = register(userEmail, pwd);

// console.log(hasilnya);
