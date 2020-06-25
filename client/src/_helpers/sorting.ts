import { BookStateObject } from "../ts/interfaces/interfaces";

export function sortByTitle() {
  return function (a: BookStateObject, b: BookStateObject) {
    return a.title.localeCompare(b.title);
  };
}

export function sortByAuthor() {
  return function (a: BookStateObject, b: BookStateObject) {
    return a.author.localeCompare(b.author);
  };
}

export function sortByYear() {
  return function (a: BookStateObject, b: BookStateObject) {
    return +a.year - +b.year;
  };
}

export function sortByPages() {
  return function (a: BookStateObject, b: BookStateObject) {
    return +b.pages - +a.pages;
  };
}

export function sortByDate() {
  return function (a: BookStateObject, b: BookStateObject) {
    if (a.dateCreated > b.dateCreated) return -1;
    if (b.dateCreated < a.dateCreated) return 1;
    return 0;
  };
}
