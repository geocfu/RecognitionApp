import React from 'react';
import {Grid, LineChart, XAxis} from 'react-native-svg-charts';
import {View} from 'react-native';
import {Circle, Path} from 'react-native-svg';

export const LineChartWithTheXAxisNamed = props => {
  const gridStrokeColor = props.theme == 'dark' ? '#FFF' : '#000';
  const Decorator = ({x, y, data}) => {
    return props.data.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={'#3366FF'}
        fill={'white'}
      />
    ));
  };
  return (
    <View style={{height: 200, padding: 0, flexDirection: 'row'}}>
      <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
        <LineChart
          style={{flex: 1}}
          data={props.data}
          contentInset={{top: 10, bottom: 10}}
          svg={{stroke: '#3366FF'}}>
          <Grid svg={{strokeWidth: 0.1, stroke: gridStrokeColor}} />
          <Decorator />
        </LineChart>
        <XAxis
          style={{marginHorizontal: -10}}
          data={props.data}
          formatLabel={(value, index) => index + 1}
          contentInset={{left: 10, right: 10}}
          svg={{fontSize: 10, fill: gridStrokeColor}}
        />
      </View>
    </View>
  );
};
