import Realm from 'realm';
import AuthDto from '../dto/AuthDto';

export default class AuthTable {
  create = async (authDto: AuthDto) => {
    await Realm.open({ schema: [AuthTable] }).then((realm) => {
      return realm.create('User', {
        name: authDto.name,
      });
    });
  };
}

AuthTable.schema = {
  name: 'auth',
  properties: {
    accessToken: 'string',
  },
};
