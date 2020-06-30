import { action, computed, observable } from 'mobx';
import SignProcessStore from './SignProcessStore';

export default class SignUpTermsAgreementStore {
  @observable termsAgreementValidation = true;

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action completeTermsAgreement = async () => {
    await this.signProcessStore.termsAgreementCompleted();
  };

  @computed get isValidInputData() {
    return this.termsAgreementValidation;
  }

  @computed get errorMessage() {
    return '';
  }
}
