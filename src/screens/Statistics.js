import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  Layout,
  Text,
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

export const Statistics = ({navigation}) => {
  const [historyData, setHistoryData] = React.useState(
    realm
      .objects('Activity')
      .sorted('yearAndMonth')
      .filtered('TRUEPREDICATE DISTINCT(yearAndMonth)'),
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
        .filtered('TRUEPREDICATE DISTINCT(yearAndMonth)'),
    );
  };

  const renderItemIcon = (style) => <Icon {...style} name="folder" />;
  const renderItem = ({item}) => {
    let extractYear = item.yearAndMonth.substring(0, 4);
    let extractMonth = item.yearAndMonth.substring(5, 7).startsWith('0')
      ? item.yearAndMonth.substring(6, 7)
      : item.yearAndMonth.substring(5, 7);
    let numberOfStatisticsForThisMonthAndYear = realm
      .objects('Activity')
      .sorted('yearAndMonth')
      .filtered(
        'yearAndMonth == $0 AND day == $1',
        item.yearAndMonth,
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
        <View style={{alignItems: 'center'}}>
          <Text category="h1">Graph</Text>
          <Text style={{justifyContent: 'center'}} appearance="hint">
            Press on a month to view it's detailed statistics
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
