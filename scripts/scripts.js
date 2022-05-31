window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");

  setTimeout(() => {
    loading.style.display = "none";
  }, 3000);
});


let time = 5000;
let currentIndex = 0;
let images = document.querySelectorAll(".carousel__image");
let max = images.length;

const nextImage = () => {
  images[currentIndex].classList.remove("selected");
  currentIndex++;
  if (currentIndex >= max) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add("selected");
};

const start = () => {
  setInterval(() => {
    nextImage();
  }, time);
};

window.addEventListener("load", start);

const password = document.querySelector("#password");
const user = document.querySelector("#user");
const show = document.querySelector(".show");
const button = document.querySelector("#submit");

password.addEventListener("keyup", (e) => {  
  let value = e.target.value;

  if (value === "" || value.length < 6) {
    button.style.backgroundColor = "#B2DFFC";
    show.style.display = "none";
  } else {
    button.style.backgroundColor = "#0095F6";
    show.style.display = "block";
  }

  button.addEventListener("click", () => {
    password.value = "";
    user.value = "";
    button.style.backgroundColor = "#B2DFFC";
    show.style.display = "none";
  });
});

show.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    show.innerHTML = "Ocultar";
  } else {
    password.setAttribute("type", "password");
    show.innerHTML = "Mostrar";
  }
});
