export default (function() {
    const foodOptions = ["Tire Soup", "Retread Bread", "Oil Beer", "Exhaust Pizza", "Blinker Fluid Pizza", "Filter Pizza"];
    const content = document.querySelector("#content");
    content.innerHTML = "";
    foodOptions.forEach((food) => {

      let card = document.createElement("div");
      card.classList.add("card");
      let text = document.createElement("p");
      text.textContent = food;
      card.appendChild(text);
      content.appendChild(card);
    })
});