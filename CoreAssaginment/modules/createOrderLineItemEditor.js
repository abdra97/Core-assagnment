function createOrderLineItemEditor() {
  const self= {
    get quantity() {
      return +document.getElementById("quantity").value;
    },
    set quantity(value) {
      document.getElementById("quantity").value = value;
    },

    get price() {
      return +document.getElementById("item-price").textContent;
    },
    set price(value) {
      document.getElementById("item-price").textContent = value;
    },

    set name(value) {
      document.getElementById("item-name").textContent = value;
    },
    set image(value) {
      document.getElementById("item-image").src = value;
    },
    set totalPrice(value) {
      document.getElementById("total-item-price").textContent = value.toFixed(2);
    }
  }

  self.showItemDetails = function(item) {
    console.log(item.name);
      // Update the item details in the HTML by the clicked item
      self.name = item.name;
      self.image = item.image;
      self.price = item.price;
      self.quantity = item.quantity;   

      self.totalPrice = item.price * item.quantity;
  }

  self.increaseQuantity = function () {
    self.quantity = self.quantity + 1;
    //self.item.quantity = self.quantity;
    self.totalPrice = self.quantity * self.price;
  }

  self.decreaseQuantity = function () {
    if (self.quantity > 0) {
      self.quantity--;
      //self.item.quantity = self.quantity;
      self.totalPrice = self.quantity * self.price;
    }
  }

  self.createEvents = function () {
    document.getElementById("increase").onclick = self.increaseQuantity;
    document.getElementById("decrease").onclick = self.decreaseQuantity;
  }

  self.init=function(){
    self.createEvents();
  }
  return self;
}

  export default () => {
   const obj = createOrderLineItemEditor();
   obj.init();
   return obj;
  }
