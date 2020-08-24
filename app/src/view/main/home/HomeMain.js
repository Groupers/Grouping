import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './components/search/SearchBar';
import Recommand from './components/recommand/Recommand';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

// eslint-disable-next-line react/prop-types
export default function HomeMain({ navigation }) {
  return (
    <ScrollView style={style.Conatiner}>
      {/* <Recommand /> */}
      <SafeAreaView style={style.PaddingBlock}>
        <View style={style.HeaderBlock}>
          <View style={style.LogoBlock}>
            <Text>LOOGO</Text>
          </View>
          <View style={{ alignItems: 'flex-end', width: '50%' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('InputNewGroupName')}
            >
              <Text style={style.CreateGroupText}>+새 그룹</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchView')}>
          <SearchBar
            style={{
              position: 'absolute',
              top: 298 * WINDOW_SIZE.HEIGHT_WEIGHT,
              backgroundColor: 'blue',
            }}
          />
        </TouchableOpacity>
        {/* <Text>Home screen!!!</Text> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  Conatiner: {
    flex: 1,
    // zIndex: 1,
  },
  PaddingBlock: {
    padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginTop: 0,
    display: 'flex',
    backgroundColor: 'purple',
  },
  HeaderBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: '100%',
  },
  LogoBlock: { width: '50%' },
  CreateGroupText: {
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontWeight: 'bold',
  },
});
