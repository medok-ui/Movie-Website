import { navigationData } from "../../utils/constants.js";

export class Header {
  navigationData = navigationData;

  renderNavigation(ulElement) {
    const HTML = this.navigationData
      .map(
        (item) =>
          `<li class="nav-item">
               <a href="${item.link}" class="nav-link">${item.title}</a>
           </li>`,
      )
      .join("");

    ulElement.innerHTML = HTML;
  }
}
