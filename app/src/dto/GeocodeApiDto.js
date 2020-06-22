export default class GeocodeApiDto {
	status: STATUS;
	results: GeometryDto;

	constructor(data = {}) {
		Object.assign(this, data);
	}

	isSucceed() {
		return this.status === STATUS.OK;
	}
}

class GeometryDto {
	geometry: LocationDto;
}

class LocationDto {
	lat: BigInt;
	lng: BigInt;
}

class GeocodeVo {
	lat: BigInt;
	lng: BigInt;

	constructor(lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}
}

const STATUS = {
	ZERO_RESULTS: 'ZERO_RESULTS',
	OVER_DAILY_LIMIT: 'OVER_DAILY_LIMIT',
	OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
	REQUEST_DENIED: 'REQUEST_DENIED',
	UNKNOWN_ERROR: 'UNKNOWN_ERROR',
	INVALID_REQUEST: 'INVALID_REQUEST',
	OK: 'OK',
};
