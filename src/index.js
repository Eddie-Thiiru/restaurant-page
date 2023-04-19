import Img from "./restaurant.jpg";

const initialPage = () => {
  const container = document.querySelector(".content");
  const heading = document.createElement("h1");
  const para = document.createElement("P");
  const img = new Image();

  img.src = Img;
  img.alt = "Restaurant image";
  heading.textContent = "Tasty Good Kitchen";
  para.textContent =
    "Tasty Good Kitchen is proud to introduce Austin's premier Josper oven experience. Our menu showcases live-fire cooking with Latin flare. Subterra Agave Bar is our dimly-lit cocktail lounge, located downstairs from Ember. It features craft Agave cocktails and a wide selection of Latin spirits.";

  container.appendChild(heading);
  container.appendChild(img);
  container.appendChild(para);
};

export { initialPage };
