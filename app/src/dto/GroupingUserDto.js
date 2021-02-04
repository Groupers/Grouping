export default class GroupingUserDto {
  birthday;

  email;

  gender;

  groupingUserId;

  name;

  nationCode;

  phoneNumber;

  representProfileImage;

  userId;

  userStatus;

  accessToken;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
