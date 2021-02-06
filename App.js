import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Realm from 'realm';
import AuthTable from './app/src/table/AuthTable';
import Splash from './app/src/view/Splash';
import { USER_STATUS } from './app/src/constant/UserStatus';
import Main from './app/src/view/main/Main';
import Entrance from './app/src/view/entrance/Entrance';

const App = (props) => {
  let accessToken = null;

  const getAccessToken = () => {
    Realm.open({ schema: [AuthTable] })
      .then((realm) => {
        // return realm.objects('Auth').filtered('accessToken = $0', accessToken);
        console.log(realm.objects('Auth'));
        return realm.objects('Auth');
      })
      .catch(() => {
        console.log('can not open table');
      });
    return null;
  };

  useEffect(() => {
    const testAccessToken = (testToken: String) => {
      console.log(`input value : ${testToken}`);
      Realm.open({ schema: [AuthTable] })
        .then((realm) => {
          realm.write(() => {
            realm.create('Auth', { accessToken: testToken });
            accessToken = getAccessToken();
          });
        })
        .catch(() => {
          console.log('can not write table');
        });
    };

    testAccessToken('ship_sang_token');
  }, []);

  /* async componentDidMount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    // await this.props.userStore.ready();
    // await this.props.friendListStore.ready();
  } */

  let view;
  if (props.userStore.userStatus === USER_STATUS.READY) {
    view = <Splash />;
  } else if (props.userStore.userStatus === USER_STATUS.GUEST) {
    if (accessToken) {
      view = <Main />;
    } else {
      view = <Entrance />;
    }
  } else if (props.userStore.userStatus === USER_STATUS.USER) {
    if (accessToken) {
      view = <Main />;
    } else {
      view = <Entrance />;
    }
  }
  return <View style={styles.body}>{view}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default inject('userStore', 'friendListStore')(observer(App));
