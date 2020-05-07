/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import stores from './app/src/store';
import { Provider } from 'mobx-react';
import React from 'react';

const RNRedux = () => (
  <Provider {...stores}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
