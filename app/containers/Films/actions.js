/*
 *
 * Films Actions
 *
 */

export const ActionTypes = {
  FILMS_DATA_LOADED: 'container/FILMS_DATA_LOADED',
  SAVE_FILMS_DATA: 'containers/SAVE_FILMS_DATA',
  SEARCH_FILMS_DATA: 'container/SEARCH_FILMS_DATA',
  CLEAR_FILMS_DATA: 'container/CLEAR_FILMS_DATA',
};

const filmsDataLoaded = films => ({
  type: ActionTypes.FILMS_DATA_LOADED,
  payload: {
    films,
  },
});

const saveFilmsData = film => ({
  type: ActionTypes.SAVE_FILMS_DATA,
  payload: {
    film,
  },
});

const searchFilmsData = search => ({
  type: ActionTypes.SEARCH_FILMS_DATA,
  payload: {
    search,
  },
});

const clearFilmsData = () => ({
  type: ActionTypes.CLEAR_FILMS_DATA,
});

export default {
  filmsDataLoaded,
  saveFilmsData,
  searchFilmsData,
  clearFilmsData,
};
