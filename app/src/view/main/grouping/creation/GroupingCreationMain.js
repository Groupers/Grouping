import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroupingCreationKeyword from './GroupingCreationKeyword';
import GroupingCreationTitle from './GroupingCreationTitle';

const Stack = createStackNavigator();

@inject('groupingCreationMainStore')
@observer
class GroupingCreationMain extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

  componentDidMount() {}

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS
  ) {}

  // 친구목록, 채팅, 모임찾기, 마이페이지
  onTitleNextButtonClicked(navigation) {
    navigation.navigate('groupingCreationKeyword');
  }

  onKeywordNextButtonClicked(navigation) {}

  onKeywordBackButtonClicked(navigation) {
    navigation.navigate('groupingCreationTitle');
  }

  rightIconStyle = function() {
    return {
      marginRight: 15,
      fontSize: 18,
      color: this.props.groupingCreationMainStore.isHeaderRightIconActivated
        ? Colors.white
        : '#999'
      // width: '90%',
      // alignItems: 'center',
      // justifyContent: 'center',
      // margin: 10,
      // height: 50,
      // backgroundColor: this.props.isActive === true ? Colors.white : '#888',
      // borderRadius: 5,
      // marginBottom: this.props.isKeyboardShow
      //   ? this.props.keyboardHeight - 15
      //   : 0,
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.body}>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="groupingCreationTitle">
            <Stack.Screen
              name="groupingCreationTitle"
              options={({ navigation }) => ({
                title: '그룹 이름',
                headerTitleAlign: 'center',
                headerStatusBarHeight: 0,
                headerStyle: {
                  height: 60,
                  backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 22,
                },
                headerShown: true,
                headerLeft: () => (
                  <Icon
                    style={styles.leftIconStyle}
                    size={26}
                    name="x"
                    type="feather"
                    color="#fff"
                    onPress={() => {
                      this.props.backButtonClicked();
                    }}
                  />
                ),
                headerRight: () => (
                  <Text
                    onPress={() => {
                      this.onTitleNextButtonClicked(navigation);
                    }}
                    style={this.rightIconStyle()}
                  >
                    다음
                  </Text>
                ),
              })}
            >
              {props => <GroupingCreationTitle {...props} />}
            </Stack.Screen>

            <Stack.Screen
              name="groupingCreationKeyword"
              options={({ navigation }) => ({
                title: '그룹 키워드',
                headerTitleAlign: 'center',
                headerStatusBarHeight: 0,
                headerStyle: {
                  height: 60,
                  backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 22,
                },
                headerShown: true,
                headerLeft: () => (
                  <Icon
                    style={styles.leftIconStyle}
                    size={26}
                    name="chevron-left"
                    type="feather"
                    color="#fff"
                    onPress={() => {
                      this.onKeywordBackButtonClicked(navigation);
                    }}
                  />
                ),
                headerRight: () => (
                  <Text
                    onPress={() => {
                      this.onKeywordNextButtonClicked(navigation);
                    }}
                    style={this.rightIconStyle()}
                  >
                    다음
                  </Text>
                ),
              })}
            >
              {props => <GroupingCreationKeyword {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  leftIconStyle: {
    marginLeft: 15,
  },
});

export default GroupingCreationMain;
