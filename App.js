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

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        await Realm.open({ schema: [AuthTable] }).then((realm) => {
          return realm.objects(accessToken);
        });
      } catch (e) {
        console.log('no access token');
      }
      return null;
    };

    const testAccessToken = async () => {
      await Realm.open({ schema: [AuthTable] }).then((realm) => {
        realm.write(() => {
          realm.create('Auth', { accessToken: 'new_sang_token' });
        });
      });

      accessToken = getAccessToken();
    };

    testAccessToken().then();
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
      console.log(`accessToken : ${accessToken}`);
      view = <Main />;
    } else {
      console.log(`accessToken : ${accessToken}`);
      view = <Entrance />;
    }
  } else if (props.userStore.userStatus === USER_STATUS.USER) {
    if (accessToken) {
      console.log(`accessToken : ${accessToken}`);
      view = <Main />;
    } else {
      console.log(`accessToken : ${accessToken}`);
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
