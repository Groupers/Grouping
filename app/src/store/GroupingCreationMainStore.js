import { action, computed, observable } from 'mobx';
import { GROUPING_CREATION_VIEW_STATUS } from '../constant/GroupingCreationViewStatus';
import GroupingCreationDto from '../dto/GroupingCreationDto';

export default class GroupingCreationMainStore {
  @observable groupingCreationViewStatus = GROUPING_CREATION_VIEW_STATUS.TITLE;
  groupingCreationDto = new GroupingCreationDto();

  @computed get isHeaderRightIconActivated() {
  	console.log(String(this.groupingCreationDto.title));
    if (
      this.groupingCreationViewStatus === GROUPING_CREATION_VIEW_STATUS.TITLE &&
      this.groupingCreationDto.title !==''
    ) {
      return true;
    }

    return false;
  }
}
