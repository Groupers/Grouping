import React, { Component, useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { Icon } from 'react-native-elements';
import SignUpNextButton from '../sign/components/SignUpNextButton';
import Carousel from './Carousel';
import MoreInfoButton from '../sign/components/MoreInfoButton';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const MoveNextScreen = ({ navigation }, screen) => {
  navigation.navigate(screen);
};

const EntraceMain = (props) => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Carousel flex={1} />
        <View style={styles.inner}>
          <View style={styles.termsAgreementContainer}>
            <View style={styles.rowContainer}>
              <Text>가입을 누르시면 </Text>
              <TouchableOpacity onPress={() => MoveNextScreen(props, 'SignUpTermsAgreement')}>
                <Text style={styles.linkedText}>이용약관</Text>
              </TouchableOpacity>
              <Text>과</Text>
              <TouchableOpacity onPress={() => MoveNextScreen(props, 'SignUpTermsAgreement')}>
                <Text style={styles.linkedText}>개인정보 취급 방침</Text>
              </TouchableOpacity>
              <Text>에</Text>
            </View>
            <Text>동의하는 것으로 간주됩니다.</Text>
            <View height={10} />
            <SignUpNextButton
              isActive
              text="가입"
              onClick={() => MoveNextScreen(props, 'SignUpPhone')}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>로그인</Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
              <MoreInfoButton
                navigation={props.navigation.navigate('Friend')}
                screen="SignUpPhone"
                title="먼저 둘러보시겠어요?"
                /*  추후 navigation 구조 변경 후 메인화면으로 연결할 예정 */
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default EntraceMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inner: { flex: 1, marginTop: 20, width: '90%' },
  linkedText: { borderBottomColor: 'black', borderBottomWidth: 1, fontWeight: 'bold' },
  loginButton: {
    marginTop: 10,
    // elevation:8,
    color: 'gray',
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: Width * 0.9,
  },
  loginButtonText: {
    color: 'gray',
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'white'
  },
  termsAgreementContainer: { height: 60, alignItems: 'center' },
});
