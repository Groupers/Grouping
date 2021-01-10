import { observable, action, computed } from 'mobx';
import UserRepository from '../repository/UserRepository';
import { USER_STATUS } from '../constant/UserStatus';
import GroupingUserDto from '../dto/GroupingUserDto';
import UserTable from '../table/UserTable';

export default class UserStore {
  userRepository = new UserRepository();

  userTable = new UserTable();

  groupingUser: GroupingUserDto;

  @observable userStatus = USER_STATUS.GUEST;

  @action ready = async () => {
    await this.userTable.findByEmail(this.groupingUser.email);
    await this.userRepository.initialize();
    // this.userStatus = USER_STATUS.GUEST;
  };

  @action signInCompleted = (groupingUserDto: GroupingUserDto) => {
    // this.groupingUser = groupingUserDto;
    console.log(`email : ${groupingUserDto.email}`);
    console.log(`phone number : ${groupingUserDto.phoneNumber}`);
    this.groupingUser = this.userRepository.getUserDto(
      groupingUserDto.email,
      groupingUserDto.phoneNumber
    );
    console.log(`userId : ${this.groupingUser.userId}`);
    console.log(`groupingUserId : ${this.groupingUser.groupingUserId}`);
    console.log(`name : ${this.groupingUser.name}`);
    console.log(`email : ${this.groupingUser.email}`);
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
    return this.userStatus === USER_STATUS.USER && this.groupingUser !== null;
  }

  @computed get getUserId() {
    return this.groupingUser.userId;
  }
}
