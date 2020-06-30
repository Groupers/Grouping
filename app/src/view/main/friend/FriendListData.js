import React from 'react';
import axios from 'axios';
import {ScrollView, StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {SERVER_URL} from "../../../constant/HttpProperty";
import {observable} from "mobx";

const TARGET_URL = SERVER_URL + '/users';

export default class FriendListData extends React.Component {
    @observable state = {
        info: []
    }
    componentDidMount() {
        axios.get(TARGET_URL + '/auth', {}).then(res=>{
                this.setState({info: res.data});
        });
    }
    iconSrc = 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png'
    render() {
        return (
            <View style={styles.contentContainer}>
                <ScrollView style={{flex: 1}}>
                    {
                        this.state.info.map((item) => (
                            <View key={item.userId} style={styles.friendContainer}>
                                <Image source={{uri: item.representProfileImage}} style={styles.friendImage}/>
                                <View style={styles.friendBody}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Image source={{uri:this.iconSrc}} style={styles.icon}/>
                                </View>
                                <View style={styles.friendMusic}>
                                    <Text style={styles.description}>{item.email}</Text>
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
