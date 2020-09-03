import GroupingUserDto from './GroupingUserDto';

export default class GroupingCreationDto {
  title;

  isHidden;

  minAge;

  maxAge;

  gender;

  description;

  pointX;

  pointY;

  address;

  backgroundImageURI;

  keyword;

  groupLeaderDto = new GroupingUserDto();

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
