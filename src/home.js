export default (function() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  let card = document.createElement("div");
  card.classList.add("card");
  let text = document.createElement("p");
  text.textContent = "Welcome to Ray's Pizza, the home of Green Bay, Wisconsin's best pizza.";
  card.appendChild(text);
  content.appendChild(card);
});