export default class AuthDto {
  accessToken;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
