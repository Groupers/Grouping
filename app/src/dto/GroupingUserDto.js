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

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
