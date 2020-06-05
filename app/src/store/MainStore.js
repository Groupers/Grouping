import { action, computed, observable } from 'mobx';

export default class MainStore {
  @observable shouldTabBarVisible = true;

  @action changeTabBarVisible(shouldTabBarVisible: boolean) {
    this.shouldTabBarVisible = shouldTabBarVisible;
  }
}
