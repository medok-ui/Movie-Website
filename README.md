овременный веб-сайт для просмотра информации о фильмах, сериалах и аниме с использованием API Kinopoisk.

![Status](https://img.shields.io/badge/status-in%20development-yellow.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Learning](https://img.shields.io/badge/learning-vanilla%20JS-orange.svg)

## 📋 Описание

**Учебный проект для практики Vanilla JavaScript** 🚀

Этот проект создан для оттачивания навыков работы с чистым JavaScript без использования фреймворков. Код будет постепенно улучшаться и рефакториться по мере изучения новых концепций и паттернов.

### Что умеет проект:

Это полнофункциональный веб-сайт с каталогом фильмов, который позволяет:

- Просматривать трендовые фильмы и новинки
- Искать фильмы по названию
- Фильтровать контент по категориям (фильмы, сериалы, аниме)
- Получать детальную информацию о каждом фильме

## ✨ Основные возможности

### 🏠 Главная страница

- **Hero-секция** с случайным популярным фильмом
- **Недавно обновлённые** — последние добавленные фильмы
- **В тренде** — топ фильмов с высоким рейтингом
- **Новые релизы** — свежие кинопремьеры
- **Рекомендации** с фильтрацией по категориям

### 🔍 Поиск

- Быстрый поиск фильмов по названию
- Модальное окно с детальной информацией о найденном фильме
- Отображение постера, жанров, рейтинга и описания

### 🎨 Интерфейс

- Современный дизайн с glassmorphism эффектами
- Плавные анимации и переходы
- Адаптивная навигация
- Интерактивные карточки фильмов

## 🛠️ Технологии

- **HTML5** — семантическая разметка
- **CSS3** — современные стили (flexbox, transitions, custom properties)
- **Vanilla JavaScript (ES6+)** — модульная архитектура
- **Kinopoisk API** — данные о фильмах
- **Fetch API** — асинхронные запросы

## 📁 Структура проекта

```
movie-website/
├── assets/
│   ├── images/          # Фоновые изображения
│   └── svg/             # Иконки (календарь, звезда, время, поиск)
├── src/
│   ├── css/
│   │   ├── base.css                      # CSS Reset и базовые стили
│   │   ├── layout.css                    # Сетка и контейнеры
│   │   └── components/                   # Стили компонентов
│   │       ├── header.css
│   │       ├── hero.css
│   │       ├── modal.css
│   │       ├── recently-updated.css
│   │       ├── trending.css
│   │       ├── new-release.css
│   │       └── recommended.css
│   ├── js/
│   │   ├── app.js                        # Точка входа приложения
│   │   ├── api.js                        # Класс для работы с API
│   │   ├── config.js                     # Конфигурация (API ключ)
│   │   └── components/                   # JS компоненты
│   │       ├── Header.js
│   │       ├── Hero.js
│   │       ├── Modal.js
│   │       └── MovieCard.js
│   └── utils/
│       ├── constants.js                  # Константы (навигация)
│       └── helpers.js                    # Вспомогательные функции
├── index.html                            # Главная страница
├── style.css                             # Главный файл стилей (импорты)
└── README.md
```

## 🚀 Запуск проекта

1. **Клонируй репозиторий:**

   ```bash
   git clone https://github.com/your-username/movie-website.git
   cd movie-website
   ```

2. **Открой `index.html` в браузере:**
   - Просто двойной клик по файлу, или
   - Используй Live Server в VS Code
3. **Всё готово!** 🎉
   > **Примечание:** Для работы требуется подключение к интернету (запросы к API).

## 🔑 API

Проект использует [Kinopoisk API](https://api.poiskkino.dev/):

- Бесплатный доступ
- Не требует регистрации
- Актуальная база фильмов
  API ключ находится в `src/js/config.js`

## 💡 Примеры кода

### Модульная архитектура

```javascript
// Создание экземпляров классов
const header = new Header();
const hero = new Hero();
const movieCard = new MovieCard();
const modal = new Modal();
```

### Работа с API

```javascript
async fetchFilms() {
  const response = await fetch(`${this.baseUrlApi}v1.5/movie?limit=20`, {
    headers: { "X-API-KEY": this.#API_KEY }
  });
  const data = await response.json();
  return data.docs;
}
```

### Динамический рендеринг

```javascript
const HTML = data
  .map(
    (item) => `
    <li class="movie-card">
      <img src="${item.poster.url}" alt="${item.name}" />
      <h3>${item.name}</h3>
    </li>
  `,
  )
  .join("");
ulElement.innerHTML = HTML;
```

## 🧠 Что я изучаю в этом проекте

- ✅ ES6+ модули и классы
- ✅ Асинхронный JavaScript (async/await)
- ✅ Работа с Fetch API
- ✅ DOM манипуляции
- ✅ Event Listeners
- ✅ CSS Flexbox и Grid
- ✅ CSS переменные и анимации
- 🔄 Улучшение архитектуры кода
- 🔄 Паттерны проектирования
- 🔄 Оптимизация и best practices

## 📝 Лицензия

Этот проект создан в образовательных целях и свободен для использования.

## 🤝 Вклад

Это мой личный учебный проект, но буду рад любым советам и фидбеку!

---

**Сделано с ❤️ для практики Vanilla JavaScript**
