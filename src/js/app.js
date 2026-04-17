// Инициализация приложения
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Modal } from "./components/Modal.js";
import { MovieCard } from "./components/MovieCard.js";

// Создаём экземпляры классов
const header = new Header();
const hero = new Hero();
const movieCard = new MovieCard();
const modal = new Modal();

// Рендер элементов навигации в хедере
const ulElementNav = document.querySelector(".nav-list");
if (ulElementNav) {
  header.renderNavigation(ulElementNav);
}

// Рендер контента (описания фильма) в главном блоке hero
const divElementHeroContent = document.querySelector(".hero-content");
if (divElementHeroContent) {
  hero.dataFilm(divElementHeroContent);
}

// Рендер карточек в секции "Недавно обновлено"
const ulElementRecently = document.querySelector(".recently-list");
if (ulElementRecently) {
  const movieCard = new MovieCard();
  movieCard.recentlyUpdated(ulElementRecently);
}

// Рендер карточек в секции "В тренде" с логикой подгрузки
const ulElementTrending = document.querySelector(".trending-list");
if (ulElementTrending) {
  // Изначально показываем 3 карточки
  let quantityTrendingList = 3;
  const trendingAllBtn = document.querySelector(".trending-btn");

  // При клике увеличиваем количество до 6 и скрываем кнопку
  trendingAllBtn.addEventListener("click", () => {
    quantityTrendingList = 6;
    movieCard.trending(ulElementTrending, quantityTrendingList);
    trendingAllBtn.style.display = "none";
  });

  movieCard.trending(ulElementTrending, quantityTrendingList);
}

// Рендер карточек в секции "Новые релизы" с логикой подгрузки
const ulElementRelease = document.querySelector(".release-list");
if (ulElementRelease) {
  const releaseAllBtn = document.querySelector(".release-btn");
  // Изначально показываем 4 карточки
  let quantityReleaseList = 4;

  // При клике увеличиваем количество до 8 и скрываем кнопку
  releaseAllBtn.addEventListener("click", () => {
    quantityReleaseList = 8;
    movieCard.release(ulElementRelease, quantityReleaseList);
    releaseAllBtn.style.display = "none";
  });

  movieCard.release(ulElementRelease, quantityReleaseList);
}

// Рендер карточек в секции "Рекомендовано" с фильтрацией по категориям
const ulElementRecommended = document.querySelector(".recommended-list");
if (ulElementRecommended) {
  const btnCategory = document.querySelectorAll(".tag");

  // Массив доступных категорий
  const arrayCategory = ["movie", "tv-series", "anime"];
  let category = "movie";

  // Навешиваем обработчики на кнопки фильтров
  btnCategory.forEach((button, index) => {
    button.value = arrayCategory[index];

    button.addEventListener("click", (event) => {
      // Убираем активный класс со всех кнопок
      btnCategory.forEach((el) => el.classList.remove("active"));
      const btnValue = event.target.value;

      // Обновляем контент по выбранной категории
      category = btnValue;
      movieCard.recommended(ulElementRecommended, category);

      // Добавляем активный класс на нажатую кнопку
      event.target.classList.add("active");
    });
  });

  // Первоначальный рендер рекомендованных фильмов
  movieCard.recommended(ulElementRecommended, category);
}

// Поиск фильма через инпут
const searchInput = document.querySelector(".search-input");

if (searchInput) {
  const btnSearch = document.querySelector(".search-button");
  const modalContainer = document.querySelector(".modal");

  // При клике на кнопку поиска открываем модалку с результатами
  btnSearch.addEventListener("click", () => {
    const nameFilm = searchInput.value;
    console.log(nameFilm);
    modalContainer.style.display = "block";
    modal.searchFilm(modalContainer, nameFilm);
  });
}
