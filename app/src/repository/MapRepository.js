import axios from 'axios';
import AddressApiDto from '../dto/AddressApiDto';

const REST_API_AUTH_KEY = "AIzaSyBFazbNZODxjr5aoOnTdr0ud_WKFdL0ySI";
const BASE_URL = "https://maps.googleapis.com/maps";

export default class MapRepository {
  async findAddressByKeyword(keyword, failedCallback) {
    const response = await axios.get(
      BASE_URL + '/api/place/autocomplete/json',
      {
        params: {
          input: keyword,
          types: 'geocode',
          language: 'ko',
          components:'country:kr',
          key: REST_API_AUTH_KEY,
        },
      }
    );


    let addressApiDto = new AddressApiDto();
    try {
      addressApiDto = new AddressApiDto(response.data);
    } catch {
      failedCallback();
      return;
    }

    if (!addressApiDto.isSucceed()) {
      failedCallback();
      return;
    }

    return addressApiDto;
  }
}
