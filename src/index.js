import { headerSection, homePage, footer, homePageUpdate } from "./initial.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

function component() {
  headerSection();
  homePage();
  footer();

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      if (button.textContent === "Home") {
        homePageUpdate();
      } else if (button.textContent === "Menu") {
        menuPage();
      } else {
        contactPage();
      }
    })
  );
}
component();
