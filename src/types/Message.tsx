interface Author {
  name: string
}

export interface Message {
  _id: string,
  author: Author
  authorId: string,
  roomId: string,
  message: string,
  createdAt: Date
}