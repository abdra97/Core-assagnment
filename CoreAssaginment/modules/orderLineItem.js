function createOrderLineItem(item) {
  return {
    item: item,
    id: item.id,
    name: item.name,
    image: item.image,
    quantity: item.quantity,
    price: item.price,
    render: function () {
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
    },
    increaseQuantity: function () {
      this.quantity++;
      const quantityCell = document.createElement("td");
      quantityCell.textContent = this.quantity;
      updateItemTotal();
    },
    decreaseQuantity: function () {
      if (this.quantity > 0) {
        this.quantity--;
      }
      const quantityCell = document.getElementById("total-item-price");
      quantityCell.textContent = this.quantity;
      updateItemTotal();
    }, 
    showItemDetails: function () {
      console.log(this.name);
        // Update the item details in the HTML by the clicked item
        document.getElementById("item-name").textContent = this.name;
        document.getElementById("item-image").src = this.image;
        document.getElementById("item-price").textContent = this.price;
        // set the quantity input to 1
        //quantityInput.value = "1";
        //updateItemTotal();
      
        this.createEvents();
    },
    init: function () {
      // this.bindDecreaseEvent();
      // this.bindIncreaseEvent();
    },
    createEvents: function () {

    }
  }
}

  export default (item) =>{
    const orderLineItem = createOrderLineItem(item);
    orderLineItem.init();
    return orderLineItem;
  }