import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light, dark} from '@eva-design/eva';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeContext} from './hooks/theme-context';
import AsyncStorage from '@react-native-community/async-storage';

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

  React.useEffect(() => {
    AsyncStorage.getItem('@theme')
      .then(value => {
        // If the saved theme is light,
        // its the same with the default theme.
        // So there is no need to do an extra
        // re-render
        // If the saved theme is dark,
        // load it from memory and apply it
        if (value === 'dark') {
          setTheme(value);
        }
      })
      .catch(error => {
        console.warn(error);
      });
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    // Save the next theme to the storage because
    // the default theme is light and is already applied
    AsyncStorage.setItem('@theme', nextTheme)
      .then(() => {
        setTheme(nextTheme);
      })
      .catch(error => {
        console.warn(error);
      })
      .finally(() => {
        setTheme(nextTheme);
      });
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
