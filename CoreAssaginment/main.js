import { itemDetails } from "./modules/itemDetails.js";
import createOrderLine from "./modules/createOrderLineItem.js";
import createOrderLineItemEditor from "./modules/createOrderLineItemEditor.js";

const totalItemPrice = document.getElementById("total-item-price");
const totalBefore = document.getElementById("total-before-discount");
const totalAfter = document.getElementById("total-after-discount");
const discount = document.getElementById("discount");

const orderLineEditor = createOrderLineItemEditor();


const orderLines = itemDetails.map((item) => createOrderLine(item, orderLineEditor.showItemDetails));

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

orderLineEditor.showItemDetails(orderLines[0]);
