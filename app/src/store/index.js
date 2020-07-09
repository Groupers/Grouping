import UserStore from './UserStore';
import SignProcessStore from './SignProcessStore';
import SignUpEmailStore from './SignUpEmailStore';
import SignUpPasswordStore from './SignUpPasswordStore';
import SignUpPhoneStore from './SignUpPhoneStore';
import SignUpBasicInfoStore from './SignUpBasicInfoStore';
import SignInStore from './SignInStore';
import SignUpTermsAgreementStore from './SignUpTermsAgreementStore';
import GroupingStore from './GroupingStore';
import MainStore from './MainStore';
import GroupingCreationMainStore from './GroupingCreationMainStore';
import ChatStore from './ChatStore';
import ChatRoomStore from './ChatRoomStore';
import FriendListStore from "./FriendListStore";

const userStore = new UserStore();
const signInStore = new SignInStore(userStore);
const signProcessStore = new SignProcessStore(userStore);
const signUpEmailStore = new SignUpEmailStore(signProcessStore);
const signUpPasswordStore = new SignUpPasswordStore(signProcessStore);
const signUpPhoneStore = new SignUpPhoneStore(signProcessStore);
const signUpBasicInfoStore = new SignUpBasicInfoStore(signProcessStore);
const signUpTermsAgreementStore = new SignUpTermsAgreementStore(signProcessStore);
const mainStore = new MainStore();
const groupingStore = new GroupingStore(mainStore);
const groupingCreationMainStore = new GroupingCreationMainStore();
const chatRoomStore = new ChatRoomStore();
const chatStore = new ChatStore(mainStore);
const friendListStore = new FriendListStore()

export default {
  userStore,
  signUpTermsAgreementStore,
  signProcessStore,
  signUpEmailStore,
  signUpPasswordStore,
  signUpPhoneStore,
  signUpBasicInfoStore,
  signInStore,
  mainStore,
  groupingStore,
  groupingCreationMainStore,
  chatRoomStore,
  chatStore,
  friendListStore,
};
