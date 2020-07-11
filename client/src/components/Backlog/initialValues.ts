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
  { value: "new", label: "New" },
  { value: "title", label: "Title" },
  { value: "author", label: "Author" },
  { value: "pages", label: "Pages" },
  { value: "year", label: "Year" },
];

export const statusSelect: BookListFilters = [
  { value: "All", label: "All" },
  { value: "OnBacklog", label: "On Backlog" },
  { value: "CurrentlyReading", label: "Currently Reading" },
  { value: "Suspended", label: "Suspended" },
  { value: "History", label: "History" },
];

export const typeSelect: BookListFilters = [
  { value: "All", label: "All" },
  { value: "Nonfiction", label: "Nonfiction" },
  { value: "Fiction", label: "Fiction" },
  { value: "Science", label: "Science" },
];
