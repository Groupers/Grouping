import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { SafeAreaView } from 'react-native-safe-area-context';

const Recommand = () => {
  const dummy = [];

  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        style={{
          zIndex: 0,
          position: 'absolute',
          top: 56 * WINDOW_SIZE.WIDTH_WEIGHT,
        }}
      >
        <Image
          style={{ width: 100, height: 80, margin: 3 }}
          source={{
            uri:
              'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-1029171697.jpg',
          }}
        />
        <Image
          style={{ width: 100, height: 80, margin: 3 }}
          source={{
            uri:
              'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-1029171697.jpg',
          }}
        />
        <Image
          style={{ width: 100, height: 80, margin: 3 }}
          source={{
            uri:
              'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-1029171697.jpg',
          }}
        />
        <Image
          style={{ width: 100, height: 80, margin: 3 }}
          source={{
            uri:
              'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-1029171697.jpg',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recommand;
