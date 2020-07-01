export default class CommonResponse {
  code;

  message;

  data;

  errorInfo;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
