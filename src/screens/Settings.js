import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  Radio,
  RadioGroup,
} from '@ui-kitten/components';

import {ThemeContext} from '../hooks/theme-context';

const BackIcon = style => <Icon {...style} name="arrow-back" />;

export const Settings = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (themeContext.theme === 'light') {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(1);
    }
  }, [themeContext.theme]);

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const onCheckedChange = index => {
    setSelectedIndex(index);
    themeContext.toggleTheme();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Settings"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <Layout style={{flex: 1}} level="2">
        <Text
          category="h5"
          style={{top: 10, left: 10, bottom: 10, right: 10, fontWeight: '700'}}>
          Theme
        </Text>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={onCheckedChange}
          style={{top: 10, left: 15, bottom: 10, right: 10}}>
          <Radio
            style={{marginVertical: 8}}
            textStyle={{fontSize: 16}}
            text="Light Theme"
          />
          <Radio
            style={{marginVertical: 8}}
            textStyle={{fontSize: 16}}
            text="Dark Theme"
          />
        </RadioGroup>
        <Text
          category="h5"
          style={{top: 20, left: 10, bottom: 10, right: 10, fontWeight: '700'}}>
          About
        </Text>
      </Layout>
    </SafeAreaView>
  );
};
