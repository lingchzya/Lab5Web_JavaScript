function jalankanPrompt() {
  const input1 = prompt("Masukkan angka pertama:");
  const input2 = prompt("Masukkan angka kedua:");

  const num1 = Number(input1);
  const num2 = Number(input2);

  if (input1 === null || input2 === null || input1.trim() === "" || input2.trim() === "" || Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Input tidak valid! Harus berupa angka.");
    return;
  }

  const hasil = `
  Hasil Perhitungan:
  - Penjumlahan: ${num1 + num2}
  - Pengurangan: ${num1 - num2}
  - Perkalian: ${num1 * num2}
  - Pembagian: ${num2 !== 0 ? (num1 / num2) : "Tidak dapat dibagi nol"}
  - Modulus: ${num1 % num2}
  `;

  alert(hasil);
  console.log(hasil);
}