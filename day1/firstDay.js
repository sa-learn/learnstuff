// Primitive Types: string, number, boolean, null/undefined
let angka = 16;
let angkaPecahan = 16.123;

// console.log(angkaPecahan);

//string literals 'one', “two”, `three`
let huruf1 = 'ini huruf ${angka} tahun';
let hurufPetikTilda = `Umur saya ${angka} tahun`;
let tanpaTilda = 'Umur saya ' + angka + ' tahun';
let benar = true;
let salah = false;

let kosong = null;
let belumDiisi = undefined;
let melakukanIni;

// console.log(tanpaTilda);
// console.log(hurufPetikTilda);
// console.log(hurufPetikTilda === tanpaTilda);

// Kita akan ubah angka 5, menjadi huruf
// Setelah itu kita bandingkan
// console.log(5 == '5');

// Pertama kita cek dulu apa tipe data dari argumen yang dikiri
// Setelah itu kita bandingkan dengan yang dikanan
// Setelah itu jika SAMA maka kita bandingkan valuenya
// console.log('5' === 5);

// Complex Types: Array, Plain Object, Function
let rantangAngka = [1, 2, 3];
let rantangHuruf = ['Gigih', 'Yupoy', 'Spode God'];
let rantangGadoGado = [1, 'Yupoy', 2, true, null, undefined];

// console.log(rantangGadoGado);

// Collection of key value
let murid = {
	nama: 'Yupoy',
	umur: 20,
	warnaKesukaan: ['Biru', 'Hijau'],
	musuh: [
		{
			nama: 'Steven',
			umur: 20
		},
		{
			nama: 'Kevin',
			umur: 20
		},
		{
			nama: 'Yulio',
			umur: 20
		}
	],
	mantan: {
		nama: 'Aul',
		umur: 15
	}
};

// Function
// Parenthesis
function namaNya(nama) {
	console.log('Halo ' + nama);
}

// namaNya('Irkham');

function melakukanSesuatu(sesuatu) {
	sesuatu('Gan');
}

// melakukanSesuatu(namaNya);

function tambah(angkaPertama, angkaKedua) {
	return angkaPertama + angkaKedua;
}

function kurang(angkaPertama, angkaKedua) {
	return angkaPertama - angkaKedua;
}

let hasil = tambah(1, 2) + kurang(5, 2);
// console.log(hasil);

// console.log(tambah(1, 2));

// Arrow Function AKA Lambda Function AKA Anonymous Function
let arrowFunctionTambah = (angkaPertama, angkaKedua) => {
	return angkaPertama + angkaKedua;
};

let arrowFunctionKurang = (a, b) => a - b;

// console.log(arrowFunctionKurang(5, 2));

let rantangFungsi = [tambah(1, 1), kurang(1, 2), arrowFunctionKurang];

// console.log(rantangFungsi);

let plainObject = {
	tambah: tambah // Normal
	// tambah //Punning
};

// console.log(plainObject.tambah(1, 3));

let $asda = 5;
// console.log($asda);

let a = 5;
let aCopy = a;
a = 6;

// console.log(a);
// console.log(aCopy);

let b = 'Hello';
b = 'asd';
// console.log(b[0]);

b[0] = 'z';
// console.log(b);

let rantangSuper = [1, 2, 3];
// Reassignment `=`
rantangSuper = [1, 2, 3, 4];
// Mutating
rantangSuper.push(5);

// console.log(rantangSuper);

let orang = {
	nama: 'Yupoy'
};

let orangDua = orang;
// console.log(orang.nama);  //Yupoy
// console.log(orangDua.nama); //Yupoy
// console.log(orangDua === orang); //true

// Mutating orang, dan mereassign nama dari orang tersebut
// orang.nama = 'Bayu';
// console.log(orangDua === orang); //true

// console.log(orang.nama); //Bayu
// console.log(orangDua.nama); //Bayu

orang = {
	nama: 'Bayu'
};

// console.log(orang.nama);
// console.log(orangDua.nama);
// console.log(orangDua === orang);

// Kapan harus return ?
// Gatau ini kepake atau nggak ?

// function sayHello(nama) {
// 	nama = 'Hello ' + nama;
// }

// nama = 'Irkham';
// sayHello(nama);
// console.log(nama);

function sayHello(orang) {
	orang.nama = 'Hello ' + orang.nama;
}

let person = { nama: 'Irkham' };
let namaBaru = sayHello(person);
// console.log(person.nama);
// console.log(namaBaru);

function potongRantang(rantang) {
	// rantang.pop(); // Mutating
	rantangBaru = [rantang[0], rantang[1], rantang[2]];
	return rantangBaru;
}

let rantangBebek = [1, 2, 3, 4];
// console.log(rantangBebek);

let rantangSetelahDipotong = potongRantang(rantangBebek);

// console.log(rantangSetelahDipotong);
// console.log(rantangBebek);
// console.log(rantangSetelahDipotong === rantangBebek);

var sesuatu = 5; // Gausah dipake

let something = 5;
something = 6;
something = 8;

const lima = 5;
// lima = 6; // Error ! gaboleh reassign

const orangBaru = {
	nama: 'Yupoy'
};

// console.log(orangBaru);
orangBaru.nama = 'Bayu';
// console.log(orangBaru);

// orangBaru = {
// 	nama: 'Edo'
// }; Error ! gaboleh reassign

const rantangConst = [1, 2, 3];
// Bisa di mutate, tapi tidak bisa di reassign
// rantangConst.push(5); // Bisa
// console.log(rantangConst);

for (let perulangan = 0; perulangan < 10; perulangan++) {
	// console.log(perulangan);
	// console.log('Halo');
}

// Plural vs Singular
let randomPerson = {
	enemies: [
		{
			name: 'Steven',
			age: 20
		},
		{
			name: 'Kevin',
			age: 20
		},
		{
			name: 'Yulio',
			age: 20
		}
	]
};

for (let enemy of randomPerson.enemies) {
	// console.log(enemy.age);
	// console.log(enemy.name);
}

let satuDuaTiga = [1, 2, 3];

// forEach
let hasilForeach = satuDuaTiga.forEach((angka, i) => {
	// console.log(angka);
	// satuDuaTiga[i] = angka * 2;
});

let hasilMap = satuDuaTiga.map(angka => {
	// console.log(angka);
	return angka * 2;
});

// console.log(hasilForeach);
console.log(hasilMap);
// console.log(satuDuaTiga);

let hasilFilter = satuDuaTiga.filter(angka => {
	return angka > 2;
});

// let hasilFilter = satuDuaTiga.filter(angka => angka > 2);

// console.log(hasilFilter);
