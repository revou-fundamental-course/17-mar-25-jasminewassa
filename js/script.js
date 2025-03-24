function hitungPerkalian() {
  let bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  let bilangan2 = parseFloat(document.getElementById("bilangan2").value);
  let hasil = bilangan1 * bilangan2;
  document.getElementById("hasil").textContent = hasil;
}