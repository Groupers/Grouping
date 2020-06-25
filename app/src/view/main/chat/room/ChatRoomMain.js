import {GROUPING_CREATION_VIEW_STATUS} from '../../../../constant/GroupingCreationViewStatus';
import React from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image, FlatList,
} from 'react-native';
import Profile from './Profile';
import BubbleMessage from "./BubbleMessage";
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomFooter from './ChatRoomFooter';
import GroupingChatRoomSetting from './setting/GroupingChatRoomSetting';
import {GROUPING_VIEW_STATUS} from "../../../../constant/GroupingViewStatus";
import {Icon} from "react-native-elements";

const DATA = [
    {
        image: 'https://reactnative.dev/img/tiny_logo.png',
        flag: true,
        user_name: 'Olaf',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2bba',
        message: 'first',
    },
    {
        image: 'https://reactnative.dev/img/tiny_logo.png',
        user_name: 'me',
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        message: 'second',
    },
    {
        image: 'https://reactnative.dev/img/tiny_logo.png',
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-3da1-471f-bd96-145571e2qd72',
        message: 'third',
    },
    {
        image: 'https://reactnative.dev/img/tiny_logo.png',
        flag: true,
        user_name: 'Olaf',
        id: 'bd7acbea-c1b1-4cc2-aed5-3ad53abb28ba',
        message: 'fourth',
    },
    {
        image: 'https://reactnative.dev/img/tiny_logo.png',
        flag: false,
        user_name: 'me',
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa9bf63',
        message: 'fifth Item',
    },
    {
        image: 'https://reactnative.dev/img/tiny_logo.png',
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-3da1-471f-bd96-145571a29d72',
        message: 'sixth Item',
    },
];

function Item({message, user_name, flag, image}) {
    if (flag) {
        return (
            <View style={styles.receive_message_view}>
                <Profile/>
                <Text style={styles.user_name}>{user_name}</Text>
                <BubbleMessage
                    mine
                    text={message}
                    image={image}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.send_message_view}>
                <BubbleMessage
                    text={message}
                    image={image}
                />
                {/*<Text style={styles.user_name}>{user_name}</Text>*/}
                {/*<Profile/>*/}
            </View>
        );
    }
}

class ChatRoomMain extends React.Component {

    componentDidMount() {
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS
    ) {
    }

    render() {
        let view = (
            <View style={styles.container}>
                <ChatRoomHeader/>
                <FlatList
                    onScrollBeginDrag={event => console.log('hello drag')}
                    data={DATA}
                    renderItem={({item}) => <Item
                        message={item.message}
                        flag={item.flag}
                        user_name={item.user_name}
                    />}
                    keyExtractor={item => item.id}
                />
                <ChatRoomFooter/>
                <Text style={styles.user_name}>
                    FUCKING REACT NATIVE
                </Text>
            </View>
        );

        return <SafeAreaView>{view}</SafeAreaView>;
    }
}

export default ChatRoomMain;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#B0C4DE',
    },
    receive_message_view: {
        flexDirection: 'row',
    },
    user_name: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 10,
        marginLeft: 5,
    },
    send_message_view: {},
});
