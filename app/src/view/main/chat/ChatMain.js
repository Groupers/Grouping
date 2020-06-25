import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {StyleSheet, Text, SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import ChatMainHeader from './ChatMainHeader';
import {ChatListMain} from "./list/ChatListMain";
import {ChatListHeader} from "./list/ChatListHeader";
import {GROUPING_VIEW_STATUS} from "../../../constant/GroupingViewStatus";
import GroupingMainHeader from "../grouping/GroupingMainHeader";
import GroupingCreationMain from "../grouping/creation/GroupingCreationMain";
import ChatRoomHeader from "./room/ChatRoomHeader";
import ChatRoomMain from "./room/ChatRoomMain";
import ChatRoomFooter from "./room/ChatRoomFooter";

@inject('groupingStore')
@observer
class ChatMain extends Component {
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.s
    componentDidMount() {
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS,
    ) {
    }

    onGroupingCreationClicked() {
        this.props.groupingStore.changeView(GROUPING_VIEW_STATUS.GROUPING_CREATION);
    }

    onGroupingCreationBackButtonClicked() {
        this.props.groupingStore.changeView(GROUPING_VIEW_STATUS.NONE);
    }

    render() {
        let view = (
            <View>
                <ChatListHeader/>
                <ChatListMain
                    onGroupingCreationClicked={this.onGroupingCreationClicked.bind(this)}
                />
            </View>
        );

        if (
            this.props.groupingStore.groupingViewStatus ===
            GROUPING_VIEW_STATUS.GROUPING_CREATION
        ) {
            view = (
                <View>
                    <ChatRoomHeader/>
                    <ChatRoomMain/>
                    <ChatRoomFooter/>
                </View>
            );
        }

        return <SafeAreaView style={styles.body}>{view}</SafeAreaView>;
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.lighter,
        flex: 1,
        paddingBottom: 0,
    },
    scrollView: {
        backgroundColor: Colors.primary,
        flex: 1,
    },
});

export default ChatMain;
