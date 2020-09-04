import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { SERVER_URL } from '../constant/HttpProperty';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import GroupingUserDto from '../dto/GroupingUserDto';

const TARGET_URL = `${SERVER_URL}/users`;

export default class UserRepository {
  initialize = async () => {
    axios
      .post(`${TARGET_URL}/auth`, {})
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  };

  async checkIsValidUser(email, phoneNumber, failedCallback) {
    console.log(email)
    console.log(phoneNumber)
    const response = await axios.get(`${TARGET_URL}`, { params: { email, phoneNumber } });
    console.log('response : ');
    console.log(response);
    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
      console.log('checkIsValidUser:fail');
      return false;
    }
    console.log('checkIsValidUser:success');
    console.log(commonResponse.userId.toString());
    return new GroupingUserDto(commonResponse.data);
  }

  async resetPassword(groupingUserId, newPassword, failedCallback) {

    const response = await axios.put(`${TARGET_URL}/${groupingUserId}/password`, {
      params: { groupingUserId, newPassword },
    });
    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
      return false;
    }
    return true;
  }
}
