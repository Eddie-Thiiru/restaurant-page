import Img from "./restaurant.jpg";

const homePage = () => {
  const container = document.querySelector(".content");

  const nav = document.createElement("div");
  const mainSection = document.createElement("div");
  const heading = document.createElement("h1");
  const para = document.createElement("P");
  const img = new Image();

  nav.classList.add("nav");
  mainSection.classList.add("main-section");
  img.src = Img;
  img.alt = "Restaurant image";
  heading.textContent = "Tasty Good Kitchen";
  para.textContent =
    "Tasty Good Kitchen is proud to introduce Austin's premier Josper oven experience. Our menu showcases live-fire cooking with Latin flare. Subterra Agave Bar is our dimly-lit cocktail lounge, located downstairs from Ember. It features craft Agave cocktails and a wide selection of Latin spirits.";

  nav.appendChild(heading);
  mainSection.appendChild(img);
  mainSection.appendChild(para);
  container.appendChild(nav);
  container.appendChild(mainSection);
};

export { homePage };
