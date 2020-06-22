import {action, computed, observable} from 'mobx';
import {GROUPING_CREATION_VIEW_STATUS} from '../constant/GroupingCreationViewStatus';
import GroupingCreationDto from '../dto/GroupingCreationDto';
import KeywordParser from '../component/KeywordParser';
import MapRepository from '../repository/MapRepository';
import KoreanChecker from '../component/KoreanChecker';
import AgeValidator, {
	MAX_AVAILABLE_AGE,
	MIN_AVAILABLE_AGE,
} from '../component/AgeValidator';

const MIN_DESCRIPTION_LENGTH = 10;
const MIN_TITLE_LENGTH = 2;

export default class GroupingCreationMainStore {
	keywordParser = new KeywordParser();
	mapRepository = new MapRepository();
	koreanChecker = new KoreanChecker();
	ageValidator = new AgeValidator();

	@observable groupingCreationViewStatus =
		GROUPING_CREATION_VIEW_STATUS.MAIN_INFO;
	@observable groupingCreationDto = new GroupingCreationDto();
	@observable groupingTitle = '';
	@observable groupingKeyword = '';
	@observable groupingDescription = '';
	@observable groupingAddressSearchKeyword = '';
	@observable groupingAddressSearchResult = [];
	@observable groupingAddress = '';
	@observable groupingGender = '';
	@observable groupingAvailableMinAge = Number(MIN_AVAILABLE_AGE);
	@observable groupingAvailableMaxAge = Number(MAX_AVAILABLE_AGE);

	@action groupingTitleChanged = title => {
		this.groupingTitle = title;
	};

	@action groupingKeywordChanged = keyword => {
		this.groupingKeyword = keyword;
	};

	@action groupingDescriptionChanged = description => {
		this.groupingDescription = description;
	};

	@action groupingAddressSearchKeywordChanged = async keyword => {
		this.groupingAddressSearchKeyword = keyword;

		if (!this.koreanChecker.checkKoreanOrNot(keyword)) {
			return;
		}
		let result = await this.mapRepository.findAddressByKeyword(
			keyword,
			() => {
			},
		);

		if (!result.isSucceed()) {
			return;
		}

		this.groupingAddressSearchResult = result.getAddressList();
	};

	@action groupingAddressSelected = address => {
		this.groupingAddress = address;
	};

	@action groupingGenderSelected = gender => {
		this.groupingGender = gender;
	};

	@action groupingAvailableMinAgeChanged = minAge => {
		this.groupingAvailableMinAge = minAge;
	};

	@action groupingAvailableMaxAgeChanged = maxAge => {
		this.groupingAvailableMaxAge = maxAge;
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

		if (
			this.groupingCreationViewStatus === groupingCreationView &&
			this.groupingCreationViewStatus ===
			GROUPING_CREATION_VIEW_STATUS.EXTRA_INFO &&
			this.ageValidator.validateAge(
				Number(this.groupingAvailableMinAge),
				Number(this.groupingAvailableMaxAge),
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
}
