export interface SideProps {
  handleMenu(e: React.SyntheticEvent): void;
}

export interface BookStateObject {
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
