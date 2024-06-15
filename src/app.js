document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Americano", img: "americano.jpg", price: 20000,detail : " Americano bukan sekadar kopi biasa. Di balik kesederhanaannya, Americano memiliki pesona tersendiri bagi para penikmat kopi yang ingin menikmati rasa kopi murni" },
      { id: 2, name: "Latte\t", img: "latte.jpg", price: 30000,detail : "Minuman klasik ini terbuat dari perpaduan espresso yang kaya rasa dan susu steamed yang lembut, menghasilkan rasa yang seimbang dan aroma yang menggoda." },
      { id: 3, name: "Espresso", img: "espresso.jpg", price: 50000,detail : "Tingkatkan pengalaman minum kopi Anda dengan Espresso, ramuan kopi terkonsentrasi yang kaya rasa dan aroma. Setiap tegukan Espresso menghadirkan ledakan rasa yang tak terlupakan, membangkitkan semangat dan memanjakan lidah Anda." },
      { id: 4, name: "Cappuccino", img: "cappuccino.jpg", price: 40000,detail : "Perpaduan sempurna antara espresso, susu panas yang creamy, dan busa susu yang lembut menghasilkan rasa yang kaya, aroma yang menggoda, dan tekstur yang begitu memanjakan lidah." },
      { id: 5, name: "Macchiato", img: "macchiato.jpg", price: 45000 , detail : "Rasakan sensasi istimewa Kopi Macchiato dari kedai kopi kami! Perpaduan sempurna antara espresso yang kuat dan susu yang lembut, menghasilkan rasa yang unik dan aroma yang menggoda."},
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
      window.open(whatsappUrl, '_blank');
    }
  });
});

//form validation
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

