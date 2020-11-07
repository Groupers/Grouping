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
        <View style={styles.onBoardingTextContainer}>
          <Text style={styles.onBoardingText}>지금 내 주변에 있는 그룹을</Text>
          <Text style={styles.onBoardingText}>만나보세요</Text>
        </View>
        <View height={10} />
        <View style={styles.buttonContainer}>
          <View style={styles.signUpButtonBlock}>
            <NextButton
              isActive
              color={COLORS.SUB_COLOR}
              text="가입"
              onClick={() => moveNextScreen(props, 'SignUpPhone')}
              fontColor={COLORS.WHITE}
              buttonType
            />
          </View>
          <View style={styles.signInButtonBlock}>
            <NextButton
              isActive={false}
              text="로그인"
              onClick={() => moveNextScreen(props, 'SignIn')}
              fontColor={COLORS.BLACK}
              buttonType
            />
          </View>
        </View>
        <View style={{ height: 20 * WINDOW_SIZE.HEIGHT_WEIGHT }} />
        <MoreInfoButton
          navigation={props.navigation}
          screen="Home"
          title="먼저 둘러보시겠어요?"
          /*  추후 navigation 구조 변경 후 메인화면으로 연결할 예정 */
        />
        <View style={styles.inner}>
          <View style={styles.termsAgreementContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.agreementText}>가입을 누르시면 </Text>
              <TouchableOpacity onPress={() => moveNextScreen(props, 'SignUpTermsAgreement')}>
                <Text style={styles.linkedText}>이용약관</Text>
              </TouchableOpacity>
              <Text style={styles.agreementText}>과</Text>
              <TouchableOpacity onPress={() => moveNextScreen(props, 'SignUpTermsAgreement')}>
                <Text style={styles.linkedText}>개인정보 취급 방침</Text>
              </TouchableOpacity>
              <Text style={styles.agreementText}>에</Text>
            </View>
            <Text style={styles.agreementText}>동의하는 것으로 간주됩니다.</Text>

            {/* <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>로그인</Text>
              </View>
            </TouchableOpacity> */}
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
  onBoardingTextContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
    height: 52 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  onBoardingText: {
    letterSpacing: -0.5,
    fontSize: 20 * WINDOW_SIZE.WIDTH_WEIGHT,
    color: COLORS.BLACK,
  },
  inner: { marginTop: 20, backgroundColor: 'green' },
  linkedText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    fontSize: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    opacity: 30,
  },
  agreementText: {
    fontSize: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    opacity: 30,
  },
  buttonContainer: {
    height: 166 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingTop: 42 * WINDOW_SIZE.HEIGHT_WEIGHT,
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
  termsAgreementContainer: {
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
