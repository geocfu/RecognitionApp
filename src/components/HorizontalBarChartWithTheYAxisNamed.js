import React from 'react';
import {View} from 'react-native';
import {BarChart, Grid, YAxis} from 'react-native-svg-charts';
import * as scale from 'd3-scale';

import {Text} from '@ui-kitten/components';

export const HorizontalBarChartWithTheYAxisNamed = (props) => {
  const contentInset = {top: 10, bottom: 10};

  const gridStrokeColor = props.theme == 'dark' ? '#FFF' : '#000';

  return (
    <View style={{flexDirection: 'row', height: 200, paddingVertical: 16}}>
      <YAxis
        style={{paddingVertical: '3%'}}
        data={props.data}
        yAccessor={({index}) => index}
        scale={scale.scaleBand}
        contentInset={contentInset}
        spacing={0.2}
        formatLabel={(index) => (
          <Text style={{marginTop: 2, marginBottom: 2}}>
            {props.data[index].label}
          </Text>
        )}
      />
      <BarChart
        style={{flex: 1, marginLeft: 8}}
        data={props.data}
        horizontal={true}
        yAccessor={({item}) => item.value}
        svg={{fill: '#3366FF', fillOpacity: 0.97}}
        contentInset={contentInset}
        spacing={0.2}
        gridMin={0}>
        <Grid
          svg={{strokeWidth: 0.2, stroke: gridStrokeColor}}
          direction={Grid.Direction.VERTICAL}
        />
      </BarChart>
    </View>
  );
};
