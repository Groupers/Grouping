export default class AddressApiDto {
	status: STATUS;
	predictions: [PredictionDto];

	constructor(data = {}) {
		Object.assign(this, data);
	}

	isSucceed() {
		return this.status === STATUS.OK;
	}

	getAddressList() {
		let addressList = [];
		this.predictions.forEach(value => {
			let address = '';
			if (value.terms.length !== 5) {
				return;
			}
			value.terms
				.sort((a, b) => {
					return a.offset > b.offset;
				})
				.forEach((value, index, array) => {
					address = address + value.value + ' ';
				});
			addressList.push(new AddressVo(value.place_id, address));
		});
		return addressList;
	}
}

class PredictionDto {
	place_id: String;
	terms: [TermsDto];
}

class TermsDto {
	offset: Number;
	value: String;
}

class AddressVo {
	id: String;
	address: String;

	constructor(id, address) {
		this.id = id;
		this.address = address;
	}
}

const STATUS = {
	INVALID_REQUEST: 'INVALID_REQUEST',
	OK: 'OK',
};
