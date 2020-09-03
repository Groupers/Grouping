import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WINDOW_SIZE } from '../../constant/WindowSize';

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerBlock}>
      <View style={styles.logoBlock}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text> (icon) 가입한 그룹</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'flex-end', width: '50%' }}>
        <TouchableOpacity>
          <Text style={styles.createGroupText}>설정(설정아이콘)</Text>
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
  logoBlock: { width: '50%', flexDirection: 'row' },
  createGroupText: {},
});

export default Header;
