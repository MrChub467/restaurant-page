import "./styles.css";
import home from "./home.js";
import about from "./about.js";
import locations from "./locations.js";
import menu from "./menu.js";
// Hello Micah Smith

(function () {
  "use strict"
  function changePage() {
    let page = this.textContent.toLowerCase();
    switch (page) {
      case "home":
        home();
        break;
      case "menu":
        menu();
        break;
      case "locations":
        locations();
        break;
      case "about":
        about();
        break;
    }
  };

  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", changePage);
  });


  home();

})();
