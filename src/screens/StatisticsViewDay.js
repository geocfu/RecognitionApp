import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
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
import {ThemeContext} from '../hooks/theme-context';
import {HorizontalBarChartWithTheYAxisNamed} from '../components/HorizontalBarChartWithTheYAxisNamed';
const BackIcon = style => <Icon {...style} name="arrow-back" />;

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
  const themeContext = React.useContext(ThemeContext);
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

  const [graphData, setGraphData] = React.useState([
    {
      value: Object.keys(
        realm
          .objects('Activity')
          .sorted('yearAndMonth')
          .sorted('day')
          .filtered(
            'yearAndMonth == $0 AND day == $1 AND type == $2',
            route.params['year'].concat(
              '-',
              route.params['month'].length == 1
                ? '0' + route.params['month']
                : route.params['month'],
            ),
            route.params['day'],
            'Walking',
          ),
      ).length,
      label: 'Walking',
    },
    {
      value: Object.keys(
        realm
          .objects('Activity')
          .sorted('yearAndMonth')
          .sorted('day')
          .filtered(
            'yearAndMonth == $0 AND day == $1 AND type == $2',
            route.params['year'].concat(
              '-',
              route.params['month'].length == 1
                ? '0' + route.params['month']
                : route.params['month'],
            ),
            route.params['day'],
            'Running',
          ),
      ).length,
      label: 'Running',
    },
    {
      value: Object.keys(
        realm
          .objects('Activity')
          .sorted('yearAndMonth')
          .sorted('day')
          .filtered(
            'yearAndMonth == $0 AND day == $1 AND type == $2',
            route.params['year'].concat(
              '-',
              route.params['month'].length == 1
                ? '0' + route.params['month']
                : route.params['month'],
            ),
            route.params['day'],
            'Bicycling',
          ),
      ).length,
      label: 'Bicycling',
    },
    {
      value: Object.keys(
        realm
          .objects('Activity')
          .sorted('yearAndMonth')
          .sorted('day')
          .filtered(
            'yearAndMonth == $0 AND day == $1 AND type == $2',
            route.params['year'].concat(
              '-',
              route.params['month'].length == 1
                ? '0' + route.params['month']
                : route.params['month'],
            ),
            route.params['day'],
            'Car Ride',
          ),
      ).length,
      label: 'Car Ride',
    },
    {
      value: Object.keys(
        realm
          .objects('Activity')
          .sorted('yearAndMonth')
          .sorted('day')
          .filtered(
            'yearAndMonth == $0 AND day == $1 AND type == $2',
            route.params['year'].concat(
              '-',
              route.params['month'].length == 1
                ? '0' + route.params['month']
                : route.params['month'],
            ),
            route.params['day'],
            'Bus Ride',
          ),
      ).length,
      label: 'Bus Ride',
    },
    {
      value: Object.keys(
        realm
          .objects('Activity')
          .sorted('yearAndMonth')
          .sorted('day')
          .filtered(
            'yearAndMonth == $0 AND day == $1 AND type == $2',
            route.params['year'].concat(
              '-',
              route.params['month'].length == 1
                ? '0' + route.params['month']
                : route.params['month'],
            ),
            route.params['day'],
            'Train Ride',
          ),
      ).length,
      label: 'Train Ride',
    },
  ]);

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
    setGraphData([
      {
        value: Object.keys(
          realm
            .objects('Activity')
            .sorted('yearAndMonth')
            .sorted('day')
            .filtered(
              'yearAndMonth == $0 AND day == $1 AND type == $2',
              route.params['year'].concat(
                '-',
                route.params['month'].length == 1
                  ? '0' + route.params['month']
                  : route.params['month'],
              ),
              route.params['day'],
              'Walking',
            ),
        ).length,
        label: 'Walking',
      },
      {
        value: Object.keys(
          realm
            .objects('Activity')
            .sorted('yearAndMonth')
            .sorted('day')
            .filtered(
              'yearAndMonth == $0 AND day == $1 AND type == $2',
              route.params['year'].concat(
                '-',
                route.params['month'].length == 1
                  ? '0' + route.params['month']
                  : route.params['month'],
              ),
              route.params['day'],
              'Running',
            ),
        ).length,
        label: 'Running',
      },
      {
        value: Object.keys(
          realm
            .objects('Activity')
            .sorted('yearAndMonth')
            .sorted('day')
            .filtered(
              'yearAndMonth == $0 AND day == $1 AND type == $2',
              route.params['year'].concat(
                '-',
                route.params['month'].length == 1
                  ? '0' + route.params['month']
                  : route.params['month'],
              ),
              route.params['day'],
              'Bicycling',
            ),
        ).length,
        label: 'Bicycling',
      },
      {
        value: Object.keys(
          realm
            .objects('Activity')
            .sorted('yearAndMonth')
            .sorted('day')
            .filtered(
              'yearAndMonth == $0 AND day == $1 AND type == $2',
              route.params['year'].concat(
                '-',
                route.params['month'].length == 1
                  ? '0' + route.params['month']
                  : route.params['month'],
              ),
              route.params['day'],
              'Car Ride',
            ),
        ).length,
        label: 'Car Ride',
      },
      {
        value: Object.keys(
          realm
            .objects('Activity')
            .sorted('yearAndMonth')
            .sorted('day')
            .filtered(
              'yearAndMonth == $0 AND day == $1 AND type == $2',
              route.params['year'].concat(
                '-',
                route.params['month'].length == 1
                  ? '0' + route.params['month']
                  : route.params['month'],
              ),
              route.params['day'],
              'Bus Ride',
            ),
        ).length,
        label: 'Bus Ride',
      },
      {
        value: Object.keys(
          realm
            .objects('Activity')
            .sorted('yearAndMonth')
            .sorted('day')
            .filtered(
              'yearAndMonth == $0 AND day == $1 AND type == $2',
              route.params['year'].concat(
                '-',
                route.params['month'].length == 1
                  ? '0' + route.params['month']
                  : route.params['month'],
              ),
              route.params['day'],
              'Train Ride',
            ),
        ).length,
        label: 'Train Ride',
      },
    ]);
  };
  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const renderItemIcon = style => <Icon {...style} name="file-outline" />;

  const renderItem = ({item, index}) => {
    const renderItemAccessory = style => (
      <Button
        status="danger"
        onPress={() => {
          realm.write(() => {
            let currentActivity = realm
              .objects('Activity')
              .filtered('timestamp == $0', item.timestamp);
            realm.delete(currentActivity);
          });
        }}>
        DELETE
      </Button>
    );

    let date = new Date(parseInt(item.timestamp));
    let hours = date.getHours();
    let minutes = '0' + date.getMinutes();
    let seconds = '0' + date.getSeconds();
    let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    return (
      <ListItem
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
        titleStyle={{fontSize: 18}}
        descriptionStyle={{fontSize: 14}}
        title={index + 1 + '. ' + item.type}
        description={formattedTime}
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
        <View style={{height: '37%'}}>
          <ScrollView>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Text style={{textAlign: 'center'}} appearance="hint">
                Each horizontal bar is representing the daily frequency for this
                activity
              </Text>
              <HorizontalBarChartWithTheYAxisNamed
                data={graphData}
                theme={themeContext.theme}
              />
            </View>
          </ScrollView>
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
