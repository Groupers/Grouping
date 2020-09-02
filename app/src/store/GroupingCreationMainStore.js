import { action, computed, observable } from 'mobx';
import { GROUPING_CREATION_VIEW_STATUS } from '../constant/GroupingCreationViewStatus';
import GroupingCreationDto from '../dto/GroupingCreationDto';
import KeywordParser from '../component/KeywordParser';
import MapRepository from '../repository/MapRepository';
import KoreanChecker from '../component/KoreanChecker';
import AgeValidator, { MAX_AVAILABLE_AGE, MIN_AVAILABLE_AGE } from '../component/AgeValidator';
import { INPUT_EMAIL_STATUS } from '../constant/InputEmailStatus';
import { ResponseCode } from '../constant/ResponseCode';
import { INPUT_PASSWORD_STATUS } from '../constant/InputPasswordStatus';
import { INPUT_STATUS } from '../constant/InputStatus';
import { INPUT_PHONE_STATUS } from '../constant/InputPhoneStatus';
import GroupCreationRepository from '../repository/GroupCreationRepository';
import UserStore from './UserStore';
import GroupingStore from './GroupingStore';

const MIN_DESCRIPTION_LENGTH = 10;
const MIN_TITLE_LENGTH = 2;

export default class GroupingCreationMainStore {
  groupCreationRepository = new GroupCreationRepository();

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

  @observable groupingBackgroundImageURI = require('../assets/default_group_image.jpg');

  constructor(groupingStore: GroupingStore) {
    this.groupingStore = groupingStore;
  }

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
    this.groupingCreationDto.title = title;
  };

  @action groupingKeywordChanged = (keyword) => {
    this.groupingKeyword = keyword;
    this.groupingCreationDto.keyword = keyword;
  };

  @action groupingDescriptionChanged = (description) => {
    this.groupingDescriptionCompleted = true;
    this.groupingDescription = description;
    this.groupingCreationDto.description = description;
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
    this.groupingCreationDto.address = address;
  };

  @action groupingGenderSelected = (gender) => {
    this.groupingGender = gender;
    this.groupingCreationDto.gender = gender;
    console.log(this.groupingGender);
  };

  @action groupingAvailableMinAgeChanged = (minAge) => {
    this.groupingAvailableMinAge = minAge;
    this.groupingCreationDto.minAge = minAge;
    console.log('change min age');
    console.log(this.groupingAvailableMinAge);
  };

  @action groupingAvailableMaxAgeChanged = (maxAge) => {
    this.groupingAvailableMaxAge = maxAge;
    this.groupingCreationDto.maxAge = maxAge;
    console.log('change max age');
    console.log(this.groupingAvailableMaxAge);
  };

  @action groupingBackgroundImageChanged = ({ uri }) => {
    this.groupingBackgroundImageURI = { uri };
    console.log('background image changed');
    console.log(this.groupingBackgroundImageURI);
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

  @action groupCreation = async () => {
    console.log('in');
    const groupingCreationDto = await this.groupCreationRepository.completeGroupCreation(
      this.groupingCreationDto,
      () => {}
    );
    console.log('out');

    if (groupingCreationDto !== undefined) {
      this.groupingStore.groupCreationCompleted(this.groupingCreationDto);
      console.log('group creation completed');
    }
  };

  @computed get isPreviewButtonActivated() {
    console.log(this.groupingDescriptionCompleted);
    console.log(this.groupingAddressCompleted);
    return this.groupingDescriptionCompleted && this.groupingAddressCompleted;
  }

  @computed get getBackgroundImageURI() {
    return this.groupingBackgroundImageURI;
  }

  @action initialize() {
    this.groupingTitle = '';
    this.groupingKeyword = '';
    this.groupingDescription = '';
    this.groupingAddressSearchKeyword = '';
    this.groupingAddressSearchResult = [];
    this.groupingAddress = '';
    this.groupingGender = 'both';
    this.groupingPreviewNextButtonActivated = false;
    this.groupingDescriptionCompleted = false;
    this.groupingAddressCompleted = false;
  }
}
