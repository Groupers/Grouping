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

  hashtagList = [];

  representGroupImage;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
