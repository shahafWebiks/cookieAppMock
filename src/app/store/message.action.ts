import {Action} from '@ngrx/store';

export const ADD_MESSAGE = '[Messages] ADD';
export const CLEAN_MESSAGES = '[Messages] CLEAN';

export class AddMessage implements Action {
  readonly type = ADD_MESSAGE;

  constructor(public payload: string) {
  }
}

export class CleanMessages implements Action {
  readonly type = CLEAN_MESSAGES;
}

export type GetAll = AddMessage | CleanMessages;
