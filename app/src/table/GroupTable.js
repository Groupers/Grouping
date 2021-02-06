import Realm from 'realm';
import GroupingCreationDto from '../dto/GroupingCreationDto';

export default class GroupTable {
  create = async (groupingCreationDto: GroupingCreationDto) => {
    await Realm.open({ schema: [GroupTable] }).then((realm) => {
      return realm.create('Group', {
        title: groupingCreationDto.title,
        description: groupingCreationDto.description,
        pointDescription: groupingCreationDto.pointDescription,
        isHidden: groupingCreationDto.isHidden,
        minUserAge: groupingCreationDto.minUserAge,
        maxUserAge: groupingCreationDto.maxUserAge,
        availableGender: groupingCreationDto.availableGender,
        pointX: groupingCreationDto.pointX,
        pointY: groupingCreationDto.pointY,
        hashtagList: groupingCreationDto.hashtagList,
        representGroupingUserId: groupingCreationDto.representGroupingUserId,
      });
    });
  };
}

GroupTable.schema = {
  name: 'Group',
  properties: {
    availableGender: 'MALE',
    description: 'string',
    hashtagList: ['string'],
    isHidden: true,
    maxUserAge: 0,
    minUserAge: 0,
    pointDescription: 'string',
    pointX: 0,
    pointY: 0,
    representGroupingUserId: 'string',
    title: 'string',
  },
};
