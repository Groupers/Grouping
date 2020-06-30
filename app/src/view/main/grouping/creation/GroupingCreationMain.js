import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroupingCreationDescription from './GroupingCreationDescription';
import GroupingCreationMainInfo from './GroupingCreationMainInfo';
import GroupingCreationExtraInfo from './GroupingCreationExtraInfo';
import GroupingCreationAddressInfo from './GroupingCreationAddressInfo';

const Stack = createStackNavigator();

@inject('groupingCreationMainStore')
@observer
class GroupingCreationMain extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

  componentDidMount() {}

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  render() {
    return (
      <SafeAreaView style={styles.body}>
        <NavigationContainer independent>
          <Stack.Navigator initialRouteName="groupingCreationMainInfo">
            <Stack.Screen
              name="groupingCreationMainInfo"
              options={({ navigation }) => ({
                title: '그룹 이름',
                headerTitleAlign: 'center',
                headerStatusBarHeight: 0,
                headerStyle: {
                  height: 60,
                  backgroundColor: Colors.primary,
                },
                headerTintColor: '#999',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 22,
                },
                headerShown: true,
              })}
            >
              {(props) => (
                <GroupingCreationMainInfo
                  backButtonClicked={this.props.backButtonClicked}
                  {...props}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="groupingCreationDescription"
              options={({ navigation }) => ({
                title: '그룹 소개',
                headerTitleAlign: 'center',
                headerStatusBarHeight: 0,
                headerStyle: {
                  height: 60,
                  backgroundColor: Colors.primary,
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 22,
                },
                headerShown: true,
              })}
            >
              {(props) => <GroupingCreationDescription {...props} />}
            </Stack.Screen>

            <Stack.Screen
              name="groupingCreationExtraInfo"
              options={({ navigation }) => ({
                title: '그룹 정보',
                headerTitleAlign: 'center',
                headerStatusBarHeight: 0,
                headerStyle: {
                  height: 60,
                  backgroundColor: Colors.primary,
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 22,
                },
                headerShown: true,
              })}
            >
              {(props) => <GroupingCreationExtraInfo {...props} />}
            </Stack.Screen>

            <Stack.Screen
              name="groupingCreationAddressInfo"
              options={({ navigation }) => ({
                title: '그룹 주소',
                headerTitleAlign: 'center',
                headerStatusBarHeight: 0,
                headerStyle: {
                  height: 60,
                  backgroundColor: Colors.primary,
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 22,
                },
                headerShown: true,
              })}
            >
              {(props) => <GroupingCreationAddressInfo {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    color: 'black',
    backgroundColor: Colors.primary,
    flex: 1,
  },
});

export default GroupingCreationMain;
