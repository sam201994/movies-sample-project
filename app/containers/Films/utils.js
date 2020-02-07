const filterFilms = (films, searchTerms) => {
  if (Object.keys(searchTerms) == 0) return films;
  return films.filter(film => {
    if (
      film.title.includes(searchTerms.title) ||
      film.genre.includes(searchTerms.genre)
    )
      return true;

    return false;
  });
};

const validateNumericField = num => {
  const re = /^([1-9])(\d*)$/;
  if (re.test(num)) return true;
  return false;
};

export default {
  filterFilms,
  validateNumericField,
};
