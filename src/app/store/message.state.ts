import MessageModel from '../models/message.model';

export interface MessageState extends MessageModel {
  message: string;
}

export interface MessageListState {
  messages: MessageState[];
}

