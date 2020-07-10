export class Paging<T>{
  index: number;
  size: number;
  totalPages: number;
  totalCount: number;
  items: T[];
}
