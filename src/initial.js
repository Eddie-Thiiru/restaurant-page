import { menuBtn } from "./menu";
import { contactBtn } from "./contact";
import Img from "./images/tomahawk.jpg";
import "./styles.css";

const container = document.querySelector(".content");

const headerSection = () => {
  const header = document.createElement("div");
  const nav = document.createElement("div");
  const restaurant = document.createElement("h1");
  const btn = document.createElement("button");

  restaurant.classList.add("header-section");
  nav.classList.add("nav");
  btn.classList.add("home-button");
  btn.type = "button";
  btn.textContent = "Home";
  restaurant.textContent = "Grill N Barbecue";

  nav.appendChild(btn);
  header.appendChild(restaurant);
  header.appendChild(nav);
  container.appendChild(header);

  menuBtn();
  contactBtn();
};

const homePage = () => {
  const page = document.createElement("div");
  const heading = document.createElement("h2");
  const para = document.createElement("P");
  const img = new Image();

  page.classList.add("main-section");
  img.classList.add("home-image");
  img.src = Img;
  img.alt = "A man cooking a tomahawk on a flaming grill ";
  heading.textContent = "THE PEAK OF FLAVOR";
  para.textContent =
    "At Grill N Barbecue, step into a world of succulent meat mellowed to the peak of flavor, that fills your mouth with utmost satisfaction. Located at the PitMasters Street, We are honoured to serve the finest, most remarkable, out of this world grill and barbecue.";
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
  img.classList.add("home-image");
  img.src = Img;
  img.alt = "A man cooking a tomahawk on a flaming grill ";
  para.textContent =
    "At Grill N Barbecue, step into a world of succulent meat mellowed to the peak of flavor, that fills your mouth with utmost satisfaction. Located at the PitMasters Street, We are honoured to serve the finest, most remarkable, out of this world grill and barbecue.";

  page.appendChild(img);
  page.appendChild(para);
};

export { headerSection, homePage, homePageUpdate };
