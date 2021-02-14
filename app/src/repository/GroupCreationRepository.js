import axios from 'axios';
import { GROUP_URL } from '../constant/HttpProperty';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import GroupingCreationDto from '../dto/GroupingCreationDto';

const TARGET_URL = `${GROUP_URL}`;

export default class GroupCreationRepository {
  async completeGroupCreation(groupingCreationDto, failedCallback) {
    const response = await axios
      .post(`${TARGET_URL}`, groupingCreationDto)
      .then(() => {
        console.log('group creation complete');
        console.log(response);
      })
      .catch(() => {
        console.log('group creation error');
      });
    const commonResponse = new CommonResponse(response.data);
    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
    }
    return new GroupingCreationDto(commonResponse.data);
  }

  async completeGroupRepresentImgUpload(groupingUserId, uri, fileName, fileType, failedCallback) {
    const imageFile = new FormData();
    imageFile.append('imageFile', {
      name: fileName,
      type: fileType,
      uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
    });
    const response = await axios
      .post(`${TARGET_URL}/image`, groupingUserId, imageFile, {
        headers: { 'Content-Type': 'multipart/form-data',}
      })
      .then(() => {
        console.log('group represent img upload complete');
      })
      .catch(() => {
        console.log('group represent img upload error');
      });
    console.log(`response${response}`);
    const commonResponse = new CommonResponse(response.data);
    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
    }
    return new GroupingCreationDto(commonResponse.data);
  }
}
