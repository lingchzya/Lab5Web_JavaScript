function tampilkanTabel() {
  let html = "<ul>";
  for (let i = 1; i <= 10; i++) {
    html += `<li>7 x ${i} = ${7 * i}</li>`;
  }
  html += "</ul>";
  
  // Memasukkan hasil perulangan ke elemen HTML
  document.getElementById("output").innerHTML = html;
}