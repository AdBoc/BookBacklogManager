export const initialBookState = {
  title: "",
  author: "",
  year: "",
  pages: "",
  type: "",
  status: "",
  dateCreated: "",
};

export const sortSelect = [
  { value: "Title", label: "Title" },
  { value: "Author", label: "Author" },
  { value: "Pages", label: "Pages" },
  { value: "Year", label: "Year" },
  { value: "New", label: "New" },
];

export const statusSelect = [
  { value: "All", label: "All" },
  { value: "On Backlog", label: "On Backlog" },
  { value: "Currently Reading", label: "Currently Reading" },
  { value: "Suspended", label: "Suspended" },
  { value: "History", label: "History" },
];

export const typeSelect = [
  { value: "All", label: "All" },
  { value: "NonFiction", label: "NonFiction" },
  { value: "Fiction", label: "Fiction" },
  { value: "Science", label: "Science" },
];
