import { BookListFilters } from "../../ts/interfaces/interfaces";

export const initialBookState = {
  title: "",
  author: "",
  year: "",
  pages: "",
  type: "",
  status: "",
  dateCreated: "",
};

export const sortSelect: BookListFilters = [
  { value: "title", label: "Title" },
  { value: "author", label: "Author" },
  { value: "pages", label: "Pages" },
  { value: "year", label: "Year" },
  { value: "new", label: "New" },
];

export const statusSelect: BookListFilters = [
  { value: "All", label: "All" },
  { value: "On Backlog", label: "On Backlog" },
  { value: "Currently Reading", label: "Currently Reading" },
  { value: "Suspended", label: "Suspended" },
  { value: "History", label: "History" },
];

export const typeSelect: BookListFilters = [
  { value: "All", label: "All" },
  { value: "NonFiction", label: "NonFiction" },
  { value: "Fiction", label: "Fiction" },
  { value: "Science", label: "Science" },
];
