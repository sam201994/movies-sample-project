/*
 *
 * Film reducer
 *
 */

import { ActionTypes } from './actions';

/* eslint-disable default-case, no-param-reassign */

export const initialState = {
  data: [],
  searchTerms: {},
};

const getFilms = (films, film) =>
  films.map(f => {
    if (f.id === film.id) {
      return film;
    }
    return f;
  });

const addIdToFilms = films =>
  films.map((f, i) => ({
    ...f,
    id: i,
  }));

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FILMS_DATA_LOADED: {
      const { films } = action.payload;
      const filmsWithIDs = addIdToFilms(films);
      return {
        ...state,
        data: filmsWithIDs,
      };
    }
    case ActionTypes.SAVE_FILMS_DATA: {
      const { film } = action.payload;
      const newFilms = getFilms(state.data, film);
      return {
        ...state,
        data: newFilms,
      };
    }
    case ActionTypes.SEARCH_FILMS_DATA: {
      const { search } = action.payload;
      return {
        ...state,
        searchTerms: search,
      };
    }
    case ActionTypes.CLEAR_FILMS_DATA: {
      return {
        ...state,
        searchTerms: {},
      };
    }
    default:
      return state;
  }
}
