import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Image source={require('../../../../assets/Crab.jpg')} style={styles.image} />
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  item: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: -15,
    marginLeft: -10,
  },
});
