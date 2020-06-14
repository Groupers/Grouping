import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

import CNRichTextEditor, {
  CNToolbar,
  getInitialObject,
  getDefaultStyles,
} from 'react-native-cn-richtext-editor';

const defaultStyles = getDefaultStyles();

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

export default class DescriptionInputTextView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTag: 'body',
      selectedStyles: [],
      value: [getInitialObject()],
    };

    this.editor = null;
  }

  onStyleKeyPress = toolType => {
    this.editor.applyToolbar(toolType);
  };

  onSelectedTagChanged = tag => {
    this.setState({
      selectedTag: tag,
    });
  };

  onSelectedStyleChanged = styles => {
    this.setState({
      selectedStyles: styles,
    });
  };

  onValueChanged = value => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={0}
        style={{
          flex: 1,
          paddingTop: 20,
          backgroundColor: '#eee',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.main}>
            <CNRichTextEditor
              ref={input => (this.editor = input)}
              onSelectedTagChanged={this.onSelectedTagChanged}
              onSelectedStyleChanged={this.onSelectedStyleChanged}
              value={this.state.value}
              style={{ backgroundColor: '#fff' }}
              styleList={defaultStyles}
              onValueChanged={this.onValueChanged}
            />
          </View>
        </TouchableWithoutFeedback>

        <View
          style={{
            minHeight: 35,
          }}
        >
          <CNToolbar
            style={{
              height: 35,
            }}
            iconSetContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
            size={30}
            iconSet={[
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'image',
                    iconComponent: (
                      <Text style={styles.toolbarButton}>image</Text>
                    ),
                  },
                ],
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'bold',
                    buttonTypes: 'style',
                    iconComponent: (
                      <Text style={styles.toolbarButton}>bold</Text>
                    ),
                  },
                ],
              },
              {
                type: 'seperator'
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'body',
                    buttonTypes: 'tag',
                    iconComponent: (
                      <Text style={styles.toolbarButton}>body</Text>
                    ),
                  },
                ],
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'ul',
                    buttonTypes: 'tag',
                    iconComponent: <Text style={styles.toolbarButton}>ul</Text>,
                  },
                ],
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'ol',
                    buttonTypes: 'tag',
                    iconComponent: <Text style={styles.toolbarButton}>ol</Text>,
                  },
                ],
              },
            ]}
            selectedTag={this.state.selectedTag}
            selectedStyles={this.state.selectedStyles}
            onStyleKeyPress={this.onStyleKeyPress}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 1,
    alignItems: 'stretch'
  },
  toolbarButton: {
    fontSize: 20,
    width: 28,
    height: 28,
    textAlign: 'center'
  },
  italicButton: {
    fontStyle: 'italic'
  },
  boldButton: {
    fontWeight: 'bold'
  },
  underlineButton: {
    textDecorationLine: 'underline'
  },
  lineThroughButton: {
    textDecorationLine: 'line-through'
  },
});
