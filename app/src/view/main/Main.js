import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../assets/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FriendMain from './friend/FriendMain';
import ChatMain from './chat/ChatMain';
import MyMain from './my/MyMain';
import GroupingMain from './grouping/GroupingMain';
import FeedMain from './feed/FeedMain';
import {observable} from 'mobx';
import {CHAT_VIEW_STATUS} from "../../constant/ChatViewStatus";

const Tab = createBottomTabNavigator();

@inject('mainStore')
@inject('chatStore')
@observer
class Main extends React.Component {
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
    componentDidMount() {
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS
    ) {
    }

    // 친구목록, 채팅, 모임찾기, 마이페이지

    onKeywordSearchClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.KEYWORD_SEARCH);
    }

    onSearchViewBackButtonClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.NONE);
    }

    onChatContentEnterButtonClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.ENTERING_CHAT_ROOM);
    }

    onChatContentsBackButtonClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.NONE);
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Friend" component={FriendMain}/>
                    <Tab.Screen name="Chat" component={ChatMain}/>
                    <Tab.Screen name="Feed" component={FeedMain}/>
                    <Tab.Screen
                        options={{
                            tabBarVisible: this.props.mainStore.shouldTabBarVisible,
                        }}
                        name="Grouping"
                        component={GroupingMain}
                    />
                    <Tab.Screen name="My" component={MyMain}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: COLORS.MAIN_COLOR,
        flex: 1,
    },
});

export default Main;
