import {jStat} from 'jstat';
import {AutomaticActivityRecognitionRules} from '../components/AutomaticActivityRecognitionRules';

export const CalculateWindowFeatures = async (
  tenValuesOfAccelerometerX,
  tenValuesOfAccelerometerY,
  tenValuesOfAccelerometerZ,
  tenValuesOfGyroscopeX,
  tenValuesOfGyroscopeY,
  tenValuesOfGyroscopeZ,
  tenValuesOfMagnetometerX,
  tenValuesOfMagnetometerY,
  tenValuesOfMagnetometerZ,
) => {
  return AutomaticActivityRecognitionRules(
    jStat.mean(tenValuesOfAccelerometerY),
    jStat.mean(tenValuesOfAccelerometerZ),
    Math.sqrt(
      jStat.mean(jStat.pow(tenValuesOfAccelerometerX, 2)) +
        jStat.mean(jStat.pow(tenValuesOfAccelerometerY, 2)) +
        jStat.mean(jStat.pow(tenValuesOfAccelerometerZ, 2)),
    ),
    jStat.stdev(tenValuesOfAccelerometerX),
    jStat.stdev(tenValuesOfAccelerometerY),
    jStat.stdev(tenValuesOfAccelerometerZ),
    Math.sqrt(
      jStat.stdev(jStat.pow(tenValuesOfAccelerometerX, 2)) +
        jStat.stdev(jStat.pow(tenValuesOfAccelerometerY, 2)) +
        jStat.stdev(jStat.pow(tenValuesOfAccelerometerZ, 2)),
    ),
    jStat.max(tenValuesOfAccelerometerX),
    jStat.max(tenValuesOfAccelerometerY),
    jStat.max(tenValuesOfAccelerometerZ),
    Math.sqrt(
      jStat.max(jStat.pow(tenValuesOfAccelerometerX, 2)) +
        jStat.max(jStat.pow(tenValuesOfAccelerometerY, 2)) +
        jStat.max(jStat.pow(tenValuesOfAccelerometerZ, 2)),
    ),
    jStat.min(tenValuesOfAccelerometerX),
    jStat.min(tenValuesOfAccelerometerY),
    jStat.min(tenValuesOfAccelerometerZ),
    Math.sqrt(
      jStat.min(jStat.pow(tenValuesOfAccelerometerX, 2)) +
        jStat.min(jStat.pow(tenValuesOfAccelerometerY, 2)) +
        jStat.min(jStat.pow(tenValuesOfAccelerometerZ, 2)),
    ),
    jStat.range(tenValuesOfAccelerometerX),
    jStat.range(tenValuesOfAccelerometerY),
    jStat.range(tenValuesOfAccelerometerZ),
    Math.sqrt(jStat.mean(jStat.pow(tenValuesOfAccelerometerX, 2))),
    jStat.stdev(tenValuesOfGyroscopeY),
    jStat.stdev(tenValuesOfGyroscopeZ),
    jStat.max(tenValuesOfGyroscopeX),
    jStat.max(tenValuesOfGyroscopeY),
    jStat.max(tenValuesOfGyroscopeZ),
    jStat.min(tenValuesOfGyroscopeY),
    jStat.min(tenValuesOfGyroscopeZ),
    Math.sqrt(
      jStat.min(jStat.pow(tenValuesOfGyroscopeX, 2)) +
        jStat.min(jStat.pow(tenValuesOfGyroscopeY, 2)) +
        jStat.min(jStat.pow(tenValuesOfGyroscopeZ, 2)),
    ),
    Math.sqrt(jStat.mean(jStat.pow(tenValuesOfGyroscopeX, 2))),
    (jStat.sum(jStat.abs(tenValuesOfGyroscopeX)) +
      jStat.sum(jStat.abs(tenValuesOfGyroscopeY)) +
      jStat.sum(jStat.abs(tenValuesOfGyroscopeZ))) /
      10,
    jStat.mean(tenValuesOfMagnetometerZ),
    Math.sqrt(
      jStat.mean(jStat.pow(tenValuesOfMagnetometerX, 2)) +
        jStat.mean(jStat.pow(tenValuesOfMagnetometerY, 2)) +
        jStat.mean(jStat.pow(tenValuesOfMagnetometerZ, 2)),
    ),
    jStat.stdev(tenValuesOfMagnetometerZ),
    jStat.max(tenValuesOfMagnetometerY),
    Math.sqrt(
      jStat.max(jStat.pow(tenValuesOfMagnetometerX, 2)) +
        jStat.max(jStat.pow(tenValuesOfMagnetometerY, 2)) +
        jStat.max(jStat.pow(tenValuesOfMagnetometerZ, 2)),
    ),
    jStat.range(tenValuesOfMagnetometerX),
    jStat.range(tenValuesOfMagnetometerY),
    jStat.range(tenValuesOfMagnetometerZ),
    (jStat.sum(jStat.abs(tenValuesOfMagnetometerX)) +
      jStat.sum(jStat.abs(tenValuesOfMagnetometerY)) +
      jStat.sum(jStat.abs(tenValuesOfMagnetometerZ))) /
      10,
  );
  // let mean_accel_y = jStat.mean(tenValuesOfAccelerometerY);
  // let mean_accel_z = jStat.mean(tenValuesOfAccelerometerZ);
  // let mean_accel_smv = Math.sqrt(
  //   jStat.mean(jStat.pow(tenValuesOfAccelerometerX, 2)) +
  //     jStat.mean(jStat.pow(tenValuesOfAccelerometerY, 2)) +
  //     jStat.mean(jStat.pow(tenValuesOfAccelerometerZ, 2)),
  // );
  // let std_accel_x = jStat.stdev(tenValuesOfAccelerometerX);
  // let std_accel_y = jStat.stdev(tenValuesOfAccelerometerY);
  // let std_accel_z = jStat.stdev(tenValuesOfAccelerometerZ);
  // let std_accel_smv = Math.sqrt(
  //   jStat.stdev(jStat.pow(tenValuesOfAccelerometerX, 2)) +
  //     jStat.stdev(jStat.pow(tenValuesOfAccelerometerY, 2)) +
  //     jStat.stdev(jStat.pow(tenValuesOfAccelerometerZ, 2)),
  // );
  // let max_accel_x = jStat.max(tenValuesOfAccelerometerX);
  // let max_accel_y = jStat.max(tenValuesOfAccelerometerY);
  // let max_accel_z = jStat.max(tenValuesOfAccelerometerZ);
  // let max_accel_smv = Math.sqrt(
  //   jStat.max(jStat.pow(tenValuesOfAccelerometerX, 2)) +
  //     jStat.max(jStat.pow(tenValuesOfAccelerometerY, 2)) +
  //     jStat.max(jStat.pow(tenValuesOfAccelerometerZ, 2)),
  // );
  // let min_accel_x = jStat.min(tenValuesOfAccelerometerX);
  // let min_accel_y = jStat.min(tenValuesOfAccelerometerY);
  // let min_accel_z = jStat.min(tenValuesOfAccelerometerZ);
  // let min_accel_smv = Math.sqrt(
  //   jStat.min(jStat.pow(tenValuesOfAccelerometerX, 2)) +
  //     jStat.min(jStat.pow(tenValuesOfAccelerometerY, 2)) +
  //     jStat.min(jStat.pow(tenValuesOfAccelerometerZ, 2)),
  // );
  // let range_accel_x = jStat.range(tenValuesOfAccelerometerX);
  // let range_accel_y = jStat.range(tenValuesOfAccelerometerY);
  // let range_accel_z = jStat.range(tenValuesOfAccelerometerZ);
  // let rms_accel_x = Math.sqrt(
  //   jStat.mean(jStat.pow(tenValuesOfAccelerometerX, 2)),
  // );
  // let std_gyro_y = jStat.stdev(tenValuesOfGyroscopeY);
  // let std_gyro_z = jStat.stdev(tenValuesOfGyroscopeZ);
  // let max_gyro_x = jStat.max(tenValuesOfGyroscopeX);
  // let max_gyro_y = jStat.max(tenValuesOfGyroscopeY);
  // let max_gyro_z = jStat.max(tenValuesOfGyroscopeZ);
  // let min_gyro_y = jStat.min(tenValuesOfGyroscopeY);
  // let min_gyro_z = jStat.min(tenValuesOfGyroscopeZ);
  // let min_gyro_smv = Math.sqrt(
  //   jStat.min(jStat.pow(tenValuesOfGyroscopeX, 2)) +
  //     jStat.min(jStat.pow(tenValuesOfGyroscopeY, 2)) +
  //     jStat.min(jStat.pow(tenValuesOfGyroscopeZ, 2)),
  // );
  // let rms_gyro_x = Math.sqrt(jStat.mean(jStat.pow(tenValuesOfGyroscopeX, 2)));
  // let sma_gyro =
  //   (jStat.sum(jStat.abs(tenValuesOfGyroscopeX)) +
  //     jStat.sum(jStat.abs(tenValuesOfGyroscopeY)) +
  //     jStat.sum(jStat.abs(tenValuesOfGyroscopeZ))) /
  //   10;
  // let mean_magn_z = jStat.mean(tenValuesOfMagnetometerZ);
  // let mean_magn_smv = Math.sqrt(
  //   jStat.mean(jStat.pow(tenValuesOfMagnetometerX, 2)) +
  //     jStat.mean(jStat.pow(tenValuesOfMagnetometerY, 2)) +
  //     jStat.mean(jStat.pow(tenValuesOfMagnetometerZ, 2)),
  // );
  // let std_magn_z = jStat.stdev(tenValuesOfMagnetometerZ);
  // let max_magn_y = jStat.max(tenValuesOfMagnetometerY);
  // let max_magn_smv = Math.sqrt(
  //   jStat.max(jStat.pow(tenValuesOfMagnetometerX, 2)) +
  //     jStat.max(jStat.pow(tenValuesOfMagnetometerY, 2)) +
  //     jStat.max(jStat.pow(tenValuesOfMagnetometerZ, 2)),
  // );
  // let range_magn_x = jStat.range(tenValuesOfMagnetometerX);
  // let range_magn_y = jStat.range(tenValuesOfMagnetometerY);
  // let range_magn_z = jStat.range(tenValuesOfMagnetometerZ);
  // let sma_magn =
  //   (jStat.sum(jStat.abs(tenValuesOfMagnetometerX)) +
  //     jStat.sum(jStat.abs(tenValuesOfMagnetometerY)) +
  //     jStat.sum(jStat.abs(tenValuesOfMagnetometerZ))) /
  //   10;
  // return AutomaticActivityRecognitionRules(
  //   mean_accel_y,
  //   mean_accel_z,
  //   mean_accel_smv,
  //   std_accel_x,
  //   std_accel_y,
  //   std_accel_z,
  //   std_accel_smv,
  //   max_accel_x,
  //   max_accel_y,
  //   max_accel_z,
  //   max_accel_smv,
  //   min_accel_x,
  //   min_accel_y,
  //   min_accel_z,
  //   min_accel_smv,
  //   range_accel_x,
  //   range_accel_y,
  //   range_accel_z,
  //   rms_accel_x,
  //   std_gyro_y,
  //   std_gyro_z,
  //   max_gyro_x,
  //   max_gyro_y,
  //   max_gyro_z,
  //   min_gyro_y,
  //   min_gyro_z,
  //   min_gyro_smv,
  //   rms_gyro_x,
  //   sma_gyro,
  //   mean_magn_z,
  //   mean_magn_smv,
  //   std_magn_z,
  //   max_magn_y,
  //   max_magn_smv,
  //   range_magn_x,
  //   range_magn_y,
  //   range_magn_z,
  //   sma_magn,
  // );
};
