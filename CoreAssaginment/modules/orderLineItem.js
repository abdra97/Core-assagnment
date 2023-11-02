function OrderLineItem(item) {
    this.item = item;
    this.id = item.id;
    this.name = item.name;
    this.image = item.image;
    this.quantity = item.quantity;
    this.price = item.price;
  
   this.render = ()=>{
      const row = document.createElement("tr");
  
      //create td
      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const priceCell = document.createElement("td");
  
      //add item detaile to the td
      idCell.textContent = this.id;
      nameCell.textContent = this.name;
      quantityCell.textContent = this.quantity;
      priceCell.textContent = this.price;
  
      // add the td to the created row
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(quantityCell);
      row.appendChild(priceCell);
      row.onclick = () => {
        this.showItemDetails();
        // console.log(item.name);
      };
      return row;
   }
    this.increaseQuantity = function () {
      this.quantity++;
      const quantityCell = document.createElement("td");
      quantityCell.textContent = this.quantity;
      updateItemTotal();
    };
  
    this.decreaseQuantity = function () {
      if (this.quantity > 0) {
        this.quantity--;
      }
      const quantityCell = document.getElementById("total-item-price");
      quantityCell.textContent = this.quantity;
      updateItemTotal();
    };

    const updateItemTotal = () => {
        const total = this.price * this.quantity;
        const roundedTotal = total.toFixed(2);
        const quantityCell = document.getElementById("total-item-price");
        quantityCell.textContent = `${roundedTotal}`;
    //updateFinalTotal();
    };
  
    this.showItemDetails = () => {
        console.log(this.name);
          // Update the item details in the HTML by the clicked item
          document.getElementById("item-name").textContent = this.name;
          document.getElementById("item-image").src = this.image;
          document.getElementById("item-price").textContent = this.price;
          // set the quantity input to 1
          //quantityInput.value = "1";
          //updateItemTotal();
        
          createEvents();
      };

      const self=this;
      this.init = ()=>{
      }
      function createEvents(){
        bindDecreaseEvent();        
        bindIncreaseEvent();
      }

      this.init();

    function bindDecreaseEvent() {
        var decreaseBtn = document.getElementById('dicrease');
        //remove any previous click event
        decreaseBtn.removeEventListener("click", self.decreaseQuantity, true);
        decreaseBtn.addEventListener("click", self.decreaseQuantity, true);
    }

    function bindIncreaseEvent() {
        var increaseBtn = document.getElementById('increase');
        increaseBtn.addEventListener("click", 
            self.increaseQuantity);
    }
  }

  export { OrderLineItem }