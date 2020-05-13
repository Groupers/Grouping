import { SERVER_URL } from '../constant/HttpProperty';
import axios from 'axios';
import CommonResponse from '../dto/CommonResponse';
import CheckEmailResponseDto from '../dto/CheckEmailResponseDto';
import CheckPhoneNumberResponseDto from '../dto/CheckPhoneNumberResponseDto';
import CheckUserIdResponseDto from '../dto/CheckUserIdResponseDto';
import GroupingUserDto from '../dto/GroupingUserDto';

const TARGET_URL = SERVER_URL + '/sign';

export default class SignRepository {
  async checkEmail(email) {
    const response = await axios.get(TARGET_URL + '/email?email=' + email);
    const commonResponse = new CommonResponse(response.data);
    return new CheckEmailResponseDto(commonResponse.data);
  }

  async enrollEmail(email) {
    const response = await axios.post(TARGET_URL + '/email', { email });
    const commonResponse = new CommonResponse(response.data);
    return new GroupingUserDto(commonResponse.data);
  }

  async checkPhoneNumber(phoneNumber) {
    const response = await axios.get(
      TARGET_URL + '/phone-number?phone-number=' + phoneNumber
    );
    const commonResponse = new CommonResponse(response.data);
    return new CheckPhoneNumberResponseDto(commonResponse.data);
  }

  async enrollPhoneNumber(phoneNumber) {}

  async checkUserId(userId) {
    const response = await axios.get(TARGET_URL + '/user-id?user-id=' + userId);
    const commonResponse = new CommonResponse(response.data);
    return new CheckUserIdResponseDto(commonResponse.data);
  }

  async enrollUserId(userId) {}
}
