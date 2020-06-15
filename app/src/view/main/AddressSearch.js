import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';

class AddressSearch extends Component {
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
            <View style={styles.bottomContentWrapper}>
                <Icon size={16} name="map-pin" type="feather" color="#fff"/>
                <Text>서울특별시 구로구 구로동</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.primary,
        flex: 1,
    },

    scrollView: {
        backgroundColor: Colors.primary,
        flex: 1,
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

export default AddressSearch;
