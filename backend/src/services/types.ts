export type Tag = {
  title: string
}

export type Post = {
  title: string
  html: string
  createdAt: Date
  updatedAt: Date
  excerpt: string
  image: string
  authors: string[]
  tags: string[]
}

export type PaginatedData<DataType> = {
  dataArray: DataType[]
  page: number
  itemsPerPage: number
  pageCount: number
  total: number
}