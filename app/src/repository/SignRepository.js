import { SERVER_URL } from '../constant/HttpProperty';
import axios from 'axios';
import CommonResponse from '../dto/CommonResponse';
import CheckEmailResponseDto from '../dto/CheckEmailResponseDto';
import CheckPhoneNumberResponseDto from '../dto/CheckPhoneNumberResponseDto';
import CheckUserIdResponseDto from '../dto/CheckUserIdResponseDto';
import GroupingUserDto from '../dto/GroupingUserDto';
import { ResponseCode } from '../constant/ResponseCode';

const TARGET_URL = SERVER_URL + '/sign';

export default class SignRepository {
  async checkEmail(email) {
    console.log(email);
    const response = await axios.get(TARGET_URL + '/email', {
      params: { email },
    });

    console.log("response");
    console.log(response);
    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      return;
    }

    return new CheckEmailResponseDto(commonResponse.data);
  }

  async enrollEmail(email) {
    const response = await axios.post(TARGET_URL + '/email', { email });
    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      return;
    }

    return new GroupingUserDto(commonResponse.data);
  }

  async checkPhoneNumber(id, phoneNumber) {
    const response = await axios.get(TARGET_URL + "/phone-number", {
      params: { 'phone-number': phoneNumber }
    });

    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      return;
    }

    return new CheckPhoneNumberResponseDto(commonResponse.data);
  }

  async enrollPhoneNumber(id, phoneNumber) {
    const response = await axios.post(TARGET_URL + "/phone-number", {
      "phoneNumber": phoneNumber,
      id: id
    });

    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      return;
    }

    return new GroupingUserDto(commonResponse.data);
  }
}
