import { menuBtn } from "./menu";
import { contactBtn } from "./contact";
import Img from "./images/tomahawk.jpg";
import "./styles.css";

const container = document.querySelector(".content");

const headerSection = () => {
  const header = document.createElement("div");
  const nav = document.createElement("div");
  const heading = document.createElement("h1");
  const btn = document.createElement("button");

  header.classList.add("header-section");
  nav.classList.add("nav");
  heading.textContent = "Tasty Good Kitchen";
  btn.classList.add("home-button");
  btn.textContent = "Home";
  btn.type = "button";

  header.appendChild(heading);
  nav.appendChild(btn);
  header.appendChild(nav);
  container.appendChild(header);

  menuBtn();
  contactBtn();
};

const homePage = () => {
  const page = document.createElement("div");
  const para = document.createElement("P");
  const img = new Image();

  page.classList.add("main-section");
  para.textContent =
    "Tasty Good Kitchen is proud to introduce Austin's premier Josper oven experience. Our menu showcases live-fire cooking with Latin flare. Subterra Agave Bar is our dimly-lit cocktail lounge, located downstairs from Ember. It features craft Agave cocktails and a wide selection of Latin spirits.";
  img.classList.add("home-image");
  img.src = Img;
  img.alt = "A man cooking a tomahawk on a flaming grill ";

  page.appendChild(img);
  page.appendChild(para);
  container.appendChild(page);
};

const homePageUpdate = () => {
  const page = document.querySelector(".main-section");
  const para = document.createElement("P");

  page.textContent = "";

  const img = new Image();

  page.classList.add("main-section");
  para.textContent =
    "Tasty Good Kitchen is proud to introduce Austin's premier Josper oven experience. Our menu showcases live-fire cooking with Latin flare. Subterra Agave Bar is our dimly-lit cocktail lounge, located downstairs from Ember. It features craft Agave cocktails and a wide selection of Latin spirits.";
  img.classList.add("home-image");
  img.src = Img;
  img.alt = "A man cooking a tomahawk on a flaming grill ";

  page.appendChild(img);
  page.appendChild(para);
};

export { headerSection, homePage, homePageUpdate };
