import Realm from 'realm';

import UserTable from './UserTable';

export default function getRealm() {
  return Realm.open({
    schema: [UserTable],
    schemaVersion: 6,
  });
}
