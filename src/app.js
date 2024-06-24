document.addEventListener("alpine:init", () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: "Americano", img: "americano.jpg", price: 25000, detail: "Americano bukan sekadar kopi biasa. Di balik kesederhanaannya, Americano memiliki pesona tersendiri bagi para penikmat kopi yang ingin menikmati rasa kopi murni." },
      { id: 2, name: "Latte", img: "latte.jpg", price: 30000, detail: "Minuman klasik ini terbuat dari perpaduan espresso yang kaya rasa dan susu steamed yang lembut, menghasilkan rasa yang seimbang dan aroma yang menggoda." },
      { id: 3, name: "Espresso", img: "espresso.jpg", price: 50000, detail: "Tingkatkan pengalaman minum kopi Anda dengan Espresso, ramuan kopi terkonsentrasi yang kaya rasa dan aroma. Setiap tegukan Espresso menghadirkan ledakan rasa yang tak terlupakan." },
      { id: 4, name: "Cappuccino", img: "cappuccino.jpg", price: 40000, detail: "Perpaduan sempurna antara espresso, susu panas yang creamy, dan busa susu yang lembut menghasilkan rasa yang kaya, aroma yang menggoda, dan tekstur yang begitu memanjakan lidah." },
      { id: 5, name: "Macchiato", img: "macchiato.jpg", price: 45000, detail: "Rasakan sensasi istimewa Kopi Macchiato dari kedai kopi kami! Perpaduan sempurna antara espresso yang kuat dan susu yang lembut, menghasilkan rasa yang unik dan aroma yang menggoda." },
      { id: 6, name: "Mineral Water", img: "air mineral.jpg", price: 5000, detail: "Tetap terhidrasi dengan Air Putih yang murni dan menyehatkan. Pilihan tepat untuk menjaga kesehatan tubuh dan mengobati rasa haus." },
      { id: 7, name: "Es Jeruk", img: "jeruk.jpg", price: 12000, detail: "Kaya akan vitamin C dan antioksidan, Es Jeruk kami membantu meningkatkan daya tahan tubuh dan memberikan sensasi asam segar yang menyegarkan." },
      { id: 8, name: "Es Kelapa Muda", img: "kelapa muda.jpg", price: 20000, detail: "Rasakan kesegaran alami dari air kelapa muda yang kaya mineral. Menyejukkan tubuh dan membantu melancarkan pencernaan." },
      { id: 9, name: "Es Matcha", img: "matcha.jpg", price: 18000, detail: "Bagi pecinta rasa unik dan kekinian, Es Matcha kami hadir dengan khasiat teh hijau yang bermanfaat dan rasa teh hijau yang manis dan creamy." },
      { id: 10, name: "Es Milo", img: "milo.jpg", price: 12000, detail: "Manjakan diri dengan Es Milo yang manisnya coklat penuh membangkitkan semangat dan membuat ketagihan. Cocok dinikmati kapanpun, dingin maupun hangat." },
      { id: 11, name: "Es Teh", img: "teh.jpg", price: 8000, detail: "Dinginkan diri dengan segelas Es Teh yang manis alami dan segar. Cocok untuk menemani hari-harimu yang sibuk dan mengembalikan semangat." },
      { id: 12, name: "Es Soda Gembira", img: "sodagembira.jpg", price: 15000, detail: "Perpaduan soda yang mendesis dan sirup manis yang klasik, Es Soda Gembira selalu menjadi favorit untuk menikmati momen ceria bersama teman dan keluarga." },
      { id: 13, name: "Ayam Geprek", img: "ayamgeprek.jpg", price: 15000, detail: "Pedas dan menggugah selera, cocok untuk pecinta kuliner pedas." },
      { id: 14, name: "Bakmie Jawa", img: "bakmie.jpg", price: 15000, detail: "Tradisional, gurih, kuah kental, mie kuning, irisan ayam, dan bawang goreng." },
      { id: 15, name: "Bakso", img: "bakso.jpg", price: 25000, detail: "Bakso kenyal dan kuah kaldu yang lezat, pilihan tepat untuk makan siang atau makan malam." },
      { id: 16, name: "Nasi Gudeg", img: "gudeg.jpg", price: 20000, detail: "Manis, gurih, santan lembut, nangka matang, rempah khas, tradisional Yogyakarta, mengenyangkan, lauk khas, cocok disantap pagi atau malam." },
      { id: 17, name: "Gurame Bakar", img: "gurame.jpg", price: 45000, detail: "Renyah kulit, daging lembut, bumbu meresap, aroma bakaran, segar, nikmat, khas Indonesia, sajian tradisional, irisan jeruk nipis, disajikan dengan sambal terasi." },
      { id: 18, name: "Nasi Bakar", img: "nasibakar.jpg", price: 35000, detail: "Harum, gurih, dibungkus daun pisang, tekstur krispi, aneka isian, tradisional, cita rasa pedas-manis, menggugah selera, cocok di acara piknik." },
      { id: 19, name: "Nasi Goreng", img: "nasigoreng.jpg", price: 25000, detail: "Selalu jadi favorit, dengan berbagai topping yang bisa kamu pilih sesuai selera." },
      { id: 20, name: "Nasi Rawon", img: "rawon.jpg", price: 25000, detail: "Kaya rempah dan daging sapi yang empuk, bikin kamu hangat dan berenergi." },
      { id: 21, name: "Sate Ayam", img: "sate.jpeg", price: 15000, detail: "Daging yang empuk dan kaya bumbu, dibakar dengan sempurna, bikin kamu gak bisa berhenti makan!" },
      { id: 22, name: "Sop Iga", img: "sopiga.jpg", price: 30000, detail: "Gurih, lezat, hangat, kuah kental, daging empuk, wangi rempah, sehat, menggugah selera, cocok di musim hujan." },
      { id: 23, name: "Soto Ayam", img: "sotoayam.jpg", price: 15000, detail: "Kuah gurih dan hangat, ayam suwir yang empuk, dan aneka pelengkap yang menggoda, bikin kamu ketagihan!" },
      { id: 24, name: "Steak", img: "steak.jpg", price: 55000, detail: "Juicy, tender, grilled to perfection, savory, charred edges, medium rare, flavorful marinade, satisfying, premium cut, mouthwatering." },
    ],
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    customer: {
      name: '',
      email: '',
      phone: ''
    },
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if(!cartItem) {
        this.items.push({...newItem, quantity: 1, total: newItem.price});
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if(item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if(cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if(item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if ( cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
    checkout() {
      const message = "Detail Pesanan : \n" + this.items.map(item => `${item.name} \t ${item.quantity} x ${rupiah(item.price)} = ${rupiah(item.total)}`).join('\n');
      const totalMessage = `Total: ${rupiah(this.total)}`;
      const customerMessage = `\n\nCustomer Details:\nName: ${this.customer.name}\nEmail: ${this.customer.email}\nPhone: ${this.customer.phone}`;
      const whatsappMessage = encodeURIComponent(`${message}\n\n${totalMessage}${customerMessage}`);
      const whatsappUrl = `https://wa.me/6281932067656?text=${whatsappMessage}`;
      
      let loaded = setInterval(() => {
        document.getElementById('preloader').style.display = 'flex';
      },1000)
      setTimeout(() => {
        clearInterval(loaded);
        document.getElementById('preloader').style.display = 'none';
        window.open(whatsappUrl, '_blank');
      },3000)
    },
  });
});

//Form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function(){
  for (let i = 0; i < form.elements.length; i++){
    if (form.elements[i].value.length !== 0){
      checkoutButton.classList.remove('disabled');
      checkoutButton.classList.add('disabled');
    }else{
      return false;
    }
  }

  checkoutButton.disabled = false;
  checkoutButton.classList.remove('disabled');
});

// Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}
