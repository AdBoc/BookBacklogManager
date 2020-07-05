export interface SideProps {
  handleMenu(e: React.SyntheticEvent): void;
}

export interface BookStateObject {
  id: string;
  title: string;
  author: string;
  year: string;
  pages: string;
  type: string;
  status: string;
  dateCreated: string;
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

