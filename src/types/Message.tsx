export interface Message {
  _id: string,
  authorId: string,
  roomId: string,
  message: string,
  created_at: Date
}