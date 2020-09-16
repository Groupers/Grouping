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

  representGroupingUserId;

  representGroupImage;

  hashtagList = [];

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
