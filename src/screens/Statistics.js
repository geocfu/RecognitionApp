import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Icon,
  List,
  ListItem,
} from '@ui-kitten/components';
import realm from '../hooks/realm-database';

export const Statistics = ({navigation}) => {
  const [historyData, setHistoryData] = React.useState(null);

  //React.useEffect(() => {}, [realm.objects('Activity')]);

  const renderItemIcon = (style) => (
    <Icon {...style} name="file-text-outline" />
  );
  const renderItem = ({item, index}) => {
    let itemDate = new Date(item.time * 1000);
    let itemHours = itemDate.getHours();
    let itemMinutes = '0' + itemDate.getMinutes();
    let itemSeconds = '0' + itemDate.getSeconds();
    return (
      <ListItem
        style={{borderRadius: 8}}
        titleStyle={{fontSize: 18}}
        descriptionStyle={{fontSize: 14}}
        title={item.type}
        description={'item.time'}
        icon={renderItemIcon}
        onPress={() => console.log('hello')}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <Text category="h1">Graph</Text>
        <List data={realm.objects('Activity')} renderItem={renderItem} />
      </Layout>
    </SafeAreaView>
  );
};
