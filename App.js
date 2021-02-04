import { StyleSheet, View } from 'react-native';
import React, { Component, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import AuthTable from './app/src/table/AuthTable';
import Splash from './app/src/view/Splash';
import { USER_STATUS } from './app/src/constant/UserStatus';
import Main from './app/src/view/main/Main';
import Entrance from './app/src/view/entrance/Entrance';

const App = () => {
  let accessToken = false;

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        accessToken = await AuthTable.objects('Auth');
      } catch (e) {
        console.log('no access token');
      }
    };
    getAccessToken().then();
  }, []);

  /* async componentDidMount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    // await this.props.userStore.ready();
    // await this.props.friendListStore.ready();
  } */

  let view;
  if (this.props.userStore.userStatus === USER_STATUS.READY) {
    view = <Splash />;
  } else if (this.props.userStore.userStatus === USER_STATUS.GUEST) {
    view = <Entrance />;
  } else if (this.props.userStore.userStatus === USER_STATUS.USER) {
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
