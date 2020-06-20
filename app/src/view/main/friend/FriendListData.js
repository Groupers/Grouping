import React from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions, Image} from 'react-native';

export default class FriendListData extends React.Component {
    state = {
        info: [

            {
                'name': '이름1',
                'song': '노래1',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/47px-Search_Noun_project_15028.svg.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 1
            },
            {
                'name': '이름2',
                'song': '노래2',
                'src': 'https://img.pngio.com/chat-icon-png-image-free-download-searchpngcom-chat-icon-png-715_657.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 2
            },
            {
                'name': '이름3',
                'song': '노래3',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 3
            },
            {
                'name': '이름4',
                'song': '노래4',
                'src': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 4
            },
            {
                'name': '이름5',
                'song': '노래5',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/47px-Search_Noun_project_15028.svg.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 5
            },
            {
                'name': '이름6',
                'song': '노래6',
                'src': 'https://img.pngio.com/chat-icon-png-image-free-download-searchpngcom-chat-icon-png-715_657.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 6
            },
            {
                'name': '이름7',
                'song': '노래7',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 7
            },
            {
                'name': '이름8',
                'song': '노래8',
                'src': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 8
            },
            {
                'name': '이름9',
                'song': '노래9',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/47px-Search_Noun_project_15028.svg.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 9
            },
            {
                'name': '이름10',
                'song': '노래10',
                'src': 'https://img.pngio.com/chat-icon-png-image-free-download-searchpngcom-chat-icon-png-715_657.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 10
            },
            {
                'name': '이름11',
                'song': '노래11',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 11
            },
            {
                'name': '이름12',
                'song': '노래12',
                'src': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 12
            },
            {
                'name': '이름13',
                'song': '노래13',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/47px-Search_Noun_project_15028.svg.png',
                'iconSrc': 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
                'id': 13
            },
        ]
    }

    render() {
        return (
            <View style={styles.contentContainer}>
                <ScrollView style={{flex: 1}}>
                    {
                        this.state.info.map((item, index) => (
                            <View key={item.id} style={styles.friendContainer}>
                                <Image source={{uri: item.src}} style={styles.friendImage}/>
                                <View style={styles.friendBody}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Image source={{uri: item.iconSrc}} style={styles.icon}/>
                                </View>
                                <View style={styles.friendMusic}>
                                    <Text style={styles.description}>{item.song}</Text>
                                </View>
                            </View>
                        ))
                    }

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    contentContainer: {
        flex: 1,
        minWidth: 1,
        minHeight: 1,
    },
    friendContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',

    },
    friendImage: {
        flex: 1,
        backgroundColor: 'lightgray',
        height: 60,
        width:60,
        borderRadius: 20,
        padding: 5,
        marginLeft: 5,
    },
    friendBody: {
        flex: 2,
        paddingLeft: 20,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 15,
        padding: 10,
    },
    name: {
        flex: 2,
        paddingTop: 10,
    },
    icon: {
        flex: 1,
        backgroundColor: 'lightgray',
        width: 30,
        height:30,
        borderRadius: 15,
        fontSize: 10,
    },
    friendMusic: {
        flex: 2,
        borderColor: 'green',
        borderWidth: 3,
        borderRadius: 10,
        marginRight: 10,
        paddingLeft: 10,

    },
});
