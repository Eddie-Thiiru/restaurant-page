import Img from "./images/assorted-meats.jpg";
import Img2 from "./images/ribs.jpg";
import Img3 from "./images/steak-puree.jpg";
import Img4 from "./images/pork.jpg";
import Img5 from "./images/cheeseburger.jpg";
import Img6 from "./images/fish.jpg";
import "./menupage.css";
import "./mainstyles.css";

const menuBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("menu-button");
  btn.type = "button";
  btn.textContent = "Menu";

  nav.appendChild(btn);
};

const menuPage = () => {
  const pageContainer = document.querySelector(".main-section");

  // Empty current page and replace with new child elements
  pageContainer.textContent = "";

  const page = document.createElement("div");
  const assorted = document.createElement("div");
  const ribs = document.createElement("div");
  const steak = document.createElement("div");
  const pork = document.createElement("div");
  const burger = document.createElement("div");
  const fish = document.createElement("div");
  const assortedHead = document.createElement("h3");
  const assortedPara = document.createElement("p");
  const ribsHead = document.createElement("h3");
  const ribsPara = document.createElement("p");
  const steakHead = document.createElement("h3");
  const steakPara = document.createElement("p");
  const porkHead = document.createElement("h3");
  const porkPara = document.createElement("p");
  const burgerHead = document.createElement("h3");
  const burgerPara = document.createElement("p");
  const fishHead = document.createElement("h3");
  const fishPara = document.createElement("p");
  const assortedImg = new Image();
  const ribsImg = new Image();
  const steakImg = new Image();
  const porkImg = new Image();
  const burgerImg = new Image();
  const fishImg = new Image();

  page.classList.add("menu-page");
  assorted.classList.add("assorted-meats");
  ribs.classList.add("ribs");
  steak.classList.add("steak");
  pork.classList.add("pork");
  burger.classList.add("burger");
  fish.classList.add("fish");

  assortedHead.textContent = "SMOKED ASSORTED MEATS";
  assortedPara.textContent =
    "Our house favorite Dish is a combination of pit-smoked beef brisket, ribs, pork, wings, sausages, corn and bread with a drink of your choice.";
  ribsHead.textContent = "RIBS";
  ribsPara.textContent =
    "Marinated beef ribs grilled and smoked on a charcoal grill to perfection.";
  steakHead.textContent = "RIB-EYE STEAK + POTATO PUREE";
  steakPara.textContent =
    "Cooked on a cast iron to medium rare with a fantastic crust and plated with potato puree and BBQ sauce.";
  porkHead.textContent = "PORK CHOP";
  porkPara.textContent =
    "Charcoal grilled to a beautiful medium rare with fried potatoes and smashed tomato sauce on the side.";
  burgerHead.textContent = "DOUBLE PATTY CHEESEBURGER";
  burgerPara.textContent =
    "Features two seasoned beef patties topped with tangy pickles, caramelized onions, sauce, and cheese slices with buns made from scratch.";
  fishHead.textContent = "WHOLE FISH";
  fishPara.textContent =
    "Oven roasted whole fish basted with olive oil and spices, served with vegetables on the side.";

  assortedImg.src = Img;
  ribsImg.src = Img2;
  steakImg.src = Img3;
  porkImg.src = Img4;
  burgerImg.src = Img5;
  fishImg.src = Img6;
  assortedImg.alt = "Assorted meats on a plate";
  ribsImg.alt = "Grilled ribs";
  steakImg.alt = "Steak and potato puree on a plate";
  porkImg.alt = "A pork steak on a plate";
  burgerImg.alt = "A double patty cheeseburger";
  fishImg.alt = "Roasted fish and vegetables on a plate";

  assorted.appendChild(assortedHead);
  assorted.appendChild(assortedPara);
  assorted.appendChild(assortedImg);
  ribs.appendChild(ribsHead);
  ribs.appendChild(ribsPara);
  ribs.appendChild(ribsImg);
  steak.appendChild(steakHead);
  steak.appendChild(steakPara);
  steak.appendChild(steakImg);
  pork.appendChild(porkHead);
  pork.appendChild(porkPara);
  pork.appendChild(porkImg);
  burger.appendChild(burgerHead);
  burger.appendChild(burgerPara);
  burger.appendChild(burgerImg);
  fish.appendChild(fishHead);
  fish.appendChild(fishPara);
  fish.appendChild(fishImg);

  page.appendChild(assorted);
  page.appendChild(ribs);
  page.appendChild(steak);
  page.appendChild(pork);
  page.appendChild(burger);
  page.appendChild(fish);
  pageContainer.appendChild(page);
};

export { menuBtn, menuPage };
