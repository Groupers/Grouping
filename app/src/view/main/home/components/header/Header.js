import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ navigateTo }) => {
  return (
    <View style={style.HeaderBlock}>
      <View style={style.LogoBlock}>
        <Text>LOOGO</Text>
      </View>
      <View style={{ alignItems: 'flex-end', width: '50%' }}>
        <TouchableOpacity onPress={() => navigateTo('InputNewGroupName')}>
          <Text style={style.CreateGroupText}>+새 그룹</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  HeaderBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: '100%',
  },
  LogoBlock: { width: '50%' },
});
export default Header;
