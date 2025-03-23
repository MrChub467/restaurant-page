export default (function() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    let card = document.createElement("div");
    card.classList.add("card");
    let text = document.createElement("p");
    text.textContent = "700 Luther Dr Mankato, MN 56001";
    card.appendChild(text);
    content.appendChild(card);
  });