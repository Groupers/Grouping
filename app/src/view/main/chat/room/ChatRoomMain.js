import {GROUPING_CREATION_VIEW_STATUS} from '../../../../constant/GroupingCreationViewStatus';
import React from 'react';
import {inject, observer} from 'mobx-react';
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
import {GROUPING_VIEW_STATUS} from "../../../../constant/GroupingViewStatus";
import {Icon} from "react-native-elements";

class ChatRoomMain extends React.Component {

    componentDidMount() {
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS
    ) {
    }

    onKeywordSearchClicked() {
        this.props.groupingStore.changeView(GROUPING_VIEW_STATUS.KEYWORD_SEARCH);
    }

    render() {
        let view = (
            <View style={styles.container}>
                <FlatList
                    onScrollBeginDrag={event => console.log('hello drag')}
                    data={DATA}
                    renderItem={({item}) => <Item
                        user_name={item.user_name}
                        message={item.message}
                    />}
                    keyExtractor={item => item.id}
                />
            </View>
        );
        return <SafeAreaView>{view}</SafeAreaView>;
    }
}

const DATA = [
    {
        flag: true,
        user_name: 'Olaf',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2bba',
        message: 'first',
    },
    {
        user_name: 'me',
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        message: 'second',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-3da1-471f-bd96-145571e2qd72',
        message: 'third',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: 'bd7acbea-c1b1-4cc2-aed5-3ad53abb28ba',
        message: 'fourth',
    },
    {
        flag: false,
        user_name: 'me',
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa9bf63',
        message: 'fifth Item',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-3da1-471f-bd96-145571a29d72',
        message: 'sixth Item',
    },

    {
        flag: true,
        user_name: 'Olaf',
        id: 'bd7ac2bea-c1b1-46c2-aed5-3ad53abb2bba',
        message: 'first',
    },
    {
        user_name: 'me',
        id: '3ac68a3fc-c605-48d3-a4f8-fbd91aa97f63',
        message: 'second',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-3da1-4741f-bd96-145571e2qd72',
        message: 'third',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: 'bd7acbea5-c1b1-4cc2-aed5-3ad53abb28ba',
        message: 'fourth',
    },
    {
        flag: false,
        user_name: 'me',
        id: '3ac68afc-c605-748d3-a4f8-fbd91aa9bf63',
        message: 'fifth Item',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-13da1-471f-bd96-145571a29d72',
        message: 'sixth Item',
    },

    {
        flag: true,
        user_name: 'Olaf',
        id: 'bd7acbea-c1b11-46c2-aed5-3ad53abb2bba',
        message: 'first',
    },
    {
        user_name: 'me',
        id: '3ac68afc-c605-48d3-a4f8-fbd931aa97f63',
        message: 'second',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-3da1-471f-bd96-1455471e2qd72',
        message: 'third',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: 'bd7acbea-c1b1-4cc2-aed5-3ad53abb628ba',
        message: 'fourth',
    },
    {
        flag: false,
        user_name: 'me',
        id: '3ac68afc-c605-48d3-a4f8-fb5d91aa9bf63',
        message: 'fifth Item',
    },
    {
        flag: true,
        user_name: 'Olaf',
        id: '58694a0f-3da1-471f-bd96-1455719a29d72',
        message: 'sixth Item',
    },
];

function Item({message, user_name, flag}) {
    return (
        <View style={styles.receive_message_view}>
            <Profile/>
            <Text style={styles.user_name}>{user_name}</Text>
            <BubbleMessage
                mine
                text={message}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'stretch',
        flexDirection: 'row',
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

export default ChatRoomMain;
