import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light, dark} from '@eva-design/eva';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeContext} from './hooks/theme-context';

// TODO: Save the theme

const appThemes = {light, dark};
const statusBarColors = {light: '#FFFFFF', dark: '#222B45'};
const statusBarStyles = {
  light: 'dark-content',
  dark: 'light-content',
};

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const currentTheme = appThemes[theme];
  const currentStatusBarColor = statusBarColors[theme];
  const currentStatusBarStyle = statusBarStyles[theme];

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider mapping={mapping} theme={currentTheme}>
          <StatusBar
            backgroundColor={currentStatusBarColor}
            barStyle={currentStatusBarStyle}
          />
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default App;
