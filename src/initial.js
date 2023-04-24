import { menuBtn } from "./menu";
import { contactBtn } from "./contact";
import Logo from "./images/grill.svg";
import Img from "./images/tomahawk.jpg";
import "./mainstyles.css";
import "./homepage.css";

const container = document.querySelector(".content");

const headerSection = () => {
  const header = document.createElement("div");
  const nav = document.createElement("div");
  const headline = document.createElement("h1");
  const btn = document.createElement("button");
  const logo = new Image();

  header.classList.add("header-section");
  nav.classList.add("nav");
  btn.classList.add("home-button");
  logo.classList.add("logo");
  logo.src = Logo;
  logo.alt = "Image of a grill";
  btn.type = "button";
  btn.textContent = "Home";
  headline.textContent = "Grill N Barbecue";

  nav.appendChild(btn);
  header.appendChild(logo);
  header.appendChild(headline);
  header.appendChild(nav);

  container.appendChild(header);

  menuBtn();
  contactBtn();
};

const homePage = () => {
  const pageContainer = document.createElement("div");
  const page = document.createElement("div");
  const heading = document.createElement("h2");
  const para = document.createElement("P");
  const img = new Image();

  pageContainer.classList.add("main-section");
  page.classList.add("home-page");
  img.classList.add("home-image");
  img.src = Img;
  img.alt = "A man cooking a tomahawk on a flaming grill ";
  heading.textContent = "THE PEAK OF FLAVOR";
  para.textContent =
    "At Grill N Barbecue, step into a world of succulent meat mellowed to the peak of flavor, that fills your mouth with utmost satisfaction. Located at the PitMasters Street, We are honoured to serve the finest, most remarkable, out of this world grill and barbecue.";
  page.appendChild(img);
  page.appendChild(heading);
  page.appendChild(para);
  pageContainer.appendChild(page);
  container.appendChild(pageContainer);
};

const footer = () => {
  const footer = document.createElement("div");

  footer.classList.add("footer-section");
  footer.textContent = "Copyright @ Grill N Barbecue 2023";

  container.appendChild(footer);
};

const homePageUpdate = () => {
  const pageContainer = document.querySelector(".main-section");

  pageContainer.textContent = "";

  const page = document.createElement("div");
  const heading = document.createElement("h2");
  const para = document.createElement("P");
  const img = new Image();

  page.classList.add("home-page");
  img.classList.add("home-image");
  img.src = Img;
  img.alt = "A man cooking a tomahawk on a flaming grill ";
  heading.textContent = "THE PEAK OF FLAVOR";
  para.textContent =
    "At Grill N Barbecue, step into a world of succulent meat mellowed to the peak of flavor, that fills your mouth with utmost satisfaction. Located at the PitMasters Street, We are honoured to serve the finest, most remarkable, out of this world grill and barbecue.";

  page.appendChild(img);
  page.appendChild(heading);
  page.appendChild(para);
  pageContainer.appendChild(page);
};

export { headerSection, homePage, footer, homePageUpdate };
