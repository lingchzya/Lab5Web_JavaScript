function validasiForm(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const nilai = document.getElementById("nilai").value.trim();
  const errNama = document.getElementById("errNama");
  const errNilai = document.getElementById("errNilai");
  const pesanSukses = document.getElementById("pesanSukses");

  errNama.textContent = "";
  errNilai.textContent = "";
  pesanSukses.textContent = "";

  let isValid = true;

  if (nama === "") {
    errNama.textContent = "Nama tidak boleh kosong!";
    isValid = false;
  }

  if (nilai === "") {
    errNilai.textContent = "Nilai tidak boleh kosong!";
    isValid = false;
  } else {
    const num = Number(nilai);
    if (Number.isNaN(num) || num < 0 || num > 100) {
      errNilai.textContent = "Nilai harus antara 0 - 100!";
      isValid = false;
    }
  }

  if (isValid) {
    pesanSukses.textContent = "Data berhasil dikirim!";
  }
}