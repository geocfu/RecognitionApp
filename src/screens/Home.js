import React from 'react';
import {SafeAreaView, Platform} from 'react-native';
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

setUpdateIntervalForType(SensorTypes.accelerometer, 400);
setUpdateIntervalForType(SensorTypes.gyroscope, 400);
setUpdateIntervalForType(SensorTypes.magnetometer, 400);

const SettingsIcon = style => <Icon {...style} name="settings-outline" />;

const SettingsAction = props => (
  <TopNavigationAction {...props} icon={SettingsIcon} />
);

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
  const [toggleText, setToggleText] = React.useState('Not Tracking');
  const [activityType, setActivityType] = React.useState('None');
  const [
    timerUntilNextAutomaticDetection,
    setTimerUntilNextAutomaticDetection,
  ] = React.useState(0);

  const [
    isAccelerometerDataReady,
    setIsAccelerometerDataReady,
  ] = React.useState(false);
  const [isGyroscopeDataReady, setIsGyroscopeDataReady] = React.useState(false);
  const [isMagnetometerDataReady, setIsMagnetometerDataReady] = React.useState(
    false,
  );

  React.useEffect(() => {
    var interval = setInterval(
      () => setTimerUntilNextAutomaticDetection(currentTime => currentTime + 1),
      1000,
    );
    const accelerometerSubscription = accelerometer.subscribe(({x, y, z}) => {
      if (accelerometerX.length < 10) {
        if (x != 0 && x !== currentAccelerometerX) {
          currentAccelerometerX = x;
          accelerometerX.push(x);
          accelerometerY.push(y);
          accelerometerZ.push(z);
        }
      } else {
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
        }
      } else {
        setIsMagnetometerDataReady(true);
      }
    });

    if (isTrackingActivityChecked === false) {
      accelerometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
      magnetometerSubscription.unsubscribe();
      clearInterval(interval);
      setTimerUntilNextAutomaticDetection(0);
      setActivityType('None');
    }

    return () => {
      accelerometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
      magnetometerSubscription.unsubscribe();

      accelerometerX.length = 0;
      accelerometerY.length = 0;
      accelerometerZ.length = 0;
      gyroscopeX.length = 0;
      gyroscopeY.length = 0;
      gyroscopeZ.length = 0;
      magnetometerX.length = 0;
      magnetometerY.length = 0;
      magnetometerZ.length = 0;
      clearInterval(interval);
      setTimerUntilNextAutomaticDetection(0);
      setActivityType('None');
    };
  }, [isTrackingActivityChecked]);

  React.useEffect(() => {
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
      ).then(activity => {
        accelerometerX.length = 0;
        accelerometerY.length = 0;
        accelerometerZ.length = 0;
        gyroscopeX.length = 0;
        gyroscopeY.length = 0;
        gyroscopeZ.length = 0;
        magnetometerX.length = 0;
        magnetometerY.length = 0;
        magnetometerZ.length = 0;
        setTimerUntilNextAutomaticDetection(0);
        setActivityType(activity);
        console.log(activity);

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
        id: 'RecognitionAppNotificationChannel',
        name: 'Notification Channel',
        description:
          'Notification Channel for RecognitionApp background Service',
        enableVibration: false,
        importance: 2,
      };
      await VIForegroundService.createNotificationChannel(channelConfig);
    }
    const notificationConfig = {
      id: 3456,
      title: 'RecognitionApp1',
      text: 'RecognitionApp background service is running',
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
      setToggleText('Tracking');
      startService();
    } else {
      setToggleText('Not Tracking');
      stopService();
    }
    setIsTrackingActivityChecked(isChecked);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation rightControls={renderSettingsAction()} />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h4">Current Activity</Text>
        <Text category="h3" style={{marginBottom: 50}}>
          {activityType}
        </Text>

        <Toggle
          textStyle={{color: '#3366FF', fontSize: 20}}
          text={toggleText}
          checked={isTrackingActivityChecked}
          onChange={automaticActivityTracking}
        />
        <Text style={{marginTop: 30, marginBottom: 10}}>
          Time taken to calculate the next sensor measurement
        </Text>
        <Text category="p1">{timerUntilNextAutomaticDetection}</Text>
      </Layout>
    </SafeAreaView>
  );
};
