let balance = document.getElementById("balance");
let moneyPlus = document.getElementById("plus");
let moneyMinus = document.getElementById("minus");
let list = document.getElementById("list");
let form = document.getElementById("form");
let textInput = document.getElementById("text");
let amountInput = document.getElementById("amount");
let button = document.querySelector("#form .btn");
let totalBalance = 0;
let moneyP = 0;
let moneyM = 0;

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (textInput.value === "" || isNaN(amountInput.value)) {
    alert("Enter a transaction name and amount!");
  } else {
    let val = parseFloat(amountInput.value);
    let text = textInput.value;
    let sign = val < 0 ? "-" : "+";
    const className = val < 0 ? "minus" : "plus";
    let listItem = document.createElement("li");
    listItem.classList.add(className);
    listItem.innerHTML = `
      ${text} <span>${sign} ${Math.abs(
      val
    )}</span> <button class="delete-btn" data-amount="${val}">X</button>
    `;
    list.appendChild(listItem);
    totalBalance += val;
    balance.innerText = "$ " + totalBalance.toFixed(2);
    if (sign === "+") {
      moneyP += val;
      moneyPlus.innerText = `+ ${moneyP.toFixed(2)}`;
    } else {
      moneyM += Math.abs(val);
      moneyMinus.innerText = `- ${moneyM.toFixed(2)}`;
    }
    listItem
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        let val = parseFloat(this.getAttribute("data-amount"));
        list.removeChild(this.parentNode);
        totalBalance -= val;
        balance.innerText = "$ " + totalBalance.toFixed(2);
        if (sign === "+") {
          moneyP -= val;
          moneyPlus.innerText = `+ ${moneyP.toFixed(2)}`;
        } else {
          moneyM -= Math.abs(val);
          moneyMinus.innerText = `- ${moneyM.toFixed(2)}`;
        }
      });
    textInput.value = "";
    amountInput.value = "";
  }
});
