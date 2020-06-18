import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import faker from 'faker';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class FriendListData extends React.Component {
    constructor(props) {
        super(props);

        const fakeData = [];
        for (let i = 0; i < 100; i++) {
            fakeData.push({
                type: 'NORMAL',
                item: {
                    id: i,
                    //image:'./src/Image/cat.png',
                    name: faker.name.firstName(),
                    description: faker.random.words(1),
                },
            });
        }
        this.state = {
            list: new DataProvider((r1, r2) => r1 != r2).cloneWithRows(fakeData),
        };
        this.layoutProvider = new LayoutProvider((i) => {
            return this.state.list.getDataForIndex(i).type;
        }, (type, dim) => {
            switch (type) {
                case 'NORMAL':
                    dim.width = SCREEN_WIDTH;
                    dim.height = 100;
                    break;
                default:
                    dim.width = 0;
                    dim.heigh = 0;
                    break;
            }
            ;
        })
    }

    rowRenderer = (type, data) => {
        const {image, name, description} = data.item;
        return (
            <View style={styles.friendContainer}>
                <Text style={styles.friendImage}>이미지</Text>
                <View style={styles.friendBody}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.icon}>아이콘</Text>
                </View>
                <View style={styles.friendMusic}>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.contentContainer}>
                <RecyclerListView style={{flex: 1}}
                                  rowRenderer={this.rowRenderer}
                                  dataProvider={this.state.list}
                                  layoutProvider={this.layoutProvider}
                />
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