import axios from 'axios';
import { SERVER_URL } from '../constant/HttpProperty';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import GroupingCreationDto from '../dto/GroupingCreationDto';

const TARGET_URL = `${SERVER_URL}/group`;

export default class GroupCreationRepository {
  async completeGroupCreation(groupingCreationDto, failedCallback) {
    const response = await axios.post(`${TARGET_URL}`, groupingCreationDto);

    const commonResponse = new CommonResponse(response.data);

    if (commonResponse.code !== ResponseCode.SUCCEED) {
      failedCallback(commonResponse.code);
      return;
    }

    return new GroupingCreationDto(commonResponse.data);
  }
}
