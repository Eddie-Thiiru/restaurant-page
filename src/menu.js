import "./styles.css";

const menuBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("menu-button");
  btn.textContent = "Menu";
  btn.type = "button";

  nav.appendChild(btn);
};

const menuPage = () => {};

export { menuBtn, menuPage };