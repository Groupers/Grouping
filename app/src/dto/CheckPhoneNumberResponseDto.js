export default class CheckPhoneNumberResponseDto {
  phoneNumberAvailable;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
