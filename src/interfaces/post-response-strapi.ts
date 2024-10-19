export interface PostResponseStrapi {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  description: string;
  category: Category;
  cover: Cover;
  gallery: Cover[];
}

export interface Category {
  id: number;
  documentId: string;
  title: string;
}

export interface Cover {
  id: number;
  documentId: string;
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
