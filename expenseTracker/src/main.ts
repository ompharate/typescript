import "./style.css";

let totalAmount: number = 0;

const balance = document.getElementById("balance") as HTMLParagraphElement;

const amount = document.getElementById("amount") as HTMLInputElement;
const title = document.getElementById("title") as HTMLInputElement;

const history = document.querySelector(".history") as HTMLDivElement;

const incomeBtn = document.getElementById("income");
const expenseBtn = document.getElementById("expense");

incomeBtn?.addEventListener("click", () => {
  totalAmount += parseInt(amount.value);
  balance.innerHTML = totalAmount.toString();

  const item = document.createElement("div");
  item.classList.add("item", "item-income");

  const h2Title = document.createElement("h2");
  h2Title.innerText = title.value;

  const h2Amount = document.createElement("h2");
  h2Amount.innerText = amount.value;

  item.append(h2Title);
  item.append(h2Amount);

  history.append(item);
});

expenseBtn?.addEventListener("click", () => {
  totalAmount -= parseInt(amount.value);
  balance.innerHTML = totalAmount.toString();

  const item = document.createElement("div");
  item.classList.add("item", "item-expense");

  const h2Title = document.createElement("h2");
  h2Title.innerText = title.value;

  const h2Amount = document.createElement("h2");
  h2Amount.innerText = amount.value;

  item.append(h2Title);
  item.append(h2Amount);

  history.append(item);
});
