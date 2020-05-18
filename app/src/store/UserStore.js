import { observable, action, computed } from 'mobx';
import UserRepository from '../repository/UserRepository';
import { USER_STATUS } from '../constant/UserStatus';
import GroupingUserDto from '../dto/GroupingUserDto';

export default class UserStore {
  userRepository = new UserRepository();
  groupingUser = null;
  @observable userStatus = USER_STATUS.READY;

  @action ready = async () => {
    console.log("ready!");
    await this.userRepository.initialize();
    this.userStatus = USER_STATUS.GUEST;
  };

  @action signInCompleted = (groupingUserDto: GroupingUserDto) => {
    this.groupingUser = groupingUserDto;
    this.userStatus = USER_STATUS.USER;
  };

  @action signUpCompleted = (groupingUserDto: GroupingUserDto) => {
    this.groupingUser = groupingUserDto;
    this.userStatus = USER_STATUS.USER;
  };

  @action finish = () => {
    this.userStatus = USER_STATUS.READY;
  };

  @computed get isGroupingUser() {
    console.log("----------");
    console.log(this.userStatus);
    console.log(this.groupingUser);
    return this.userStatus === USER_STATUS.USER && this.groupingUser !== null;
  }
}
