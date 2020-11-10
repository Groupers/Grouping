import React from 'react';
import { View, Image, ScrollView, Text, StyleSheet } from 'react-native';
import { WINDOW_SIZE } from '../../constant/WindowSize';
import { COLORS } from '../../assets/Colors';

const images = [
  'Img/onboarding_img_1.png',
  'https://images.pexels.com/photos/4775426/pexels-photo-4775426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/945966/pexels-photo-945966.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2664/blue-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

export default class Carousel extends React.Component {
  state = { active: 0 };

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={require('../../../../Img/onboarding_img_1.png')}
              style={styles.image}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k === this.state.active ? styles.pagingActiveText : styles.pagingText}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    height: 270 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  scroll: { flex: 1, paddingBottom: 30 },
  image: {
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    height: 270 * WINDOW_SIZE.HEIGHT_WEIGHT,
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -98 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignSelf: 'center',
  },
  pagingText: { color: COLORS.FONT_GRAY, margin: 3, fontSize: 4 },
  pagingActiveText: { color: COLORS.SUB_COLOR, margin: 3, fontSize: 4 },
});
