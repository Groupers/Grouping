import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';
import ChatMainHeader from './ChatMainHeader';
import ChatRoomHeader from "./room/ChatRoomHeader";
import ChatRoomMain from "./room/ChatRoomMain";
import ChatRoomFooter from "./room/ChatRoomFooter";
import {GROUPING_VIEW_STATUS} from "../../../constant/GroupingViewStatus";
import GroupingCreationMain from "../grouping/creation/GroupingCreationMain";
import {CHAT_VIEW_STATUS} from "../../../constant/ChatViewStatus";
import {Icon} from "react-native-elements";
import 'react-native-gesture-handler';

@inject('chatStore')
@observer
class ChatMain extends Component {
    state = {
        data: [],
        page: 0,
        loading: false,
    };

    async componentWillMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://randomuser.me/api?results=500');
        const json = await response.json();
        this.setState({data: json.results});
    };

    fetchChatRoomInfo = () => {
        this.setState(
            state => ({page: this.state.page + 1}, () => this.fetchData()),
        );
    };

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

    onChatContentEnterButtonClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.ENTERING_CHAT_ROOM);
    }

    onChatContentsBackButtonClicked() {
        this.props.chatStore.changeView(CHAT_VIEW_STATUS.NONE);
    }

    render() {
        let view = (
            <View style={styles.main}>
                <ChatMainHeader
                    onSearchViewBackButtonClicked={this.onSearchViewBackButtonClicked.bind(this)}
                />
                <AdArea/>
                <View style={styles.test}
                      padding={5}
                      flexDirection={'column'}
                      flex={1}>
                    <FlatList
                        style={styles.flexList}
                        data={this.state.data}
                        keyExtractor={(x, i) => i}
                        onEndReached={() => this.fetchChatRoomInfo()}
                        onEndReachedThreshold={0}
                        ListFooterComponent={() =>
                            this.state.loading ? null : (
                                <ActivityIndicator size="large" animating/>
                            )
                        }
                        renderItem={
                            ({item}) => (
                                <Item
                                    rowInfo={`${item}`}
                                    onChatContentEnterButtonClicked={this.onChatContentEnterButtonClicked.bind(this)}
                                />
                            )
                        }
                    />
                </View>
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

function Item({onChatContentEnterButtonClicked}) {
    return (
        <TouchableOpacity
            onPress={() => onChatContentEnterButtonClicked()}
        >
            {/*<Text style={styles.title}>{rowInfo}</Text>*/}
            <View style={styles.container}>
                <Image style={styles.chatRoomImg}/>
                <View flexDirection="column" flex={1} padding={5}>
                    <View flexDirection="row">
                        <Text
                            style={styles.chatRoomTitle}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}>
                            Title
                        </Text>
                        <Text style={styles.numberOfParticipants}>5</Text>
                        <Text style={styles.lastMessageTime}>
                            12:00
                        </Text>
                    </View>
                    <View flexDirection="row" alignItems={'center'}>
                        <Text
                            style={styles.lastMessage}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}>
                            {' '}
                            lastMessage
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

function AdArea() {
    return (
        <>
            <View style={styles.adArea}>
                <Image
                    style={styles.ad}
                    source={{
                        uri:
                            'https://ssl.pstatic.net/tveta/libs/1281/1281372/38a98b76cb5b87ad613d_20200611113550630.jpg',
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'gold',
        flex: 1,
        height: '100%',
    },
    main: {
        flex: 1,
        backgroundColor: 'gold',
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
    adArea: {
        height: 70,
        backgroundColor: 'black',
    },
    ad: {
        height: 70,
        borderRadius: 10,
        margin: 5,
    },
    flex_list: {
        flex: 1,
        marginTop: 5,
    },
    test: {
        backgroundColor: 'tomato',
        flex: 1,
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        height: 80,
    },
    flexList: {
        flex: 1,
        marginTop: 5,
    },
    chatRoomImg: {
        width: 65,
        height: 65,
        backgroundColor: '#eee',
        alignItems: 'flex-start',
        borderRadius: 25,
        marginRight: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    chatRoomTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
    },
    numberOfParticipants: {
        fontSize: 14,
        backgroundColor: '#eee',
        borderRadius: 20,
        padding: 3,
        marginRight: 5,
        marginLeft: 5,
        height: 28,
    },
    lastMessageTime: {
        color: 'gray',
        fontSize: 12,
        marginTop: 3,
    },
    lastMessage: {
        color: 'gray',
        flex: 1,
    },
    numOfNewMessages: {
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 15,
        justifyContent: 'center',
        padding: 3,
        fontSize: 12,
    },
    imagesForTitleBar: {},
});

export default ChatMain;
