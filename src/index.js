import { headerSection, homePage } from "./initial.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

function component() {
  headerSection();
  homePage();

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      if (button.textContent === "Home") {
        console.log("home");
      } else if (button.textContent === "Menu") {
        menuPage();
      } else {
        contactPage();
      }
    })
  );
}
component();
