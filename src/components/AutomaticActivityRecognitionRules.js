import React from 'react';
export const AutomaticActivityRecognitionRules = (
  mean_accel_y,
  mean_accel_z,
  mean_accel_smv,
  std_accel_x,
  std_accel_y,
  std_accel_z,
  std_accel_smv,
  max_accel_x,
  max_accel_y,
  max_accel_z,
  max_accel_smv,
  min_accel_x,
  min_accel_y,
  min_accel_z,
  min_accel_smv,
  range_accel_x,
  range_accel_y,
  range_accel_z,
  rms_accel_x,
  std_gyro_y,
  std_gyro_z,
  max_gyro_x,
  max_gyro_y,
  max_gyro_z,
  min_gyro_y,
  min_gyro_z,
  min_gyro_smv,
  rms_gyro_x,
  sma_gyro,
  mean_magn_z,
  mean_magn_smv,
  std_magn_z,
  max_magn_y,
  max_magn_smv,
  range_magn_x,
  range_magn_y,
  range_magn_z,
  sma_magn,
) => {
  if (
    std_accel_smv > 6.606645 &&
    std_accel_z <= 5.947899 &&
    sma_gyro > 0.562692 &&
    std_accel_y <= 7.909196 &&
    mean_accel_y <= 2.113771 &&
    mean_accel_z <= 6.317671 &&
    max_accel_z > 0.462738 &&
    min_gyro_smv > 0.062699 &&
    mean_accel_y <= -6.17728 &&
    sma_magn <= 85.987549 &&
    mean_magn_smv <= 47.205959
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_accel_y <= 14.492432 &&
    sma_gyro > 0.562692 &&
    max_magn_smv > 40.996216 &&
    mean_accel_y <= 2.2381 &&
    std_accel_x > 2.716579 &&
    max_accel_z <= 7.56112 &&
    mean_accel_y > -7.993047 &&
    mean_accel_y > -1.662294
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_accel_z > 16.385916 &&
    sma_gyro > 1.250038 &&
    mean_accel_y > 2.412398 &&
    std_accel_x > 2.779753 &&
    min_accel_x <= -2.106962 &&
    max_accel_x > 8.667274
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_magn_smv > 40.016196 &&
    max_accel_y <= 15.27533 &&
    sma_gyro > 0.539624 &&
    mean_magn_z > -30.518219 &&
    mean_accel_y <= 5.116805 &&
    max_gyro_y > 1.215634 &&
    min_gyro_smv > 0.027762 &&
    min_accel_x <= -0.655441 &&
    mean_accel_y <= 2.043691 &&
    mean_magn_smv <= 69.73553 &&
    sma_gyro > 2.043028
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_magn_smv > 40.016196 &&
    std_accel_y > 5.497898 &&
    mean_accel_y <= 2.455493 &&
    sma_magn <= 108.335997 &&
    mean_accel_z > -2.96881
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    std_accel_y > 5.497898 &&
    std_gyro_z > 0.223008 &&
    min_accel_y <= -2.482863 &&
    mean_accel_y > 2.043691 &&
    max_accel_y > 15.210828 &&
    rms_accel_x > 3.801421 &&
    rms_gyro_x > 0.946484 &&
    min_accel_y <= -4.559757
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.439509 &&
    sma_gyro > 0.490739 &&
    std_accel_y <= 5.46388 &&
    max_magn_smv > 43.435421 &&
    mean_magn_z > -30.518219 &&
    std_accel_x > 2.978734 &&
    std_accel_z <= 5.954483 &&
    max_accel_y <= 8.68837 &&
    min_gyro_smv > 0.022615 &&
    mean_accel_z > 0.16305 &&
    sma_magn <= 81.170349
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    std_accel_y <= 5.356813 &&
    max_magn_smv > 43.435421 &&
    max_accel_z <= 9.227535 &&
    min_accel_z <= 0.595612 &&
    rms_accel_x > 7.552543 &&
    mean_accel_z <= 1.531139 &&
    mean_accel_y > -1.655231 &&
    std_magn_z <= 5.789372 &&
    range_magn_y <= 17.434998
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.562692 &&
    std_accel_y <= 5.356813 &&
    mean_magn_smv > 38.092408 &&
    max_accel_z <= 9.860321 &&
    min_accel_z <= 0.595612 &&
    rms_accel_x > 7.552543 &&
    mean_accel_y <= -1.005325 &&
    max_accel_z <= 7.175642 &&
    min_gyro_z > -1.09832 &&
    max_magn_y <= 32.312 &&
    range_magn_z <= 22.518002 &&
    std_gyro_z > 0.30426
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.562692 &&
    std_accel_y <= 5.356813 &&
    mean_magn_smv > 39.077387 &&
    max_accel_z <= 9.860321 &&
    min_accel_z <= 0.595612 &&
    std_accel_x > 2.853746 &&
    mean_accel_z <= 1.301967 &&
    rms_accel_x > 7.405374 &&
    max_magn_y > 32.312
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.562692 &&
    std_accel_y > 5.356813 &&
    mean_accel_z > 3.997721 &&
    mean_accel_y <= 11.121394 &&
    max_accel_y > 13.010489 &&
    range_magn_x > 8.424568
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    max_magn_smv > 43.930532 &&
    std_accel_z > 2.066234 &&
    mean_accel_y <= -1.350449 &&
    rms_accel_x > 7.36895 &&
    max_accel_z <= 7.076996 &&
    min_gyro_z <= -1.09832
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    max_magn_smv > 43.930532 &&
    std_accel_x <= 2.748177 &&
    mean_accel_z > 7.295013 &&
    std_accel_x <= 2.196418 &&
    std_accel_z > 1.682099 &&
    range_accel_y <= 9.306262 &&
    range_magn_z > 2.934265 &&
    std_accel_smv <= 9.141607 &&
    max_gyro_z > 0.301213 &&
    max_accel_y > 4.810272
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 1.134015 &&
    mean_accel_y > -4.939118 &&
    max_accel_smv <= 10.314481 &&
    std_accel_smv <= 0.619538 &&
    min_accel_z <= 9.853287
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    max_accel_smv <= 10.31438 &&
    min_accel_z <= -9.064636 &&
    rms_accel_x <= 2.526944
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    max_accel_smv <= 10.31438 &&
    mean_magn_z <= -44.36 &&
    min_accel_x <= -1.630451 &&
    min_accel_y <= 1.552872 &&
    min_accel_y > -0.675186
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    max_accel_smv <= 10.31438 &&
    sma_gyro > 0.006328 &&
    min_accel_y > 7.158882 &&
    min_accel_smv <= 9.663199 &&
    max_magn_smv > 31.831342
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    max_accel_smv <= 10.31438 &&
    sma_gyro > 0.006328 &&
    max_magn_smv <= 55.582812 &&
    mean_magn_z <= 8.7913 &&
    range_accel_y <= 1.016342 &&
    mean_accel_smv <= 9.804566 &&
    max_accel_x > -6.773197 &&
    rms_accel_x <= 6.413573 &&
    mean_accel_y <= 6.525277 &&
    std_accel_x <= 0.382593 &&
    std_accel_smv > 1.085616 &&
    mean_accel_smv <= 9.732357
  ) {
    return 'f';
  }

  if (
    max_accel_smv > 14.180251 &&
    std_gyro_y > 0.231752 &&
    max_magn_smv <= 40.032838 &&
    mean_accel_z <= 1.717174 &&
    min_accel_y <= 5.576096 &&
    range_magn_y > 3.683472 &&
    range_accel_x > 6.010643
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    mean_accel_z > 4.032195 &&
    rms_gyro_x <= 0.014576 &&
    mean_magn_smv > 53.078248 &&
    std_magn_z > 0.314447 &&
    mean_accel_y > -0.729633 &&
    std_gyro_y > 0.000925 &&
    std_gyro_z <= 0.007518
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.134015 &&
    mean_accel_y > -4.939118 &&
    rms_gyro_x <= 0.014576 &&
    min_accel_x <= -8.870789 &&
    max_accel_y <= 1.575385
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 1.134015 &&
    mean_accel_y > -4.939118 &&
    rms_gyro_x <= 0.014576 &&
    mean_magn_smv <= 54.386353 &&
    max_accel_y > 2.48159 &&
    mean_magn_smv > 19.285982 &&
    mean_accel_y <= 4.813929 &&
    max_magn_y > -32.5 &&
    max_accel_x > -0.276306 &&
    max_accel_smv > 10.309584 &&
    min_accel_x > -2.288857
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    mean_accel_z > 4.319511 &&
    mean_magn_z <= -47.842407 &&
    mean_accel_y <= 0.381756 &&
    min_accel_z <= 9.396045 &&
    min_accel_y <= -0.319626
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    mean_accel_z > 4.319511 &&
    max_accel_smv > 10.646196 &&
    min_accel_x > 4.629189 &&
    max_accel_z > 7.11339 &&
    mean_accel_y <= 3.148136
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    mean_accel_z > 4.319511 &&
    max_accel_smv > 10.64291 &&
    range_magn_x > 0.709534 &&
    min_gyro_smv <= 0.098452 &&
    sma_gyro > 0.031195 &&
    std_accel_x <= 1.116245 &&
    mean_accel_smv > 9.911272 &&
    mean_magn_z <= 18.695999 &&
    rms_accel_x > 0.369087 &&
    min_accel_y > 2.476802 &&
    mean_accel_z > 5.99698 &&
    min_accel_z <= 8.155849 &&
    max_magn_smv > 51.70235 &&
    mean_accel_z <= 8.500873 &&
    std_accel_y <= 0.94343
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    mean_accel_z > 4.319511 &&
    max_accel_smv > 10.646881 &&
    min_gyro_smv <= 0.098452 &&
    min_gyro_smv > 0.000894 &&
    range_magn_x <= 0.709534 &&
    mean_accel_z <= 9.138753 &&
    range_magn_y <= 1.167488 &&
    max_gyro_z > 0.014145 &&
    range_magn_x <= 0.649452
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 1.134015 &&
    max_accel_y > -3.672817 &&
    mean_accel_z > 4.319511 &&
    max_accel_smv > 10.646881 &&
    min_gyro_smv <= 0.098452 &&
    min_gyro_smv > 0.000894 &&
    std_gyro_z > 0.036311 &&
    max_magn_smv <= 46.348605 &&
    min_accel_x <= -0.228646 &&
    mean_accel_z <= 9.52957 &&
    std_gyro_y <= 0.240558 &&
    max_magn_y <= 21.256004 &&
    sma_magn > 21.005999 &&
    mean_magn_z <= 8.54 &&
    std_accel_x <= 1.019869 &&
    mean_accel_smv > 9.988308 &&
    min_accel_x <= -0.509965 &&
    min_accel_z > 4.922629
  ) {
    return 'e';
  }

  if (
    std_accel_smv <= 6.283571 &&
    mean_accel_y > -4.94271 &&
    max_accel_y <= 8.46855 &&
    min_accel_z > -0.713494 &&
    max_accel_smv > 10.64291 &&
    min_gyro_smv <= 0.108512 &&
    min_gyro_smv <= 0.000894 &&
    sma_magn <= 194.753997 &&
    max_gyro_x <= 0.015869 &&
    max_gyro_z > -0.000183 &&
    max_accel_x <= 1.632895
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.133082 &&
    max_accel_y > -3.672817 &&
    mean_accel_z > 3.864598 &&
    min_accel_x <= -0.634483 &&
    min_gyro_smv <= 0.104461 &&
    sma_gyro <= 0.024013 &&
    std_gyro_z <= 0.002834 &&
    max_accel_x <= 0.656031
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.133082 &&
    max_accel_y > -3.672817 &&
    min_accel_z > 2.021903 &&
    max_accel_smv > 10.64291 &&
    min_gyro_smv <= 0.098452 &&
    std_gyro_z > 0.028323 &&
    max_magn_smv <= 47.820753 &&
    mean_accel_y <= 7.188092 &&
    mean_accel_z <= 9.116008 &&
    min_accel_x <= -0.221573 &&
    rms_accel_x <= 1.755508 &&
    mean_magn_z <= -0.042 &&
    range_magn_z <= 4.388 &&
    sma_magn <= 67.0704 &&
    min_accel_z <= 8.195602 &&
    mean_magn_smv <= 40.401539 &&
    max_accel_x > -0.779313 &&
    max_accel_smv > 11.02721 &&
    std_accel_x <= 0.905586 &&
    range_magn_x > 1.528931 &&
    max_accel_x <= 0.9086
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.086676 &&
    mean_accel_y > -4.939118 &&
    min_accel_z > 2.021903 &&
    mean_accel_smv > 9.863848 &&
    rms_gyro_x <= 0.003085
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.086676 &&
    mean_accel_y > -4.939118 &&
    min_accel_z > 2.021903 &&
    mean_accel_smv > 9.862382 &&
    std_accel_y <= 0.047004 &&
    min_accel_y > 0.281319
  ) {
    return 'd';
  }

  if (
    std_accel_smv <= 6.298823 &&
    mean_accel_y > -4.94271 &&
    max_accel_y <= 8.46669 &&
    min_accel_z > -0.713494 &&
    max_accel_smv > 10.504015 &&
    max_accel_x <= 6.483765 &&
    min_gyro_smv <= 0.106058 &&
    mean_magn_smv > 58.833189 &&
    range_magn_y > 0.700005 &&
    range_magn_z > 1.344299 &&
    sma_gyro <= 0.666197 &&
    mean_accel_smv <= 10.218571 &&
    max_accel_x <= 3.246537
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.086676 &&
    mean_accel_y > -4.939118 &&
    min_accel_z > 2.021903 &&
    mean_accel_smv > 9.862382 &&
    std_accel_z <= 1.922451 &&
    max_accel_z <= 4.731087 &&
    range_accel_x <= 1.302486
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 1.086676 &&
    mean_accel_y > -4.939118 &&
    min_accel_z > 2.021903 &&
    mean_accel_smv > 9.862382 &&
    std_accel_z <= 1.922451 &&
    min_accel_x <= -0.384888 &&
    min_gyro_smv <= 0.108547 &&
    mean_magn_z > 9.063263 &&
    mean_accel_z <= 6.920919 &&
    range_accel_y <= 2.865947
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.086676 &&
    mean_accel_y > -4.939118 &&
    mean_magn_z <= 10.89 &&
    min_accel_x <= -0.588992 &&
    min_gyro_smv <= 0.103071 &&
    range_magn_x <= 0.709534 &&
    mean_magn_z > -34.133759 &&
    max_accel_z <= 9.943423
  ) {
    return 'f';
  }

  if (
    std_accel_smv > 6.298823 &&
    max_magn_smv > 40.016196 &&
    max_accel_z <= -1.256027 &&
    sma_gyro <= 1.056467 &&
    mean_accel_z > -6.878302
  ) {
    return 'c';
  }

  if (
    std_accel_smv > 6.346116 &&
    max_magn_smv > 40.016196 &&
    rms_gyro_x > 0.080934 &&
    std_accel_smv > 9.013853 &&
    mean_accel_y <= 1.713822 &&
    max_magn_y <= 33.801998 &&
    max_accel_z <= 7.232883 &&
    max_accel_x <= 13.247118
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    max_magn_smv > 40.016196 &&
    rms_gyro_x > 0.080934 &&
    std_accel_smv > 9.013853 &&
    mean_accel_y <= 1.713822 &&
    rms_accel_x > 7.903702 &&
    max_accel_z <= 7.076996 &&
    max_magn_y > -11.556999 &&
    max_magn_y > -1.737976 &&
    std_accel_y > 3.302541 &&
    min_accel_x <= 2.025495
  ) {
    return 'a';
  }

  if (
    std_accel_smv <= 6.346116 &&
    mean_accel_y > -4.94271 &&
    max_accel_y <= 8.46669 &&
    min_accel_z > -0.713494 &&
    min_accel_x <= -0.588992 &&
    min_gyro_smv <= 0.105422 &&
    mean_magn_z > 6.864 &&
    mean_accel_y > 7.099264 &&
    min_gyro_smv <= 0.020853
  ) {
    return 'd';
  }

  if (
    std_accel_smv <= 6.346116 &&
    mean_accel_y > -4.94271 &&
    mean_magn_z <= 16.9575 &&
    mean_accel_z > 3.883753 &&
    min_accel_x <= -0.634483 &&
    min_gyro_smv <= 0.104461 &&
    min_accel_x <= -8.067263
  ) {
    return 'e';
  }

  if (
    std_accel_smv > 6.346116 &&
    max_magn_smv > 40.016196 &&
    rms_gyro_x > 0.080934 &&
    std_accel_smv > 9.013853 &&
    mean_accel_y <= 1.713822 &&
    rms_accel_x <= 7.903702 &&
    max_magn_y > 10.306999 &&
    max_gyro_x > 1.641793 &&
    std_gyro_z <= 2.043123
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 1.133082 &&
    max_accel_y > -3.672817 &&
    mean_magn_z <= 16.584473 &&
    min_accel_x <= -0.383084 &&
    min_gyro_smv <= 0.103071 &&
    max_accel_y <= 0.590171 &&
    max_magn_smv <= 63.847237 &&
    max_gyro_z <= 0.078979 &&
    max_gyro_x <= 0.088698
  ) {
    return 'f';
  }

  if (
    std_accel_smv <= 6.346116 &&
    mean_accel_y > -4.94271 &&
    mean_magn_z <= 17.1863 &&
    min_accel_z > 2.043451 &&
    mean_accel_smv > 9.85819 &&
    min_accel_y > 0.488417 &&
    min_accel_x <= -0.433351 &&
    min_gyro_smv <= 0.105186 &&
    min_accel_z > 3.698486 &&
    mean_accel_y > 3.328806 &&
    max_magn_smv <= 54.401341 &&
    max_accel_x > -1.309052 &&
    std_accel_x <= 1.360489 &&
    mean_magn_z > -30.933301 &&
    mean_accel_y <= 6.83733 &&
    max_gyro_x > 0.016602 &&
    mean_magn_smv > 23.627874 &&
    std_gyro_z > 0.011512 &&
    mean_magn_z > 4.720501
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.133082 &&
    max_accel_y > -3.672817 &&
    min_accel_z > 0.016205 &&
    min_accel_x <= -0.383084 &&
    min_gyro_smv <= 0.098452 &&
    mean_magn_z <= 8.664 &&
    mean_magn_smv <= 48.544208 &&
    mean_accel_y > 3.504154 &&
    max_accel_x > -1.175553 &&
    mean_accel_smv > 9.824539 &&
    range_accel_z <= 7.540538 &&
    std_gyro_z > 0.011527 &&
    mean_accel_z > 6.589284 &&
    mean_magn_z > -30.933301 &&
    max_magn_smv > 21.929205 &&
    min_accel_x <= -0.66082 &&
    std_gyro_y <= 0.317376 &&
    std_magn_z <= 0.611674 &&
    max_accel_z <= 10.953807
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.086676 &&
    mean_accel_y > -4.939118 &&
    min_accel_z > 0.080856 &&
    std_accel_smv <= 3.532655 &&
    mean_magn_z <= -47.842407 &&
    range_magn_x > 1.147842 &&
    mean_magn_smv <= 236.536665 &&
    min_gyro_z > -0.347107 &&
    range_accel_y > 0.130484 &&
    range_accel_y <= 1.12767
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.967482 &&
    min_accel_z > -0.270553 &&
    std_accel_smv <= 3.223152 &&
    mean_accel_smv <= 9.862862 &&
    sma_gyro > 0.029346 &&
    max_accel_x > 5.747849 &&
    mean_magn_smv > 17.261709 &&
    max_accel_x > 7.108602
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.967482 &&
    min_accel_z > -0.270553 &&
    std_accel_smv <= 3.223152 &&
    max_accel_x > 5.231491 &&
    max_accel_z > 6.178237 &&
    max_gyro_y <= 0.253582
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 43.967482 &&
    min_accel_z > -0.270553 &&
    std_accel_smv <= 3.222427 &&
    min_accel_y <= -1.884294 &&
    max_accel_z <= 6.780106 &&
    max_magn_y <= 26.033592
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.967482 &&
    std_accel_smv <= 3.222427 &&
    mean_accel_z <= -8.914195 &&
    std_accel_y > 0.149586 &&
    max_accel_x <= 3.058593
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 43.967482 &&
    std_accel_smv <= 3.222427 &&
    max_magn_y <= 28.33252 &&
    mean_accel_smv <= 9.886332 &&
    mean_magn_z <= 5.352 &&
    min_accel_x > -0.33493 &&
    std_accel_z <= 0.468642 &&
    sma_magn <= 50.669999 &&
    mean_magn_z > -19.4145 &&
    mean_accel_z <= 8.76137
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.967482 &&
    max_magn_y <= 20.16 &&
    min_accel_z > -1.127669 &&
    std_accel_y <= 0.251136 &&
    mean_accel_smv <= 9.870816 &&
    min_accel_z > 8.652909 &&
    mean_magn_z <= 6.10878 &&
    range_accel_x > 0.093374 &&
    min_accel_x > -1.17868
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.967482 &&
    max_accel_smv <= 13.930034 &&
    max_magn_y <= 20.16 &&
    rms_gyro_x > 0.019239 &&
    mean_magn_z <= 6.9147 &&
    std_accel_smv > 3.204255 &&
    mean_accel_y <= 7.69935 &&
    mean_accel_y > 3.509289 &&
    std_gyro_z > 0.039165 &&
    std_gyro_y <= 0.239913 &&
    max_magn_smv > 23.234923 &&
    min_accel_x <= -0.184359 &&
    std_accel_x <= 1.466822 &&
    std_gyro_y <= 0.046096 &&
    min_gyro_smv > 0.001685
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.967482 &&
    max_accel_smv <= 13.930034 &&
    max_magn_y <= 17.879999 &&
    mean_magn_z <= 6.9147 &&
    sma_gyro > 0.049617 &&
    std_gyro_z <= 0.02381 &&
    mean_accel_z <= 8.839393 &&
    range_accel_z <= 3.033546 &&
    max_magn_y <= -27.252197 &&
    min_gyro_smv > 0.003718
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.967482 &&
    max_accel_smv <= 13.930034 &&
    max_magn_y <= 17.879999 &&
    mean_magn_z <= 6.9147 &&
    min_accel_z <= 8.309723 &&
    std_gyro_z > 0.023921 &&
    mean_accel_y <= 7.792646 &&
    range_accel_z <= 1.142044 &&
    max_gyro_y <= 0.065445 &&
    max_accel_z > 0.033371 &&
    range_magn_x <= 3.679001 &&
    mean_accel_smv > 9.807283
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.967482 &&
    max_accel_smv <= 13.930034 &&
    max_magn_y <= 17.879999 &&
    rms_gyro_x > 0.019239 &&
    mean_magn_z <= 6.864 &&
    max_accel_smv > 10.642138 &&
    mean_accel_y <= 7.718262 &&
    max_gyro_x <= 0.020538 &&
    min_gyro_smv > 0.001992 &&
    min_gyro_z > -0.044876
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.194769 &&
    max_accel_y <= -2.571373 &&
    max_magn_y <= 33.5
  ) {
    return 'd';
  }

  if (
    min_accel_z > 4.194769 &&
    max_accel_z <= 11.176475 &&
    max_magn_smv <= 51.157624 &&
    min_accel_y > 2.263947 &&
    max_accel_smv > 10.642138 &&
    rms_gyro_x > 0.02226 &&
    max_accel_x <= -1.251587 &&
    mean_magn_z <= 6.882 &&
    max_accel_z <= 10.075998 &&
    mean_magn_smv <= 36.79213 &&
    max_gyro_z <= 0.107268
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.194769 &&
    max_accel_z <= 11.176475 &&
    max_magn_smv <= 51.157624 &&
    min_accel_y > 2.263947 &&
    max_accel_smv > 10.642138 &&
    rms_gyro_x > 0.022567 &&
    mean_magn_z > -0.2285 &&
    max_magn_y <= 8.178001 &&
    mean_magn_z <= 20.3738 &&
    max_magn_smv > 21.163495 &&
    max_gyro_x > 0.008186 &&
    range_magn_z <= 11.400002 &&
    min_gyro_smv <= 0.062789 &&
    min_gyro_y > -0.413406 &&
    rms_accel_x <= 2.03175 &&
    range_magn_x > 2.849001
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    max_accel_z <= 11.176475 &&
    max_magn_smv <= 48.473959 &&
    mean_accel_smv <= 9.809179 &&
    std_accel_z <= 0.417177 &&
    min_accel_y <= 6.273132 &&
    min_accel_z <= 8.875306 &&
    max_magn_y > -22.514343 &&
    range_magn_z > 3.189087 &&
    std_gyro_z <= 0.05113 &&
    rms_gyro_x > 0.018722
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.741032 &&
    max_magn_smv <= 48.463844 &&
    rms_gyro_x > 0.019239 &&
    mean_magn_z <= 10.674 &&
    min_accel_y > 2.253013 &&
    mean_accel_smv > 9.877708 &&
    min_accel_x <= -0.232864 &&
    max_accel_y > 5.380968 &&
    range_magn_y <= 17.289734 &&
    mean_magn_z <= 0.78 &&
    min_gyro_smv <= 0.126415 &&
    range_accel_y <= 4.972908 &&
    rms_accel_x <= 1.805979 &&
    std_accel_y > 0.348171 &&
    mean_accel_y <= 6.59435 &&
    mean_accel_y > 4.408099
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.964771 &&
    mean_accel_y > 0.814116 &&
    max_accel_smv <= 13.619992 &&
    std_gyro_z > 0.014056 &&
    mean_magn_z <= 6.9147 &&
    max_magn_y <= 19.92 &&
    mean_accel_y <= 7.792646 &&
    mean_accel_y > 3.509289 &&
    mean_accel_smv <= 9.974562 &&
    std_accel_smv <= 3.133493 &&
    max_gyro_y > 0.065582 &&
    mean_accel_smv <= 9.864185 &&
    mean_accel_z > 1.717174 &&
    max_accel_z <= 7.228095 &&
    max_accel_y <= 7.846588
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    mean_magn_z > 9.852 &&
    max_gyro_x <= -0.003433 &&
    mean_accel_y > 3.371156
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    mean_magn_z > 9.852 &&
    max_accel_z > 8.001666 &&
    min_accel_x > -0.514753 &&
    range_magn_x <= 22.927002 &&
    sma_magn > 47.573999
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    mean_magn_z > 9.882 &&
    max_accel_x <= 4.437653 &&
    max_accel_z > 8.001666 &&
    min_accel_x <= -0.128204 &&
    max_magn_smv <= 135.499355 &&
    mean_magn_z > 20.8754 &&
    std_gyro_y > 0.031601
  ) {
    return 'd';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    max_gyro_y > 0.037323 &&
    std_gyro_z <= 0.03622 &&
    mean_accel_smv <= 9.921093 &&
    mean_accel_z > 8.461128 &&
    mean_magn_smv <= 54.23805 &&
    max_accel_x > -0.756591 &&
    max_accel_y <= 5.042984 &&
    sma_gyro > 0.051019 &&
    min_accel_x > -0.972046
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.102347 &&
    mean_accel_y > 0.814116 &&
    min_accel_z > -1.096817 &&
    rms_gyro_x > 0.019239 &&
    mean_magn_z <= 9.8378 &&
    max_accel_smv <= 13.459519 &&
    mean_accel_y > 3.28686 &&
    mean_accel_y <= 7.722864 &&
    max_magn_y > 18.569946 &&
    mean_magn_z > -16.596 &&
    min_accel_y <= 6.158676 &&
    mean_accel_smv <= 10.049978 &&
    mean_magn_z > -12.227051
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.964771 &&
    mean_accel_y > 0.814116 &&
    max_accel_smv <= 13.619992 &&
    std_gyro_z > 0.014056 &&
    mean_magn_z <= 6.9147 &&
    min_accel_z <= 8.354567 &&
    min_accel_y <= 7.145096 &&
    mean_accel_y > 3.82785 &&
    range_accel_z <= 1.126472 &&
    mean_accel_smv > 9.583026 &&
    mean_accel_smv <= 9.818929 &&
    max_gyro_y > 0.093992 &&
    std_accel_smv <= 3.802134 &&
    range_magn_z > 5.639997
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.1915 &&
    max_magn_y <= 20.172119 &&
    min_accel_z > -1.458113 &&
    mean_magn_z > 9.732 &&
    max_accel_smv > 10.136158 &&
    max_magn_y <= -27.558708
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.964771 &&
    mean_accel_y > 0.814116 &&
    max_accel_smv <= 13.619992 &&
    std_gyro_z > 0.014056 &&
    max_accel_x <= 6.553497 &&
    mean_magn_z <= 6.9147 &&
    min_accel_y <= 7.145096 &&
    min_accel_z <= 8.334471 &&
    std_gyro_y <= 0.207322 &&
    max_magn_y <= 19.639778 &&
    std_accel_x <= 1.329323 &&
    range_accel_z <= 1.124078 &&
    mean_accel_smv > 9.577045 &&
    std_gyro_y > 0.015963 &&
    max_accel_x > 0.59378 &&
    rms_accel_x <= 4.501642 &&
    max_gyro_x > 0.093059
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.089191 &&
    max_magn_y <= 20.172119 &&
    min_accel_z > -1.458113 &&
    mean_magn_z <= 9.732 &&
    std_gyro_z > 0.015993 &&
    std_accel_smv <= 6.710926 &&
    min_accel_z <= 8.334471 &&
    min_accel_y > 7.204803 &&
    mean_magn_z > -14.52306
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 43.089191 &&
    max_magn_y <= 20.172119 &&
    min_accel_z > -1.458113 &&
    mean_magn_z <= 9.732 &&
    std_gyro_z > 0.015993 &&
    std_accel_smv <= 6.710926 &&
    min_accel_z <= 8.334471 &&
    mean_accel_smv <= 9.949718 &&
    mean_accel_smv <= 9.453665 &&
    mean_accel_smv > 8.633824 &&
    std_accel_y > 0.248379 &&
    std_gyro_y <= 0.527756
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.734085 &&
    min_gyro_smv <= 0.103153 &&
    mean_magn_z <= -55.242634 &&
    mean_accel_y <= 5.928522 &&
    max_magn_y <= 29.843002
  ) {
    return 'd';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.734085 &&
    min_gyro_smv <= 0.103153 &&
    mean_accel_z <= 8.689542 &&
    max_magn_y > 35.476002 &&
    max_accel_x > -1.19351 &&
    max_accel_z > 7.403098
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.734085 &&
    min_gyro_smv <= 0.103153 &&
    mean_accel_z <= 8.689542 &&
    max_magn_smv <= 51.081045 &&
    min_accel_y > 2.015918 &&
    mean_magn_z <= -0.204 &&
    max_gyro_z > 0.010898 &&
    mean_accel_smv > 9.975132 &&
    max_accel_x <= 1.483208 &&
    min_accel_smv > 6.25456 &&
    std_gyro_z > 0.094459
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.099214 &&
    max_magn_y <= 20.172119 &&
    min_accel_z > -1.179144 &&
    mean_magn_z > 9.882 &&
    max_accel_smv > 10.010175 &&
    mean_magn_z <= 24.760616 &&
    max_magn_y <= 7.745552 &&
    mean_magn_z <= 19.6391 &&
    max_magn_y > -17.080688 &&
    max_gyro_y > 0.240227
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 43.964771 &&
    mean_accel_y > 0.814116 &&
    max_accel_smv <= 13.619992 &&
    std_gyro_z > 0.014056 &&
    mean_magn_z <= 6.9147 &&
    min_accel_z <= 8.354567 &&
    mean_accel_y <= 7.69935 &&
    mean_accel_y > 3.82785 &&
    std_gyro_y <= 0.239837 &&
    std_accel_x <= 1.329323 &&
    max_accel_x > -0.914613 &&
    mean_magn_smv > 20.901661 &&
    max_magn_y <= 20.16 &&
    std_gyro_z > 0.06465 &&
    min_accel_x <= -0.751779 &&
    range_accel_y <= 3.902557 &&
    std_gyro_y <= 0.122011 &&
    sma_gyro > 0.223936
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.099214 &&
    max_magn_y <= 20.172119 &&
    min_accel_z > -1.179144 &&
    rms_gyro_x > 0.019239 &&
    max_accel_smv <= 13.459519 &&
    mean_accel_z <= 8.801594 &&
    max_accel_x <= 6.290146 &&
    mean_accel_z <= 1.891238 &&
    min_accel_y <= 5.190629 &&
    mean_magn_z > -25.349999
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    rms_gyro_x > 0.030129 &&
    max_magn_smv <= 51.157624 &&
    mean_accel_y > 3.286028 &&
    mean_magn_smv > 21.826087 &&
    max_magn_y <= -29.514503 &&
    max_magn_y > -39.463806 &&
    range_magn_x <= 14.418999
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    rms_gyro_x > 0.030129 &&
    max_magn_smv <= 51.157624 &&
    mean_accel_y > 3.286028 &&
    mean_magn_smv > 21.826087 &&
    mean_magn_z <= -33.162 &&
    max_magn_y > 11.274002 &&
    mean_accel_y > 4.690241
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    rms_gyro_x > 0.030129 &&
    max_magn_smv <= 51.157624 &&
    mean_magn_z <= -33.162 &&
    sma_magn > 56.5066 &&
    max_magn_y <= 11.274002 &&
    mean_magn_smv > 42.563091
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.596358 &&
    max_accel_y > 1.593341 &&
    rms_gyro_x <= 0.019239 &&
    max_accel_y <= 2.229797 &&
    mean_magn_smv <= 31.371313
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.596358 &&
    max_accel_y > 1.593341 &&
    sma_gyro <= 0.040918 &&
    min_gyro_smv > 0.000389 &&
    mean_accel_y <= 4.952406 &&
    max_accel_y > 2.300898 &&
    range_magn_x > 0.695929 &&
    min_gyro_z <= 0.003299 &&
    max_gyro_z <= 0.036713 &&
    std_accel_x > 0.086994 &&
    mean_accel_smv > 9.656936
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 41.596358 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    min_gyro_smv > 0.000378 &&
    min_accel_z > -0.442941 &&
    max_accel_x <= -1.3414 &&
    max_magn_y <= 12.609001 &&
    mean_accel_z <= 8.666531 &&
    min_accel_smv > 8.441403 &&
    sma_magn > 40.871999
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.051265 &&
    std_gyro_z <= 0.006285 &&
    max_magn_smv <= 63.417628 &&
    sma_gyro <= 0.018254 &&
    min_accel_y <= 4.260482
  ) {
    return 'd';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.051265 &&
    max_accel_smv <= 10.052913 &&
    mean_accel_z <= 9.887694 &&
    mean_accel_smv <= 9.803238 &&
    range_accel_y <= 0.948133 &&
    range_accel_x > 0.065841 &&
    min_gyro_smv > 0.000466 &&
    range_magn_z <= 4.914001 &&
    max_accel_x > -0.608146
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.051265 &&
    max_magn_smv <= 55.319335 &&
    mean_accel_z <= 8.80336 &&
    range_magn_z <= 3.483582 &&
    range_magn_z <= 0.709915 &&
    sma_magn > 28.373999
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.051265 &&
    mean_accel_z <= 8.73309 &&
    mean_magn_smv <= 46.250683 &&
    range_magn_z <= 3.483582 &&
    range_magn_y > 0.712395 &&
    max_gyro_z <= 0.005508 &&
    rms_gyro_x <= 0.019075
  ) {
    return 'd';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.051265 &&
    max_magn_smv <= 55.319335 &&
    mean_accel_z <= 8.73309 &&
    range_magn_z <= 3.483582 &&
    range_magn_y > 0.712395 &&
    mean_magn_smv > 21.828169 &&
    max_magn_y <= 20.327995 &&
    range_magn_x <= 11.248779 &&
    mean_magn_z > 3.452301 &&
    max_magn_y <= -0.169373 &&
    mean_magn_z <= 18.1624
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.103153 &&
    mean_magn_z <= 1.8852 &&
    mean_accel_z <= 8.718991 &&
    mean_accel_y > 3.208589 &&
    max_magn_y > -27.877235 &&
    min_accel_x <= -4.103394 &&
    mean_magn_smv <= 39.052302 &&
    std_gyro_z <= 0.08421
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.173221 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.051265 &&
    mean_magn_z <= 3.4725 &&
    mean_accel_z <= 8.73309 &&
    max_magn_y <= 27.146 &&
    sma_magn <= 74.3933 &&
    std_gyro_y <= 0.224309 &&
    mean_magn_z <= -33.085175 &&
    max_magn_smv > 39.673794 &&
    sma_magn > 54.665999 &&
    std_gyro_z <= 0.053815
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    mean_magn_z <= 6.9147 &&
    mean_magn_smv <= 38.954426 &&
    mean_accel_smv <= 9.966647 &&
    mean_accel_y > 3.286028 &&
    min_accel_x <= -0.2742 &&
    std_accel_y <= 1.155217 &&
    min_gyro_y > -0.002869 &&
    min_accel_z > 5.905029 &&
    max_gyro_z <= 0.152634
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    mean_magn_z <= 6.9147 &&
    mean_magn_smv <= 38.954426 &&
    mean_accel_smv <= 9.966647 &&
    mean_accel_y > 3.286028 &&
    min_accel_x <= -0.288501 &&
    std_accel_y <= 1.155217 &&
    std_gyro_y <= 0.239837 &&
    std_accel_x > 1.286986 &&
    min_gyro_smv <= 0.033847 &&
    min_accel_x <= -1.561067 &&
    range_magn_y <= 5.90992
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    mean_magn_z <= 6.9147 &&
    mean_magn_smv <= 38.954426 &&
    mean_accel_smv <= 9.966647 &&
    mean_accel_y > 3.286028 &&
    min_accel_x <= -0.288501 &&
    std_accel_y <= 1.155217 &&
    std_gyro_y <= 0.239837 &&
    sma_gyro > 0.402925 &&
    mean_magn_smv > 14.464848 &&
    mean_accel_smv <= 9.949315 &&
    std_gyro_z <= 0.320597
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.630677 &&
    min_gyro_smv <= 0.052778 &&
    mean_magn_z <= 3.4725 &&
    mean_accel_z <= 8.73309 &&
    max_magn_y <= 27.146 &&
    sma_magn <= 74.3933 &&
    std_gyro_y <= 0.224309 &&
    sma_magn > 17.38208 &&
    min_gyro_z <= -0.015129 &&
    max_gyro_y <= 0.056139 &&
    max_accel_x > -0.837996 &&
    range_accel_x <= 2.104507 &&
    max_accel_x <= -0.274765 &&
    max_accel_z <= 9.445126 &&
    std_accel_z <= 0.43589
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    mean_magn_z <= 6.9147 &&
    mean_magn_smv <= 38.954426 &&
    mean_accel_smv <= 9.966647 &&
    mean_accel_y > 3.286028 &&
    min_accel_x <= -0.2742 &&
    std_accel_y <= 1.155217 &&
    mean_accel_smv > 9.491723 &&
    range_magn_z <= 3.372192 &&
    range_magn_y <= 0.622368 &&
    mean_magn_z > -26.459999 &&
    max_accel_x > -0.573395
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    mean_magn_z <= 6.9147 &&
    mean_magn_smv <= 38.954426 &&
    mean_accel_smv <= 9.966647 &&
    mean_accel_y > 3.286028 &&
    min_accel_x <= -0.2742 &&
    std_accel_y <= 1.155217 &&
    mean_accel_smv > 9.491723 &&
    range_magn_z <= 3.372192 &&
    min_gyro_z <= -0.01413 &&
    range_accel_z > 1.083389 &&
    mean_magn_smv > 24.045719 &&
    mean_accel_y > 3.955534 &&
    sma_magn > 38.779999 &&
    range_magn_z <= 2.788162 &&
    mean_magn_z > -25.613999 &&
    mean_accel_y <= 6.308914 &&
    mean_magn_z > -22.506 &&
    std_gyro_z > 0.043244
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.194769 &&
    std_accel_smv <= 6.674064 &&
    min_gyro_smv <= 0.063132 &&
    mean_magn_z <= 3.3439 &&
    mean_accel_smv <= 9.865658 &&
    range_magn_y <= 14.397003 &&
    mean_accel_z <= 8.967363 &&
    max_magn_smv <= 48.41171 &&
    std_gyro_y > 0.21349 &&
    std_accel_z <= 0.427827 &&
    std_accel_y > 0.21016 &&
    mean_magn_z <= -0.522
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    mean_magn_z <= 6.9147 &&
    mean_magn_smv <= 38.954426 &&
    max_magn_y <= 17.524719 &&
    mean_accel_smv <= 9.966647 &&
    min_accel_z <= 8.65863 &&
    std_accel_y <= 1.087434 &&
    range_magn_z > 3.372192 &&
    max_accel_y > 8.703247 &&
    mean_magn_smv > 32.736408
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_accel_y > 1.593341 &&
    std_accel_smv <= 6.923187 &&
    mean_accel_z > 5.840489 &&
    mean_accel_z <= 8.815294 &&
    mean_magn_z <= -0.09 &&
    range_magn_z <= 3.372192 &&
    mean_accel_smv > 9.779725 &&
    max_magn_y <= 19.359001 &&
    max_magn_y > -1.002884 &&
    mean_magn_z <= -4.8091 &&
    min_accel_z <= 7.533096 &&
    range_magn_z > 1.470947
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 41.460738 &&
    max_magn_y <= 24 &&
    mean_accel_y > 1.274314 &&
    min_accel_z > -0.191542 &&
    mean_accel_smv <= 9.952922 &&
    range_magn_y <= 0.712395 &&
    range_magn_y <= 0.398636
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 41.460738 &&
    min_accel_y > -4.639963 &&
    max_accel_y <= 10.659317 &&
    mean_magn_z <= 5.9375 &&
    std_accel_smv <= 6.927757 &&
    min_accel_z <= 8.329428 &&
    mean_accel_smv <= 9.955921 &&
    std_accel_y <= 1.087434 &&
    min_accel_x <= -0.2742 &&
    range_magn_z > 2.888489 &&
    max_accel_z > 9.825256 &&
    range_accel_x > 0.77213 &&
    rms_gyro_x > 0.034886 &&
    std_accel_z > 0.845802
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_smv <= 6.674064 &&
    min_gyro_smv <= 0.052778 &&
    mean_accel_smv <= 9.964981 &&
    sma_magn > 100.333405 &&
    max_accel_z > 7.23071 &&
    min_accel_x > -4.394557
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.280289 &&
    std_accel_smv <= 6.630677 &&
    max_magn_smv <= 49.186423 &&
    min_accel_y > 2.253013 &&
    mean_accel_smv <= 9.974592 &&
    mean_magn_z <= 0.522 &&
    mean_accel_z <= 8.689542 &&
    mean_magn_smv <= 39.342009 &&
    mean_accel_smv > 9.514121 &&
    range_magn_z > 2.668762 &&
    range_accel_z > 2.843115 &&
    min_accel_x > -3.421419
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.219519 &&
    min_accel_smv > 6.684788 &&
    min_gyro_smv <= 0.109107 &&
    mean_accel_smv <= 9.881239 &&
    mean_magn_z <= 6.93 &&
    min_accel_z > 8.652909 &&
    max_accel_x > -2.025864 &&
    mean_accel_smv <= 9.837261 &&
    sma_magn > 63.146515 &&
    range_magn_x > 1.469803
  ) {
    return 'f';
  }

  if (
    min_accel_z > 5.219519 &&
    min_accel_smv > 6.684788 &&
    min_gyro_smv <= 0.109107 &&
    max_magn_smv <= 50.059598 &&
    mean_accel_z <= 8.80336 &&
    mean_accel_y <= 6.624756 &&
    mean_magn_smv > 21.808946 &&
    max_gyro_x > 0.012527 &&
    mean_magn_z <= 9.012 &&
    rms_accel_x > 3.898213 &&
    mean_accel_z <= 8.30119
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.219519 &&
    min_accel_smv > 6.684788 &&
    min_gyro_smv <= 0.109107 &&
    max_magn_smv <= 50.059598 &&
    mean_accel_z <= 8.80336 &&
    mean_accel_y <= 6.624756 &&
    max_magn_smv > 24.029232 &&
    max_gyro_x > 0.01273 &&
    mean_accel_smv > 9.964981 &&
    range_magn_y > 0.724602 &&
    mean_accel_smv > 10.178652
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.219519 &&
    std_accel_z <= 1.224384 &&
    min_gyro_smv <= 0.115214 &&
    max_magn_smv <= 53.727459 &&
    mean_accel_z <= 8.73309 &&
    mean_magn_z <= 1.332 &&
    std_magn_z > 0.909377 &&
    min_accel_y > 3.050306 &&
    mean_accel_smv <= 10.089676 &&
    max_gyro_z > 0.016907 &&
    std_accel_x > 0.682475 &&
    max_magn_y <= -21.127319 &&
    std_gyro_z > 0.052291
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.219519 &&
    std_accel_z <= 1.224384 &&
    min_gyro_smv <= 0.115214 &&
    max_magn_smv <= 53.727459 &&
    mean_accel_z <= 8.73309 &&
    mean_magn_z <= 1.332 &&
    std_magn_z > 0.909377 &&
    min_accel_y > 2.770889 &&
    mean_accel_smv <= 10.040227 &&
    std_accel_x > 0.720089 &&
    range_accel_y <= 2.936488 &&
    min_gyro_smv <= 0.091106
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_magn_y <= 24.53289 &&
    mean_accel_smv <= 10.54297 &&
    max_accel_y > 1.743301 &&
    max_accel_y <= 10.23313 &&
    mean_magn_z <= 6.9147 &&
    min_accel_x <= -0.337582 &&
    min_gyro_smv <= 0.052778 &&
    range_magn_z <= 0.709915 &&
    std_gyro_y <= 0.162024 &&
    min_accel_y > -0.742203
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_magn_y <= 24.53289 &&
    mean_accel_smv <= 10.54297 &&
    max_accel_y > 1.743301 &&
    max_accel_y <= 10.23313 &&
    mean_magn_z <= 6.9147 &&
    min_accel_x <= -0.337582 &&
    min_gyro_smv <= 0.052778 &&
    max_accel_y > 3.239685 &&
    std_gyro_z > 0.02241 &&
    max_magn_smv > 23.344808 &&
    min_gyro_smv > 0.003115 &&
    max_accel_z > 11.777438 &&
    range_magn_z <= 14.167023
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.229096 &&
    max_accel_z <= 11.327314 &&
    min_gyro_smv <= 0.109107 &&
    max_magn_smv <= 50.095833 &&
    min_accel_z <= 8.38475 &&
    mean_accel_z > 7.177557 &&
    std_accel_z <= 0.670088 &&
    max_gyro_x > 0.012817 &&
    std_accel_x > 0.889564 &&
    mean_magn_z <= 7.7952 &&
    mean_magn_smv <= 43.401171 &&
    min_accel_y <= 3.680679
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.305754 &&
    max_magn_y <= 24.53289 &&
    max_accel_smv <= 13.775681 &&
    max_accel_z <= -1.522712 &&
    min_accel_z > -9.124908 &&
    min_accel_y <= 1.93218
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.857984 &&
    std_accel_smv <= 6.618604 &&
    min_gyro_smv <= 0.109107 &&
    max_magn_smv <= 49.508425 &&
    max_magn_y <= 17.436218 &&
    mean_accel_y > 3.280635 &&
    mean_magn_smv > 21.826087 &&
    mean_magn_z <= 9.912 &&
    min_accel_smv > 9.562412 &&
    mean_accel_z <= 8.770708
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.857984 &&
    std_accel_smv <= 6.618604 &&
    min_gyro_smv <= 0.109107 &&
    max_magn_smv <= 49.508425 &&
    max_magn_y <= 17.436218 &&
    min_accel_z <= 8.503007 &&
    mean_accel_smv <= 9.973833 &&
    mean_magn_z <= 4.332 &&
    std_magn_z <= 0.682657 &&
    max_accel_x > -0.984047 &&
    mean_accel_y > 4.740593 &&
    std_accel_x <= 0.657144 &&
    range_magn_x <= 6.459808 &&
    sma_magn <= 31.440001 &&
    mean_magn_z > -15.978
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.857984 &&
    std_accel_smv <= 6.618604 &&
    min_gyro_smv <= 0.109107 &&
    max_magn_smv <= 49.508425 &&
    std_gyro_z <= 0.014056 &&
    max_gyro_y > 0.022995 &&
    mean_accel_z <= 8.622262 &&
    max_accel_z <= 10.691308 &&
    max_accel_y <= 6.62017 &&
    mean_accel_smv <= 9.89768
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    min_accel_y <= -3.869148 &&
    sma_gyro > 0.794534 &&
    max_accel_y <= 9.900345 &&
    mean_accel_z <= 8.211405 &&
    mean_accel_z > -2.842636 &&
    max_magn_y > -23.995972 &&
    min_accel_x <= 2.831144 &&
    max_gyro_x > 0.617704
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_y <= -6.389765 &&
    max_magn_y <= 15.839999 &&
    mean_accel_z > 0.117671
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_y <= -6.389765 &&
    max_accel_x <= 7.91164 &&
    max_gyro_z <= 0.440125 &&
    range_accel_x <= 6.452377 &&
    max_magn_y > 14.749146 &&
    std_accel_z > 0.123788
  ) {
    return 'c';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    std_gyro_z <= 0.014056 &&
    min_accel_x > -0.320679 &&
    mean_magn_z <= -11.694 &&
    mean_accel_y > 1.418325
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    mean_accel_z <= 9.320511 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    mean_accel_y <= 6.831364 &&
    max_gyro_x <= 0.012817 &&
    std_accel_y <= 0.403915 &&
    std_gyro_z <= 0.04503
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    mean_accel_y <= 6.831364 &&
    mean_magn_z <= 11.29776 &&
    mean_accel_z <= 8.730935 &&
    mean_magn_z <= -31.469999 &&
    range_magn_x <= 7.77626 &&
    mean_accel_y > 4.778254
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    mean_accel_z <= 9.320511 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    mean_accel_y <= 7.722864 &&
    std_gyro_y <= 0.106661 &&
    mean_magn_z <= 8.4 &&
    rms_accel_x > 6.943917 &&
    mean_accel_y > 4.697903
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    mean_accel_z <= 9.320511 &&
    max_accel_z <= 11.868988 &&
    mean_accel_y > 8.002826 &&
    mean_accel_y <= 8.474775
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    std_gyro_y <= 0.106076 &&
    mean_magn_z <= 11.29776 &&
    range_magn_y > 15.36 &&
    std_accel_smv <= 4.948341
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    std_gyro_y <= 0.106076 &&
    range_magn_y > 15.208054 &&
    max_gyro_y <= 0.137832
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    std_gyro_y <= 0.106076 &&
    mean_magn_z <= 11.29776 &&
    rms_gyro_x <= 0.015649 &&
    min_accel_x > -2.413727 &&
    max_gyro_z > 0.019426
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    mean_accel_z <= 8.730935 &&
    std_gyro_y <= 0.106638 &&
    rms_gyro_x <= 0.010586 &&
    max_accel_z > 7.79776
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    mean_accel_z <= 8.730935 &&
    std_gyro_y <= 0.136786 &&
    mean_magn_z > 18.5574 &&
    mean_magn_z > 22.6675
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078279 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    mean_accel_z <= 8.730935 &&
    std_gyro_y <= 0.136786 &&
    mean_magn_z <= 11.29776 &&
    std_gyro_z > 0.032464 &&
    std_gyro_y <= 0.051311 &&
    mean_accel_y <= 6.587368
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078186 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 24.029756 &&
    max_accel_z <= 11.868988 &&
    mean_accel_z <= 8.730935 &&
    mean_magn_z <= -2.166 &&
    mean_magn_z > -34.763999 &&
    max_accel_x <= 1.140837 &&
    max_accel_x > -0.711078 &&
    range_magn_z <= 3.379822 &&
    mean_accel_smv > 9.84283 &&
    min_accel_z > 5.039948
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078186 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    mean_magn_smv > 22.452654 &&
    mean_magn_z <= 11.29776 &&
    mean_magn_z > -31.872201 &&
    mean_accel_z <= 8.730935 &&
    min_accel_y <= 6.608322 &&
    max_magn_y <= 8.783722 &&
    max_accel_x <= 1.140837 &&
    max_accel_x > -0.599625 &&
    std_gyro_z > 0.024947 &&
    std_gyro_y <= 0.076052
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078186 &&
    max_magn_y <= 17.412186 &&
    min_accel_z <= 8.652909 &&
    max_magn_smv > 27.219287 &&
    max_accel_z <= 11.868988 &&
    mean_accel_z > 8.730935 &&
    mean_magn_z <= 11.166 &&
    max_accel_x > -0.964893 &&
    range_magn_z <= 5.479002 &&
    min_gyro_smv > 0.003906 &&
    mean_magn_smv <= 38.732934 &&
    max_accel_x <= 0.289698
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv <= 10.54297 &&
    min_accel_z > -0.184952 &&
    min_gyro_smv <= 0.078186 &&
    mean_accel_z <= 8.717555 &&
    max_magn_smv > 24.017908 &&
    range_magn_y <= 16.395004 &&
    mean_accel_y <= 6.581622 &&
    mean_magn_z <= 10.92 &&
    mean_magn_z > -34.829998 &&
    std_gyro_z <= 0.03784 &&
    std_gyro_y > 0.017355 &&
    mean_accel_z <= 7.823772
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv > 10.54297 &&
    rms_gyro_x <= 0.075046 &&
    mean_accel_z > -0.510085 &&
    max_gyro_z <= 0.028519
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv > 10.54297 &&
    max_magn_smv > 39.901262 &&
    mean_magn_z > -39.210001 &&
    range_accel_y <= 18.687315 &&
    min_accel_smv > 6.604972 &&
    rms_gyro_x <= 0.316601
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_smv > 10.54297 &&
    max_magn_smv > 40.09081 &&
    mean_magn_z > -39.210001 &&
    std_gyro_z <= 0.864951 &&
    min_gyro_smv > 0.021967
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_magn_z <= -35.206001 &&
    max_accel_y > 5.485283 &&
    min_gyro_z > -1.175165 &&
    rms_accel_x > 0.831824 &&
    mean_accel_y > 7.212992
  ) {
    return 'c';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.935922 &&
    mean_magn_z <= 5.837173 &&
    mean_accel_z <= 8.709028 &&
    mean_accel_smv <= 9.241075 &&
    mean_accel_smv <= 8.891786
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.935922 &&
    mean_magn_z <= 5.837173 &&
    max_gyro_z > 0.016758 &&
    mean_accel_smv <= 9.96582 &&
    mean_accel_z <= 8.689542 &&
    mean_magn_smv > 24.214315 &&
    mean_magn_z > -36.6 &&
    mean_accel_y <= 6.83733 &&
    max_accel_z <= 1.697541 &&
    min_gyro_z <= -0.053671
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    mean_accel_z > 0.489253 &&
    mean_magn_z <= 2.1252 &&
    max_accel_y > 5.17387 &&
    mean_magn_z > -35.683441 &&
    min_accel_z > 8.251616 &&
    max_accel_x > 0.179571 &&
    mean_accel_y > 4.092244
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    min_accel_x > 3.734329 &&
    sma_magn <= 51.501399 &&
    min_gyro_z <= -0.021857 &&
    mean_accel_y > 2.368344 &&
    mean_magn_smv <= 28.787219
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    min_gyro_smv <= 0.001104 &&
    mean_accel_y > 1.38744
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    mean_magn_z <= 2.1252 &&
    max_accel_y > 5.17387 &&
    mean_magn_z > -35.683441 &&
    range_magn_x <= 18.26992 &&
    std_accel_smv <= 3.624323 &&
    max_accel_x > 0.360327 &&
    range_accel_z <= 1.145626
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    mean_accel_z > 0.322908 &&
    mean_magn_z <= 1.24958 &&
    max_accel_smv <= 14.04989 &&
    min_accel_y > 1.022659 &&
    std_gyro_y > 0.043955 &&
    mean_magn_smv <= 41.390273 &&
    mean_accel_z > 9.374667 &&
    mean_accel_smv > 9.85445 &&
    std_gyro_y <= 0.443246
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    mean_magn_z <= 2.1252 &&
    max_accel_y > 5.17387 &&
    mean_magn_z > -35.683441 &&
    range_magn_x <= 18.206999 &&
    mean_magn_z <= -0.138 &&
    mean_accel_smv > 10.237212 &&
    min_accel_smv <= 8.894344
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    mean_accel_z > 0.322908 &&
    mean_accel_z <= 9.308462 &&
    min_accel_y > -4.689044 &&
    rms_gyro_x > 0.023556 &&
    min_accel_x <= -9.028535
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    min_accel_smv <= 9.48426 &&
    mean_magn_z <= 2.1252 &&
    std_gyro_y > 0.055005 &&
    mean_magn_z > -35.683441 &&
    min_accel_z <= 7.929838 &&
    max_magn_y > 14.967003 &&
    range_magn_z <= 17.035 &&
    sma_gyro > 0.205542 &&
    min_accel_x <= -0.700409
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    min_accel_smv <= 9.48426 &&
    mean_magn_z <= 2.1252 &&
    max_magn_y <= 19.667 &&
    mean_accel_z <= 9.320511 &&
    mean_magn_z > -34.763999 &&
    range_magn_z > 3.295898 &&
    range_magn_y <= 16.440001 &&
    sma_magn > 53.201601 &&
    range_magn_y > 7.56 &&
    std_accel_y <= 0.999809
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    min_accel_smv <= 9.48426 &&
    mean_magn_z <= 2.1252 &&
    max_magn_y <= 19.667 &&
    mean_accel_z <= 9.320511 &&
    mean_magn_z > -35.155501 &&
    range_magn_z > 3.360001 &&
    range_magn_y <= 20.591736 &&
    min_gyro_smv <= 0.00401 &&
    std_accel_x > 0.19422 &&
    min_accel_x <= -0.537415 &&
    max_magn_y > -10.419655
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    mean_accel_z > 8.709028 &&
    mean_magn_z > 10.9696 &&
    mean_magn_smv <= 36.612223
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    max_magn_y <= 15.139771 &&
    max_accel_z > 0.781707 &&
    mean_magn_smv > 21.826087 &&
    std_accel_smv <= 1.908137 &&
    mean_accel_smv > 9.743759 &&
    std_accel_x <= 0.119424
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    max_magn_y <= 17.464005 &&
    max_accel_z > 0.781707 &&
    mean_magn_smv > 21.826087 &&
    mean_magn_smv <= 40.653255 &&
    mean_magn_z <= 9.912 &&
    std_magn_z <= 0.812219 &&
    max_accel_smv <= 10.430717 &&
    rms_gyro_x > 0.038204 &&
    std_gyro_z <= 0.047281
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.930034 &&
    mean_accel_y > 0.945557 &&
    max_magn_y <= 17.464005 &&
    max_accel_z > 0.781707 &&
    mean_magn_smv > 21.826087 &&
    mean_magn_smv <= 40.653255 &&
    std_magn_z <= 0.812219 &&
    mean_magn_z <= 18.7364 &&
    max_accel_z <= 11.034876 &&
    min_accel_x <= -0.567426 &&
    max_accel_y > 3.712494 &&
    std_magn_z > 0.225952 &&
    min_accel_smv <= 8.365922 &&
    min_gyro_y <= -0.037703
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 14.116488 &&
    mean_accel_y > 0.945557 &&
    max_magn_y <= 17.464005 &&
    max_accel_z > 0.781707 &&
    mean_magn_smv > 21.826087 &&
    mean_magn_smv <= 39.424515 &&
    mean_magn_z <= 4.626 &&
    range_magn_z <= 2.29187 &&
    max_accel_z <= 9.223662 &&
    std_accel_x <= 0.935786 &&
    rms_gyro_x <= 0.116364
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 14.086943 &&
    mean_accel_y > 0.945557 &&
    std_gyro_y <= 0.074784 &&
    max_accel_z <= -8.190826 &&
    mean_accel_y > 2.451256
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 14.086943 &&
    mean_accel_y > 0.945557 &&
    rms_gyro_x <= 0.469278 &&
    min_accel_z > 0 &&
    max_magn_y <= 17.474998 &&
    mean_magn_z <= -0.2975 &&
    mean_accel_z <= 9.370117 &&
    max_magn_smv > 39.491668 &&
    mean_magn_z > -36.755901 &&
    mean_accel_smv > 9.543027 &&
    max_accel_x > -0.866701 &&
    max_gyro_z <= 0.062683
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 14.108124 &&
    mean_accel_y > 0.945557 &&
    rms_gyro_x <= 0.469278 &&
    min_accel_z > 0 &&
    std_gyro_y > 0.043955 &&
    max_accel_smv <= 10.164721 &&
    range_magn_z <= 17.648001 &&
    min_accel_z <= 9.258118
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 14.116488 &&
    mean_accel_y > 0.945557 &&
    rms_gyro_x <= 0.469278 &&
    min_accel_z > 0 &&
    max_magn_y <= 17.474998 &&
    mean_magn_z <= -0.2975 &&
    mean_accel_z <= 9.370117 &&
    max_magn_smv > 39.491668 &&
    mean_magn_z > -36.755901 &&
    max_magn_y <= -22.02
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    mean_accel_y > 1.268538 &&
    max_magn_y <= 15.131001 &&
    max_magn_y > 3.224182 &&
    mean_magn_z <= -33.5921
  ) {
    return 'c';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    mean_accel_y > 1.268538 &&
    max_magn_y <= 15.131001 &&
    mean_magn_smv > 21.826087 &&
    mean_accel_z > 9.445724 &&
    min_gyro_y <= -0.047349 &&
    std_accel_x > 0.213104
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    mean_accel_z <= 9.313205 &&
    max_magn_y <= 15.131001 &&
    max_magn_smv > 21.929205 &&
    std_gyro_y > 0.042203 &&
    mean_magn_z <= 10.296 &&
    range_magn_x <= 10.465 &&
    mean_accel_y <= 6.78261 &&
    mean_accel_smv > 9.967368 &&
    rms_accel_x > 0.589536 &&
    range_magn_z <= 7.049561
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    max_magn_y <= 15.131001 &&
    mean_accel_y > 1.268538 &&
    range_magn_z > 2.833557 &&
    mean_accel_z > 9.370117 &&
    min_gyro_smv <= 0.018972
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    mean_accel_z <= 9.520355 &&
    max_magn_y <= 15.131001 &&
    std_magn_z > 0.870684 &&
    std_accel_x > 1.371702 &&
    range_magn_x <= 18.280029 &&
    max_accel_x <= 1.710657
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    std_accel_smv <= 6.935815 &&
    min_accel_z <= 8.728063 &&
    max_magn_y <= 15.131001 &&
    std_magn_z > 0.671193 &&
    max_accel_y <= 8.758224 &&
    mean_magn_z <= -0.2975 &&
    max_magn_smv <= 42.729016 &&
    max_magn_y <= -21.826172 &&
    range_accel_x <= 2.524429
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    max_accel_smv <= 13.450864 &&
    mean_accel_z <= 9.520355 &&
    max_magn_y <= 15.131001 &&
    range_magn_z > 2.833557 &&
    mean_accel_smv <= 10.060758 &&
    mean_magn_z <= 2.1252 &&
    mean_accel_smv > 9.491723 &&
    mean_magn_smv <= 38.072437 &&
    range_magn_x <= 11.388016 &&
    range_magn_z > 7.952881 &&
    std_accel_y <= 0.315592
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    mean_accel_z > 3.519596 &&
    std_accel_smv <= 6.935815 &&
    min_accel_z <= 8.728063 &&
    max_magn_y <= 15.131001 &&
    std_magn_z > 0.671193 &&
    max_accel_y <= 8.758224 &&
    mean_magn_z <= -0.327 &&
    max_magn_smv <= 42.729016 &&
    mean_accel_smv <= 9.977158 &&
    mean_accel_smv > 9.491723 &&
    max_magn_y > -21.277 &&
    mean_accel_z <= 8.666531 &&
    rms_accel_x <= 1.001878 &&
    max_accel_y > 6.398504 &&
    max_accel_y <= 6.881146
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    min_accel_x <= -9.198257 &&
    max_accel_x > -5.418244 &&
    max_accel_z <= 8.106767
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    max_accel_y > 2.229002 &&
    max_accel_z <= 11.808563 &&
    min_accel_z > 0.023943 &&
    max_magn_y <= 17.464005 &&
    mean_magn_z <= -0.327 &&
    std_gyro_y > 0.043955 &&
    mean_accel_z > 9.310419 &&
    min_gyro_z > -0.129499
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    max_accel_y > 2.435547 &&
    max_accel_z <= 11.808563 &&
    rms_gyro_x <= 0.029497 &&
    mean_magn_z <= -18.4317 &&
    max_accel_x > -0.375244
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    max_accel_y > 2.435547 &&
    max_accel_z <= 11.808563 &&
    min_accel_z > 0.023943 &&
    range_magn_x <= 9.80835 &&
    range_magn_z > 3.489998 &&
    min_gyro_y > -1.19577 &&
    std_accel_z > 0.164891 &&
    max_magn_smv <= 40.761777 &&
    range_accel_z > 5.941376 &&
    std_accel_y <= 1.634244
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    max_accel_y > 2.435547 &&
    max_accel_z <= 11.808563 &&
    mean_magn_z <= -0.66 &&
    mean_magn_z > -8.406 &&
    range_magn_x <= 9.458923 &&
    max_gyro_x <= 0.032009
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    max_accel_y > 2.435547 &&
    max_accel_z <= 11.808563 &&
    min_accel_z > 0.023943 &&
    range_magn_x <= 9.80835 &&
    range_magn_z > 3.489998 &&
    min_gyro_y > -1.19577 &&
    mean_accel_z > 7.177557 &&
    max_magn_smv > 40.761777 &&
    range_accel_y <= 6.059725 &&
    min_gyro_z > -0.486725
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    max_accel_y > 2.435547 &&
    max_accel_z <= 11.808563 &&
    min_accel_z > 0.023943 &&
    mean_accel_z > 9.347967 &&
    std_accel_x <= 0.688729 &&
    max_accel_z > 10.09994
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 1.017763 &&
    max_accel_y > 2.435547 &&
    max_accel_z <= 11.808563 &&
    min_accel_z > 0.023943 &&
    range_magn_x <= 9.80835 &&
    range_magn_z > 3.489998 &&
    min_gyro_y <= -0.866665 &&
    mean_accel_y <= 6.863771 &&
    mean_accel_smv <= 9.929945
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    min_gyro_smv <= 0.053067 &&
    max_accel_y > 1.302446 &&
    std_magn_z <= 2.85231 &&
    range_magn_x > 1.61438 &&
    sma_magn <= 18.218899 &&
    mean_magn_z <= -0.4
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    rms_gyro_x <= 0.479891 &&
    mean_accel_y > 1.203893 &&
    sma_gyro <= 0.720911 &&
    min_accel_x > 3.665635 &&
    sma_magn > 50.971301
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.622294 &&
    rms_gyro_x <= 0.479891 &&
    max_accel_y > 1.689758 &&
    max_accel_z <= 11.775881 &&
    sma_gyro <= 0.720911 &&
    range_magn_z > 3.142002 &&
    mean_magn_smv <= 40.846173 &&
    mean_accel_y > 9.482767
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    min_gyro_smv <= 0.053067 &&
    max_accel_y > 1.302446 &&
    mean_magn_smv <= 24.103412 &&
    max_magn_y > 3.617996 &&
    max_magn_y <= 20.039999 &&
    mean_magn_smv > 14.517316 &&
    range_magn_y > 1.058197 &&
    sma_magn > 25.891201 &&
    min_gyro_z > -0.519328 &&
    range_magn_z <= 1.732
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    min_gyro_smv <= 0.053067 &&
    max_accel_y > 1.302446 &&
    mean_magn_smv <= 24.103412 &&
    max_accel_z <= 8.36175 &&
    sma_magn <= 25.757999
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 0.670728 &&
    max_accel_y > 1.318008 &&
    max_magn_smv <= 26.358376 &&
    mean_magn_z <= -10.89 &&
    max_magn_y <= -1.826286 &&
    max_magn_y <= -4.400002
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 0.709153 &&
    max_accel_y > 1.689758 &&
    mean_magn_z <= -0.168 &&
    min_accel_smv > 9.550224 &&
    mean_accel_smv <= 10.21165 &&
    min_accel_z > 8.27077
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 0.709153 &&
    max_accel_y > 1.689758 &&
    mean_magn_z <= -0.168 &&
    max_accel_z > 13.335159 &&
    max_magn_smv <= 38.307309 &&
    std_accel_z > 1.69571
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 0.709153 &&
    max_accel_y > 1.689758 &&
    max_accel_z <= 11.868988 &&
    range_magn_y > 0.622368 &&
    mean_magn_z <= -0.2033 &&
    max_magn_smv <= 20.251682 &&
    mean_magn_z > -15.62 &&
    max_accel_y > 5.177461 &&
    max_accel_x > -0.524346
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 0.709153 &&
    max_magn_smv <= 20.37996 &&
    max_magn_y <= 5.366516 &&
    range_magn_y > 0.699997 &&
    max_accel_y > 5.722317
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    sma_gyro <= 0.709153 &&
    max_accel_y > 1.689758 &&
    max_accel_z <= 11.868988 &&
    mean_magn_smv <= 40.863082 &&
    range_magn_y <= 1.008606 &&
    range_magn_y <= 0.622368
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.622294 &&
    std_accel_smv <= 6.699972 &&
    max_accel_y > 2.24217 &&
    mean_accel_y <= 6.619212 &&
    range_magn_y <= 24.637001 &&
    min_gyro_smv <= 0.143885 &&
    mean_magn_z > 9.916534 &&
    range_magn_x <= 3.299999 &&
    max_accel_x > -0.188568
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.913059 &&
    mean_accel_y > 0.945557 &&
    mean_accel_y <= 6.592636 &&
    range_magn_y <= 25.163002 &&
    max_accel_z <= 11.040001 &&
    mean_magn_z > 9.8378 &&
    min_gyro_smv > 0.13634 &&
    mean_accel_z <= 7.236714
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.913059 &&
    mean_accel_y > 0.945557 &&
    range_magn_y > 25.163002 &&
    std_accel_y > 0.379217 &&
    min_accel_x > -1.817825
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.622294 &&
    max_accel_smv <= 13.913059 &&
    mean_accel_y > 0.945557 &&
    mean_accel_y <= 6.592636 &&
    mean_magn_z > 9.8378 &&
    max_magn_y <= 3.515625 &&
    min_gyro_z <= -0.02356 &&
    min_gyro_smv <= 0.13634 &&
    std_accel_z <= 2.264582
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 5.183605 &&
    mean_magn_z > 40.01339 &&
    max_accel_y > -4.536362 &&
    range_magn_x <= 58.244324 &&
    rms_accel_x <= 4.718272 &&
    max_magn_y <= 52.918999
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 5.183605 &&
    mean_magn_smv > 39.397609 &&
    std_accel_x > 1.924283 &&
    std_gyro_y > 0.246922 &&
    mean_accel_y <= 1.510814 &&
    mean_accel_y <= -6.220256 &&
    mean_magn_z <= 51.499126 &&
    std_gyro_z <= 0.536785 &&
    range_magn_x > 1.811218
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 5.183605 &&
    mean_magn_smv > 39.397609 &&
    std_accel_x > 1.924283 &&
    mean_accel_y <= -1.421797 &&
    max_magn_y <= 35.476002 &&
    max_magn_y > -9.599998 &&
    mean_magn_z <= 32.0254 &&
    mean_accel_z > 0.956005
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 5.183605 &&
    mean_magn_smv > 39.397609 &&
    std_accel_smv > 8.923853 &&
    mean_accel_y > -1.385715 &&
    std_magn_z > 0.8645 &&
    mean_magn_z > -30.611999 &&
    max_gyro_x > 3.601368 &&
    rms_gyro_x > 1.384721
  ) {
    return 'b';
  }

  if (
    min_accel_z <= 5.183605 &&
    mean_magn_smv > 39.397609 &&
    std_gyro_z > 0.190526 &&
    mean_magn_z > -30.611999 &&
    std_accel_x > 3.002307 &&
    max_accel_y > 3.175909 &&
    std_accel_y <= 9.443281 &&
    sma_magn <= 78.830719 &&
    std_accel_z > 1.657739 &&
    rms_gyro_x <= 1.254379 &&
    min_gyro_z > -1.75394 &&
    sma_gyro > 1.768388
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 5.370358 &&
    max_magn_smv > 44.622294 &&
    std_accel_smv > 8.923853 &&
    mean_accel_y > -1.385715 &&
    min_gyro_smv > 0.030106 &&
    mean_magn_smv > 48.512285 &&
    min_gyro_z > -0.491258 &&
    mean_accel_z <= 2.508003
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 5.370358 &&
    max_magn_smv > 44.622294 &&
    std_gyro_z > 0.187853 &&
    max_accel_z > 10.770316 &&
    mean_magn_smv <= 48.512285 &&
    sma_gyro <= 1.413568 &&
    std_accel_z <= 6.534938 &&
    min_gyro_smv > 0.006374 &&
    range_magn_y <= 47.379002
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 5.087834 &&
    max_magn_smv > 44.623863 &&
    sma_gyro > 1.298691 &&
    mean_magn_z > -30.611999 &&
    std_accel_x <= 3.251805 &&
    min_gyro_y <= -1.783136 &&
    sma_magn <= 102.844391 &&
    min_gyro_z > -3.460083 &&
    max_accel_x <= 9.489304 &&
    range_magn_y > 3.311996 &&
    sma_gyro > 2.249843
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 5.087834 &&
    max_magn_smv > 44.623863 &&
    std_accel_smv > 8.923853 &&
    mean_accel_y > -1.305438 &&
    min_gyro_smv > 0.03014 &&
    mean_magn_smv <= 48.730904 &&
    mean_accel_z > 6.742072 &&
    min_gyro_z <= -0.624127 &&
    min_accel_y > -1.742979 &&
    max_magn_y > -21.017265 &&
    max_magn_y <= 34.827805
  ) {
    return 'b';
  }

  if (
    max_magn_smv <= 40.782084 &&
    max_accel_y > 1.593341 &&
    max_accel_smv <= 13.503778 &&
    range_magn_x <= 9.80835 &&
    std_gyro_y > 0.047731 &&
    mean_accel_smv <= 10.074067 &&
    mean_magn_z <= 2.1252 &&
    mean_accel_y > 1.049908 &&
    std_magn_z > 0.646529 &&
    min_accel_smv > 8.523807 &&
    range_magn_y > 1.38855 &&
    mean_accel_smv <= 9.769112 &&
    range_accel_y > 0.858321
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.05249 &&
    min_gyro_smv <= 0.001444 &&
    min_accel_x <= 1.913223 &&
    max_accel_y > 2.091335
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.081558 &&
    max_magn_smv > 44.623863 &&
    std_accel_x > 2.332756 &&
    mean_accel_y <= -1.305438 &&
    rms_accel_x > 7.101328 &&
    max_accel_z <= 7.082265 &&
    range_magn_x > 13.46283 &&
    mean_accel_z > -1.741303
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 40.782084 &&
    max_accel_y > 1.593341 &&
    min_gyro_smv <= 0.082915 &&
    rms_gyro_x <= 0.017945 &&
    min_accel_z <= 7.714354 &&
    mean_accel_smv > 9.782575
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.476242 &&
    mean_magn_smv <= 71.021941 &&
    rms_accel_x > 7.556314 &&
    mean_accel_y <= -2.150711 &&
    min_gyro_z > -0.799134 &&
    max_magn_y <= 38.074001 &&
    max_accel_z > -0.770933 &&
    mean_accel_z <= 0.068402 &&
    std_accel_x <= 2.764582
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.476242 &&
    mean_magn_smv <= 71.021941 &&
    mean_magn_z > 33.061085 &&
    max_accel_y <= -2.442086
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    std_accel_x <= 3.007815 &&
    sma_magn > 112.577897 &&
    max_accel_y > 4.348206 &&
    mean_accel_y <= 9.327319
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    std_accel_smv > 11.811299 &&
    mean_accel_y <= -1.511027 &&
    mean_accel_y > -10.417564 &&
    rms_accel_x > 8.937126 &&
    max_accel_z <= 7.196976 &&
    std_gyro_y > 0.902575 &&
    max_accel_z > 0.636858 &&
    max_magn_y > -12.761688
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.476242 &&
    rms_accel_x > 8.512805 &&
    max_accel_z <= 6.404685 &&
    max_accel_x <= 10.826911 &&
    max_accel_x <= 10.770889 &&
    range_magn_x <= 12.730408
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.476242 &&
    std_gyro_z > 0.188491 &&
    mean_magn_smv <= 48.884782 &&
    min_accel_y <= 7.520676 &&
    min_gyro_smv > 0.019191 &&
    rms_gyro_x <= 0.251223 &&
    max_accel_z <= 7.435194 &&
    sma_gyro > 0.460665 &&
    mean_accel_z <= 1.494313
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.059659 &&
    mean_accel_z <= -6.588125 &&
    max_accel_x <= 5.669739 &&
    max_magn_y > -5.834961 &&
    max_accel_x > 2.191269
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.059659 &&
    max_accel_z <= -2.037466 &&
    min_accel_z > -8.192958 &&
    std_gyro_z > 0.017754 &&
    max_accel_x <= 8.396722
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x > 9.059659 &&
    sma_magn <= 80.28595 &&
    mean_accel_y <= 1.59382 &&
    mean_accel_y <= -6.419094 &&
    max_magn_y <= 41.040001
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.403489 &&
    range_accel_x <= 9.476242 &&
    sma_gyro > 0.687162 &&
    sma_gyro > 2.561403 &&
    std_gyro_z <= 2.463372 &&
    sma_magn <= 78.3783
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.405851 &&
    range_accel_x <= 9.476242 &&
    max_accel_z > -2.067393 &&
    min_accel_y <= 5.818088 &&
    mean_magn_smv <= 65.053022 &&
    max_accel_x <= -4.237866 &&
    max_accel_x > -6.687006 &&
    min_accel_z > -4.955997
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.912233 &&
    std_accel_smv <= 6.699972 &&
    max_accel_y > 2.24217 &&
    mean_magn_smv <= 40.722549 &&
    std_magn_z <= 4.804405 &&
    mean_magn_z <= 9.8378 &&
    mean_accel_y <= 6.819613 &&
    mean_accel_z <= 8.672542 &&
    sma_magn > 24.84 &&
    std_gyro_z <= 0.036681 &&
    sma_magn > 32.26 &&
    max_accel_smv > 10.299034 &&
    min_gyro_y > -0.062039
  ) {
    return 'f';
  }

  if (
    sma_gyro > 1.302844 &&
    std_accel_x > 2.778576 &&
    mean_accel_y <= -1.456153 &&
    rms_accel_x > 6.492159 &&
    sma_magn <= 80.81 &&
    std_accel_y <= 5.54249
  ) {
    return 'a';
  }

  if (
    sma_gyro > 1.334993 &&
    std_accel_x > 2.787185 &&
    std_gyro_z <= 2.043123 &&
    mean_accel_y > -2.081399 &&
    range_magn_z > 41.219999 &&
    mean_magn_smv > 37.740362 &&
    sma_gyro > 2.426031
  ) {
    return 'a';
  }

  if (
    sma_gyro > 1.334993 &&
    std_accel_x > 2.787185 &&
    min_gyro_z > -4.657053 &&
    mean_accel_y > -1.842886 &&
    sma_magn > 47.147999 &&
    mean_magn_z <= -34.314 &&
    mean_magn_smv <= 50.112351 &&
    min_gyro_y <= -0.512482
  ) {
    return 'b';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.405851 &&
    std_accel_smv > 11.72715 &&
    range_magn_y > 2.970886 &&
    std_accel_x <= 3.033906 &&
    std_magn_z <= 8.438806 &&
    range_magn_x <= 31.157001
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    std_accel_smv > 11.815294 &&
    std_accel_x > 3.007815 &&
    range_magn_y <= 2.424004 &&
    mean_accel_z > 1.275751
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.081558 &&
    std_accel_smv > 11.815294 &&
    std_accel_x > 3.007815 &&
    max_magn_y <= 6.300003 &&
    std_gyro_z <= 0.232656
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    std_accel_smv > 11.815294 &&
    mean_accel_y > -1.592911 &&
    std_accel_x > 3.007815 &&
    max_magn_y <= 5.073997 &&
    min_accel_smv <= 3.736484 &&
    mean_magn_smv > 45.885762 &&
    rms_gyro_x <= 1.665219 &&
    mean_accel_z <= 6.350352 &&
    min_accel_y > -2.358361 &&
    std_magn_z <= 8.892674
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    std_accel_smv > 11.815294 &&
    mean_accel_y > -1.592911 &&
    std_accel_x > 3.007815 &&
    max_magn_y <= 5.073997 &&
    min_accel_smv <= 3.736484 &&
    max_gyro_z <= 3.335794 &&
    range_magn_x <= 45 &&
    std_accel_x > 3.574058 &&
    min_gyro_y > -0.820557
  ) {
    return 'b';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.816123 &&
    range_accel_x <= 9.476242 &&
    max_accel_z > -2.067393 &&
    range_magn_x > 2.980042 &&
    mean_magn_smv <= 65.053022 &&
    rms_accel_x <= 8.112414 &&
    std_gyro_y > 0.533754 &&
    max_accel_smv <= 21.296353 &&
    mean_accel_smv > 9.014856 &&
    max_magn_y > 23.16 &&
    std_gyro_z <= 0.851601 &&
    mean_magn_z > -17.238 &&
    range_magn_y <= 26.046001
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.816123 &&
    sma_gyro > 2.565288 &&
    max_gyro_y <= 6.787617 &&
    min_gyro_z > -4.233261 &&
    std_accel_x > 1.57841 &&
    mean_magn_z > -12.024 &&
    max_accel_z <= 10.718292
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.819835 &&
    sma_gyro > 2.65559 &&
    std_gyro_z > 2.030375 &&
    mean_accel_smv <= 10.270198
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.819835 &&
    sma_gyro > 2.592256 &&
    mean_magn_z <= 67.776337 &&
    std_gyro_z <= 2.030375 &&
    range_magn_x > 12.084961 &&
    mean_accel_y <= 10.318277 &&
    max_magn_y <= 12.663269 &&
    range_magn_x <= 24.159
  ) {
    return 'b';
  }

  if (
    min_accel_z > 4.878186 &&
    std_gyro_z <= 0.305535 &&
    range_magn_y <= 0.819969 &&
    mean_accel_y <= 3.408386
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.819835 &&
    std_accel_x <= 2.332756 &&
    max_accel_z > -2.067393 &&
    rms_accel_x > 8.512805 &&
    max_accel_z <= 6.252197 &&
    range_accel_z > 1.659424 &&
    std_magn_z <= 16.941713 &&
    min_accel_y <= -2.059013
  ) {
    return 'a';
  }

  if (
    min_accel_z > 4.853195 &&
    std_gyro_z <= 0.305535 &&
    max_magn_smv <= 53.813375 &&
    min_accel_z <= 9.035172 &&
    mean_accel_y <= 6.619212 &&
    std_accel_y <= 0.948033 &&
    max_gyro_z > 0.041111 &&
    max_gyro_y <= 0.177021 &&
    mean_magn_smv <= 43.730371 &&
    max_gyro_x > 0.011002 &&
    min_accel_smv <= 8.335969 &&
    range_magn_z > 1.74
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.912233 &&
    min_gyro_smv > 0.083673 &&
    rms_accel_x <= 0.716815 &&
    min_gyro_smv <= 0.170655
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.912233 &&
    min_gyro_smv > 0.083673 &&
    max_magn_y > 20.5 &&
    range_magn_x > 4.348755
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.80795 &&
    std_accel_smv <= 6.699972 &&
    max_accel_y > 2.24217 &&
    max_magn_y <= -32.984543 &&
    mean_accel_y > 7.408139
  ) {
    return 'c';
  }

  if (
    max_magn_smv <= 44.80795 &&
    std_accel_smv <= 6.699972 &&
    max_accel_y > 2.24217 &&
    std_magn_z <= 4.566065 &&
    mean_magn_smv <= 41.030089 &&
    mean_magn_z <= 9.818268 &&
    mean_accel_z <= 9.448883 &&
    mean_accel_y <= 6.819613 &&
    sma_magn > 24.29 &&
    max_accel_y > 5.184644 &&
    range_magn_z <= 11.615002 &&
    max_accel_y > 8.831238 &&
    max_accel_x <= 1.233276
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.80795 &&
    std_accel_smv <= 6.699972 &&
    max_accel_y > 2.24217 &&
    std_magn_z <= 4.566065 &&
    mean_magn_smv <= 41.030089 &&
    mean_magn_z <= 9.818268 &&
    mean_accel_z <= 9.448883 &&
    mean_accel_y <= 6.819613 &&
    sma_magn > 24.29 &&
    max_accel_y > 5.184644 &&
    range_magn_z <= 11.615002 &&
    mean_magn_smv > 24.494179 &&
    range_magn_x <= 3.748001 &&
    std_magn_z > 0.682935 &&
    min_accel_z <= 7.599428 &&
    rms_accel_x > 0.629172
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.80795 &&
    max_accel_smv <= 13.913059 &&
    mean_accel_y > 0.96618 &&
    min_gyro_smv <= 0.076596 &&
    mean_accel_y <= 6.626635 &&
    std_accel_smv > 1.91673 &&
    range_magn_x > 1.61438 &&
    std_gyro_z > 1.41629
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.80795 &&
    max_accel_smv <= 13.913059 &&
    mean_accel_y > 0.96618 &&
    min_gyro_smv <= 0.076596 &&
    mean_accel_y <= 6.626635 &&
    std_accel_smv > 1.91673 &&
    range_magn_x > 1.61438 &&
    sma_magn <= 21.342 &&
    min_accel_z > 6.997055
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.811308 &&
    max_accel_smv <= 13.913059 &&
    mean_accel_z > 9.520355 &&
    rms_accel_x <= 0.471173
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.811308 &&
    mean_accel_z <= 9.520355 &&
    sma_gyro <= 0.7034 &&
    mean_accel_z <= -8.642829 &&
    sma_gyro <= 0.129194
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    max_accel_y > -1.228225 &&
    max_accel_x > 9.42626 &&
    max_gyro_x <= 0.389744 &&
    mean_accel_z > 0.357695
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    rms_accel_x > 8.882913 &&
    mean_accel_z > -1.224757
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    max_accel_y > -2.477999 &&
    std_gyro_y <= 0.060564 &&
    max_gyro_x <= 0.012706
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    max_magn_y <= 24.80011 &&
    std_gyro_y <= 0.054035 &&
    range_magn_y > 1.039314 &&
    std_accel_x <= 2.268966 &&
    std_accel_y > 0.131472 &&
    min_accel_z <= 6.747787 &&
    max_gyro_z <= 0.059037
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.80795 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    max_accel_y > -2.477999 &&
    range_magn_y <= 21.480001 &&
    std_accel_y > 0.109469 &&
    max_magn_smv <= 43.57983 &&
    std_gyro_y <= 0.054035 &&
    std_gyro_z > 0.025978 &&
    max_accel_y > 3.251648 &&
    range_accel_z <= 1.261749
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.80795 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    max_accel_y > -2.477999 &&
    range_magn_y <= 21.480001 &&
    mean_magn_z <= -30.533799 &&
    rms_gyro_x > 0.071758 &&
    mean_magn_smv <= 41.182226
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.80795 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    mean_accel_y > -5.424854 &&
    mean_magn_z <= -29.709167 &&
    mean_accel_smv <= 9.991924
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    mean_accel_y > -5.424854 &&
    range_magn_y <= 21.922874 &&
    max_magn_smv <= 43.359897 &&
    std_accel_y <= 0.140872
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    max_accel_y > -4.769395 &&
    range_magn_y <= 21.480001 &&
    std_gyro_y > 0.322669 &&
    max_gyro_x > 0.148685 &&
    sma_magn <= 52.991999 &&
    max_gyro_x > 0.375397
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    min_accel_y <= -8.734589 &&
    mean_accel_smv <= 10.197962
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    range_magn_y <= 21.480001 &&
    min_gyro_smv <= 0.045442 &&
    min_accel_y <= 6.199785 &&
    max_gyro_y <= 0.033676 &&
    max_accel_smv <= 12.184401 &&
    sma_gyro <= 0.068317
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.465691 &&
    range_magn_y <= 21.480001 &&
    min_gyro_smv <= 0.045442 &&
    min_gyro_z > -0.016616 &&
    max_magn_smv <= 34.092569
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.811308 &&
    sma_gyro <= 0.670728 &&
    mean_accel_z <= 9.324191 &&
    range_magn_y <= 21.480001 &&
    min_gyro_smv <= 0.045442 &&
    min_accel_y <= 6.199785 &&
    max_gyro_y > 0.046861 &&
    max_accel_y <= 9.055147 &&
    range_accel_z > 6.703969 &&
    range_magn_z <= 8.332825 &&
    rms_accel_x <= 6.034128
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.840188 &&
    std_accel_x <= 2.332756 &&
    max_accel_z > -2.067393 &&
    std_magn_z <= 0.752596 &&
    max_magn_y <= 3.800003 &&
    mean_accel_smv <= 10.302293
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.840188 &&
    std_accel_x <= 2.332756 &&
    max_accel_z > -2.067393 &&
    mean_magn_z <= 29.139252 &&
    mean_accel_y <= 8.925331 &&
    mean_accel_smv <= 8.970918 &&
    max_gyro_y > 0.300326 &&
    mean_accel_z > -1.625064
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.081558 &&
    mean_magn_smv > 39.840188 &&
    std_accel_x <= 2.332756 &&
    max_accel_z > -2.067393 &&
    mean_magn_smv <= 65.053022 &&
    mean_accel_y <= 8.874577 &&
    max_accel_x > -5.620389 &&
    rms_accel_x > 1.629638 &&
    min_accel_x <= 7.587225 &&
    max_gyro_y <= 1.080773 &&
    range_magn_z > 3.990746 &&
    std_accel_z <= 2.636889 &&
    min_accel_x > -7.846038 &&
    min_accel_y > -9.898605 &&
    mean_accel_z <= 6.89659 &&
    range_magn_x > 2.253 &&
    mean_magn_z <= 26.660728 &&
    rms_accel_x > 4.735086
  ) {
    return 'c';
  }

  if (
    std_accel_y > 0.784356 &&
    max_magn_smv > 44.811308 &&
    max_gyro_y > 0.153857 &&
    max_accel_smv > 22.003231 &&
    mean_accel_y > -1.567747 &&
    std_accel_x > 3.007815 &&
    max_magn_smv <= 60.413146 &&
    min_accel_smv <= 3.620907 &&
    min_gyro_z > -1.593893 &&
    std_gyro_y > 0.546201
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.784356 &&
    min_accel_y <= -7.473501 &&
    mean_magn_smv <= 65.612365 &&
    max_gyro_x <= 1.071457 &&
    max_magn_y > 30.128998 &&
    max_gyro_z <= 0.452072 &&
    mean_accel_z > -2.016516 &&
    mean_accel_smv <= 10.107141
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 0.76769 &&
    mean_accel_y > 7.957835 &&
    range_accel_y > 0.827197 &&
    max_gyro_z <= 1.01086 &&
    min_gyro_smv > 0.004553 &&
    std_gyro_y > 0.094841 &&
    mean_accel_z > -0.58517 &&
    mean_magn_smv > 39.165658 &&
    max_accel_x <= 3.060364
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 0.76769 &&
    rms_accel_x > 8.514168 &&
    std_accel_smv <= 2.977709
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_accel_y <= -7.826004 &&
    rms_accel_x > 3.635866
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.76769 &&
    max_accel_z <= -7.824524 &&
    max_accel_y > 0.912842
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.113059 &&
    max_accel_x <= -7.005648 &&
    mean_accel_smv > 9.752931
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.152509 &&
    max_magn_y > -23.132324 &&
    max_accel_smv > 10.190441 &&
    mean_accel_z > 0.646169 &&
    mean_magn_z <= 2.769999 &&
    max_magn_y > 43.42804 &&
    max_accel_x <= -0.750582
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.152509 &&
    max_magn_y > -23.132324 &&
    max_accel_smv > 10.190441 &&
    mean_accel_z > 0.646169 &&
    max_accel_y <= 1.684321 &&
    mean_magn_smv > 30.20598 &&
    sma_magn > 71.8805
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.113059 &&
    min_gyro_smv <= 0.0035 &&
    range_accel_z > 1.218658 &&
    std_accel_x > 0.591042
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.113059 &&
    sma_magn <= 74.112854 &&
    min_accel_z <= 9.186279 &&
    max_accel_y > -7.09816 &&
    min_gyro_smv <= 0.002938 &&
    mean_magn_z > -22.511999 &&
    std_accel_x <= 0.392221
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.113059 &&
    sma_magn <= 74.112854 &&
    min_accel_z <= 9.186279 &&
    max_accel_y > -7.09816 &&
    max_gyro_y <= 0.040314 &&
    std_accel_y > 0.095817 &&
    sma_gyro > 0.045924 &&
    min_accel_x > -0.811634
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.113059 &&
    sma_magn <= 74.112854 &&
    min_accel_y > 0.778763 &&
    min_accel_y <= 6.199785 &&
    mean_magn_z <= -28.859999 &&
    max_accel_smv <= 11.212345 &&
    max_accel_y <= 4.812492
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.113059 &&
    sma_magn <= 74.112854 &&
    min_accel_y > 1.937698 &&
    min_accel_y <= 6.199785 &&
    mean_accel_z > 9.311458 &&
    std_accel_x > 0.346453 &&
    std_accel_x <= 1.056033
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.113059 &&
    sma_magn <= 74.112854 &&
    mean_accel_z <= 9.315288 &&
    max_accel_y > -7.09816 &&
    min_accel_y <= 6.199785 &&
    rms_accel_x > 7.969366 &&
    min_accel_z > -0.828419
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv <= 0.112308 &&
    sma_magn <= 74.112854 &&
    mean_accel_z <= 9.315288 &&
    max_accel_y > -7.09816 &&
    min_accel_y <= 6.199785 &&
    max_accel_x <= 7.575486 &&
    range_magn_x <= 28.699999 &&
    max_magn_smv > 21.747873 &&
    range_magn_y <= 13.35907 &&
    mean_magn_z <= -36.821999 &&
    std_accel_y > 0.233424
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    mean_magn_smv <= 46.231695 &&
    min_gyro_smv > 0.160864 &&
    rms_accel_x > 0.668439 &&
    mean_accel_z <= 8.882041
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.76769 &&
    mean_magn_smv <= 46.231695 &&
    min_accel_z <= 8.941788 &&
    min_accel_z > 0.102954 &&
    max_gyro_x <= 1.271638 &&
    range_magn_x <= 25.112915 &&
    sma_magn <= 24.5933 &&
    max_magn_y > -3.577232
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    mean_magn_smv <= 46.231695 &&
    min_accel_z <= 8.941788 &&
    min_accel_z > 0.102954 &&
    range_magn_y <= 13.35907 &&
    max_gyro_x <= 1.249097 &&
    min_gyro_smv <= 0.141284 &&
    mean_accel_y <= 6.739405 &&
    mean_accel_smv <= 9.932772 &&
    mean_magn_smv > 44.059032 &&
    sma_magn <= 73.817999
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    mean_magn_smv <= 45.752806 &&
    min_accel_z <= 9.03452 &&
    mean_accel_smv <= 10.076304 &&
    mean_magn_z <= 5.9915 &&
    range_magn_y <= 30.252838 &&
    mean_accel_z > 7.177557 &&
    max_magn_y > -22.900002 &&
    range_magn_z > 12.205505 &&
    std_accel_z <= 0.725571 &&
    range_magn_y > 8.283997
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    mean_magn_smv <= 45.752806 &&
    min_accel_z <= 9.03452 &&
    min_accel_z > 0.102954 &&
    range_magn_y <= 22.808838 &&
    max_gyro_x <= 1.249097 &&
    min_gyro_smv > 0.141284 &&
    mean_accel_smv <= 9.795311
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv > 0.112308 &&
    sma_magn > 53.960002 &&
    min_accel_z > 8.01459
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    min_gyro_smv > 0.112308 &&
    sma_magn > 53.960002 &&
    mean_magn_z <= 17.0371 &&
    min_gyro_y <= -0.542252
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.76769 &&
    mean_magn_smv <= 46.231695 &&
    min_accel_z <= 8.941788 &&
    max_accel_z > 1.953728 &&
    range_magn_y <= 13.767624 &&
    max_gyro_x <= 1.249097 &&
    range_magn_x > 17.800903 &&
    max_gyro_z <= 0.333105
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    max_magn_y > -23.132324 &&
    std_accel_smv > 2.073385 &&
    min_accel_y > 0.640671 &&
    max_accel_y <= 7.858967 &&
    mean_magn_z > 18.1934 &&
    mean_accel_smv <= 10.029733 &&
    mean_accel_smv <= 9.830517
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    max_magn_y > -23.132324 &&
    std_accel_smv > 2.073385 &&
    min_accel_y > 0.640671 &&
    max_accel_y <= 7.858967 &&
    mean_accel_smv <= 9.847978 &&
    min_accel_z > 8.370385 &&
    range_accel_z > 0.59855
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    max_magn_y > -23.132324 &&
    std_accel_smv > 2.073385 &&
    mean_accel_y > 1.577626 &&
    max_accel_y <= 7.858967 &&
    mean_accel_z > 9.067119 &&
    range_accel_z <= 8.224091 &&
    min_gyro_z > -0.708208 &&
    std_accel_x <= 0.537768 &&
    mean_magn_smv > 37.896108
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    max_magn_y > -23.132324 &&
    std_accel_smv > 2.073385 &&
    mean_accel_z > 0.995863 &&
    min_accel_y > 1.937698 &&
    rms_gyro_x > 1.05773 &&
    std_accel_y > 0.500402
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.76769 &&
    max_magn_y > -23.132324 &&
    std_accel_smv > 2.073385 &&
    mean_accel_z > 0.995863 &&
    min_accel_y > 1.937698 &&
    max_accel_y <= 7.858967 &&
    mean_magn_smv > 39.373052 &&
    rms_gyro_x > 0.034951 &&
    mean_accel_y > 3.353032 &&
    rms_accel_x > 0.468407 &&
    mean_magn_z > -26.349335
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.80795 &&
    mean_accel_z <= 9.4192 &&
    sma_gyro <= 0.7034 &&
    std_accel_smv > 8.611548 &&
    min_gyro_smv <= 0.022323
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 65.889998 &&
    min_accel_z <= 9.03452 &&
    min_accel_y <= -8.309077 &&
    mean_accel_y <= -9.195563
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 65.889998 &&
    min_accel_z <= 9.03452 &&
    mean_accel_smv > 10.074067 &&
    std_accel_x > 0.276383 &&
    mean_accel_y <= 6.813867 &&
    range_magn_x > 1.826477 &&
    min_gyro_z > -0.966474
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 65.889998 &&
    min_accel_z <= 9.03452 &&
    mean_accel_smv > 10.074067 &&
    std_accel_x > 0.276383
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 65.889998 &&
    min_accel_z <= 9.03452 &&
    mean_magn_z <= -0.2 &&
    range_magn_y > 37.773003 &&
    std_accel_x > 0.29396
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 65.889998 &&
    min_accel_z <= 9.03452 &&
    std_gyro_y <= 0.047697 &&
    std_accel_smv <= 3.245731
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 64.860725 &&
    min_accel_z <= 9.03452 &&
    std_gyro_y <= 0.047446 &&
    min_gyro_y > -0.065595
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.80795 &&
    mean_accel_z <= 9.315288 &&
    sma_gyro <= 0.7034 &&
    std_accel_smv <= 8.517597 &&
    min_accel_smv <= 5.890528 &&
    min_accel_smv > 2.804388 &&
    max_gyro_x <= 0.308604
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 64.860725 &&
    min_accel_z <= 8.604761 &&
    mean_magn_z <= -0.2 &&
    max_accel_y > 5.179855 &&
    max_accel_smv <= 11.572068 &&
    std_accel_z > 0.536905 &&
    mean_accel_y <= 8.338135 &&
    mean_magn_z <= -7.9183 &&
    mean_magn_smv > 25.12184
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.700605 &&
    mean_magn_smv <= 48.332114 &&
    min_accel_z <= 8.552089 &&
    sma_magn <= 65.64682 &&
    max_magn_y <= 13.428001 &&
    max_magn_smv <= 52.583488 &&
    std_magn_z <= 2.185841 &&
    mean_accel_z > 5.438835 &&
    std_magn_z > 0.45353 &&
    range_magn_y > 1.579285 &&
    mean_accel_y > 3.861726 &&
    min_accel_z <= 7.93199 &&
    max_accel_y <= 7.762787 &&
    max_gyro_z <= 0.286281 &&
    range_magn_x <= 7.985 &&
    mean_accel_z <= 8.529844
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.76769 &&
    sma_magn <= 64.860725 &&
    min_accel_z <= 9.03452 &&
    std_magn_z <= 2.185841 &&
    max_magn_y <= -2.16 &&
    max_magn_y > -22.956848 &&
    range_accel_z <= 3.423706 &&
    mean_accel_y <= 7.154952 &&
    std_magn_z > 0.45353
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.700605 &&
    min_accel_z > 9.461334 &&
    std_accel_x > 0.232247 &&
    mean_accel_smv <= 10.016473
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 0.700605 &&
    mean_magn_smv <= 47.385817 &&
    sma_magn <= 64.860725 &&
    max_accel_x > -0.976864 &&
    std_accel_z <= 0.184981 &&
    mean_magn_z <= -6.92 &&
    mean_accel_y <= 5.018639
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.700605 &&
    mean_magn_smv <= 47.385817 &&
    sma_magn <= 64.860725 &&
    max_accel_x > -0.976864 &&
    std_accel_z <= 0.184108 &&
    max_accel_x > 0.096965
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.700605 &&
    std_accel_z <= 0.184991 &&
    rms_accel_x <= 0.697939 &&
    max_gyro_y <= 0.920492 &&
    max_magn_y <= 26.119995
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.700605 &&
    mean_magn_smv <= 47.385817 &&
    sma_magn <= 64.860725 &&
    max_accel_x > -0.976864 &&
    std_accel_x <= 0.383583 &&
    min_gyro_smv <= 0.013169 &&
    max_accel_x > 0.356747 &&
    mean_magn_z <= -10.188
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.700605 &&
    mean_magn_smv > 52.58517 &&
    mean_magn_z > -51.150665 &&
    max_accel_x > -1.49675 &&
    mean_accel_z > -4.671806 &&
    rms_accel_x > 0.589326
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.700605 &&
    mean_magn_z <= -34.367999 &&
    std_accel_z > 0.282744 &&
    std_accel_z > 0.561447
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.700605 &&
    sma_magn <= 64.860725 &&
    max_accel_x > -0.976864 &&
    mean_accel_smv > 10.033437
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.700605 &&
    sma_magn <= 64.860725 &&
    max_accel_x > -0.976864 &&
    mean_accel_smv <= 9.951029 &&
    range_magn_x > 24.96 &&
    min_gyro_y <= -0.530121
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.700605 &&
    sma_gyro <= 0.05313 &&
    min_accel_smv > 8.774033
  ) {
    return 'f';
  }

  if (
    max_magn_smv > 44.811308 &&
    sma_gyro > 0.693172 &&
    std_accel_y > 7.433055 &&
    min_accel_smv <= 4.002073 &&
    min_accel_y <= 0.90686 &&
    max_magn_smv <= 64.984371 &&
    rms_gyro_x > 0.855527
  ) {
    return 'b';
  }

  if (
    mean_magn_smv > 38.271083 &&
    sma_gyro > 0.693172 &&
    mean_magn_smv > 46.581232 &&
    mean_accel_z <= 8.886199 &&
    mean_magn_z > 28.6648 &&
    mean_magn_z <= 43.083248 &&
    min_accel_y <= 1.709512
  ) {
    return 'a';
  }

  if (
    mean_magn_smv > 38.271083 &&
    sma_gyro > 0.693172 &&
    mean_magn_z > 31.4755 &&
    mean_accel_z > -2.557367
  ) {
    return 'd';
  }

  if (
    mean_magn_smv > 38.271083 &&
    sma_gyro > 1.050327 &&
    mean_magn_smv > 46.581232 &&
    sma_magn <= 90.932465 &&
    min_accel_x > -3.126827 &&
    std_accel_x <= 4.076842 &&
    min_gyro_y > -1.967291 &&
    rms_gyro_x > 0.733189 &&
    sma_magn > 71.692322 &&
    mean_accel_z <= 7.119616
  ) {
    return 'c';
  }

  if (
    mean_magn_smv > 38.271083 &&
    sma_gyro > 1.051467 &&
    sma_magn > 87.9832 &&
    std_magn_z > 1.82478 &&
    max_accel_z <= 11.530828
  ) {
    return 'a';
  }

  if (
    mean_magn_smv > 38.271083 &&
    sma_gyro > 1.051467 &&
    rms_gyro_x <= 0.508712 &&
    min_accel_y <= -8.172607 &&
    mean_magn_smv > 47.958437
  ) {
    return 'c';
  }

  if (
    mean_magn_smv > 38.271083 &&
    sma_gyro > 1.051467 &&
    min_accel_smv > 1.83137 &&
    mean_magn_smv <= 40.735567 &&
    std_magn_z <= 16.001877 &&
    max_gyro_y <= 1.875132 &&
    std_gyro_y > 0.408862
  ) {
    return 'a';
  }

  if (
    max_magn_smv > 44.811308 &&
    min_gyro_smv > 0.062642 &&
    std_gyro_y > 1.232475 &&
    min_gyro_z > -7.374511 &&
    mean_accel_y <= 5.595899
  ) {
    return 'a';
  }

  if (
    mean_magn_smv > 38.561301 &&
    sma_gyro > 0.693172 &&
    std_accel_x > 2.210155 &&
    min_gyro_smv > 0.007138 &&
    max_accel_x <= 18.328705 &&
    min_accel_x > 1.119289 &&
    mean_accel_y > 0.821298 &&
    min_accel_z > -7.303512
  ) {
    return 'c';
  }

  if (
    mean_magn_smv > 38.561301 &&
    sma_gyro > 1.050327 &&
    sma_magn > 87.105713 &&
    mean_accel_smv <= 9.919347
  ) {
    return 'd';
  }

  if (
    mean_magn_smv > 38.561301 &&
    sma_gyro > 1.050327 &&
    max_gyro_y <= 2.327376 &&
    min_accel_smv > 1.83137 &&
    mean_magn_z > -31.9719 &&
    min_gyro_y <= -0.341596 &&
    range_accel_y <= 22.987433 &&
    range_magn_z <= 19.151306 &&
    max_accel_z > 0.782904 &&
    std_accel_smv <= 9.376957 &&
    max_accel_y <= 9.836029 &&
    max_gyro_z <= 1.128158 &&
    std_accel_z > 0.79939
  ) {
    return 'a';
  }

  if (
    mean_magn_smv > 38.561301 &&
    std_accel_smv > 7.905124 &&
    mean_magn_z > -41.731598 &&
    sma_magn <= 89.293957 &&
    max_accel_x <= 17.019182 &&
    range_magn_y > 3.311157 &&
    max_gyro_x > 0.044626 &&
    mean_accel_y <= -5.886214 &&
    max_magn_y > 36.188 &&
    range_accel_z <= 7.438785
  ) {
    return 'c';
  }

  if (
    mean_magn_smv > 38.561301 &&
    std_accel_smv > 7.905124 &&
    mean_magn_z > -41.731598 &&
    sma_magn <= 89.293957 &&
    max_accel_x <= 17.019182 &&
    range_magn_y > 3.311157 &&
    max_gyro_x > 0.069516 &&
    rms_gyro_x <= 0.566415 &&
    min_accel_smv <= 4.772838
  ) {
    return 'a';
  }

  if (
    mean_magn_smv > 38.561301 &&
    sma_gyro > 1.050327 &&
    std_accel_x <= 2.210155 &&
    mean_magn_smv <= 55.954758 &&
    min_gyro_smv <= 0.039253 &&
    mean_magn_smv > 43.050582
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 38.561301 &&
    sma_gyro > 1.574214 &&
    max_accel_y > 10.788605
  ) {
    return 'a';
  }

  if (mean_magn_smv <= 38.561301 && std_gyro_z <= 0.013108) {
    return 'd';
  }

  if (
    mean_magn_smv <= 38.561301 &&
    std_accel_smv > 6.873267 &&
    min_gyro_smv <= 0.010472 &&
    max_magn_smv > 36.904877 &&
    mean_accel_y > 1.492186
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 38.561301 &&
    max_magn_y > 27.443504 &&
    max_accel_x <= 10.874796 &&
    std_gyro_z > 0.131891 &&
    min_accel_smv > 2.044048
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 38.561301 &&
    rms_accel_x > 8.497211 &&
    mean_accel_y <= -0.496812 &&
    max_accel_z <= 1.368927
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    rms_accel_x > 8.497211 &&
    max_gyro_y > 0.131622
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    max_accel_z > 12.239532 &&
    min_gyro_smv > 0.011113 &&
    mean_magn_z > -7.77 &&
    max_accel_z <= 15.177308
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    max_accel_z > 12.220379 &&
    mean_magn_z <= -5.79 &&
    max_accel_x > 0.572861 &&
    max_accel_z <= 15.316176 &&
    min_accel_x <= -0.300472
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    max_magn_y <= 32.900002 &&
    min_accel_z > 8.680832 &&
    min_accel_x <= -2.074576
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    max_magn_y <= 32.900002 &&
    mean_magn_z <= 3.475 &&
    range_magn_y > 36.546898 &&
    mean_magn_smv > 28.533205 &&
    max_magn_y > 9.473999 &&
    min_gyro_smv > 0.01805
  ) {
    return 'e';
  }

  if (mean_magn_smv <= 38.373391 && max_magn_y > 32.900002) {
    return 'c';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    min_accel_z <= -5.578476 &&
    std_accel_smv <= 6.107204 &&
    mean_accel_y > 6.665747
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    mean_magn_z <= 4.188 &&
    range_magn_y > 39.719998 &&
    mean_accel_z > 6.907243
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    mean_magn_z <= 4.188 &&
    max_magn_smv <= 47.612069 &&
    min_gyro_smv > 0.038416 &&
    range_magn_y <= 24.194336 &&
    min_accel_x <= -0.248428 &&
    std_accel_smv <= 6.029569 &&
    std_accel_x <= 1.047854 &&
    std_accel_y > 0.446802
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    mean_magn_z <= 4.188 &&
    range_accel_y <= 2.965225 &&
    max_magn_smv > 45.059734
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    mean_magn_z <= 4.188 &&
    max_magn_smv > 40.696897 &&
    mean_accel_y <= 8.029523 &&
    std_gyro_y <= 0.298236 &&
    min_gyro_smv > 0.004021
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    range_magn_y > 25.380001 &&
    mean_magn_smv > 30.034443
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 38.373391 &&
    mean_magn_z <= 4.188 &&
    mean_accel_smv <= 9.416175 &&
    min_gyro_smv > 0.051482
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 38.345637 &&
    mean_magn_z <= 4.188 &&
    mean_accel_smv > 9.39576 &&
    min_accel_z > -5.370194 &&
    mean_magn_smv > 33.899039 &&
    mean_magn_z > -26.947632 &&
    min_gyro_y > -1.100101
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.745846 &&
    mean_magn_smv <= 30.7036 &&
    min_accel_x > -0.842785 &&
    mean_accel_smv <= 10.337904 &&
    max_accel_z <= 9.314642 &&
    min_gyro_smv > 0.020517
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 41.063489 &&
    mean_magn_z <= 1.6813 &&
    mean_accel_y > 2.087527 &&
    mean_accel_smv > 10.030293 &&
    std_accel_smv <= 10.852582 &&
    max_magn_smv <= 39.925559
  ) {
    return 'e';
  }

  if (
    sma_magn <= 47.267999 &&
    mean_magn_smv > 36.962824 &&
    std_accel_x <= 0.801385
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 41.063489 &&
    max_magn_y <= -12.556999 &&
    mean_accel_z > -2.154662 &&
    range_magn_z <= 18.125002 &&
    max_magn_smv <= 39.277138 &&
    max_magn_y > -22.210312 &&
    range_magn_z > 3.216995 &&
    max_accel_smv > 12.584538
  ) {
    return 'd';
  }

  if (
    sma_magn <= 47.219999 &&
    mean_magn_smv <= 38.207606 &&
    range_magn_y <= 25.140381 &&
    mean_accel_y > 7.508336 &&
    max_magn_smv <= 33.403891
  ) {
    return 'd';
  }

  if (
    sma_magn <= 47.219999 &&
    mean_magn_smv <= 38.207606 &&
    range_magn_y <= 25.140381 &&
    mean_accel_y > 6.697744 &&
    mean_magn_z <= -4.27
  ) {
    return 'e';
  }

  if (
    sma_magn <= 46.853999 &&
    mean_accel_y > 6.628789 &&
    range_magn_x <= 15.660002
  ) {
    return 'a';
  }

  if (
    sma_magn <= 46.853999 &&
    max_accel_y > -4.522003 &&
    range_magn_y <= 25.140381 &&
    min_gyro_smv <= 0.063346 &&
    max_accel_z > 11.121994 &&
    sma_magn > 39.000601
  ) {
    return 'f';
  }

  if (
    sma_magn <= 46.853999 &&
    max_accel_y > -4.522003 &&
    range_magn_y > 25.140381
  ) {
    return 'd';
  }

  if (
    sma_magn <= 45.92 &&
    max_accel_z <= 11.154586 &&
    std_accel_y <= 4.649759 &&
    range_accel_y > 6.59004
  ) {
    return 'e';
  }

  if (
    sma_magn <= 45.92 &&
    min_gyro_smv <= 0.058991 &&
    mean_magn_z <= 5.01236 &&
    mean_magn_z <= -19.524 &&
    mean_magn_smv <= 28.626452 &&
    max_gyro_z <= 0.220566
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.745846 &&
    std_accel_z <= 1.605017 &&
    range_magn_z <= 8.645004 &&
    max_magn_y <= -21.934509 &&
    mean_magn_smv <= 33.691614
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 43.745846 &&
    sma_gyro <= 0.710976 &&
    range_accel_z <= 7.696161 &&
    mean_accel_z > 8.602965 &&
    max_accel_x > -0.070629 &&
    range_magn_y > 1.422119
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 43.745846 &&
    mean_accel_z > 8.649796 &&
    min_gyro_smv <= 0.044732
  ) {
    return 'd';
  }

  if (
    min_gyro_smv > 0.062642 &&
    max_magn_smv > 43.659471 &&
    sma_magn <= 81.0745 &&
    min_accel_smv <= 1.83137 &&
    std_accel_x <= 6.427868 &&
    std_gyro_z <= 0.580256 &&
    mean_accel_smv <= 11.161416
  ) {
    return 'a';
  }

  if (
    mean_accel_smv > 11.098412 &&
    min_accel_smv > 1.804479 &&
    max_magn_smv <= 59.238763 &&
    std_accel_y <= 6.882399 &&
    min_accel_y > 1.594864 &&
    range_magn_x > 4.136658 &&
    mean_accel_smv > 11.128068 &&
    std_magn_z <= 5.45096
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 43.745846 &&
    mean_magn_z <= 6.8923 &&
    max_magn_y > 12.42 &&
    range_magn_y > 5.683002 &&
    mean_accel_z <= 6.74156
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 43.745846 &&
    std_accel_smv <= 6.699972 &&
    min_accel_y <= 5.631334 &&
    mean_magn_z <= 8.643951 &&
    min_gyro_y > -0.103272 &&
    mean_magn_z <= -10.3756
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 43.745846 &&
    mean_magn_z <= 6.8923 &&
    mean_magn_z > -33.04023 &&
    range_magn_z <= 8.28 &&
    range_magn_y > 4.135002
  ) {
    return 'e';
  }

  if (
    sma_gyro > 1.049959 &&
    mean_magn_smv > 38.561301 &&
    max_gyro_y <= 2.281039 &&
    min_accel_smv > 1.797994 &&
    mean_accel_z <= 6.762629 &&
    mean_accel_smv > 9.388082 &&
    min_accel_x > -10.448044 &&
    max_gyro_z <= 1.3135 &&
    max_accel_z > 0.512359 &&
    min_gyro_y <= -0.541846 &&
    min_accel_z <= 1.580221 &&
    max_magn_smv > 54.294862 &&
    min_gyro_z > -0.863596
  ) {
    return 'c';
  }

  if (
    sma_gyro > 1.049959 &&
    mean_magn_smv > 38.561301 &&
    std_accel_x <= 2.213909 &&
    mean_magn_smv <= 55.954758 &&
    std_gyro_z <= 0.489163 &&
    mean_accel_y > 4.115998 &&
    std_gyro_z <= 0.276059
  ) {
    return 'c';
  }

  if (
    mean_accel_smv > 11.554817 &&
    max_accel_z <= 7.199203 &&
    min_accel_smv > 1.583316 &&
    range_magn_x <= 36.780998 &&
    min_gyro_z > -0.96254
  ) {
    return 'a';
  }

  if (
    sma_gyro > 1.049959 &&
    mean_magn_smv > 38.561301 &&
    sma_magn > 80.28595 &&
    range_magn_z > 14.820002
  ) {
    return 'c';
  }

  if (
    sma_gyro > 1.049959 &&
    mean_magn_smv > 38.561301 &&
    std_accel_x <= 2.213909 &&
    mean_magn_smv <= 55.954758 &&
    range_accel_z > 1.59813 &&
    max_accel_z > 1.677138 &&
    rms_gyro_x <= 0.97714 &&
    rms_gyro_x > 0.540668 &&
    range_magn_y <= 15.440369
  ) {
    return 'a';
  }

  if (
    sma_gyro > 1.04901 &&
    mean_magn_smv > 38.561301 &&
    std_accel_x > 2.213909 &&
    range_magn_y > 3.283691 &&
    mean_accel_y > -8.671106 &&
    max_accel_x <= 21.241358 &&
    max_gyro_y > 2.799473
  ) {
    return 'b';
  }

  if (
    mean_accel_y > 9.140671 &&
    max_magn_y > -23.571396 &&
    max_gyro_z <= 1.304661 &&
    mean_magn_smv > 42.080732
  ) {
    return 'd';
  }

  if (
    sma_gyro > 1.04901 &&
    mean_magn_smv > 38.561301 &&
    sma_magn <= 90.027999 &&
    range_magn_y <= 3.787231 &&
    std_accel_z <= 2.174381
  ) {
    return 'c';
  }

  if (
    sma_gyro > 1.04901 &&
    mean_magn_smv > 38.561301 &&
    sma_magn <= 90.027999 &&
    std_accel_x > 2.213184 &&
    range_magn_y > 5.280003 &&
    mean_accel_y > -8.671106 &&
    min_accel_y > 1.818396 &&
    mean_magn_z > -24.371999
  ) {
    return 'a';
  }

  if (
    sma_gyro <= 1.04901 &&
    max_magn_smv > 89.202163 &&
    max_accel_z > 5.601181 &&
    max_magn_smv > 102.716004
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 1.04901 &&
    range_accel_y <= 1.927392 &&
    min_gyro_smv > 0.008378 &&
    min_accel_z > 8.513782 &&
    std_gyro_z > 0.027469
  ) {
    return 'd';
  }

  if (mean_magn_smv <= 38.561301 && range_accel_z <= 1.177277) {
    return 'e';
  }

  if (
    std_accel_x <= 2.213909 &&
    range_accel_y <= 1.927392 &&
    min_gyro_smv > 0.008558 &&
    range_accel_z <= 2.322388 &&
    sma_magn <= 57.551998 &&
    std_magn_z <= 3.646208
  ) {
    return 'f';
  }

  if (
    std_accel_x <= 2.213909 &&
    min_gyro_z > -0.012863 &&
    range_accel_y <= 7.458166 &&
    rms_accel_x > 0.808784
  ) {
    return 'd';
  }

  if (
    std_accel_x <= 2.213909 &&
    range_accel_y > 1.927392 &&
    max_magn_smv > 44.821566 &&
    std_gyro_z <= 0.017943 &&
    rms_accel_x <= 2.403672
  ) {
    return 'f';
  }

  if (
    std_accel_x <= 2.213909 &&
    range_accel_y > 1.927392 &&
    max_magn_smv > 44.821566 &&
    mean_accel_z <= 6.720969 &&
    rms_accel_x <= 5.908912 &&
    mean_magn_z > -29.963999 &&
    min_accel_z > -7.119159 &&
    sma_magn > 89.753326 &&
    mean_accel_y > -1.27168
  ) {
    return 'e';
  }

  if (
    std_accel_x <= 2.161642 &&
    range_accel_y > 1.927392 &&
    max_magn_smv > 44.821566 &&
    mean_accel_z <= 6.720969 &&
    rms_accel_x <= 5.908912 &&
    mean_magn_z > -29.963999 &&
    min_accel_x > 3.365311 &&
    mean_accel_z > -5.626254
  ) {
    return 'a';
  }

  if (
    std_accel_x <= 2.161642 &&
    range_accel_y > 1.927392 &&
    max_magn_smv > 44.821566 &&
    mean_accel_z <= 6.720969 &&
    rms_accel_x <= 5.908912 &&
    min_accel_z > 0.674622 &&
    range_accel_x <= 4.913052 &&
    rms_accel_x > 1.222598 &&
    range_accel_y > 2.916227
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 1.072481 &&
    max_accel_y > 8.986636 &&
    min_gyro_smv <= 0.003887
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.072481 &&
    max_accel_y > 8.986636 &&
    mean_magn_z <= -41.293301 &&
    mean_accel_z <= 3.560526
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.072481 &&
    max_accel_y > 8.986636 &&
    max_accel_x <= 1.643509 &&
    mean_accel_y > 7.10956 &&
    sma_magn <= 74.199998 &&
    max_gyro_x > 0.347321
  ) {
    return 'c';
  }

  if (
    sma_gyro > 1.540233 &&
    max_gyro_y <= 3.579011 &&
    mean_accel_z <= -1.86209 &&
    mean_accel_smv > 9.415625
  ) {
    return 'c';
  }

  if (
    sma_gyro > 1.540233 &&
    max_gyro_y <= 3.579011 &&
    max_accel_z > 0.890643 &&
    std_gyro_z <= 2.109845 &&
    max_gyro_x <= 3.670868 &&
    sma_magn > 57.617999 &&
    mean_magn_smv <= 42.009024 &&
    max_accel_z <= 11.936935
  ) {
    return 'b';
  }

  if (min_accel_y <= -9.681824 && max_magn_y <= 3.310997) {
    return 'd';
  }

  if (
    mean_accel_y <= -5.652539 &&
    max_magn_smv <= 50.207991 &&
    std_accel_y > 0.8047
  ) {
    return 'a';
  }

  if (
    mean_accel_y <= -5.652539 &&
    mean_magn_smv <= 53.412173 &&
    mean_magn_smv > 48.337885
  ) {
    return 'c';
  }

  if (
    min_gyro_smv > 0.062482 &&
    sma_magn <= 46.853999 &&
    min_accel_x > -3.446453
  ) {
    return 'd';
  }

  if (
    min_gyro_smv > 0.062482 &&
    max_accel_x > 16.571466 &&
    mean_accel_y <= -1.567747
  ) {
    return 'f';
  }

  if (
    min_gyro_smv > 0.062482 &&
    min_accel_smv > 7.377188 &&
    std_accel_y > 0.584807 &&
    mean_magn_z <= 25.3007 &&
    range_magn_z > 3.457642 &&
    min_accel_y <= 8.006455 &&
    range_accel_z > 2.209916 &&
    std_accel_z <= 1.108781
  ) {
    return 'c';
  }

  if (
    min_gyro_smv > 0.062482 &&
    max_gyro_z <= 0.195336 &&
    std_accel_z <= 2.443566 &&
    range_accel_z > 4.257021
  ) {
    return 'c';
  }

  if (
    min_gyro_smv > 0.062482 &&
    max_accel_z > 14.125183 &&
    std_accel_x > 1.019967 &&
    std_magn_z <= 13.788143 &&
    range_accel_y <= 12.148179 &&
    std_accel_x > 1.997374 &&
    max_magn_y > -23.898315
  ) {
    return 'b';
  }

  if (
    min_gyro_smv > 0.048884 &&
    mean_magn_z <= -43.650208 &&
    std_accel_x <= 1.253501
  ) {
    return 'd';
  }

  if (
    min_gyro_smv > 0.048884 &&
    std_accel_smv > 4.688046 &&
    mean_accel_z > -2.764106 &&
    min_accel_y > 6.927216 &&
    mean_magn_z <= -9.994499
  ) {
    return 'a';
  }

  if (
    min_gyro_smv > 0.048884 &&
    min_accel_y <= 6.927216 &&
    std_accel_smv > 4.688046 &&
    mean_accel_z > -2.764106 &&
    min_accel_smv > 3.069478 &&
    max_gyro_y <= 0.525263 &&
    range_magn_x > 4.799999 &&
    sma_gyro > 0.673517
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 6.763826 &&
    max_magn_smv <= 43.466443 &&
    min_gyro_smv <= 0.028465 &&
    std_magn_z > 0.627022
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 6.763826 &&
    sma_gyro > 1.010252 &&
    max_gyro_y <= 3.579011 &&
    sma_magn > 57.617999 &&
    std_gyro_z <= 0.320728 &&
    std_accel_y > 1.967826
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 6.763826 &&
    sma_gyro > 1.310551 &&
    max_gyro_y <= 3.579011 &&
    sma_magn > 57.617999 &&
    mean_magn_smv > 42.370171 &&
    rms_gyro_x <= 0.589088 &&
    std_gyro_y > 0.734949
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 6.763826 &&
    max_accel_smv > 14.25706 &&
    mean_accel_z <= -3.701795 &&
    mean_accel_smv <= 10.895103
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 6.763826 &&
    max_accel_smv > 14.25706 &&
    mean_magn_z <= -42.036812 &&
    mean_accel_y <= 3.420222
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 6.763826 &&
    min_accel_y > 6.615509 &&
    std_accel_x > 1.027405 &&
    mean_accel_smv <= 10.821406 &&
    mean_magn_z > -9.27
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 6.763826 &&
    max_accel_smv > 14.25706 &&
    min_gyro_smv <= 0.004553 &&
    rms_accel_x <= 4.959404
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 6.763826 &&
    max_accel_smv > 14.25706 &&
    sma_magn > 59.603999 &&
    range_magn_z > 3.63369 &&
    min_accel_smv > 1.613995 &&
    mean_accel_z > -2.835573 &&
    std_magn_z > 2.039917 &&
    max_accel_smv > 16.863033 &&
    max_magn_smv <= 70.434854
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 6.763826 &&
    min_accel_smv > 3.035756 &&
    max_accel_y > 8.986636 &&
    mean_magn_z > -41.885999 &&
    max_gyro_y <= 2.78645 &&
    mean_accel_smv <= 10.800747 &&
    std_accel_x > 0.705702 &&
    mean_accel_z <= 7.033661 &&
    mean_accel_smv > 9.982835 &&
    mean_accel_smv <= 10.468973
  ) {
    return 'a';
  }

  if (
    min_accel_z > 6.763826 &&
    mean_accel_smv <= 9.781496 &&
    mean_accel_z > 8.238807
  ) {
    return 'f';
  }

  if (
    min_accel_smv > 3.035756 &&
    max_accel_y > 8.986636 &&
    mean_magn_z <= -41.885999
  ) {
    return 'f';
  }

  if (
    min_accel_smv > 3.035756 &&
    max_accel_y > 8.986636 &&
    max_gyro_y <= 2.78645 &&
    max_accel_z <= 1.248306 &&
    max_accel_x > 2.624313
  ) {
    return 'd';
  }

  if (
    max_accel_y > 8.889999 &&
    mean_magn_smv > 38.171446 &&
    min_accel_smv > 1.62352 &&
    min_accel_z > -5.037554 &&
    range_magn_x > 2.500002 &&
    range_magn_y > 4.201996 &&
    min_accel_x > -8.482916 &&
    min_gyro_y > -1.444684
  ) {
    return 'c';
  }

  if (
    max_accel_y > 11.837585 &&
    sma_magn <= 74.853439 &&
    range_magn_x <= 39.048767
  ) {
    return 'a';
  }

  if (
    max_accel_y <= 11.837585 &&
    min_accel_z <= 6.763826 &&
    max_accel_y <= -3.985149 &&
    std_accel_smv <= 7.271425
  ) {
    return 'c';
  }

  if (
    max_accel_y <= 11.837585 &&
    min_accel_z <= 6.763826 &&
    mean_magn_z <= 32.8837 &&
    mean_accel_y > 7.586713 &&
    max_gyro_x <= 1.440582 &&
    max_gyro_y > 0.22452
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 6.763826 &&
    max_accel_y <= 11.837585 &&
    mean_magn_z <= 32.8837 &&
    max_gyro_y <= 0.114682 &&
    std_gyro_z > 0.030213 &&
    mean_accel_smv > 9.611404 &&
    std_gyro_y <= 0.250618
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 6.763826 &&
    max_accel_y <= 11.837585 &&
    mean_magn_z > 32.8837
  ) {
    return 'e';
  }

  if (min_accel_z <= 6.763826 && max_accel_y > 11.837585) {
    return 'b';
  }

  if (
    min_accel_z <= 6.763826 &&
    mean_magn_smv > 42.404743 &&
    std_gyro_y > 0.751966 &&
    mean_magn_smv <= 44.126225
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 6.763826 &&
    mean_magn_smv > 42.404743 &&
    std_gyro_y > 0.751966 &&
    mean_accel_z > 4.584557
  ) {
    return 'b';
  }

  if (min_accel_z <= 6.763826 && range_accel_x <= 0.859545) {
    return 'd';
  }

  if (
    min_accel_z <= 6.763826 &&
    std_accel_z > 5.599729 &&
    mean_accel_z > 0.000453
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 6.763826 &&
    mean_magn_smv > 42.404743 &&
    min_accel_smv > 3.405269 &&
    std_accel_smv > 6.229945 &&
    mean_magn_z > -39.548698 &&
    max_gyro_x > 0.034837 &&
    mean_magn_smv > 48.233416
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 6.790164 &&
    std_accel_z <= 6.209623 &&
    max_magn_smv > 32.893738 &&
    min_accel_x > -1.386612 &&
    max_magn_y > -15.509033 &&
    mean_accel_smv > 9.776082 &&
    max_accel_x <= 14.767887 &&
    range_accel_z <= 7.49147
  ) {
    return 'a';
  }

  if (
    mean_accel_z > 9.293022 &&
    max_accel_x > 2.4767 &&
    mean_accel_y <= 2.258998
  ) {
    return 'c';
  }

  if (
    mean_accel_z > 9.314726 &&
    max_accel_x <= 2.70066 &&
    min_gyro_smv <= 0.060833 &&
    max_accel_y <= 4.249838 &&
    mean_accel_z <= 9.969576
  ) {
    return 'd';
  }

  if (
    max_accel_y <= 0.84635 &&
    min_accel_y > -8.768112 &&
    min_accel_z > -5.501282
  ) {
    return 'f';
  }

  if (
    mean_accel_smv <= 9.372874 &&
    max_gyro_x > 0.379225 &&
    min_gyro_smv > 0.037932
  ) {
    return 'a';
  }

  if (
    max_accel_x > 5.8508 &&
    min_accel_x <= 4.195838 &&
    range_magn_y > 4.08783 &&
    mean_magn_smv <= 44.569694
  ) {
    return 'a';
  }

  if (
    min_accel_smv <= 2.945249 &&
    max_accel_x > 6.549911 &&
    mean_accel_y > 0.053
  ) {
    return 'c';
  }

  if (
    min_accel_smv <= 3.529064 &&
    max_magn_smv > 43.466443 &&
    std_accel_x <= 5.648057
  ) {
    return 'd';
  }

  if (
    min_accel_x <= -2.700742 &&
    mean_magn_z > 5.74 &&
    mean_magn_smv <= 43.798309 &&
    mean_accel_y <= 6.165258
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 39.257101 &&
    std_accel_z > 0.679411 &&
    max_gyro_y <= 1.13164
  ) {
    return 'e';
  }

  if (
    min_accel_x <= -2.679193 &&
    mean_magn_z > 0.6549 &&
    std_accel_y > 0.938582
  ) {
    return 'c';
  }

  if (
    min_accel_x <= -2.877918 &&
    std_accel_y > 1.11271 &&
    range_accel_y <= 8.214508 &&
    max_gyro_z <= 0.56279
  ) {
    return 'a';
  }

  if (min_gyro_smv <= 0.005252 && mean_accel_z <= 7.789534) {
    return 'a';
  }

  if (
    min_accel_x > -0.051475 &&
    mean_accel_smv <= 10.930152 &&
    min_accel_y <= 4.252899
  ) {
    return 'c';
  }

  if (
    std_gyro_y > 0.173587 &&
    max_magn_y <= -17.503357 &&
    max_gyro_z > 0.383531 &&
    max_accel_x > 1.075029
  ) {
    return 'a';
  }

  if (min_gyro_smv <= 0.005141 && mean_accel_z <= 8.365117) {
    return 'd';
  }

  if (mean_magn_smv > 51.173682 && mean_magn_smv > 57.152936) {
    return 'e';
  }

  if (mean_magn_smv > 51.173682 && std_accel_x <= 0.522624) {
    return 'c';
  }

  if (
    mean_magn_smv <= 51.173682 &&
    min_accel_z > 8.088913 &&
    std_accel_y <= 0.794358
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 51.173682 &&
    mean_magn_z > -9.09 &&
    min_gyro_smv <= 0.166652 &&
    mean_accel_y > -0.361775
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 51.173682 &&
    max_accel_z <= 9.103952 &&
    std_magn_z <= 8.234839 &&
    mean_accel_smv > 9.673654
  ) {
    return 'f';
  }

  if (mean_magn_smv <= 50.540796 && max_gyro_x <= 0.123243) {
    return 'c';
  }

  if (
    mean_magn_smv <= 50.540796 &&
    std_gyro_z > 0.451993 &&
    min_accel_x > -3.519852 &&
    std_accel_z > 1.895646
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 50.540796 &&
    std_gyro_z > 0.451993 &&
    std_accel_x <= 1.312281
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 50.540796 &&
    std_gyro_y <= 0.28214 &&
    min_accel_y > 1.564611
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 50.540796 &&
    range_magn_y <= 6.275002 &&
    min_accel_x > -2.660039
  ) {
    return 'f';
  }

  if (range_magn_y <= 6.275002 && min_accel_x > -4.119224) {
    return 'd';
  }

  if (
    range_magn_y > 8.709999 &&
    min_gyro_smv <= 0.125277 &&
    std_gyro_y <= 0.517398
  ) {
    return 'a';
  }

  if (range_magn_y <= 12.268066 && std_accel_z <= 1.933925) {
    return 'e';
  }

  if (min_accel_y <= 2.423006) {
    return 'f';
  }

  return 'a';
};
