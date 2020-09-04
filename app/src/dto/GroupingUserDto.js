export default class GroupingUserDto {
  groupingUserId;

  userStatus;

  email;

  nationCode;

  phoneNumber;

  name;

  userId;

  gender;

  birthday;

  representProfileImage;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
