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
import NextButton from '../sign/components/NextButton';
import Carousel from './Carousel';
import MoreInfoButton from '../sign/components/MoreInfoButton';
import ActiveEmailInputTextView from '../sign/components/ActiveEmailInputTextView';
import { WINDOW_SIZE } from '../../constant/WindowSize';
import { COLORS } from '../../assets/Colors';

const moveNextScreen = ({ navigation }, screen) => {
  navigation.navigate(screen);
};

const EntranceMain = (props) => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Carousel flex={1} />
        <View style={styles.inner}>
          <View style={styles.termsAgreementContainer}>
            <View style={styles.rowContainer}>
              <Text>가입을 누르시면 </Text>
              <TouchableOpacity onPress={() => moveNextScreen(props, 'SignUpTermsAgreement')}>
                <Text style={styles.linkedText}>이용약관</Text>
              </TouchableOpacity>
              <Text>과</Text>
              <TouchableOpacity onPress={() => moveNextScreen(props, 'SignUpTermsAgreement')}>
                <Text style={styles.linkedText}>개인정보 취급 방침</Text>
              </TouchableOpacity>
              <Text>에</Text>
            </View>
            <Text>동의하는 것으로 간주됩니다.</Text>
            <View height={10} />
            <View style={styles.signUpButtonBlock}>
              <NextButton
                isActive
                color={COLORS.SUB_COLOR}
                text="가입"
                onClick={() => moveNextScreen(props, 'SignUpPhone')}
              />
            </View>
            <View style={styles.signInButtonBlock}>
              <NextButton
                isActive
                color={COLORS.MAIN_COLOR}
                text="로그인"
                onClick={() => moveNextScreen(props, 'SignIn')}
              />
            </View>
            {/* <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>로그인</Text>
              </View>
            </TouchableOpacity> */}
            <View style={{ marginTop: 10 }}>
              <MoreInfoButton
                navigation={props.navigation}
                screen="Home"
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

export default EntranceMain;

const styles = StyleSheet.create({
  signInButtonBlock: {
    paddingTop: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignItems: 'center',
  },
  signUpButtonBlock: {
    paddingTop: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignItems: 'center',
  },
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
    width: 0.9 * WINDOW_SIZE.WIDTH,
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
