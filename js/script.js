// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

function checkInput() {
  // Ambil nilai dari input pengguna
  let input = document.getElementById("search-box").value.toLowerCase();

  // Daftar kata kunci dan id elemen
  const keywords = {
    makanan: "#makanan",
    minuman: "#minuman",
    home: "#home",
    tentang: "#about",
    menu: "#menu",
    pemesanan: "#pemesanan",
    hubungi: "#contact",
  };

  // Logika pencocokan kata kunci
  if (keywords[input]) {
    window.location.href = keywords[input];
  } else {
    alert("Item tidak ditemukan");
  }

  document.getElementById("search-box").value = "";
  searchForm.classList.remove("active");
}

document.getElementById("search-box").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      checkInput();
  }
});
