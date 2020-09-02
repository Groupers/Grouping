/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'mobx-react';
import React from 'react';
import { name as appName } from './app.json';
import App from './App';
import stores from './app/src/store';

const RNRedux = () => (
  <Provider {...stores}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
