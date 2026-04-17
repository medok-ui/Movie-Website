import { FetchApi } from "../api.js";

const fetch = new FetchApi();

export class Modal {
  searchFilm(modalElement, nameFilm) {
    console.log(modalElement);

    const fetchFilmSearch = fetch.fetchFilmsSearch(nameFilm);
    if (!fetchFilmSearch) return;
    fetchFilmSearch
      .then((data) => {
        const HTML = data
          .map(
            (item) => `
    <div class="modal-container">
        <img class="modal-cover" src="${item.backdrop ? item.backdrop.previewUrl : "https://www.freeiconspng.com/uploads/no-image-icon-10.png"}" alt="${item.name ? item.name : "Неизвестно"}" />
        <div class="modal-content">
          <div class="modal-head">
            <h2 class="modal-name">${item.name ? item.name : "Неизвестно"}</h2>
            <button class="modal-close">✕</button>
          </div>
          <div class="modal-info">
            <div class="modal-film-info">
              <div class="modal-film-tags">
                <div class="film-tag">${item.genres[0] ? item.genres[0].name : "Неизвестно"}</div>
                <div class="film-tag">${item.genres[1] ? item.genres[1].name : "Неизвестно"}</div>
              </div>
              <div class="modal-film-data">
                <div class="film-year">
                  <img src="./assets/svg/calendar.svg" alt="calendar" />
                  ${item.year ? item.year : "Неизвестно"}
                </div>
                <div class="film-time">
                  <img src="./assets/svg/time.svg" alt="calendar" />
                  ${item.movieLength ? item.movieLength + "min" : "0:00min"}
                </div>
                <div class="film-rating">
                  <img src="./assets/svg/star.svg" alt="calendar" />
                  ${item.rating ? item.rating.kp : item.rating.imdb ? item.rating.tmdb : "0"}
                </div>
              </div>
            </div>
            <p class="modal-film-description">${item.description ? item.description : "Неизвестно"}</p>
          </div>
        </div>
    </div>
        `,
          )
          .join("");
        modalElement.innerHTML = HTML;

        const modalCloseBtn = modalElement.querySelector(".modal-close");
        if (modalCloseBtn) {
          modalCloseBtn.addEventListener("click", () => {
            modalElement.style.display = "none";
          });
        }
      })
      .catch((error) => console.error(error));
  }
}
