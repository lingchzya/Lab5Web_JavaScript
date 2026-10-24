function cekGenap(angka) {
  return angka % 2 === 0;
}

function ujiAngka() {
  const val = document.getElementById("inputAngka").value;
  const target = document.getElementById("hasil");

  if (val.trim() === "") {
    target.textContent = "Masukkan angka terlebih dahulu!";
    return;
  }

  const num = Number(val);
  if (cekGenap(num)) {
    target.textContent = `Angka ${num} adalah GENAP (Return: true)`;
  } else {
    target.textContent = `Angka ${num} adalah GANJIL (Return: false)`;
  }
}