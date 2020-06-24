import {GROUPING_VIEW_STATUS} from '../constant/GroupingViewStatus';
import {action, computed, observable} from 'mobx';
import MainStore from './MainStore';

export default class GroupingStore {
    @observable groupingViewStatus = GROUPING_VIEW_STATUS.NONE;

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
