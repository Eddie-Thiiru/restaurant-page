import "./styles.css";

const contactBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("contact-button");
  btn.textContent = "Contact";
  btn.type = "button";

  nav.appendChild(btn);
};

const contactPage = () => {};

export { contactBtn, contactPage };