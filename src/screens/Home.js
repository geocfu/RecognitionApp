import React from 'react';
import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import {
  Text,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Toggle,
} from '@ui-kitten/components';
import {
  accelerometer,
  gyroscope,
  magnetometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

import VIForegroundService from '@voximplant/react-native-foreground-service';
import {CalculateWindowFeatures} from '../components/CalculateWindowFeatures';

const SettingsIcon = style => <Icon {...style} name="settings-outline" />;

const SettingsAction = props => (
  <TopNavigationAction {...props} icon={SettingsIcon} />
);

setUpdateIntervalForType(SensorTypes.accelerometer, 400);
setUpdateIntervalForType(SensorTypes.gyroscope, 400);
setUpdateIntervalForType(SensorTypes.magnetometer, 400);

var accelerometerX = [];
var accelerometerY = [];
var accelerometerZ = [];
var gyroscopeX = [];
var gyroscopeY = [];
var gyroscopeZ = [];
var magnetometerX = [];
var magnetometerY = [];
var magnetometerZ = [];

export const Home = ({navigation}) => {
  const [
    isTrackingActivityChecked,
    setIsTrackingActivityChecked,
  ] = React.useState(false);
  const [activityType, setActivityType] = React.useState('None');

  const [
    isAccelerometerDataReady,
    setIsAccelerometerDataReady,
  ] = React.useState(false);
  const [isGyroscopeDataReady, setIsGyroscopeDataReady] = React.useState(false);
  const [isMagnetometerDataReady, setIsMagnetometerDataReady] = React.useState(
    false,
  );

  React.useEffect(() => {
    // console.log('1.React.useEffect(): MOUNTED');

    const accelerometerSubscription = accelerometer.subscribe(({x, y, z}) => {
      if (accelerometerX.length < 10) {
        //console.log('A is not full yet.');
        if (x != 0 && x !== currentAccelerometerX) {
          currentAccelerometerX = x;
          accelerometerX.push(x);
          accelerometerY.push(y);
          accelerometerZ.push(z);
          // console.log('A, ' + x + ', ' + y + ', ' + z);
        }
      } else {
        //console.log('A is full.');
        setIsAccelerometerDataReady(true);
      }
    });
    const gyroscopeSubscription = gyroscope.subscribe(({x, y, z}) => {
      if (gyroscopeX.length < 10) {
        if (x != 0 && x !== currentGyroscopeX) {
          currentGyroscopeX = x;
          gyroscopeX.push(x);
          gyroscopeY.push(y);
          gyroscopeZ.push(z);
          // console.log('G, ' + x + ', ' + y + ', ' + z);
        }
      } else {
        setIsGyroscopeDataReady(true);
      }
    });
    const magnetometerSubscription = magnetometer.subscribe(({x, y, z}) => {
      if (magnetometerX.length < 10) {
        if (x != 0 && x !== currentMagnetometerX) {
          currentMagnetometerX = x;
          magnetometerX.push(x);
          magnetometerY.push(y);
          magnetometerZ.push(z);
          // console.log('M, ' + x + ', ' + y + ', ' + z);
        }
      } else {
        setIsMagnetometerDataReady(true);
      }
    });

    if (isTrackingActivityChecked === false) {
      accelerometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
      magnetometerSubscription.unsubscribe();
    }

    return () => {
      // console.log('1.React.useEffect(): UNMOUNTED');
      accelerometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
      magnetometerSubscription.unsubscribe();
    };
  }, [isTrackingActivityChecked]);

  React.useEffect(() => {
    // console.log('2.React.useEffect(): MOUNTED');
    if (
      isAccelerometerDataReady &&
      isGyroscopeDataReady &&
      isMagnetometerDataReady
    ) {
      CalculateWindowFeatures(
        accelerometerX,
        accelerometerY,
        accelerometerZ,
        gyroscopeX,
        gyroscopeY,
        gyroscopeZ,
        magnetometerX,
        magnetometerY,
        magnetometerZ,
      ).then(() => {
        accelerometerX.length = 0;
        accelerometerY.length = 0;
        accelerometerZ.length = 0;
        gyroscopeX.length = 0;
        gyroscopeY.length = 0;
        gyroscopeZ.length = 0;
        magnetometerX.length = 0;
        magnetometerY.length = 0;
        magnetometerZ.length = 0;
        setIsAccelerometerDataReady(false);
        setIsGyroscopeDataReady(false);
        setIsMagnetometerDataReady(false);
      });
    }
  }, [isAccelerometerDataReady, isGyroscopeDataReady, isMagnetometerDataReady]);

  var currentAccelerometerX = null;
  var currentGyroscopeX = null;
  var currentMagnetometerX = null;

  const renderSettingsAction = () => (
    <SettingsAction
      onPress={() => {
        navigation.navigate('Settings');
      }}
    />
  );

  const startService = async () => {
    if (Platform.Version >= 26) {
      const channelConfig = {
        id: 'ForegroundServiceChannel',
        name: 'Notification Channel',
        description: 'Notification Channel for Foreground Service',
        enableVibration: false,
        importance: 2,
      };
      await VIForegroundService.createNotificationChannel(channelConfig);
    }
    const notificationConfig = {
      id: 3456,
      title: 'Foreground Service',
      text: 'γεοψφθ',
      icon: 'ic_notification',
      priority: 0,
    };
    if (Platform.Version >= 26) {
      notificationConfig.channelId = 'ForegroundServiceChannel';
    }
    await VIForegroundService.startService(notificationConfig);
  };

  const stopService = async () => {
    await VIForegroundService.stopService();
  };

  const automaticActivityTracking = isChecked => {
    if (isChecked) {
      startService();
    } else {
      stopService();
    }
    setIsTrackingActivityChecked(isChecked);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation rightControls={renderSettingsAction()} />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">{activityType}</Text>
        <Toggle
          checked={isTrackingActivityChecked}
          onChange={automaticActivityTracking}
        />

        <Text>a walking</Text>
        <Text>b running</Text>
        <Text>c bicycling</Text>
        <Text>d car_riding</Text>
        <Text>e bus_riding</Text>
        <Text>f train_riding</Text>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
