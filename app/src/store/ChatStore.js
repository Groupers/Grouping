import { action, computed, observable } from 'mobx';
import { CHAT_VIEW_STATUS } from '../constant/ChatViewStatus';
import MainStore from './MainStore';

export default class ChatStore {
  @observable chatViewStatus = CHAT_VIEW_STATUS.NONE;

  constructor(mainStore: MainStore) {
    this.mainStore = mainStore;
  }

  @action changeView(chatViewStatus) {
    this.chatViewStatus = chatViewStatus;

    if (this.chatViewStatus === CHAT_VIEW_STATUS.ENTERING_CHAT_ROOM) {
      this.mainStore.changeTabBarVisible(false);
      return;
    }
    this.mainStore.changeTabBarVisible(true);
  }

  @computed get isKeywordSearchActivated() {
    return this.chatViewStatus === CHAT_VIEW_STATUS.KEYWORD_SEARCH;
  }
}
