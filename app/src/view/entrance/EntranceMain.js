<<<<<<< HEAD
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
import SignUpNextButton from '../sign/SignUpNextButton';
import Carousel from './Carousel';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function EntraceMain(props) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Carousel />
        <View style={{ marginTop: 20, width: '90%' }}>
          <View style={{ height: 60, alignItems: 'center' }}>
            <View style={styles.rowContainer}>
              <Text>가입을 누르시면 </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SignUpTermsAgreement');
                }}
              >
                <Text
                  style={{ borderBottomColor: 'black', borderBottomWidth: 1, fontWeight: 'bold' }}
                >
                  이용약관
                </Text>
              </TouchableOpacity>
              <Text>과</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SignUpTermsAgreement');
                }}
              >
                <Text
                  style={{ borderBottomColor: 'black', borderBottomWidth: 1, fontWeight: 'bold' }}
                >
                  개인정보 취급 방침
                </Text>
              </TouchableOpacity>
              <Text>에</Text>
            </View>
            <Text>동의하는 것으로 간주됩니다.</Text>
            <View height={10} />
            <SignUpNextButton
              isActive
              text="가입"
              onClick={() => {
                props.navigation.navigate('SignUpTermsAgreement');
              }}
              style={{ width: Width, flex: 1 }}
            />
            <TouchableOpacity
            onPress={()=>props.navigation.navigate('SignIn')}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>로그인</Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Main 화면으로 이동');
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text>먼저 둘러보시겠어요?</Text>
                  <Icon name="chevron-right" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
=======
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SignUpNextButton from '../sign/SignUpNextButton';
import {SignIn} from '../sign/SignIn';

function EntranceMain(props) {
  return (
    <View>
      <Text>EntranceMain</Text>
      <SignUpNextButton isActive text="가입" onClick={() => props.navigation.navigate('SignIn')} />
>>>>>>> a754a7cbafe607d5474f71b6960a0b16c4df473a
    </View>
  );
}

<<<<<<< HEAD
export default EntraceMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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
});
=======
export default EntranceMain;
>>>>>>> a754a7cbafe607d5474f71b6960a0b16c4df473a
