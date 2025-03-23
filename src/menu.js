export default (function() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    let card = document.createElement("div");
    card.classList.add("card");
    let text = document.createElement("p");
    text.textContent = "Tire Soup!";
    card.appendChild(text);
    content.appendChild(card);
  });