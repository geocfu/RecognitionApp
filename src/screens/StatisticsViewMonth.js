import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Icon,
  List,
  ListItem,
} from '@ui-kitten/components';
import realm from '../hooks/realm-database';

export const StatisticsViewMonth = ({navigation}) => {
  const [historyData, setHistoryData] = React.useState(
    realm.objects('Activity').filtered('TRUEPREDICATE DISTINCT(date)'),
  );

  React.useEffect(() => {
    // console.log(realm.objects('Activity'));
    // console.log(
    //   realm.objects('Activity').filtered('TRUEPREDICATE DISTINCT(date)'),
    // );
    realm.addListener('change', () => {
      setHistoryData(
        realm.objects('Activity').filtered('TRUEPREDICATE DISTINCT(date)'),
      );
    });

    return () => {
      realm.removeListener('change', () => {});
    };
  });

  const renderItemIcon = (style) => (
    <Icon {...style} name="file-text-outline" />
  );
  const renderItem = ({item, index}) => {
    console.log(index, item.type, item.date, item.time);
    let itemDate = new Date(item.time * 1000);
    let itemHours = itemDate.getHours();
    let itemMinutes = '0' + itemDate.getMinutes();
    let itemSeconds = '0' + itemDate.getSeconds();
    return (
      <ListItem
        style={{borderRadius: 8}}
        titleStyle={{fontSize: 18}}
        descriptionStyle={{fontSize: 14}}
        title={index + 1 + ' ' + item.type}
        description={'itemHours'}
        icon={renderItemIcon}
        onPress={() => console.log('hello')}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <Text category="h1">Graph</Text>
        <List data={historyData} renderItem={renderItem} />
      </Layout>
    </SafeAreaView>
  );
};
