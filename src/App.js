import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as theme} from '@eva-design/eva';
import {AppNavigator} from './navigation/AppNavigator';

// TODO: Save the theme

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      {/* TODO: Need to change dynamically the color of the status bar */}
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <AppNavigator />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
