function createOrderLineItem(item, onclickCallback) {
  const self= {
    item: item,
    id: item.id,
    name: item.name,
    image: item.image,
    quantity: item.quantity,
    price: item.price,
    onclickCallback: onclickCallback,
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
      priceCell.textContent = "$" + this.price;

      // add the td to the created row
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(quantityCell);
      row.appendChild(priceCell);
      row.onclick = () => {
        if(this.onclickCallback && typeof this.onclickCallback === "function") {
           this.onclickCallback({
            source: this,
            id: this.id,
            name: this.name,
            image: this.image,
            quantity: this.quantity,
            price: this.price});
          };
        }
        return row;
    }
  }
  return self;
}

  export default (item, onclickCallback) => 
    createOrderLineItem(item, onclickCallback);
