import axios from 'axios';
import { GROUP_URL } from '../constant/HttpProperty';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import GroupingCreationDto from '../dto/GroupingCreationDto';

const TARGET_URL = `${GROUP_URL}`;

export default class GroupCreationRepository {
  async completeGroupCreation(groupingCreationDto) {
    try {
      console.log('group creation complete');
      return await axios.post(`${TARGET_URL}`, groupingCreationDto);
    } catch (error) {
      console.error(error);
    }
    return null;
  }

  async completeGroupRepresentImg(groupId, imageFile, failedCallback) {
    const response = await axios.post(`${TARGET_URL}/image`, groupId, imageFile);
    console.log('response');
    console.log(response);
    const commonResponse = new CommonResponse(response.data);
    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
    }
    return new GroupingCreationDto(commonResponse.data);
  }
}
