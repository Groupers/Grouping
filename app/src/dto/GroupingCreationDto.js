export default class GroupingCreationDto {
  title;

  isHidden;

  minUserAge;

  maxUserAge;

  availableGender;

  description;

  pointX;

  pointY;

  pointDescription;

  representGroupingUserID;

  representGroupImage;

  hashtagList;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
