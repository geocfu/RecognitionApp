import React from 'react';
// import numjs from 'numjs';
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
  // mean_x.append(np.mean(ten_values_of_x))
  // mean_y.append(np.mean(ten_values_of_y))
  // mean_z.append(np.mean(ten_values_of_z))
  // smv = np.sqrt(np.mean(np.power(ten_values_of_x, 2)) \
  //     + np.mean(np.power(ten_values_of_y, 2)) \
  //     + np.mean(np.power(ten_values_of_z, 2)))
  // mean_smv.append(smv)
  // # save the std values of the last 10 axis values
  // std_x.append(np.std(ten_values_of_x))
  // std_y.append(np.std(ten_values_of_y))
  // std_z.append(np.std(ten_values_of_z))
  // smv = np.sqrt(np.std(np.power(ten_values_of_x, 2)) \
  //     + np.std(np.power(ten_values_of_y, 2)) \
  //     + np.std(np.power(ten_values_of_z, 2)))
  // std_smv.append(smv)
  // # save the max values of the last 10 axis values
  // max_x.append(np.max(ten_values_of_x))
  // max_y.append(np.max(ten_values_of_y))
  // max_z.append(np.max(ten_values_of_z))
  // smv = np.sqrt(np.max(np.power(ten_values_of_x, 2)) \
  //     + np.max(np.power(ten_values_of_y, 2)) \
  //     + np.max(np.power(ten_values_of_z, 2)))
  // max_smv.append(smv)
  // # save the min values of the last 10 axis values
  // min_x.append(np.min(ten_values_of_x))
  // min_y.append(np.min(ten_values_of_y))
  // min_z.append(np.min(ten_values_of_z))
  // smv = np.sqrt(np.min(np.power(ten_values_of_x, 2)) \
  //     + np.min(np.power(ten_values_of_y, 2)) \
  //     + np.min(np.power(ten_values_of_z, 2)))
  // min_smv.append(smv)
  // # save the range values of the last 10 axis values
  // range_x.append(np.ptp(ten_values_of_x))
  // range_y.append(np.ptp(ten_values_of_y))
  // range_z.append(np.ptp(ten_values_of_z))
  // smv = np.sqrt(np.ptp(np.power(ten_values_of_x, 2)) \
  //     + np.ptp(np.power(ten_values_of_y, 2)) \
  //     + np.ptp(np.power(ten_values_of_z, 2)))
  // range_smv.append(smv)
  // # save the rms values of the last 10 axis values
  // rms_x.append(np.sqrt(np.mean(np.power(ten_values_of_x, 2))))
  // rms_y.append(np.sqrt(np.mean(np.power(ten_values_of_y, 2))))
  // rms_z.append(np.sqrt(np.mean(np.power(ten_values_of_z, 2))))
  // smv = np.sqrt( rms_x[-1] + rms_y[-1] + rms_z[-1])
  // rms_smv.append(smv)
  // # save the sma values of the last 10 axis values
  // sma.append((np.sum(np.absolute(np.array(ten_values_of_x))) \
  //     + np.sum(np.absolute(np.array(ten_values_of_y))) \
  //     + np.sum(np.absolute(np.array(ten_values_of_z)))) / 10)
  // # save the entropy from the all the axises from fft values of the last 10 values
  // smv = np.sqrt(np.power(np.absolute(np.fft.fft(ten_values_of_x)), 2) \
  //     + np.power(np.absolute(np.fft.fft(ten_values_of_y)), 2) \
  //     + np.power(np.absolute(np.fft.fft(ten_values_of_z)), 2))
  // entropy_smv.append(entropy(smv))
  // # save the energy from the fft values of the last 10 axis values
  // smv = np.power(np.absolute(np.fft.fft(ten_values_of_x)), 2) \
  //     + np.power(np.absolute(np.fft.fft(ten_values_of_y)), 2) \
  //     + np.power(np.absolute(np.fft.fft(ten_values_of_z)), 2)
  // energy.append(np.sum(smv))
  // The ones not inside the numjs library
  // entropy
  // console.log(numjs.mean(tenValuesOfAccelerometerX));
  //   console.log(tenValuesOfAccelerometerX);
  //   console.log(tenValuesOfAccelerometerY);
  //   console.log(tenValuesOfAccelerometerZ);
  //   console.log(tenValuesOfGyroscopeX);
  //   console.log(tenValuesOfGyroscopeY);
  //   console.log(tenValuesOfGyroscopeZ);
  //   console.log(tenValuesOfMagnetometerX);
  //   console.log(tenValuesOfMagnetometerY);
  //   console.log(tenValuesOfMagnetometerZ);
};
