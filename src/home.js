const homeBtn = () => {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");

  btn.classList.add("home-button");
  btn.textContent = "Home";
  btn.type = "button";

  nav.appendChild(btn);
};

export { homeBtn };
