import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MessageListState, MessageState} from '../store/message.state';
import {Store} from '@ngrx/store';
import * as MessageAction from '../store/message.action';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private store: Store<MessageListState>) {
  }

  MessageListState$: Observable<MessageState[]>;

  ngOnInit() {
    this.MessageListState$ = this.store.select(state => state.messages);
  }

  MessageClear() {
    this.store.dispatch(new MessageAction.CleanMessages());
  }
}
