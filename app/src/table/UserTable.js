const Realm = require('realm');

export default class UserTable {
    static schema = {
    name: 'User',
    primaryKey: 'accessToken',
      properties: {
        accessToken: 'string',
        userStatus: 'string?',
        email: 'string?',
        nationCode: 'string?',
        phoneNumber: 'string?',
        name: 'string?',
        userId: 'string?',
        gender: 'string?',
        birthday: 'date?',
        representProfileImage: 'string?',
      },
     };



//create = async (userAccessToken: String) => {
//    await Realm.open({schema: [UserTable],schemaVersion:5 }).then(async(realm) => {
//        await realm.write(async() => {
//        console.log("why? : "+ realm);
//         realm.create('User', {
//                accessToken: userAccessToken
//                });
//        });
//        realm.close();
//    });
//  };
//
//
////  create = async (userAccessToken: String) => {
//
////    await Realm.open({schema: [UserTable]}).then((realm) => {
////      return realm.create('User', {
////        accessToken: userAccessToken
////      });
////    });
////  };
//
//  findUser = async() => {
//       await Realm.open({schema: [UserTable], schemaVersion: 5}).then((realm) => {
//         const user = realm.objects('User');
//         console.log(user);
//           realm.close();
//           return user;
//       });
//  }
//
//  findByEmail = async (email: String) => {
//    await Realm.open({schema: [UserTable]}).then((realm) => {
//      const user = realm.objects('User').filtered('email = $0', email);
//      console.log(user);
//    });
//  };
};
