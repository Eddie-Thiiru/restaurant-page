import Img from "./images/grilling-steak.jpg";
import "./styles.css";

const contactBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("contact-button");
  btn.textContent = "Contact";
  btn.type = "button";

  nav.appendChild(btn);
};

const contactPage = () => {
  const page = document.querySelector(".main-section");
  const img = new Image();

  img.classList.add("grilling-steak");
  img.src = Img;
  img.alt = "A steak on a flaming grill ";

  page.textContent = "";
  page.appendChild(img);
};

export { contactBtn, contactPage };
