export const getRefs = () => {
  return {
    ____________HEADER: null,
    searchBox:          document.querySelector('.header-search__input'),
    searchButton:       document.querySelector('.header-search__button'),
    headerNav:          document.querySelector('.header-nav__list'),
    headerLogo:         document.querySelector('.header__logo'),
    headerDivToChange:  document.querySelector('.header-search'),
    headerError:        document.querySelector('.header-search__error'),
    headerContainer:    document.querySelector('.header__container'),
    languageLinks:      document.querySelector('.control__languages'),
    _________FILMOTEKA: null,
    filmsSection:       document.querySelector('.filmoteka'),
    galleryItems:       document.querySelector('.filmoteka__set'),
    ________PAGINATION: null,
    paginationNav:      document.querySelector('.filmoteka-nav'),
    leftButton:         document.querySelector('.filmoteka-nav__left'),
    rightButton:        document.querySelector('.filmoteka-nav__right'),
    prevButton:         document.querySelector('.filmoteka-nav__prev'),
    nextButton:         document.querySelector('.filmoteka-nav__next'),
    firstButton:        document.querySelector('.filmoteka-nav__first'),
    lastButton:         document.querySelector('.filmoteka-nav__last'),
    pagesButton:        document.querySelector('.filmoteka-nav__pages--list'),
    ______MODALKA_DEVS: null,
    modalDevs:          document.querySelector('.modal-devs'),
    devCloseBtn:        document.querySelector('.modal-devs__close-btn'),
    modalFilm:          document.querySelector('.modal-film'),
    ______MODALKA_FILM: null,
    modalWatchedBtn:    document.querySelector('.modal-film__btn-watched'),
    modalQueueBtn:      document.querySelector('.modal-film__btn-queque'),
    modalFilmCloseBtn:  document.querySelector('.modal-film__close'),
    modalCard:          document.querySelector('.modal-card'),
    ________MY_LIBRARY: null,
    watchedBtn:         document.querySelector('.my-library__watched-btn'),
    queueBtn:           document.querySelector('.my-library__queue-btn'),
    ____________FOOTER: null,
    footer:             document.querySelector('.footer'),
    devLink:            document.querySelector('.footer__dev--link'),
    _________SCROLL_UP: null,
    scrollTopBtn:       document.querySelector('.scroll__top'),
  };
};

export const getRefsLocals = () => {
  return {
    filmoteka_ref:       document.querySelector('.header__logo-name'),
    search_films_ref:    document.querySelector('.header-search__input'),
    home_ref:            document.querySelector('#homeLink'),
    my_library_ref:      document.querySelector('#myLibraryLink'),
    rights_ref:          document.querySelector('.lang__rights_text'),
    devs_ref:            document.querySelector('.lang__devs_text'),
    by_ref:              document.querySelector('.lang__by_text'),
    watched_ref:         document.querySelector('.my-library__watched-btn'),
    queue_ref:           document.querySelector('.my-library__queue-btn'),
    vote_ref:            document.querySelector('.modal-card__list-votes'),
    popularity_ref:      document.querySelector('.modal-card__list-popularity'),
    title_orign_ref:     document.querySelector('.modal-card__list-title'),
    genre_ref:           document.querySelector('.modal-card__list-genre'),
    about_ref:           document.querySelector('.modal-card__description-heading'),
    add_to_watched_ref:  document.querySelector('.modal-film__btn-watched'),
    add_to_queue_ref:    document.querySelector('.modal-film__btn-queque'),
    close_devs_ref:      document.querySelector('.modal-devs__close-btn'),
    team_devs_ref:       document.querySelector('.team__heading'),
  };
};
