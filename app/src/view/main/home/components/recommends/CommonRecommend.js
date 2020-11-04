import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const CommonRecommend = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 260 * WINDOW_SIZE.HEIGHT_WEIGHT,
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    paddingRight: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
                    paddingLeft: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
                }}
            >
                <Text style={{ fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
                    선선한 여름밤,{'\n'}
                    <Text style={{ color: 'orange' }}> #캠핑 </Text>
                    어떠세요?
                </Text>
                <Text style={{ fontSize: 10 * WINDOW_SIZE.HEIGHT_WEIGHT }}>관련 그룹 보기 ></Text>
                <Text
                    style={{
                        fontSize: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
                        paddingTop: 119 * WINDOW_SIZE.HEIGHT_WEIGHT,
                    }}
                >
                    1/3
                </Text>
            </View>
        </View>
    );
};

export default CommonRecommend;
