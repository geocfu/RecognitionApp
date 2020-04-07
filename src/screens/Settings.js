import React from 'react';
import {SafeAreaView, Linking} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Radio,
  RadioGroup,
  ListItem,
} from '@ui-kitten/components';

import {ThemeContext} from '../hooks/theme-context';

const BackIcon = style => <Icon {...style} name="arrow-back" />;
const PersonIcon = style => <Icon {...style} name="person" />;
export const Settings = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);

  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    if (themeContext.theme === 'light') {
      return 0;
    } else {
      return 1;
    }
  });

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const onCheckedChange = index => {
    if (selectedIndex != index) {
      themeContext.toggleTheme();
      setSelectedIndex(index);
    }
  };

  const ListItemWithIconShowcase = () => (
    <ListItem
      title="George Mantellos"
      style={{marginTop: 30}}
      description="App Developer"
      icon={PersonIcon}
      onPress={() => {
        Linking.openURL('https://github.com/geocfu/');
      }}
    />
  );

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
          style={{
            top: 10,
            left: 10,
            bottom: 10,
            right: 10,
            fontWeight: 'bold',
          }}>
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
          style={{
            top: 20,
            left: 10,
            bottom: 10,
            right: 10,
            fontWeight: 'bold',
          }}>
          About
        </Text>
        <ListItemWithIconShowcase />
      </Layout>
    </SafeAreaView>
  );
};
