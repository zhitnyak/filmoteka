export const getRefs = () => {
  return {
    searchBox: document.querySelector('.header-search__input'),
    searchButton: document.querySelector('.header-search__button'),
    filmsSection: document.querySelector('.filmoteka'),
    headerNav: document.querySelector('.header-nav__list'),
    headerLogo: document.querySelector('.header__logo'),
    headerDivToChange: document.querySelector('.header-search'),
    headerContainer: document.querySelector('.header__container'),
    leftButton: document.querySelector('.filmoteka-nav__left'),
    rightButton: document.querySelector('.filmoteka-nav__right'),
    prevButton: document.querySelector('.filmoteka-nav__prev'),
    nextButton: document.querySelector('.filmoteka-nav__next'),
    firstButton: document.querySelector('.filmoteka-nav__first'),
    lastButton: document.querySelector('.filmoteka-nav__last'),
    pagesButton: document.querySelector('.filmoteka-nav__pages--list'),
    devLink: document.querySelector('.footer__dev--link'),
    paginationNav: document.querySelector('.filmoteka-nav'),
    modalFilm: document.querySelector('.modal-film'),
    modalFilmCloseBtn: document.querySelector('.modal-film__close'),
    modalDevs: document.querySelector('.modal-devs'),
    modalCard: document.querySelector('.modal-card'),
    devCloseBtn: document.querySelector('.modal-devs__close-btn'),
    watchedBtn: document.querySelector('.my-library__watched-btn'),
    queueBtn: document.querySelector('.my-library__queue-btn'),
    galleryItems: document.querySelector('.filmoteka__set'),
    //кнопка ADD TO WATCHED
    //кнопка ADD TO QUEUE
    scrollTopBtn: document.querySelector('.scroll__top'),
  };
};
