function getElement(elementName) {
	var x = document.getElementById(elementName);
	return x;
}
//Penjumlahan//
function buttonTambah() {
	// 65.00 2.1 4.2
	var bil1 = parseFloat(getElement('angka1').value);
	var bil2 = parseFloat(getElement('angka2').value);
	if (!bil1 || !bil2) { 
		alert('Input tidak boleh kosong!'); 
		return false;
	}

	getElement('hasil').value = bil1 + bil2;
}

//Pengurangan//
function buttonKurang() {
	// 65.00 2.1 4.2
	var bil1 = parseFloat(getElement('angka1').value);
	var bil2 = parseFloat(getElement('angka2').value);
	if (!bil1 || !bil2) { 
		alert('Input tidak boleh kosong!'); 
		return false;
	}

	getElement('hasil').value = bil1 - bil2;
}

//Perkalian//
function buttonKali() {
	// 65.00 2.1 4.2
	var bil1 = parseFloat(getElement('angka1').value);
	var bil2 = parseFloat(getElement('angka2').value);
	if (!bil1 || !bil2) { 
		alert('Input tidak boleh kosong!'); 
		return false;
	}

	getElement('hasil').value = bil1 * bil2;
}

//Pembagian//
function buttonBagi() {
	// 65.00 2.1 4.2
	var bil1 = parseFloat(getElement('angka1').value);
	var bil2 = parseFloat(getElement('angka2').value);
	if (!bil1 || !bil2) { 
		alert('Input tidak boleh kosong!'); 
		return false;
	}

	getElement('hasil').value = bil1 / bil2;
}