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
/////////////////////////////////////////////////////////

const products = {
  "americano": {
    id: 1,
    name: "Americano",
    img: "img/products/americano.jpg",
    price: 25000,
    detail: "Americano bukan sekadar kopi biasa. Di balik kesederhanaannya, Americano memiliki pesona tersendiri bagi para penikmat kopi yang ingin menikmati rasa kopi murni.",
  },
  "latte": {
    id: 2,
    name: "Latte",
    img: "img/products/latte.jpg",
    price: 30000,
    detail: "Minuman klasik ini terbuat dari perpaduan espresso yang kaya rasa dan susu steamed yang lembut, menghasilkan rasa yang seimbang dan aroma yang menggoda.",
  },
  "espresso": {
    id: 3,
    name: "Espresso",
    img: "img/products/espresso.jpg",
    price: 50000,
    detail: "Tingkatkan pengalaman minum kopi Anda dengan Espresso, ramuan kopi terkonsentrasi yang kaya rasa dan aroma. Setiap tegukan Espresso menghadirkan ledakan rasa yang tak terlupakan.",
  },
  "cappuccino": {
    id: 4,
    name: "Cappuccino",
    img: "img/products/cappuccino.jpg",
    price: 40000,
    detail: "Perpaduan sempurna antara espresso, susu panas yang creamy, dan busa susu yang lembut menghasilkan rasa yang kaya, aroma yang menggoda, dan tekstur yang begitu memanjakan lidah.",
  },
  "macchiato": {
    id: 5,
    name: "Macchiato",
    img: "img/products/macchiato.jpg",
    price: 45000,
    detail: "Rasakan sensasi istimewa Kopi Macchiato dari kedai kopi kami! Perpaduan sempurna antara espresso yang kuat dan susu yang lembut, menghasilkan rasa yang unik dan aroma yang menggoda.",
  },
  "air putih": {
    id: 6,
    name: "Mineral Water",
    img: "img/products/air mineral.jpg",
    price: 5000,
    detail: "Tetap terhidrasi dengan Air Putih yang murni dan menyehatkan. Pilihan tepat untuk menjaga kesehatan tubuh dan mengobati rasa haus.",
  },
  "es jeruk": {
    id: 7,
    name: "Es Jeruk",
    img: "img/products/jeruk.jpg",
    price: 12000,
    detail: "Kaya akan vitamin C dan antioksidan, Es Jeruk kami membantu meningkatkan daya tahan tubuh dan memberikan sensasi asam segar yang menyegarkan.",
  },
  "es kelapa muda": {
    id: 8,
    name: "Es Kelapa Muda",
    img: "img/products/kelapa muda.jpg",
    price: 20000,
    detail: "Rasakan kesegaran alami dari air kelapa muda yang kaya mineral. Menyejukkan tubuh dan membantu melancarkan pencernaan.",
  },
  "es matcha": {
    id: 9,
    name: "Es Matcha",
    img: "img/products/matcha.jpg",
    price: 18000,
    detail: "Bagi pecinta rasa unik dan kekinian, Es Matcha kami hadir dengan khasiat teh hijau yang bermanfaat dan rasa teh hijau yang manis dan creamy.",
  },
  "es milo": {
    id: 10,
    name: "Es Milo",
    img: "img/products/milo.jpg",
    price: 12000,
    detail: "Manjakan diri dengan Es Milo yang manisnya coklat penuh membangkitkan semangat dan membuat ketagihan. Cocok dinikmati kapanpun, dingin maupun hangat.",
  },
  "es teh": {
    id: 11,
    name: "Es Teh",
    img: "img/products/teh.jpg",
    price: 8000,
    detail: "Dinginkan diri dengan segelas Es Teh yang manis alami dan segar. Cocok untuk menemani hari-harimu yang sibuk dan mengembalikan semangat.",
  },
  "es soda gembira": {
    id: 12,
    name: "Es Soda Gembira",
    img: "img/products/sodagembira.jpg",
    price: 15000,
    detail: "Perpaduan soda yang mendesis dan sirup manis yang klasik, Es Soda Gembira selalu menjadi favorit untuk menikmati momen ceria bersama teman dan keluarga.",
  },
  "ayam geprek": {
    id: 13,
    name: "Ayam Geprek",
    img: "img/products/ayamgeprek.jpg",
    price: 15000,
    detail: "Pedas dan menggugah selera, cocok untuk pecinta kuliner pedas.",
  },
  "bakmie jawa": {
    id: 14,
    name: "Bakmie Jawa",
    img: "img/products/bakmie.jpg",
    price: 15000,
    detail: "Tradisional, gurih, kuah kental, mie kuning, irisan ayam, dan bawang goreng.",
  },
  bakso: {
    id: 15,
    name: "Bakso",
    img: "img/products/bakso.jpg",
    price: 25000,
    detail: "Bakso kenyal dan kuah kaldu yang lezat, pilihan tepat untuk makan siang atau makan malam.",
  },
  "nasi gudeg": {
    id: 16,
    name: "Nasi Gudeg",
    img: "img/products/gudeg.jpg",
    price: 20000,
    detail:
      "Manis, gurih, santan lembut, nangka matang, rempah khas, tradisional Yogyakarta, mengenyangkan, lauk khas, cocok disantap pagi atau malam.",
  },
  "gurame bakar": {
    id: 17,
    name: "Gurame Bakar",
    img: "img/products/gurame.jpg",
    price: 45000,
    detail: "Renyah kulit, daging lembut, bumbu meresap, aroma bakaran, segar, nikmat, khas Indonesia, sajian tradisional, irisan jeruk nipis, disajikan dengan sambal terasi.",
  },
  "nasi bakar": {
    id: 18,
    name: "Nasi Bakar",
    img: "img/products/nasibakar.jpg",
    price: 35000,
    detail: "Harum, gurih, dibungkus daun pisang, tekstur krispi, aneka isian, tradisional, cita rasa pedas-manis, menggugah selera, cocok di acara piknik.",
  },
  "nasi goreng": {
    id: 19,
    name: "Nasi Goreng",
    img: "img/products/nasigoreng.jpg",
    price: 25000,
    detail: "Selalu jadi favorit, dengan berbagai topping yang bisa kamu pilih sesuai selera.",
  },
  "nasi rawon": {
    id: 20,
    name: "Nasi Rawon",
    img: "img/products/rawon.jpg",
    price: 25000,
    detail: "Kaya rempah dan daging sapi yang empuk, bikin kamu hangat dan berenergi.",
  },
  "sate ayam": {
    id: 21,
    name: "Sate Ayam",
    img: "img/products/sate.jpeg",
    price: 15000,
    detail: "Daging yang empuk dan kaya bumbu, dibakar dengan sempurna, bikin kamu gak bisa berhenti makan!",
  },
  "sop iga": {
    id: 22,
    name: "Sop Iga",
    img: "img/products/sopiga.jpg",
    price: 30000,
    detail: "Gurih, lezat, hangat, kuah kental, daging empuk, wangi rempah, sehat, menggugah selera, cocok di musim hujan.",
  },
  "soto ayam" : {
    id: 23,
    name: "Soto Ayam",
    img: "img/products/sotoayam.jpg",
    price: 15000,
    detail: "Kuah gurih dan hangat, ayam suwir yang empuk, dan aneka pelengkap yang menggoda, bikin kamu ketagihan!",
  },
  "steak": {
    id: 24,
    name: "Steak",
    img: "img/products/steak.jpg",
    price: 55000,
    detail: "Juicy, tender, grilled to perfection, savory, charred edges, medium rare, flavorful marinade, satisfying, premium cut, mouthwatering.",
  },
};

