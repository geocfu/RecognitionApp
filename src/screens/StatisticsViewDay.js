import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  Icon,
  List,
  ListItem,
  Divider,
} from '@ui-kitten/components';
import realm from '../hooks/realm-database';

const BackIcon = (style) => <Icon {...style} name="arrow-back" />;

const monthsOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Octomber',
  'November',
  'December',
];

export const StatisticsViewDay = ({route, navigation}) => {
  const [historyData, setHistoryData] = React.useState(
    realm
      .objects('Activity')
      .sorted('yearAndMonth')
      .sorted('day')
      .filtered(
        'yearAndMonth == $0 AND day == $1',
        route.params['year'].concat(
          '-',
          route.params['month'].length == 1
            ? '0' + route.params['month']
            : route.params['month'],
        ),
        route.params['day'],
      ),
  );

  React.useEffect(() => {
    realm.addListener('change', updateUIFromRealmQuery);

    return () => {
      realm.removeListener('change', updateUIFromRealmQuery);
    };
  });
  const updateUIFromRealmQuery = () => {
    setHistoryData(
      realm
        .objects('Activity')
        .sorted('yearAndMonth')
        .sorted('day')
        .filtered(
          'yearAndMonth == $0 AND day == $1',
          route.params['year'].concat(
            '-',
            route.params['month'].length == 1
              ? '0' + route.params['month']
              : route.params['month'],
          ),
          route.params['day'],
        ),
    );
  };
  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const renderItemIcon = (style) => <Icon {...style} name="file" />;
  const renderItemAccessory = (style) => (
    <Button
      status="danger"
      onPress={() => {
        realm.write(() => {
          let currentActivity = realm.objects('Activity').filtered('');

          realm.delete(currentActivity);
        });
      }}>
      DELETE
    </Button>
  );

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
        titleStyle={{fontSize: 18}}
        descriptionStyle={{fontSize: 14}}
        title={index + 1 + '. ' + item.type}
        description={'timestamp'}
        icon={renderItemIcon}
        disabled={true}
        accessory={renderItemAccessory}
      />
    );
  };

  const renderDivider = () => {
    return <Divider />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title={
          'Statistics for the ' +
          route.params['day'] +
          ' of ' +
          monthsOfTheYear[route.params['month'] - 1] +
          ' ' +
          route.params['year']
        }
        titleStyle={{fontWeight: 'bold'}}
        alignment="center"
        leftControl={BackAction()}
      />
      <Layout style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text category="h1">Graph</Text>
        </View>
        <List
          data={historyData}
          renderItem={renderItem}
          ItemSeparatorComponent={renderDivider}
        />
      </Layout>
    </SafeAreaView>
  );
};
