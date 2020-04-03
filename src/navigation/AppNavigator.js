import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

import {Home} from '../screens/Home';
import {Statistics} from '../screens/Statistics';
import {Settings} from '../screens/Settings';

const HomeIcon = style => <Icon {...style} name="home" />;
const StatisticsIcon = style => <Icon {...style} name="pie-chart" />;

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

const BottomTabBar = ({navigation, state}) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title="HOME" icon={HomeIcon} />
        <BottomNavigationTab title="STATISTICS" icon={StatisticsIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Home" component={HomeNavigator} />
    <BottomTab.Screen name="Statistics" component={Statistics} />
  </BottomTab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