function checkInput() {
  let input = document.getElementById("search-box").value.toLowerCase();
  const keywords = {
    makanan: "#makanan",
    minuman: "#minuman",
    home: "#home",
    tentang: "#about",
    menu: "#menu",
    pemesanan: "#products",
    hubungi: "#contact",
  };

  if (keywords[input]) {
    window.location.href = keywords[input];
  } else if (products[input]) {
    showModal(products[input]);
  } else {
    alert("Item tidak ditemukan");
  }

  document.getElementById("search-box").value = "";
  searchForm.classList.remove("active");
}

function showModal(product) {
  const modal = document.getElementById("item-detail-modal");

  document.getElementById("modal-product-name").innerText = product.name;
  document.getElementById("modal-product-image").src = product.img;
  document.getElementById("modal-product-detail").innerText = product.detail;
  document.querySelector(".product-price-modal").innerText = 'Rp ' + product.price.toLocaleString('id-ID');
  
  modal.style.display = "block";

  document.querySelector('.btn-add').style.display = 'none';
 
  window.location.href = "#products";
}

////////////////////////////////////////////////////////
// klik di luar modal
const itemDetailModal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
////////////////////////////////////////////////////////


document.getElementById("search-box").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      checkInput();
  }
});

////////////////////////////////////////////////////////
function komplain() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let telp = document.getElementById("telp").value;
  let saran = document.getElementById("saran").value;

  if(nama == '' || email=='' || telp=='' || saran==''){
    document.getElementById('alert').style.display = 'block';
  }else{
    const message = "Kritik dan Saran : ";
    const customerMessage = `Customer Details :\nName : ${nama}\nEmail : ${email}\nNo Telp : ${telp}\nPesan : ${saran}`;
    const whatsappMessage = encodeURIComponent(`${message}\n\n${customerMessage}`);
    const whatsappUrl = `https://wa.me/6281932067656?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  }
}