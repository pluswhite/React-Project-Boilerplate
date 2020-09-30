export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface MessageState {
  messages: Message[];
}

export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}
