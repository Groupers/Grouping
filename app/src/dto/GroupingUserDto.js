export default class GroupingUserDto {
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
