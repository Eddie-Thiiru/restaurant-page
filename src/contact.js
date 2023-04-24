import Img from "./images/grilling-steak.jpg";
import Facebook from "./images/facebook.svg";
import Twitter from "./images/twitter.svg";
import Instagram from "./images/instagram.svg";
import "./contactpage.css";
import "./mainstyles.css";

const contactBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("contact-button");
  btn.type = "button";
  btn.textContent = "Contact";

  nav.appendChild(btn);
};

const contactPage = () => {
  const pageContainer = document.querySelector(".main-section");

  // Empty current page and replace with new child elements
  pageContainer.textContent = "";

  const page = document.createElement("div");
  const container = document.createElement("div");
  const contactLocation = document.createElement("div");
  const contactTime = document.createElement("div");
  const heading1 = document.createElement("h2");
  const heading2 = document.createElement("h2");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const links = document.createElement("div");
  const linkOne = document.createElement("button");
  const linkTwo = document.createElement("button");
  const linkThree = document.createElement("button");
  const img = new Image();
  const facebook = new Image();
  const twitter = new Image();
  const instagram = new Image();

  page.classList.add("contact-page");
  container.classList.add("contact-description");
  img.classList.add("grilling-steak");
  links.classList.add("links");
  img.src = Img;
  facebook.src = Facebook;
  twitter.src = Twitter;
  instagram.src = Instagram;
  img.alt = "A steak on a flaming grill ";
  facebook.alt = "Facebook icon";
  twitter.alt = "Twitter icon";
  instagram.alt = "Instagram icon";
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
  linkOne.appendChild(facebook);
  linkTwo.appendChild(twitter);
  linkThree.appendChild(instagram);
  links.appendChild(linkOne);
  links.appendChild(linkTwo);
  links.appendChild(linkThree);
  container.appendChild(contactLocation);
  container.appendChild(contactTime);
  page.appendChild(img);
  page.appendChild(container);
  page.appendChild(links);
  pageContainer.appendChild(page);
};

export { contactBtn, contactPage };
