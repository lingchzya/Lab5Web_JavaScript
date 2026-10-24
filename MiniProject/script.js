// Function 1: Menghitung nilai akhir (30% tugas + 30% uts + 40% uas)
function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

// Function 2: Menentukan predikat berdasarkan nilai
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// Function 3: Menampilkan hasil ke elemen HTML & Validasi 0-100
function prosesHitung() {
  const inputTugas = document.getElementById("tugas").value.trim();
  const inputUts = document.getElementById("uts").value.trim();
  const inputUas = document.getElementById("uas").value.trim();

  // Validasi input tidak boleh kosong
  if (inputTugas === "" || inputUts === "" || inputUas === "") {
    alert("Semua kolom nilai wajib diisi!");
    return;
  }

  const tugas = Number(inputTugas);
  const uts = Number(inputUts);
  const uas = Number(inputUas);

  // Validasi rentang nilai 0 - 100
  if (
    isNaN(tugas) || tugas < 0 || tugas > 100 ||
    isNaN(uts) || uts < 0 || uts > 100 ||
    isNaN(uas) || uas < 0 || uas > 100
  ) {
    alert("Nilai harus berada pada rentang 0 sampai 100!");
    return;
  }

  // Pemrosesan menggunakan function terpisah
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  // Tampilkan ke halaman HTML
  document.getElementById("outNilai").textContent = akhir.toFixed(2);
  document.getElementById("outPredikat").textContent = predikat;
  document.getElementById("outStatus").textContent = status;
}

// Function 4: Reset tampilan
function resetForm() {
  document.getElementById("formNilai").reset();
  document.getElementById("outNilai").textContent = "";
  document.getElementById("outPredikat").textContent = "";
  document.getElementById("outStatus").textContent = "";
}