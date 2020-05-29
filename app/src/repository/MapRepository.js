import axios from 'axios';
import CommonResponse from '../dto/CommonResponse';
import { ResponseCode } from '../constant/ResponseCode';
import CheckEmailResponseDto from '../dto/CheckEmailResponseDto';
import AddressApiDto from '../dto/AddressApiDto';

const REST_API_AUTH_KEY = "44f3537b6664a875c802400ffc4680eb";
const HEADER_AUTHORIZATION = "KakaoAK " + REST_API_AUTH_KEY;
const BASE_URL = "https://dapi.kakao.com/v2/local";

export default class MapRepository {
  async findAddress(address, failedCallback) {
    const response = await axios.get(BASE_URL + "/search/address.json", {
      params: { address },
    });

    let addressApiDto = new AddressApiDto();
    try {
      addressApiDto = new AddressApiDto(response.data);
    } catch {
      failedCallback();
      return;
    }

    return addressApiDto;
  }
}
