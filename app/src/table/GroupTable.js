import GroupingCreationDto from '../dto/GroupingCreationDto';

const Realm = require('realm');

export default class GroupTable {
  create = async (groupingCreationDto: GroupingCreationDto) => {
    await Realm.open({ schema: [GroupTable] }).then((realm) => {
      return realm.create('Group', {
        title: groupingCreationDto.title,
        isHidden: groupingCreationDto.isHidden,
        minAge: groupingCreationDto.minUserAge,
        maxAge: groupingCreationDto.maxUserAge,
        gender: groupingCreationDto.gender,
        pointX: groupingCreationDto.pointX,
        pointY: groupingCreationDto.pointY,
        address: groupingCreationDto.address,
        backgroundImageURI: groupingCreationDto.backgroundImageURI,
        keyword: groupingCreationDto.keyword,
        groupLeaderDto: groupingCreationDto.groupLeaderDto,
      });
    });
  };
}

GroupTable.schema = {
  name: 'Group',
  properties: {
    title: 'string',
    isHidden: 'boolean',
    minAge: 'int',
    maxAge: 'int',
    gender: 'string',
    description: 'string',
    pointX: 'long',
    pointY: 'long',
    address: 'string',
    backgroundImageURI: 'string?',
    keyword: 'keyword',
    groupLeaderDto: '',
  },
};
