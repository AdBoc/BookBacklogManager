import { UserInitialState } from "../../redux/User/interfaces";
import { BookStateObject } from "../../redux/Books/interfaces";

export interface SideProps {
  handleMenu(e: React.SyntheticEvent): void;
}

interface BookListsFilterObject {
  value: string;
  label: string;
}

export interface BookListFilters extends Array<BookListsFilterObject> {}

export interface SortingOptions {
  sort: string;
  status: string;
  type: string;
}

export interface FormState {
  formValues: {
    email: string;
    password: string;
    [index: string]: string;
  };
  formErrors: {
    email: string;
    password: string;
    [index: string]: string;
  };
  formValidity: {
    email: boolean;
    password: boolean;
    [index: string]: boolean;
  };
}

export interface StoreType {
  books: {
    isFetching: boolean;
    items: BookStateObject[];
  };
  user: UserInitialState;
}

export interface NewBookData {
  title: string;
  author: string;
  year: string;
  pages: string;
  type: string; //"All" | "Nonfiction" | "Fiction" | "Science" | "";
  status: string; //"All" | "OnBacklog" | "CurrentlyReading" | "Suspended" | "History" | "";
  dateCreated: string;
}
