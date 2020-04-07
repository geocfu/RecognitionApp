import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {
  Layout,
  Text,
  Icon,
  List,
  ListItem,
  Divider,
} from '@ui-kitten/components';
import realm from '../hooks/realm-database';
import {ThemeContext} from '../hooks/theme-context';
import {HorizontalBarChartWithTheYAxisNamed} from '../components/HorizontalBarChartWithTheYAxisNamed';

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

export const Statistics = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);

  const [historyData, setHistoryData] = React.useState(
    realm
      .objects('Activity')
      .sorted('yearAndMonth')
      .filtered('TRUEPREDICATE DISTINCT(yearAndMonth)'),
  );

  const [graphData, setGraphData] = React.useState([
    {
      value: Object.keys(
        realm.objects('Activity').filtered('type == $0', 'Walking'),
      ).length,
      label: 'Walking',
    },
    {
      value: Object.keys(
        realm.objects('Activity').filtered('type == $0', 'Running'),
      ).length,
      label: 'Running',
    },
    {
      value: Object.keys(
        realm.objects('Activity').filtered('type == $0', 'Bicycling'),
      ).length,
      label: 'Bicycling',
    },
    {
      value: Object.keys(
        realm.objects('Activity').filtered('type == $0', 'Car Ride'),
      ).length,
      label: 'Car Ride',
    },
    {
      value: Object.keys(
        realm.objects('Activity').filtered('type == $0', 'Bus Ride'),
      ).length,
      label: 'Bus Ride',
    },
    {
      value: Object.keys(
        realm.objects('Activity').filtered('type == $0', 'Train Ride'),
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
        .filtered('TRUEPREDICATE DISTINCT(yearAndMonth)'),
    );
    setGraphData([
      {
        value: Object.keys(
          realm.objects('Activity').filtered('type == $0', 'Walking'),
        ).length,
        label: 'Walking',
      },
      {
        value: Object.keys(
          realm.objects('Activity').filtered('type == $0', 'Running'),
        ).length,
        label: 'Running',
      },
      {
        value: Object.keys(
          realm.objects('Activity').filtered('type == $0', 'Bicycling'),
        ).length,
        label: 'Bicycling',
      },
      {
        value: Object.keys(
          realm.objects('Activity').filtered('type == $0', 'Car Ride'),
        ).length,
        label: 'Car Ride',
      },
      {
        value: Object.keys(
          realm.objects('Activity').filtered('type == $0', 'Bus Ride'),
        ).length,
        label: 'Bus Ride',
      },
      {
        value: Object.keys(
          realm.objects('Activity').filtered('type == $0', 'Train Ride'),
        ).length,
        label: 'Train Ride',
      },
    ]);
  };

  const renderItemIcon = style => <Icon {...style} name="folder" />;
  const renderItem = ({item}) => {
    let extractYear = item.yearAndMonth.substring(0, 4);
    let extractMonth = item.yearAndMonth.substring(5, 7).startsWith('0')
      ? item.yearAndMonth.substring(6, 7)
      : item.yearAndMonth.substring(5, 7);
    let numberOfStatisticsForThisMonthAndYear = realm
      .objects('Activity')
      .sorted('yearAndMonth')
      .filtered('yearAndMonth == $0', item.yearAndMonth)
      .filtered('TRUEPREDICATE DISTINCT(day)');
    return (
      <ListItem
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
        titleStyle={{fontSize: 18}}
        descriptionStyle={{fontSize: 14}}
        title={monthsOfTheYear[extractMonth - 1] + ' ' + extractYear}
        description={
          'Found statistics for ' +
          Object.keys(numberOfStatisticsForThisMonthAndYear).length +
          ' days'
        }
        icon={renderItemIcon}
        onPress={() =>
          navigation.navigate('StatisticsViewMonth', {
            month: extractMonth,
            year: extractYear,
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
      <Layout style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Text category="h3">Global Statistics</Text>
        </View>

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
                Each horizontal bar is representing the global frequency for
                this activity
              </Text>
              <HorizontalBarChartWithTheYAxisNamed
                data={graphData}
                theme={themeContext.theme}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={{textAlign: 'center', marginBottom: 1}} appearance="hint">
          Press on a month to view it's detailed statistics
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
