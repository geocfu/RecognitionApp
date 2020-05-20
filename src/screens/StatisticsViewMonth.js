import React from 'react';
import {SafeAreaView, ScrollView, View, Dimensions} from 'react-native';
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
import {ThemeContext} from '../hooks/theme-context';

import {LineChartWithTheXAxisNamed} from '../components/LineChartWithTheXAxisNamed';

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

const BackIcon = style => <Icon {...style} name="arrow-back" />;

export const StatisticsViewMonth = ({route, navigation}) => {
  const themeContext = React.useContext(ThemeContext);

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

  const [isOrientationPortrait, setIsOrientationPortrait] = React.useState(
    () => {
      if (Dimensions.get('screen').height >= Dimensions.get('screen').width) {
        return true;
      } else {
        return false;
      }
    },
  );
  const monthSizeInDays = new Date(
    route.params['year'],
    route.params['month'] + 1,
    0,
  );
  const [graphData, setGraphData] = React.useState(
    //we create an empty array with the number of this month's days, as the size
    Array.from(Array(monthSizeInDays.getDate()), (element, index) => {
      let thisDayWasActive = 0;
      historyData.forEach(item => {
        if (index + 1 != item['day']) {
          return;
        } else {
          thisDayWasActive = 1;
        }
      });
      return thisDayWasActive;
    }),
  );

  const [co2Data, setCo2Data] = React.useState(() => {
    if (
      Object.keys(
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
          .filtered('type == $0', 'Car Ride'),
      ).length > 9000
    ) {
      return 'High';
    } else {
      return 'Low';
    }
  });

  React.useEffect(() => {
    Dimensions.addEventListener('change', updateUIFromDimensions);
    realm.addListener('change', updateUIFromRealmQuery);

    return () => {
      realm.removeListener('change', updateUIFromRealmQuery);
      Dimensions.removeEventListener('change', updateUIFromDimensions);
    };
  });

  const updateUIFromDimensions = () => {
    if (Dimensions.get('screen').height >= Dimensions.get('screen').width) {
      setIsOrientationPortrait(true);
    } else {
      setIsOrientationPortrait(false);
    }
  };

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

    setGraphData(
      Array.from(Array(monthSizeInDays.getDate()), (element, index) => {
        let thisDayWasActive = 0;
        historyData.forEach(item => {
          if (index + 1 != item['day']) {
            return;
          } else {
            thisDayWasActive = 1;
          }
        });
        return thisDayWasActive;
      }),
    );

    setCo2Data(() => {
      if (
        Object.keys(
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
            .filtered('type == $0', 'Car Ride'),
        ).length > 9000
      ) {
        return 'High';
      } else {
        return 'Low';
      }
    });
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const renderItemIcon = style => <Icon {...style} name="folder" />;
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
            height: '50%',
          }}>
          <Text style={{textAlign: 'center'}} category="h5">
            CO2 Footprint
          </Text>
          <Text style={{textAlign: 'center'}} category="h6">
            {co2Data}
          </Text>
          <ScrollView>
            <ScrollView horizontal={isOrientationPortrait}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Text style={{textAlign: 'center'}} appearance="hint">
                  Each peak is representing if that specific day of the month
                  was active
                </Text>
                <LineChartWithTheXAxisNamed
                  data={graphData}
                  theme={themeContext.theme}
                />
              </View>
            </ScrollView>
          </ScrollView>
        </View>

        <Text style={{textAlign: 'center', marginBottom: 1}} appearance="hint">
          Press on a day to view it's detailed statistics
        </Text>

        <List
          data={historyData}
          renderItem={renderItem}
          ItemSeparatorComponent={renderDivider}
        />
      </Layout>
    </SafeAreaView>
  );
};
