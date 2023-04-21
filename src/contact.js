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
  heading1.textContent = "ADDRESS";
  heading2.textContent = "HOURS";
  para1.innerHTML =
    "PitMasters Street <br>Grilled, N Smoked <br>(100) 200-fake";
  para2.innerHTML =
    "Wed-Thur: 11:00am - 9:00pm <br>Fri-Sun: 3:00pm - 11-00pm <br>Mon: Closed";

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
