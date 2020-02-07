/*
 *
 * Films Selectors
 *
 */

import { createSelector } from 'reselect';

function filterFilms(films, searchTerms) {
  if (Object.keys(searchTerms) == 0) return films;
  return films.filter(film => {
    if (
      film.title.includes(searchTerms.title) ||
      film.genre.includes(searchTerms.genre)
    )
      return true;

    return false;
  });
}

/*
 * Domain selectors
 */

const selectFilmsState = state => state.films;

// selectors

const selectFilmsData = createSelector(
  selectFilmsState,
  films => filterFilms(films.data, films.searchTerms),
);

export default {
  selectFilmsData,
};
