export function sortByTitle() {
  return function (a, b) {
    return a.title.localeCompare(b.title);
  };
}

export function sortByAuthor() {
  return function (a, b) {
    return a.author.localeCompare(b.author);
  };
}

export function sortByYear() {
  return function (a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    return 0;
  };
}

export function sortByPages() {
  return function (a, b) {
    if (a.pages > b.pages) return 1;
    if (a.pages < b.pages) return -1;
    return 0;
  };
}

export function sortByDate() {
  return function (a, b) {
    return;
  };
}
