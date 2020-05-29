import GroupingUserDto from '../dto/GroupingUserDto';

const Realm = require('realm');

export default class UserTable {
  create = async (groupingUserDto: GroupingUserDto) => {
    await Realm.open({ schema: [UserTable] }).then(realm => {
      return realm.create('User', {
        name: groupingUserDto.name,
        userStatus: groupingUserDto.userStatus,
        email: groupingUserDto.email,
        nationCode: groupingUserDto.nationCode,
        phoneNumber: groupingUserDto.phoneNumber,
        userId: groupingUserDto.userId,
        gender: groupingUserDto.gender,
        birthday: groupingUserDto.birthday,
        representProfileImage: groupingUserDto.representProfileImage,
      });
    });
  };

  findByEmail = async (email: String) => {
    await Realm.open({ schema: [UserTable] }).then(realm => {
      let user = realm.objects('User').filtered('email = $0', email);
      console.log(user);
    });
  };
}

UserTable.schema = {
  name: 'User',
  properties: {
    userStatus: 'string',
    email: 'string',
    nationCode: 'string',
    phoneNumber: 'string',
    name: 'string',
    userId: 'string?',
    gender: 'string',
    birthday: 'date',
    representProfileImage: 'string?'
  },
};
