document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("closeButton");

  // Показать overlay при загрузке страницы
  overlay.style.display = "block";

  // Закрыть overlay при нажатии на кнопку с анимацией
  closeButton.addEventListener("click", function () {
    overlay.classList.add("hidden"); // Добавляем класс hidden для начала анимации
  });

  // Добавьте обработчик события, чтобы очистить overlay после завершения анимации
  overlay.addEventListener("transitionend", function () {
    if (overlay.classList.contains("hidden")) {
      overlay.style.display = "none";
    }
  });

  // Закрыть overlay при нажатии на любую клавишу клавиатуры
  document.addEventListener("keydown", function (event) {
    overlay.classList.add("hidden"); // Добавляем класс hidden для начала анимации
  });

  // Закрыть overlay при клике мышкой в любом месте экрана
  document.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.classList.add("hidden"); // Добавляем класс hidden для начала анимации
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const centeredBox = document.querySelector(".centered-box");

  // Добавить класс "visible" для .centered-box после загрузки страницы
  centeredBox.classList.add("visible");

  // Удалить анимацию при нажатии на кнопку
  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", function () {
    centeredBox.classList.remove("visible");
  });
});

///
const block1Div = document.querySelector(".block-1");
const block2Div = document.querySelector(".block-2");
const block3Div = document.querySelector(".block-3");
const block4Div = document.querySelector(".block-4");
const block5Div = document.querySelector(".block-5");
const block6Div = document.querySelector(".block-6");

block1Div.addEventListener("click", function () {
  // При нажатии добавляем класс "active" к элементу
  block1Div.classList.add("active");
});

block1Div.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-button")) {
    block1Div.classList.remove("active");
  }
});

///////

block2Div.addEventListener("click", function () {
  // При нажатии добавляем класс "active" к элементу
  block2Div.classList.add("active");
});

block2Div.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-button")) {
    block2Div.classList.remove("active");
  }
});

///////

block3Div.addEventListener("click", function () {
  // При нажатии добавляем класс "active" к элементу
  block3Div.classList.add("active");
});

block3Div.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-button")) {
    block3Div.classList.remove("active");
  }
});

///////

block4Div.addEventListener("click", function () {
  // При нажатии добавляем класс "active" к элементу
  block4Div.classList.add("active");
});

block4Div.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-button")) {
    block4Div.classList.remove("active");
  }
});

///////

block5Div.addEventListener("click", function () {
  // При нажатии добавляем класс "active" к элементу
  block5Div.classList.add("active");
});

block5Div.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-button")) {
    block5Div.classList.remove("active");
  }
});

///////

block6Div.addEventListener("click", function () {
  // При нажатии добавляем класс "active" к элементу
  block6Div.classList.add("active");
});

block6Div.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-button")) {
    block6Div.classList.remove("active");
  }
});

///////
