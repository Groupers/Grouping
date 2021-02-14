import { action, computed, observable } from 'mobx';
import { GROUPING_VIEW_STATUS } from '../constant/GroupingViewStatus';
import MainStore from './MainStore';
import GroupingCreationDto from '../dto/GroupingCreationDto';
import GroupTable from '../table/GroupTable';
import GroupRepository from '../repository/GroupRepository';

export default class GroupingStore {
  @observable groupingViewStatus = GROUPING_VIEW_STATUS.NONE;

  groupRepository = new GroupRepository();

  groupTable = new GroupTable();

  groupingCreation =  new GroupingCreationDto();

  constructor(mainStore: MainStore) {
    this.mainStore = mainStore;
  }

  @action changeView(groupingViewStatus) {
    this.groupingViewStatus = groupingViewStatus;

    if (this.groupingViewStatus === GROUPING_VIEW_STATUS.GROUPING_CREATION) {
      this.mainStore.changeTabBarVisible(false);
      return;
    }
    this.mainStore.changeTabBarVisible(true);
  }

  @action groupCreationCompleted = (groupingCreationDto: GroupingCreationDto) => {
    this.groupingCreation = groupingCreationDto;
  };

  @computed get isKeywordSearchActivated() {
    if (this.groupingViewStatus === GROUPING_VIEW_STATUS.KEYWORD_SEARCH) {
      return true;
    }
    return false;
  }

  @computed get isAddressSearchActivated() {
    if (this.groupingViewStatus === GROUPING_VIEW_STATUS.ADDRESS_SEARCH) {
      return true;
    }
    return false;
  }
}
