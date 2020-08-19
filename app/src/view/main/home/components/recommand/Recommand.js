import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const Recommand = () => {
  const dummy = [];

  return (
    <View>
      <ScrollView horizontal style={{ height: 150 }}>
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
    </View>
  );
};

export default Recommand;
