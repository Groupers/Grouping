export default class CheckUserIdResponseDto {
  userIdAvailable;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
