import axios from 'axios';
import { SERVER_URL } from '../constant/HttpProperty';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import GroupingCreationDto from '../dto/GroupingCreationDto';

const TARGET_URL = `${SERVER_URL}/group`;

const PostGroupCreationDto = async (groupingCreationDto) => {
  try {
    console.log('group creation complete');
    return await axios.post(`${TARGET_URL}`, groupingCreationDto);
  } catch (error) {
    console.error(error);
  }
  return null;
};

export default PostGroupCreationDto;
