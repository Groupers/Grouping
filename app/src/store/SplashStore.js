import {observable, action} from 'mobx';
import UserRepository from '../repository/UserRepository';
import {USER_STATUS} from '../constant/UserStatus';

export default class SplashStore {
  userRepository = new UserRepository();

  @observable userStatus = USER_STATUS.READY;

  @action ready = async () => {
    await this.userRepository.initialize();
    this.userStatus = USER_STATUS.GUEST;
  };

  @action signInCompleted = async () => {
    this.userStatus = USER_STATUS.USER;
  };

  @action signUpCompleted = async () => {
    this.userStatus = USER_STATUS.USER;
  };

  @action finish = () => {
    this.userStatus = USER_STATUS.READY;
  };
}
