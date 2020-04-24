export type PostData = {
  title: string
  html: string
  createdAt: Date
  updatedAt: Date
  excerpt: string
  image: string
  authors: string[]
  tags: string[]
}

export type TagData = {
  title: string
}