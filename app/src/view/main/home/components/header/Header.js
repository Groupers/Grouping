import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const Header = ({ navigateTo, progress }) => {
  return (
    <View style={styles.headerBlock}>
      <View style={styles.logoBlock}>
        <Text>LOGO</Text>
      </View>
      <View style={{ alignItems: 'flex-end', width: '50%' }}>
        <TouchableOpacity onPress={() => navigateTo('InputNewGroupName')}>
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
  },
  logoBlock: { width: '50%' },
  createGroupText: {},
});
export default Header;
