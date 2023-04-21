import Img from "./images/grilling-steak.jpg";
import "./styles.css";

const contactBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("contact-button");
  btn.type = "button";
  btn.textContent = "Contact";

  nav.appendChild(btn);
};

const contactPage = () => {
  const page = document.querySelector(".main-section");

  // Empty current page and replace with new child elements
  page.textContent = "";

  const container = document.createElement("div");
  const contactLocation = document.createElement("div");
  const contactTime = document.createElement("div");
  const heading1 = document.createElement("h2");
  const heading2 = document.createElement("h2");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const img = new Image();

  container.classList.add("contact-description");
  img.classList.add("grilling-steak");
  img.src = Img;
  img.alt = "A steak on a flaming grill ";
  heading1.textContent = "Location";
  heading2.textContent = "Hours";
  para1.textContent = "testing 1 2 3";
  para2.textContent = "testing 1 2 3";

  contactLocation.appendChild(heading1);
  contactLocation.appendChild(para1);
  contactTime.appendChild(heading2);
  contactTime.appendChild(para2);
  container.appendChild(contactLocation);
  container.appendChild(contactTime);
  page.appendChild(img);
  page.appendChild(container);
};

export { contactBtn, contactPage };
