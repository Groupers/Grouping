export default class GroupingCreationDto {
  availableGender;

  description;

  hashtagList;

  isHidden;

  maxUserAge;

  minUserAge;

  pointDescription;

  pointX;

  pointY;

  representGroupingUserId;

  title;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
