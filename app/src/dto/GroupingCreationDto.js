export default class GroupingCreationDto {
  title ='';
  keyword: [];

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
