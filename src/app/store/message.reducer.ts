import * as MessageAction from './message.action';
import {MessageListState} from './message.state';
import {tassign} from 'tassign';

export type Action = MessageAction.GetAll;
const defaultState: MessageListState = {
  messages: []
};

export function MessageReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case MessageAction.ADD_MESSAGE:
      return tassign(state, {messages: [...state.messages, action.payload]});

    case MessageAction.CLEAN_MESSAGES:
      return tassign(state, {messages: []});

    default:
      return state;
  }
}
