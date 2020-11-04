import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { WINDOW_SIZE } from '../../constant/WindowSize';
import { COLORS } from '../../assets/Colors';
import { FONT_SIZE } from '../../constant/FontSize';

const Header = ({ navigateTo, navigateMap }) => {
  return (
    <View style={styles.headerBlock}>
      <View style={styles.logoBlock}>
        {navigateMap === 'home' ? (
          <Image
            source={require('../../../../Img/logo.png')}
            style={{
              height: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
              width: 90 * WINDOW_SIZE.HEIGHT_WEIGHT,
            }}
          />
        ) : (
          <Text>내 그룹</Text>
        )}
      </View>
      <View style={{ alignItems: 'flex-end', width: '50%' }}>
        <TouchableOpacity onPress={() => navigateTo('NewGroupNameView')}>
          <Text style={styles.createGroupText}>+새 그룹</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: '100%',
    paddingRight: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingLeft: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  logoBlock: { width: '50%' },
  createGroupText: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.INPUT_TEXT,
  },
});

export default Header;
