import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {Image, StyleSheet, Text, View} from 'react-native';

class ChatMainHeader extends Component {
    componentDidMount() {
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS,
    ) {
    }

    render() {
        return (
            <View style={styles.body}>
                <View paddingRigth={8} paddingLeft={8}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>채팅</Text>
                        <View flex={1}/>
                        <Image
                            style={styles.titleImg}
                            source={{
                                uri:
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/47px-Search_Noun_project_15028.svg.png',
                            }}
                        />
                        <Image
                            style={styles.titleImg}
                            source={{
                                uri:
                                    'https://img.pngio.com/chat-icon-png-image-free-download-searchpngcom-chat-icon-png-715_657.png',
                            }}
                        />
                        <Image
                            style={styles.titleImg}
                            source={{
                                uri:
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
                            }}
                        />
                        <Image
                            style={styles.titleImg}
                            source={{
                                uri:
                                    'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.primary,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        height: 60,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        height: 80,
    },
    titleBar: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        color: 'black',
        flex: 1,
        fontWeight: 'bold',
    },
    titleImg: {
        width: 26,
        height: 26,
        marginRight: 8,
    },
});

export default ChatMainHeader;
