import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {StyleSheet, Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import ChatMainHeader from './ChatMainHeader';
import {ChatListMain} from "./list/ChatListMain";
import {ChatListHeader} from "./list/ChatListHeader";
import ChatRoomHeader from "./room/ChatRoomHeader";
import ChatRoomMain from "./room/ChatRoomMain";
import ChatRoomFooter from "./room/ChatRoomFooter";
import {GROUPING_VIEW_STATUS} from "../../../constant/GroupingViewStatus";
import GroupingCreationMain from "../grouping/creation/GroupingCreationMain";
import {CHAT_VIEW_STATUS} from "../../../constant/ChatViewStatus";

@inject('chatStore')
@observer
class ChatMain extends Component {
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
    componentDidMount() {
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS,
    ) {
    }

    onKeywordSearchClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.KEYWORD_SEARCH);
    }

    onSearchViewBackButtonClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.NONE);
    }

    // onChatContentEnterButtonClicked() {
    //     this.props.chatStore.changeView(CHAT_VIEW_STATUS.ENTERING_CHAT_ROOM);
    // }

    onChatContentsBackButtonClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.NONE);
    }

    render() {
        let view = (
            <View>
                <ChatMainHeader
                    onSearchViewBackButtonClicked={this.onSearchViewBackButtonClicked.bind(this)}
                />
                <FlatList
                    onScrollBeginDrag={event => console.log('hello drag')}
                    data={DATA}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            onPress={() => this.props.onChatContentEnterButtonClicked()}
                            style={styles.item}
                        >
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        )
        if (this.props.chatStore.chatViewStatus === CHAT_VIEW_STATUS.ENTERING_CHAT_ROOM) {
            view = (
                <View>
                    <ChatRoomHeader
                        backButtonClicked={this.onChatContentsBackButtonClicked.bind(this)}
                    />
                    <ChatRoomMain/>
                </View>
            );
        }
        return <SafeAreaView style={styles.body}>{view}</SafeAreaView>;
    }
}

const DATA = [
    {
        id: 'bd7ac2bea-c1b11-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
    },
];

function Item({title}) {
    return (
        <TouchableOpacity
            onPress={() => this.props.onChatContentEnterButtonClicked()}
            style={styles.item}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.primary,
        alignItems: 'stretch',
    },
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ChatMain;
