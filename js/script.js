const Kalkulator = {
  hitungLuasPersegi: function () {
      const sisi = parseFloat(document.getElementById("sisiLuasPersegi").value);
      if (isNaN(sisi) || sisi <= 0) {
          alert("Masukkan angka yang valid dan lebih besar dari 0!");
          return;
      }
      document.getElementById("hasilLuasPersegi").innerText = sisi * sisi;
  },

  hitungKelilingPersegi: function () {
      const sisi = parseFloat(document.getElementById("sisiKelilingPersegi").value);
      if (isNaN(sisi) || sisi <= 0) {
          alert("Masukkan angka yang valid dan lebih besar dari 0!");
          return;
      }
      document.getElementById("hasilKelilingPersegi").innerText = 4 * sisi;
  },

  resetLuasPersegi: function () {
      document.getElementById("sisiLuasPersegi").value = "";
      document.getElementById("hasilLuasPersegi").innerText = "0";
  },

  resetKelilingPersegi: function () {
      document.getElementById("sisiKelilingPersegi").value = "";
      document.getElementById("hasilKelilingPersegi").innerText = "0";
  },

  hitungLuasPersegiPanjang: function () {
      const panjang = parseFloat(document.getElementById("panjangLuasPP").value);
      const lebar = parseFloat(document.getElementById("lebarLuasPP").value);
      if (isNaN(panjang) || panjang <= 0 || isNaN(lebar) || lebar <= 0) {
          alert("Masukkan angka yang valid dan lebih besar dari 0!");
          return;
      }
      document.getElementById("hasilLuasPP").innerText = panjang * lebar;
  },

  hitungKelilingPersegiPanjang: function () {
      const panjang = parseFloat(document.getElementById("panjangKelilingPP").value);
      const lebar = parseFloat(document.getElementById("lebarKelilingPP").value);
      if (isNaN(panjang) || panjang <= 0 || isNaN(lebar) || lebar <= 0) {
          alert("Masukkan angka yang valid dan lebih besar dari 0!");
          return;
      }
      document.getElementById("hasilKelilingPP").innerText = 2 * (panjang + lebar);
  },

  resetLuasPersegiPanjang: function () {
      document.getElementById("panjangLuasPP").value = "";
      document.getElementById("lebarLuasPP").value = "";
      document.getElementById("hasilLuasPP").innerText = "0";
  },

  resetKelilingPersegiPanjang: function () {
      document.getElementById("panjangKelilingPP").value = "";
      document.getElementById("lebarKelilingPP").value = "";
      document.getElementById("hasilKelilingPP").innerText = "0";
  }
};