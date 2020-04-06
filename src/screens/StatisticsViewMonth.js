import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
  List,
  ListItem,
  Divider,
} from '@ui-kitten/components';
import realm from '../hooks/realm-database';

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

const BackIcon = (style) => <Icon {...style} name="arrow-back" />;

export const StatisticsViewMonth = ({route, navigation}) => {
  const [historyData, setHistoryData] = React.useState(
    realm
      .objects('Activity')
      .sorted('yearAndMonth')
      .filtered(
        'yearAndMonth == $0',
        route.params['year'].concat(
          '-',
          route.params['month'].length == 1
            ? '0' + route.params['month']
            : route.params['month'],
        ),
      )
      .filtered('TRUEPREDICATE DISTINCT(day)'),
  );

  // const [graphData, setGraphData] = React.useState([
  //   {
  //     value: Object.keys(
  //       realm.objects('Activity').filtered('type == $0', 'Walking'),
  //     ).length,
  //     label: 'Walking',
  //   },
  //   {
  //     value: Object.keys(
  //       realm.objects('Activity').filtered('type == $0', 'Running'),
  //     ).length,
  //     label: 'Running',
  //   },
  //   {
  //     value: Object.keys(
  //       realm.objects('Activity').filtered('type == $0', 'Bicycling'),
  //     ).length,
  //     label: 'Bicycling',
  //   },
  //   {
  //     value: Object.keys(
  //       realm.objects('Activity').filtered('type == $0', 'Car Ride'),
  //     ).length,
  //     label: 'Car Ride',
  //   },
  //   {
  //     value: Object.keys(
  //       realm.objects('Activity').filtered('type == $0', 'Bus Ride'),
  //     ).length,
  //     label: 'Bus Ride',
  //   },
  //   {
  //     value: Object.keys(
  //       realm.objects('Activity').filtered('type == $0', 'Train Ride'),
  //     ).length,
  //     label: 'Train Ride',
  //   },
  // ]);

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
        .filtered(
          'yearAndMonth == $0',
          route.params['year'].concat(
            '-',
            route.params['month'].length == 1
              ? '0' + route.params['month']
              : route.params['month'],
          ),
        )
        .filtered('TRUEPREDICATE DISTINCT(day)'),
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

  const renderItemIcon = (style) => <Icon {...style} name="folder" />;
  const renderItem = ({item}) => {
    let extractYear = item.yearAndMonth.substring(0, 4);
    let extractMonth = item.yearAndMonth.substring(5, 7).startsWith('0')
      ? item.yearAndMonth.substring(6, 7)
      : item.yearAndMonth.substring(5, 7);
    let numberOfActivitiesPerDay = realm
      .objects('Activity')
      .sorted('yearAndMonth')
      .filtered(
        'yearAndMonth == $0 AND day == $1',
        route.params['year'].concat(
          '-',
          route.params['month'].length == 1
            ? '0' + route.params['month']
            : route.params['month'],
        ),
        item.day,
      );
    return (
      <ListItem
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
        titleStyle={{fontSize: 18}}
        descriptionStyle={{fontSize: 14}}
        title={
          item.day +
          ' of ' +
          monthsOfTheYear[extractMonth - 1] +
          ' ' +
          extractYear
        }
        description={
          'Found ' +
          Object.keys(numberOfActivitiesPerDay).length +
          ' activities'
        }
        icon={renderItemIcon}
        onPress={() =>
          navigation.navigate('StatisticsViewDay', {
            month: extractMonth,
            year: extractYear,
            day: item.day,
          })
        }
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
          'Statistics for ' +
          monthsOfTheYear[route.params['month'] - 1] +
          ' ' +
          route.params['year']
        }
        alignment="center"
        titleStyle={{fontWeight: 'bold'}}
        leftControl={BackAction()}
      />
      <Layout style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Text category="h3">Month Graph</Text>
          <Divider />

          <Divider />
          <Text style={{textAlign: 'center'}} appearance="hint">
            Press on a day to view it's detailed statistics
          </Text>
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
