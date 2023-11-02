import { itemDetails } from "./modules/itemDetails.js";
import { OrderLineItem } from "./modules/orderLineItem.js";

const increaseBtn = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");
const dicreaseBtn = document.getElementById("dicrease");
const totalItemPrice = document.getElementById("total-item-price");
const itemPrice = document.getElementById("item-price");
const totalBefore = document.getElementById("total-before-discount");
const totalAfter = document.getElementById("total-after-discount");
const discount = document.getElementById("discount");


const orderLines = itemDetails.map((item) => new OrderLineItem(item));


const generateItemTable = () => {
  const tableBody = document.querySelector("table tbody");
  // loop through each item from item list and create a row of item details
    orderLines.forEach((orderLine) =>  tableBody.appendChild(orderLine.render()));
  }


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

orderLines[0].showItemDetails();
//updateItemTotal(0);
