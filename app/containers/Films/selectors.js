/*
 *
 * Films Selectors
 *
 */

import { createSelector } from 'reselect';
import Utils from './utils'

/*
 * Domain selectors
 */

const selectFilmsState = state => state.films;

// selectors

const selectFilmsData = createSelector(
  selectFilmsState,
  films => Utils.filterFilms(films.data, films.searchTerms),
);

export default {
  selectFilmsData,
};
