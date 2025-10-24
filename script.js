// === 1. Приветствие при загрузке ===
window.addEventListener("load", () => {
  console.log("Страница успешно загружена!");
  alert("Добро пожаловать на мой адаптивный сайт!");
});

// === 2. Кнопка для смены темы ===
const themeBtn = document.createElement("button");
themeBtn.textContent = "Сменить тему";
themeBtn.classList.add("theme-btn");

// Находим header и nav
const header = document.querySelector("header");
const nav = document.querySelector("nav");

// Создаем контейнер, который объединит меню и кнопку
const rightBlock = document.createElement("div");
rightBlock.classList.add("right-block");

// Перемещаем меню и кнопку внутрь этого блока
rightBlock.appendChild(nav);
rightBlock.appendChild(themeBtn);

// Добавляем этот блок в header (справа от заголовка)
header.appendChild(rightBlock);

// Обработчик темы
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// === 3. Аккордеон для боковой панели ===
const aside = document.querySelector("aside");
const asideTitle = aside.querySelector("h3");
const asideText = aside.querySelector("p");

//asideText.style.display = "none"; // скрываем по умолчанию
asideTitle.style.cursor = "pointer";

asideTitle.addEventListener("click", () => {
  if (asideText.style.display === "none") {
    asideText.style.display = "block";
  } else {
    asideText.style.display = "none";
  }
});

// === 4. Фотогалерея с фильтрацией ===
const galleryContainer = document.createElement("div");
galleryContainer.classList.add("gallery-container");
galleryContainer.innerHTML = `
  <div class="filters">
    <button data-category="all">Все</button>
    <button data-category="nature">Природа</button>
    <button data-category="city">Город</button>
    <button data-category="school">Школа</button>
    <button data-category="other">Другое</button>
  </div>
  <div class="gallery">
    <img src="https://picsum.photos/200/150?random=1" data-category="nature">
    <img src="https://picsum.photos/200/150?random=2" data-category="city">
    <img src="https://picsum.photos/200/150?random=3" data-category="nature">
    <img src="https://picsum.photos/200/150?random=4" data-category="city">
    <img src="https://picsum.photos/200/150?random=5" data-category="school">
    <img src="https://picsum.photos/200/150?random=6" data-category="school">
    <img src="https://picsum.photos/200/150?random=7" data-category="other">
    <img src="https://picsum.photos/200/150?random=8" data-category="other">
    <img src="https://picsum.photos/200/150?random=9" data-category="nature">
    <img src="https://picsum.photos/200/150?random=10" data-category="city">
    <img src="https://picsum.photos/200/150?random=11" data-category="nature">
    <img src="https://picsum.photos/200/150?random=12" data-category="city">
    <img src="https://picsum.photos/200/150?random=13" data-category="school">
    <img src="https://picsum.photos/200/150?random=14" data-category="school">
    <img src="https://picsum.photos/200/150?random=15" data-category="other">
    <img src="https://picsum.photos/200/150?random=16" data-category="other">
    <img src="https://picsum.photos/200/150?random=17" data-category="nature">
    <img src="https://picsum.photos/200/150?random=18" data-category="city">
    <img src="https://picsum.photos/200/150?random=19" data-category="nature">
    <img src="https://picsum.photos/200/150?random=20" data-category="city">
  </div>
  <div id="modal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImg">
  </div>
`;
document.querySelector("main").appendChild(galleryContainer);

// === Фильтрация изображений ===
const buttons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".gallery img");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    images.forEach((img) => {
      if (category === "all" || img.getAttribute("data-category") === category) {
        img.style.display = "inline-block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

// === Модальное окно ===
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

close.addEventListener("click", () => (modal.style.display = "none"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

