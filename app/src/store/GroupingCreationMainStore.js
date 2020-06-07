import { action, computed, observable } from 'mobx';
import { GROUPING_CREATION_VIEW_STATUS } from '../constant/GroupingCreationViewStatus';
import GroupingCreationDto from '../dto/GroupingCreationDto';
import KeywordParser from '../component/KeywordParser';

export default class GroupingCreationMainStore {
  @observable groupingCreationViewStatus =
    GROUPING_CREATION_VIEW_STATUS.MAIN_INFO;
  @observable groupingCreationDto = new GroupingCreationDto();
  @observable groupingTitle = '';
  @observable groupingKeyword = '';

  keywordParser = new KeywordParser();

  @action groupingTitleChanged = title => {
    this.groupingTitle = title;
  };

  @action groupingKeywordChanged = keyword => {
    this.groupingKeyword = keyword;
  };

  @action isHeaderRightIconActivated = groupingCreationView => {
    if (
      this.groupingCreationViewStatus === groupingCreationView &&
      this.groupingCreationViewStatus ===
        GROUPING_CREATION_VIEW_STATUS.MAIN_INFO &&
      this.groupingTitle.length > 2 &&
      this.keywordParser.parseKeyword(this.groupingKeyword)
    ) {
      return true;
    }

    return false;
  };

  @action groupingCreationViewChanged(groupingCreationView) {
    this.groupingCreationViewStatus = groupingCreationView;
  }
}
