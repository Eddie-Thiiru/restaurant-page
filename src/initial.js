import { homeBtn } from "./home";
import { menuBtn } from "./menu";
import { contactBtn } from "./contact";
import Img from "./restaurant.jpg";

const container = document.querySelector(".content");

const headerSection = () => {
  const header = document.createElement("div");
  const nav = document.createElement("div");
  const heading = document.createElement("h1");

  header.classList.add("header-section");
  nav.classList.add("nav");
  heading.textContent = "Tasty Good Kitchen";

  header.appendChild(heading);
  header.appendChild(nav);
  container.appendChild(header);

  homeBtn();
  menuBtn();
  contactBtn();
};

const homePage = () => {
  const mainSection = document.createElement("div");
  const para = document.createElement("P");
  const img = new Image();

  mainSection.classList.add("main-section");
  para.textContent =
    "Tasty Good Kitchen is proud to introduce Austin's premier Josper oven experience. Our menu showcases live-fire cooking with Latin flare. Subterra Agave Bar is our dimly-lit cocktail lounge, located downstairs from Ember. It features craft Agave cocktails and a wide selection of Latin spirits.";
  img.src = Img;
  img.alt = "Restaurant image";

  mainSection.appendChild(img);
  mainSection.appendChild(para);
  container.appendChild(mainSection);
};

export { headerSection, homePage };
