import axios from 'axios';
import AddressApiDto from '../dto/AddressApiDto';
import GeocodeApiDto from '../dto/GeocodeApiDto';

const REST_API_AUTH_KEY = 'AIzaSyBFazbNZODxjr5aoOnTdr0ud_WKFdL0ySI';
const BASE_URL = 'https://maps.googleapis.com/maps/api';

export default class MapRepository {
  async findAddressByKeyword(keyword, failedCallback) {
    const response = await axios.get(`${BASE_URL}/place/autocomplete/json`, {
      params: {
        input: keyword,
        types: 'geocode',
        language: 'ko',
        components: 'country:kr',
        key: REST_API_AUTH_KEY,
      },
    });

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

  async findGeocodeByPlaceId(placeId, failedCallback) {
    const response = await axios.get(`${BASE_URL}/geocode/json`, {
      params: {
        place_id: placeId,
        key: REST_API_AUTH_KEY,
      },
    });

    let geocodeApiDto = new GeocodeApiDto();
    try {
      geocodeApiDto = new GeocodeApiDto(response.data);
    } catch {
      failedCallback();
      return;
    }

    if (!geocodeApiDto.isSucceed()) {
      failedCallback();
      return;
    }

    return geocodeApiDto;
  }
}
