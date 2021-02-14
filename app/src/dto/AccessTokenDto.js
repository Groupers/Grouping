export default class AccessTokenDto{
    accessToken;

    constructor(data = {}) {
      Object.assign(this, data);
    }
}