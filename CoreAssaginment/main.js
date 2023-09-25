// the list of all items and thier details
const itemDetails = {
  item1: {
    id: "1",
    name: "Organic Hass Avocado",
    image: "/images/avocado.png",
    quantity: "2",
    price: "$15",
  },
  item2: {
    id: "2",
    name: "Frash watermelon",
    image: "/images/watermelon.png",
    quantity: "4",
    price: "$15.99",
  },
  item3: {
    id: "3",
    name: "Strawberry",
    image: "/images/strawberry.png",
    quantity: "7",
    price: "$17.99",
  },
  item4: {
    id: "4",
    name: "Tomato",
    image: "/images/tomato.png",
    quantity: "17",
    price: "$3",
  },
  item5: {
    id: "5",
    name: "Orange",
    image: "/images/orange.png",
    quantity: "22",
    price: "$7",
  },
  item6: {
    id: "6",
    name: "Organic Hass Avocado",
    image: "/images/avocado.png",
    quantity: "2",
    price: "$15",
  },
  item7: {
    id: "7",
    name: "Frash watermelon",
    image: "/images/watermelon.png",
    quantity: "4",
    price: "$15.99",
  },
  item8: {
    id: "8",
    name: "Strawberry",
    image: "/images/strawberry.png",
    quantity: "7",
    price: "$17.99",
  },
  item9: {
    id: "9",
    name: "Tomato",
    image: "/images/tomato.png",
    quantity: "17",
    price: "$3",
  },
  item10: {
    id: "10",
    name: "Orange",
    image: "/images/orange.png",
    quantity: "22",
    price: "$7",
  },
  item11: {
    id: "11",
    name: "Organic Hass Avocado",
    image: "/images/avocado.png",
    quantity: "2",
    price: "$15",
  },
  item12: {
    id: "12",
    name: "Frash watermelon",
    image: "/images/watermelon.png",
    quantity: "4",
    price: "$15.99",
  },
  item13: {
    id: "13",
    name: "Strawberry",
    image: "/images/strawberry.png",
    quantity: "7",
    price: "$17.99",
  },
  item14: {
    id: "14",
    name: "Tomato",
    image: "/images/tomato.png",
    quantity: "17",
    price: "$3",
  },
  item15: {
    id: "15",
    name: "Orange",
    image: "/images/orange.png",
    quantity: "22",
    price: "$7",
  },
};

const increaseBtn = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");
const dicreaseBtn = document.getElementById("dicrease");
const totalItemPrice = document.getElementById("total-item-price");
const itemPrice = document.getElementById("item-price");
const totalBefore = document.getElementById("total-before-discount");
const totalAfter = document.getElementById("total-after-discount");
const discount = document.getElementById("discount");

// function to increase the item quantity
const increaseQuantity = () => {
  // Increment the quantity when the "+" button is clicked
  quantityInput.value = parseInt(quantityInput.value) + 1;
  updateItemTotal();
  updateFinalTotal();
};

// function to dicrease the item quantity
const dicreaseQuantity = () => {
  // Increment the quantity when the "+" button is clicked
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
  updateItemTotal();
  updateFinalTotal();
};

const updateItemTotal = () => {
  const itemPriceValue = parseFloat(itemPrice.textContent.replace("$", ""));
  const quantityValue = parseInt(quantityInput.value);
  const total = itemPriceValue * quantityValue;
  const roundedTotal = total.toFixed(2);
  totalItemPrice.textContent = `${roundedTotal}`;
  //updateFinalTotal();
};

const showItemDetails = (itemId) => {
  const item = itemDetails[itemId];
  console.log(item.name);

  if (item) {
    console.log(item.name);
    console.log("true");
    // Update the item details in the HTML by the clicked item
    document.getElementById("item-name").textContent = item.name;
    document.getElementById("item-image").src = item.image;
    document.getElementById("item-price").textContent = item.price;
    // set the quantity input to 1
    quantityInput.value = "1";
    updateItemTotal();
  }
};

const generateItemTable = () => {
  const tableBody = document.querySelector("table tbody");

  // loop through each item from item list and create a row of item details
  for (const itemId in itemDetails) {
    if (itemDetails.hasOwnProperty(itemId)) {
      const item = itemDetails[itemId];

      //create a new table row
      const row = document.createElement("tr");

      // function to show item when the row onclick
      row.onclick = () => {
        showItemDetails(itemId);
        // console.log(item.name);
      };

      //create td
      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const priceCell = document.createElement("td");

      //add item detaile to the td
      idCell.textContent = item.id;
      nameCell.textContent = item.name;
      quantityCell.textContent = item.quantity;
      priceCell.textContent = item.price;

      // add the td to the created row
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(quantityCell);
      row.appendChild(priceCell);

      // append the rows into body tag
      tableBody.appendChild(row);
    }
  }
};

const updateFinalTotal = () => {
  const totalItemPriceValue = parseFloat(totalItemPrice.textContent);
  const total = parseFloat(totalBefore.textContent);
  const newTotal = total + totalItemPriceValue;
  const discountValue = parseFloat(discount.textContent);
  const finalTotal = newTotal + discountValue;

  console.log(totalItemPriceValue);

  //update the total and final total in html
  totalBefore.textContent = newTotal.toFixed(2);
  totalAfter.textContent = finalTotal.toFixed(2);
};

generateItemTable();
updateFinalTotal();

const initialItemId = "item1";
showItemDetails(initialItemId);
updateItemTotal(initialItemId);
