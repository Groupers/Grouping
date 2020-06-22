import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import InputSearch from '../InputSearch';
import {Icon} from 'react-native-elements';

class GroupingMainHeader extends Component {
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

    render() {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.titleContentWrapper}>
                        <Text style={styles.title}>Grouping</Text>
                    </View>
                    <View style={styles.iconContentWrapper}>
                        <Icon
                            style={styles.icon}
                            size={26}
                            name="search"
                            type="feather"
                            color='black'
                            onPress={() => this.props.onKeywordSearchClicked()}
                        />
                        <Icon
                            style={styles.icon}
                            size={26}
                            name="target"
                            type="feather"
                            color='black'
                            onPress={() => this.props.onGroupingCreationClicked()}
                        />
                    </View>
                </View>
                <View style={styles.border}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.primary,
        flexDirection: 'column',
        height: 60,
    },

    header: {
        flexDirection: 'row',
        paddingStart: 15,
        paddingEnd: 15,
        flex: 1,
        paddingBottom: 5,
    },

    border: {
        height: 1,
        backgroundColor: 'black',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    titleContentWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },

    title: {
        fontSize: 32,
        color: 'black',
        fontWeight: '700'
    },

    iconContentWrapper: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    icon: {
        marginLeft: 10,
    }
});

export default GroupingMainHeader;
