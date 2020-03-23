import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Text,
  Layout,
  TopNavigation,
  TopNavigationAction,
  OverflowMenu,
  Icon,
} from '@ui-kitten/components';

const MenuIcon = style => <Icon {...style} name="more-vertical" />;
const SettingsIcon = style => <Icon {...style} name="settings-2" />;
const AboutIcon = style => <Icon {...style} name="info" />;

const MenuAction = props => <TopNavigationAction {...props} icon={MenuIcon} />;

export const Home = ({navigation}) => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigateDetails = () => {
    navigation.navigate('Settings');
  };

  const renderRightControls = () => [<MenuAction />];

  const menuData = [
    {
      title: 'Settings',
      icon: SettingsIcon,
    },
    {
      title: 'About',
      icon: AboutIcon,
    },
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const onMenuItemSelect = index => {
    if (index === 0) {
      navigation.navigate('Settings');
    } else if (index === 1) {
      navigation.navigate('About');
    }
    setMenuVisible(false);
  };

  const renderMenuAction = () => (
    <OverflowMenu
      visible={menuVisible}
      data={menuData}
      onSelect={onMenuItemSelect}
      onBackdropPress={toggleMenu}>
      <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    </OverflowMenu>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation rightControls={renderMenuAction()} />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">Home</Text>
      </Layout>
    </SafeAreaView>
  );
};
