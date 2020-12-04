import axios from 'axios';
import { SERVER_URL } from '../constant/HttpProperty';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import GroupingCreationDto from '../dto/GroupingCreationDto';

const TARGET_URL = `${SERVER_URL}/group`;

const GroupCreationRepository = () => {
  const completeGroupCreation = async (groupingCreationDto) => {
    try {
      return await axios.post(`${TARGET_URL}`, groupingCreationDto);
    } catch (error) {
      console.error(error);
    }
    return null;
  };
};

export default GroupCreationRepository;
