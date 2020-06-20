import { action, computed, observable } from 'mobx';
import { GROUPING_CREATION_VIEW_STATUS } from '../constant/GroupingCreationViewStatus';
import GroupingCreationDto from '../dto/GroupingCreationDto';
import KeywordParser from '../component/KeywordParser';

const MIN_DESCRIPTION_LENGTH = 10;
const MIN_TITLE_LENGTH = 2;

export default class GroupingCreationMainStore {
  @observable groupingCreationViewStatus =
    GROUPING_CREATION_VIEW_STATUS.MAIN_INFO;
  @observable groupingCreationDto = new GroupingCreationDto();
  @observable groupingTitle = '';
  @observable groupingKeyword = '';
  @observable groupingDescription = '';

  keywordParser = new KeywordParser();

  @action groupingTitleChanged = title => {
    this.groupingTitle = title;
  };

  @action groupingKeywordChanged = keyword => {
    this.groupingKeyword = keyword;
  };

  @action groupingDescriptionChanged = description => {
    this.groupingDescription = description;
  };

  @action isHeaderRightIconActivated = groupingCreationView => {
    if (
      this.groupingCreationViewStatus === groupingCreationView &&
      this.groupingCreationViewStatus ===
        GROUPING_CREATION_VIEW_STATUS.MAIN_INFO &&
      this.groupingTitle.length > MIN_TITLE_LENGTH &&
      this.keywordParser.parseKeyword(this.groupingKeyword)
    ) {
      return true;
    }

    if (
      this.groupingCreationViewStatus === groupingCreationView &&
      this.groupingCreationViewStatus ===
        GROUPING_CREATION_VIEW_STATUS.DESCRIPTION &&
      this.groupingDescription.length > MIN_DESCRIPTION_LENGTH
    ) {
      return true;
    }

    return false;
  };

  @action groupingCreationViewChanged(groupingCreationView) {
    this.groupingCreationViewStatus = groupingCreationView;
  }
}
