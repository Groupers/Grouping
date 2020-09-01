import { action, computed, observable } from 'mobx';
import { GROUPING_CREATION_VIEW_STATUS } from '../constant/GroupingCreationViewStatus';
import GroupingCreationDto from '../dto/GroupingCreationDto';
import KeywordParser from '../component/KeywordParser';
import MapRepository from '../repository/MapRepository';
import KoreanChecker from '../component/KoreanChecker';
import AgeValidator, { MAX_AVAILABLE_AGE, MIN_AVAILABLE_AGE } from '../component/AgeValidator';

const MIN_DESCRIPTION_LENGTH = 10;
const MIN_TITLE_LENGTH = 2;

export default class GroupingCreationMainStore {
  keywordParser = new KeywordParser();

  mapRepository = new MapRepository();

  koreanChecker = new KoreanChecker();

  ageValidator = new AgeValidator();

  @observable groupingCreationViewStatus = GROUPING_CREATION_VIEW_STATUS.NAME;

  @observable groupingCreationDto = new GroupingCreationDto();

  @observable groupingTitle = '';

  @observable groupingKeyword = '';

  @observable groupingDescription = '';

  @observable groupingAddressSearchKeyword = '';

  @observable groupingAddressSearchResult = [];

  @observable groupingAddress = '';

  @observable groupingGender = 'both';

  @observable groupingAvailableMinAge = Number(MIN_AVAILABLE_AGE);

  @observable groupingAvailableMaxAge = Number(MAX_AVAILABLE_AGE);

  @observable groupingPreviewNextButtonActivated = false;

  @observable groupingDescriptionCompleted = false;

  @observable groupingAddressCompleted = false;

  @observable creationGroupStep = 0;

  @action groupingInitializeGender = () => {
    this.groupingGender = 'both';
    console.log(this.groupingGender);
  };

  @action groupingInitializeAge = () => {
    this.groupingAvailableMinAgeChanged(Number(MIN_AVAILABLE_AGE));
    this.groupingAvailableMaxAgeChanged(Number(MAX_AVAILABLE_AGE));
    console.log(this.groupingAvailableMinAge);
    console.log(this.groupingAvailableMaxAge);
  };

  @action groupingTitleChanged = (title) => {
    this.groupingTitle = title;
  };

  @action groupingKeywordChanged = (keyword) => {
    this.groupingKeyword = keyword;
  };

  @action groupingDescriptionChanged = (description) => {
    this.groupingDescriptionCompleted = true;
    this.groupingDescription = description;
  };

  @action groupingAddressSearchKeywordChanged = async (keyword) => {
    this.groupingAddressSearchKeyword = keyword;

    if (!this.koreanChecker.checkKoreanOrNot(keyword)) {
      return;
    }
    const result = await this.mapRepository.findAddressByKeyword(keyword, () => {});

    if (!result.isSucceed()) {
      return;
    }

    this.groupingAddressSearchResult = result.getAddressList();
  };

  @action groupingAddressSelected = (address) => {
    this.groupingAddressCompleted = true;
    this.groupingAddress = address;
  };

  @action groupingGenderSelected = (gender) => {
    this.groupingGender = gender;
    console.log(this.groupingGender);
  };

  @action groupingAvailableMinAgeChanged = (minAge) => {
    this.groupingAvailableMinAge = minAge;
    console.log('change min age');
    console.log(this.groupingAvailableMinAge);
  };

  @action groupingAvailableMaxAgeChanged = (maxAge) => {
    this.groupingAvailableMaxAge = maxAge;
    console.log('change max age');
    console.log(this.groupingAvailableMaxAge);
  };

  @action isHeaderRightIconActivated = (groupingCreationView) => {
    if (
      this.groupingCreationViewStatus === groupingCreationView &&
      this.groupingCreationViewStatus === GROUPING_CREATION_VIEW_STATUS.NAME &&
      this.groupingTitle.length > MIN_TITLE_LENGTH
    ) {
      return true;
    }

    if (
      this.groupingCreationViewStatus === groupingCreationView &&
      this.groupingCreationViewStatus === GROUPING_CREATION_VIEW_STATUS.INTERESTS &&
      this.keywordParser.parseKeyword(this.groupingKeyword)
    ) {
      return true;
    }

    if (
      this.groupingCreationViewStatus === groupingCreationView &&
      this.groupingCreationViewStatus === GROUPING_CREATION_VIEW_STATUS.DESCRIPTION &&
      this.groupingDescription.length > MIN_DESCRIPTION_LENGTH
    ) {
      return true;
    }

    if (
      this.groupingCreationViewStatus === groupingCreationView &&
      this.groupingCreationViewStatus === GROUPING_CREATION_VIEW_STATUS.EXTRA_INFO &&
      this.ageValidator.validateAge(
        Number(this.groupingAvailableMinAge),
        Number(this.groupingAvailableMaxAge)
      ) &&
      this.groupingGender !== '' &&
      this.groupingAddress !== ''
    ) {
      return true;
    }

    return false;
  };

  @action groupingCreationViewChanged(groupingCreationView) {
    this.groupingCreationViewStatus = groupingCreationView;
  }

  @computed get isPreviewButtonActivated() {
    console.log(this.groupingDescriptionCompleted);
    console.log(this.groupingAddressCompleted);
    return this.groupingDescriptionCompleted && this.groupingAddressCompleted;
  }

  @action nextStep() {
    this.creationGroupStep += 1;
  }

  @action lastStep() {
    this.creationGroupStep -= 1;
  }
}
