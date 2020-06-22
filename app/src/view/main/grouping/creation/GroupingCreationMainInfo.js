import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
} from 'react-native';
import LabelView from '../../../sign/LabelView';
import TitleInputTextView from './TitleInputTextView';
import {GROUPING_CREATION_VIEW_STATUS} from '../../../../constant/GroupingCreationViewStatus';
import {Icon} from 'react-native-elements';
import KeywordInputTextView from '../../KeywordInputTextView';

@inject('groupingCreationMainStore')
@observer
class GroupingCreationMainInfo extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <Text
                    onPress={() => {
                        this.onHeaderNextButtonClicked();
                    }}
                    style={this.rightIconStyle(GROUPING_CREATION_VIEW_STATUS.MAIN_INFO)}
                >
                    다음
                </Text>
            ),
            headerLeft: () => (
                <Icon
                    style={styles.leftIconStyle}
                    size={26}
                    name="x"
                    type="feather"
                    color='#999'
                    onPress={() => {
                        this.props.backButtonClicked();
                    }}
                />
            ),
        });
    }

    componentDidUpdate(
        prevProps: Readonly<P>,
        prevState: Readonly<S>,
        snapshot: SS
    ) {
    }

    onTitleChanged(title) {
        this.props.groupingCreationMainStore.groupingTitleChanged(title);

        this.props.navigation.setOptions({
            headerRight: () => (
                <Text
                    onPress={() => {
                        this.onHeaderNextButtonClicked();
                    }}
                    style={this.rightIconStyle(GROUPING_CREATION_VIEW_STATUS.MAIN_INFO)}
                >
                    다음
                </Text>
            ),
        });
    }

    onKeywordChanged(keyword) {
        this.props.groupingCreationMainStore.groupingKeywordChanged(keyword);

        this.props.navigation.setOptions({
            headerRight: () => (
                <Text
                    onPress={() => {
                        this.onHeaderNextButtonClicked();
                    }}
                    style={this.rightIconStyle(GROUPING_CREATION_VIEW_STATUS.MAIN_INFO)}
                >
                    다음
                </Text>
            ),
        });
    }

    onHeaderNextButtonClicked() {
        this.props.groupingCreationMainStore.groupingCreationViewChanged(
            GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
        );
        this.props.navigation.navigate('groupingCreationDescription');
    }

    rightIconStyle(groupingCreationView) {
        return {
            marginRight: 15,
            fontSize: 18,
            color: this.props.groupingCreationMainStore.isHeaderRightIconActivated(
                groupingCreationView
            )
                ? Colors.white
                : '#999'
        };
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.body}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View style={styles.contentContainer}>
                            <LabelView text="그룹의 이름을 입력해주세요."/>
                            <TitleInputTextView
                                onChangeText={this.onTitleChanged.bind(this)}
                                groupingTitle={
                                    this.props.groupingCreationMainStore.groupingTitle
                                }
                            />
                            <LabelView text="그룹을 대표한 키워드를 입력해 주세요."/>
                            <KeywordInputTextView
                                onChangeText={this.onKeywordChanged.bind(this)}
                                groupingKeyword={
                                    this.props.groupingCreationMainStore.groupingKeyword
                                }
                            />
                        </View>
                        <View style={styles.bottomContainer}/>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    inner: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: 'black',
    },
    contentContainer: {
        flex: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    },
    bottomContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 30,
    },
    leftIconStyle: {
        marginLeft: 15,
    },
});

export default GroupingCreationMainInfo;
