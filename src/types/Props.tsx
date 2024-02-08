import { WebSocketHook } from "react-use-websocket/dist/lib/types"
import { Message } from "./Message"
import { User } from "./User"

export type RoomFooterProps = {
  ws: WebSocketHook,
  user: User | undefined,
}

export type MessageListProps = {
  messages: Message[]
  user: User | undefined
}
