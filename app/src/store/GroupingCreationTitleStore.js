import { action, computed, observable } from 'mobx';
import GroupingCreationMainStore from './GroupingCreationMainStore';

export default class GroupingCreationTitleStore {
  constructor(groupingCreationMainStore: GroupingCreationMainStore) {
    this.groupingCreationMainStore = groupingCreationMainStore;
  }
  @observable groupName = '';

  @action groupNameChanged = groupName => {
    this.groupName = groupName;
  };
}
