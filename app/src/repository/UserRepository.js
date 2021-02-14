import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { USER_URL } from '../constant/HttpProperty';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import GroupingUserDto from '../dto/GroupingUserDto';
import getRealm from '../table/realm';
const TARGET_URL = `${USER_URL}`;

export default class UserRepository {

  async setAccessToken(accessToken) {
    const realm = await getRealm();
    console.log("realm  path : "+ realm.path);

    realm.write(()=>{
        realm.create('User',  {accessToken: accessToken}, 'modified')
    });
  }

    async getUser() {
        const realm = await getRealm();
        console.log("realm  path : "+ realm.path);
      let data =   realm.objects('User');
      console.log("realm result : " + data);
      return data;
      }


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

  async getUserDto(email, phoneNumber, failedCallback) {
    const phoneNumberWithNationCode = phoneNumber.replace('010', '+8210');
    const response = await axios.get(`${TARGET_URL}`, {
      params: { email, phoneNumber: phoneNumberWithNationCode },
    });
    const commonResponse = new CommonResponse(response.data);
    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
      return;
    }
    console.log('get response data : ');
    console.log(commonResponse.data);
    return new GroupingUserDto(commonResponse.data);
  }

  async checkIsValidUser(email, phoneNumber, failedCallback) {
    console.log(email);
    console.log(phoneNumber);
    const response = await axios.get(`${TARGET_URL}`, { params: { email, phoneNumber } });
    console.log('response : ');
    console.log(response);
    console.log('response : ');
    // console.log(response.data.groupingUserId.toString());
    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
      console.log('checkIsValidUser:fail');
      return false;
    }
    console.log('checkIsValidUser:success');
    console.log(commonResponse.data.groupingUserId);
    return commonResponse.data.groupingUserId;
  }

  async resetPassword(groupingUserId, password) {
    console.log(`groupingUserId : ${groupingUserId}`);
    // console.log(`newPassword : ${resetPasswordDto.password}`);
    // console.log(resetPasswordDto.password);
    // console.log(`password${resetPasswordDto}`);
    // console.log(`password${resetPasswordDto.toString()}`);
    console.log(password);
    console.log('resetPassword is called');
    console.log(`${TARGET_URL}/${groupingUserId}/password`);
    const result = await axios.put(`${TARGET_URL}/${groupingUserId}/password`, { password }).then(
      (response) => {
        console.log('reset Success');
        console.log(response.data.code);
        return response.data.code;
      },
      (error) => {
        console.log('reset Fail');
        console.log(error);
        return error;
      }
    );
    return result;

    // const commonResponse = new CommonResponse(response.data);
    // console.log(`commonResponse${commonResponse}`);
    // if (commonResponse.code !== ResponseCode.SUCCEED) {
    //   failedCallback(commonResponse.code);r
    //   console.log('reset Fail');
    //   return false;
    // }
    // console.log('reset Success');
    // return true;
  }
}
