import Img from "./images/assorted-meats.jpg";
import Img2 from "./images/ribs.jpg";
import Img3 from "./images/steak-puree.jpg";
import Img4 from "./images/pork.jpg";
import Img5 from "./images/cheeseburger.jpg";
import Img6 from "./images/fish.jpg";
import "./styles.css";

const menuBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("menu-button");
  btn.textContent = "Menu";
  btn.type = "button";

  nav.appendChild(btn);
};

const menuPage = () => {
  const page = document.querySelector(".main-section");

  const assorted = new Image();
  const ribs = new Image();
  const steak = new Image();
  const pork = new Image();
  const burger = new Image();
  const fish = new Image();

  assorted.classList.add("assorted-meats");
  ribs.classList.add("ribs");
  steak.classList.add("steak");
  pork.classList.add("pork");
  burger.classList.add("burger");
  fish.classList.add("fish");

  assorted.src = Img;
  ribs.src = Img2;
  steak.src = Img3;
  pork.src = Img4;
  burger.src = Img5;
  fish.src = Img6;

  assorted.alt = "Assorted meats on a plate";
  ribs.alt = "Grilled ribs";
  steak.alt = "Steak and potato puree on a plate";
  pork.alt = "A pork steak on a plate";
  burger.alt = "A double patty cheeseburger";
  fish.alt = "Roasted fish and vegetables on a plate";

  // Empty current page and replace with new child elements
  page.textContent = "";
  page.appendChild(assorted);
  page.appendChild(ribs);
  page.appendChild(steak);
  page.appendChild(pork);
  page.appendChild(burger);
  page.appendChild(fish);
};

export { menuBtn, menuPage };
