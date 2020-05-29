import { GROUPING_VIEW_STATUS } from '../constant/GroupingViewStatus';
import { action, observable } from 'mobx';

export default class GroupingStore {
  @observable groupingViewStatus = GROUPING_VIEW_STATUS.NONE;

  @action changeView(groupingViewStatus) {
    this.groupingViewStatus = groupingViewStatus;
  }
}
