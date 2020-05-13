export default class CheckEmailResponseDto {
  emailAvailable;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
