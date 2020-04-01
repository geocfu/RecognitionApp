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
  rms_accel_z,
  entropy_accel,
  energy_accel,
  std_gyro_y,
  std_gyro_z,
  max_gyro_x,
  max_gyro_y,
  max_gyro_z,
  min_gyro_x,
  min_gyro_y,
  min_gyro_z,
  min_gyro_smv,
  rms_gyro_x,
  sma_gyro,
  entropy_gyro,
  mean_magn_z,
  mean_magn_smv,
  std_magn_z,
  std_magn_smv,
  max_magn_y,
  max_magn_smv,
  min_magn_y,
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
    entropy_accel <= 2.215727 &&
    rms_accel_z <= 6.780801 &&
    max_accel_y > -1.818939 &&
    mean_accel_y > -1.662294
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_accel_z > 16.385916 &&
    std_gyro_y > 0.236455 &&
    mean_accel_y <= 2.412398 &&
    std_magn_z > 1.580587
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_accel_z > 16.385916 &&
    std_gyro_y > 0.236455 &&
    std_accel_x > 2.475809 &&
    min_gyro_x <= -1.753326 &&
    min_accel_y <= -0.399832
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.439509 &&
    std_gyro_y > 0.228912 &&
    max_accel_y <= 14.492432 &&
    max_magn_smv > 43.435421 &&
    mean_magn_z > -30.518219 &&
    std_gyro_z > 0.213191 &&
    max_accel_y <= 9.499649 &&
    std_gyro_y > 0.876765 &&
    min_gyro_smv > 0.028006 &&
    mean_magn_smv > 36.892116 &&
    min_magn_y > 8.945 &&
    mean_magn_z <= 34.5316
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_magn_smv > 40.016196 &&
    max_accel_y > 15.508667 &&
    rms_gyro_x <= 0.733189 &&
    std_gyro_y > 0.082553 &&
    min_accel_y <= 7.487167 &&
    std_magn_smv > 10.399973 &&
    rms_accel_z <= 9.820543 &&
    max_accel_x > -0.629675
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_accel_y > 15.508667 &&
    sma_gyro <= 0.930606 &&
    std_accel_x <= 2.42171
  ) {
    return 'd';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_accel_y > 15.508667 &&
    rms_accel_x > 3.887054 &&
    std_gyro_z <= 0.223008 &&
    min_accel_y > -3.452988
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.439509 &&
    max_accel_y > 15.508667 &&
    rms_accel_x > 3.887054 &&
    min_accel_y <= -4.734314 &&
    max_gyro_x > 1.025299
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.439509 &&
    sma_gyro > 0.490739 &&
    max_accel_y <= 14.492432 &&
    max_magn_smv > 43.435421 &&
    max_accel_z <= 9.938635 &&
    min_accel_z <= 0.586597 &&
    std_gyro_y > 0.553582 &&
    min_accel_y <= 0.416604 &&
    mean_accel_y <= -6.179384 &&
    std_accel_smv > 8.051589 &&
    std_gyro_z <= 0.936925
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.490739 &&
    max_accel_y <= 14.492432 &&
    std_magn_smv > 10.090078 &&
    rms_accel_x > 8.398436 &&
    mean_accel_y <= -1.301129 &&
    mean_accel_z > 0.16305 &&
    max_magn_y <= 42.659
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    max_accel_y > 15.27533 &&
    mean_accel_z > 3.418202 &&
    range_magn_x > 8.913002 &&
    mean_accel_y <= 9.023256
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    max_magn_smv > 41.000484 &&
    std_accel_x > 2.784445 &&
    mean_accel_y <= -1.377187 &&
    max_magn_y <= 41.745998 &&
    sma_magn <= 78.33374 &&
    min_accel_x <= -0.038307 &&
    std_accel_z <= 3.725119
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    max_magn_smv > 41.000484 &&
    std_accel_x > 2.784445 &&
    mean_accel_y <= -1.481293 &&
    mean_accel_y > -6.508597 &&
    sma_magn <= 79.354201 &&
    min_gyro_z <= -1.100257
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.490739 &&
    max_magn_smv > 43.981567 &&
    std_accel_x <= 2.433332 &&
    rms_accel_z > 7.720016 &&
    std_accel_z > 1.682099 &&
    min_gyro_smv > 0.025508 &&
    range_accel_x <= 5.760625 &&
    std_accel_x > 0.534377 &&
    max_magn_y <= -0.06
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
    std_accel_smv <= 6.346116 &&
    mean_accel_y > -4.326933 &&
    mean_accel_z > 4.032195 &&
    max_accel_smv <= 10.31438 &&
    mean_magn_z <= -44.36 &&
    min_accel_x <= -1.630451 &&
    min_accel_y <= 1.552872 &&
    min_accel_y > -0.675186
  ) {
    return 'e';
  }

  if (
    std_accel_smv <= 6.346116 &&
    mean_accel_y > -4.326933 &&
    max_accel_smv <= 10.31438 &&
    std_gyro_z > 0.001173 &&
    min_accel_y > 7.158882 &&
    min_accel_smv <= 9.663199 &&
    max_magn_smv > 39.137204 &&
    range_magn_y <= 22.235004
  ) {
    return 'd';
  }

  if (
    std_accel_smv <= 6.346116 &&
    mean_accel_y > -4.326933 &&
    max_accel_smv <= 10.31438 &&
    sma_gyro > 0.006328 &&
    min_gyro_smv <= 0.120567 &&
    mean_magn_smv <= 53.222342 &&
    range_accel_y <= 1.016342 &&
    mean_magn_z <= 8.7913 &&
    mean_accel_smv <= 9.804566 &&
    min_accel_x > -7.288173 &&
    mean_accel_y <= 6.483457 &&
    max_accel_x <= 6.510406 &&
    entropy_accel <= 0.6814 &&
    std_accel_smv > 1.085616 &&
    mean_accel_smv <= 9.735766
  ) {
    return 'f';
  }

  if (
    entropy_accel <= 1.540692 &&
    min_accel_y > -5.568913 &&
    min_accel_z > 2.851334 &&
    rms_gyro_x <= 0.014576 &&
    mean_magn_smv > 53.078248 &&
    std_magn_z > 0.317802 &&
    mean_accel_y > -0.729633 &&
    std_gyro_y > 0.000925 &&
    min_gyro_x > -0.022812 &&
    range_magn_x <= 9.7229 &&
    range_accel_z > 0.577021
  ) {
    return 'e';
  }

  if (
    entropy_accel <= 1.540692 &&
    min_accel_y > -5.568913 &&
    rms_gyro_x <= 0.013934 &&
    max_accel_x <= -6.005855 &&
    rms_accel_z > 1.177009 &&
    max_accel_z <= 3.743334
  ) {
    return 'f';
  }

  if (
    entropy_accel <= 1.540692 &&
    min_accel_y > -5.568913 &&
    rms_gyro_x <= 0.013522 &&
    sma_magn <= 86.626289 &&
    max_accel_y > 2.543839 &&
    mean_magn_smv > 19.285982 &&
    rms_accel_z > 8.685688 &&
    max_magn_y > -32.5 &&
    max_accel_x > -0.276306 &&
    min_accel_x > -2.027951
  ) {
    return 'd';
  }

  if (
    entropy_accel <= 1.540692 &&
    mean_accel_y > -4.939118 &&
    min_accel_z > 2.851334 &&
    mean_magn_z <= -47.842407 &&
    mean_accel_y <= 0.381756 &&
    min_accel_z <= 9.341629 &&
    mean_magn_smv > 66.678959
  ) {
    return 'd';
  }

  if (
    entropy_accel <= 1.540692 &&
    mean_accel_y > -4.939118 &&
    min_accel_z > 3.437531 &&
    mean_accel_smv > 9.85819 &&
    min_gyro_smv <= 0.000456 &&
    mean_magn_z <= 64.834747 &&
    min_magn_y <= 2.254486
  ) {
    return 'd';
  }

  if (
    entropy_accel <= 1.540692 &&
    mean_accel_y > -4.939118 &&
    max_accel_y <= 8.470944 &&
    min_accel_z > -0.713494 &&
    max_accel_x <= 6.284971 &&
    max_accel_smv > 10.64291 &&
    range_magn_x > 0.704193 &&
    min_gyro_smv <= 0.085815 &&
    sma_gyro > 0.040899 &&
    rms_accel_z <= 9.169112 &&
    std_accel_x <= 1.110107 &&
    mean_accel_smv > 9.966586 &&
    min_accel_z <= 8.018426 &&
    min_accel_x > -4.364763 &&
    mean_magn_z <= 17.024231 &&
    sma_gyro <= 0.708417 &&
    max_accel_y > 5.464766 &&
    min_magn_y <= -17.921997
  ) {
    return 'e';
  }

  if (
    entropy_accel <= 1.540692 &&
    mean_accel_y > -4.939118 &&
    mean_accel_y <= 7.360329 &&
    mean_accel_z > 0.499599 &&
    max_accel_x <= 6.284971 &&
    max_accel_smv > 10.64291 &&
    range_magn_x > 0.704193 &&
    min_gyro_smv <= 0.08578 &&
    std_gyro_z > 0.036496 &&
    mean_accel_z <= 9.18042 &&
    min_accel_x <= -0.232238 &&
    std_gyro_y <= 0.099014 &&
    max_magn_y <= 23.059082 &&
    mean_accel_z > 4.15287 &&
    max_gyro_x > 0.021423 &&
    mean_magn_z <= 16.134 &&
    std_accel_x <= 1.018996 &&
    entropy_accel > 0.898502 &&
    range_magn_x <= 16.889954 &&
    max_magn_smv > 22.829805 &&
    std_gyro_z > 0.039876
  ) {
    return 'e';
  }

  if (
    std_accel_smv > 6.308512 &&
    max_magn_smv > 42.47908 &&
    max_accel_z <= -1.256027 &&
    sma_gyro <= 1.122841 &&
    mean_accel_z > -6.878302
  ) {
    return 'c';
  }

  if (
    entropy_accel > 1.551023 &&
    sma_gyro > 0.453627 &&
    max_magn_smv > 40.168913 &&
    std_accel_x > 2.784445 &&
    mean_accel_y <= 0.391093 &&
    mean_magn_z <= 35.29007 &&
    max_magn_y > 32.312 &&
    mean_accel_z > -2.915898 &&
    max_magn_y <= 110.691833 &&
    max_magn_smv <= 58.226316
  ) {
    return 'a';
  }

  if (
    entropy_accel > 1.551023 &&
    sma_gyro > 0.453627 &&
    max_magn_smv > 40.168913 &&
    std_accel_x > 2.784445 &&
    mean_accel_y <= -1.461062 &&
    mean_magn_z <= 36.352081 &&
    max_magn_y <= 40.312 &&
    max_accel_x <= 12.568253 &&
    max_magn_y > -12.079002
  ) {
    return 'a';
  }

  if (
    entropy_accel > 1.545928 &&
    sma_gyro > 0.453627 &&
    max_magn_smv > 40.168913 &&
    std_accel_x > 2.784445 &&
    mean_accel_y <= -1.461062 &&
    mean_magn_z > 37.530327 &&
    std_accel_y > 1.698822
  ) {
    return 'd';
  }

  if (
    entropy_accel > 1.545928 &&
    sma_gyro > 0.486532 &&
    max_magn_smv > 41.000484 &&
    std_accel_x > 2.784445 &&
    mean_accel_y <= -0.774113 &&
    mean_accel_y <= -6.429779 &&
    min_magn_y > 4.962002 &&
    std_gyro_z <= 0.846008 &&
    max_gyro_x > 0.500092 &&
    rms_accel_x > 3.509668
  ) {
    return 'a';
  }

  if (
    entropy_accel > 1.545928 &&
    sma_gyro > 0.486532 &&
    max_magn_smv > 41.000484 &&
    std_accel_x > 2.784445 &&
    mean_accel_y <= -0.774113 &&
    max_accel_y > -2.539051 &&
    min_magn_y <= 37.626648 &&
    max_accel_z <= 9.218918 &&
    entropy_gyro > 2.080684 &&
    max_magn_y > -10.973999 &&
    std_magn_smv <= 28.980916 &&
    std_gyro_y <= 1.307591 &&
    entropy_accel > 1.853827 &&
    min_gyro_x <= -0.443369
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    min_gyro_x <= -0.13176 &&
    std_magn_smv > 12.053915 &&
    std_accel_smv > 8.953491 &&
    mean_accel_y <= 1.725131 &&
    max_magn_y <= 33.801998 &&
    entropy_accel <= 2.202679 &&
    max_magn_y <= -10.900002 &&
    max_accel_z <= 6.993677
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.346116 &&
    min_gyro_x <= -0.13176 &&
    mean_magn_smv > 38.114126 &&
    std_accel_x > 2.199917 &&
    rms_accel_z <= 7.658929 &&
    mean_accel_y > -1.748195 &&
    min_gyro_z > -1.675139 &&
    std_accel_y > 9.443281 &&
    std_gyro_y <= 0.853762
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.346116 &&
    min_gyro_x <= -0.13176 &&
    mean_magn_smv > 38.114126 &&
    sma_gyro > 2.423401 &&
    mean_magn_z <= -31.445999 &&
    mean_accel_y > 2.055496 &&
    max_gyro_y > 1.355272 &&
    min_accel_y <= 2.020768
  ) {
    return 'b';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    mean_magn_smv > 39.902692 &&
    std_accel_x <= 2.199917 &&
    min_magn_y <= -43.287659 &&
    std_accel_y > 1.268787 &&
    min_gyro_x <= -1.36593 &&
    max_gyro_z <= 1.314297
  ) {
    return 'c';
  }

  if (
    std_accel_smv > 6.346116 &&
    sma_gyro > 0.502945 &&
    mean_magn_smv > 39.304625 &&
    mean_accel_y <= -1.319873 &&
    max_magn_y > 35.476002 &&
    max_accel_z > 1.34195 &&
    mean_accel_y <= -2.753452 &&
    mean_magn_smv <= 48.138819 &&
    range_magn_z <= 33.104
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.447286 &&
    min_gyro_x <= -0.13176 &&
    std_magn_smv > 12.053915 &&
    sma_gyro > 1.363169 &&
    mean_accel_y <= -1.336873 &&
    max_magn_y <= 37.115002 &&
    max_accel_z <= 8.60117 &&
    mean_magn_smv <= 36.389985
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 6.447286 &&
    min_gyro_x <= -0.13176 &&
    max_magn_smv > 39.896098 &&
    sma_gyro > 1.362396 &&
    mean_accel_y <= -1.319873 &&
    max_magn_y <= 37.115002 &&
    max_magn_y > -15.509033 &&
    mean_magn_smv > 36.025595 &&
    entropy_gyro <= 2.086451
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 1.086794 &&
    mean_accel_y > -4.94271 &&
    mean_magn_z <= 9.0632 &&
    max_accel_x <= 5.346416 &&
    min_gyro_smv <= 0.000357 &&
    max_magn_y <= 28.570999
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.086794 &&
    mean_accel_y > -4.94271 &&
    mean_magn_z <= 9.0632 &&
    max_accel_x <= 5.346416 &&
    mean_magn_z <= -45.358734 &&
    max_accel_smv > 10.31396 &&
    range_magn_x > 1.103401 &&
    max_accel_z <= 11.290909 &&
    min_accel_y > -0.429759 &&
    max_gyro_y <= 0.521836 &&
    mean_accel_smv > 9.736798 &&
    rms_accel_x <= 2.55853
  ) {
    return 'e';
  }

  if (
    std_accel_smv > 6.447286 &&
    min_gyro_x <= -0.13176 &&
    max_magn_smv > 39.896098 &&
    sma_gyro > 1.362396 &&
    mean_accel_y > -1.336873 &&
    std_accel_z > 1.734101 &&
    mean_magn_z > -30.606 &&
    min_gyro_z > -1.665952 &&
    rms_gyro_x <= 1.341879 &&
    range_magn_z <= 26.671 &&
    min_gyro_smv > 0.063246 &&
    max_accel_z > 0.718109 &&
    rms_accel_z <= 10.285973 &&
    range_magn_z <= 15.955002
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 1.086794 &&
    mean_accel_y > -4.94271 &&
    mean_magn_z <= 9.0632 &&
    max_accel_x <= 5.346416 &&
    min_accel_x <= -0.639271 &&
    min_gyro_smv <= 0.100092 &&
    range_magn_x <= 0.646973 &&
    mean_magn_z > -35.450001 &&
    max_gyro_z > 0.008255
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 1.086794 &&
    mean_accel_y > -4.94271 &&
    mean_magn_z <= 9.0632 &&
    max_accel_x <= 5.346416 &&
    min_accel_x <= -0.639271 &&
    min_gyro_smv <= 0.100092 &&
    mean_magn_z <= -44.984886 &&
    std_gyro_z <= 0.013017 &&
    max_accel_y <= 2.229797 &&
    max_accel_x <= -1.371878 &&
    mean_magn_z > -57.96526
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.086794 &&
    mean_accel_y > -4.94271 &&
    mean_magn_z <= 9.0632 &&
    max_accel_x <= 5.346416 &&
    min_accel_x <= -0.639271 &&
    mean_magn_z > -43.296444 &&
    min_gyro_smv <= 0.100092 &&
    std_gyro_z > 0.027695 &&
    range_accel_x > 0.541092 &&
    mean_accel_y <= 7.208702 &&
    mean_accel_z <= 9.471462 &&
    max_magn_smv <= 47.480663 &&
    mean_accel_z > -1.673667 &&
    mean_accel_smv > 9.943008 &&
    min_accel_z > 3.102737 &&
    max_magn_y <= 18.932999 &&
    range_magn_z <= 7.14 &&
    max_magn_smv > 22.107692
  ) {
    return 'e';
  }

  if (
    entropy_accel <= 1.495163 &&
    mean_accel_y <= -4.94271 &&
    min_accel_z > 4.285752 &&
    min_magn_y <= -3.353882
  ) {
    return 'd';
  }

  if (
    entropy_accel <= 1.495163 &&
    min_accel_y <= -6.442797 &&
    max_magn_smv > 39.716374 &&
    sma_gyro <= 0.949211 &&
    sma_magn <= 101.602783 &&
    min_magn_y > 10.680008 &&
    std_gyro_z <= 0.192542 &&
    rms_accel_x > 2.123654 &&
    max_accel_y > -8.454468
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 1.133082 &&
    mean_accel_z > 0.654216 &&
    sma_gyro <= 0.674599 &&
    max_accel_x <= 6.284971 &&
    mean_accel_y <= 7.596555 &&
    std_accel_y <= 0.251136 &&
    sma_gyro <= 0.024507 &&
    mean_accel_smv > 9.818188 &&
    min_magn_y > -7.403374
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.133082 &&
    mean_accel_z > 0.654216 &&
    std_accel_y <= 0.251136 &&
    mean_magn_z <= -47.940369 &&
    min_accel_x <= -3.098191 &&
    std_magn_z > 0.509883
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.133082 &&
    mean_accel_z > 0.654216 &&
    std_accel_y <= 0.251136 &&
    mean_magn_smv <= 53.291536 &&
    mean_magn_z <= 10.495605 &&
    mean_accel_smv <= 9.804566 &&
    min_accel_x > -7.851785 &&
    max_accel_x <= 4.828735 &&
    min_accel_z > 7.221848 &&
    min_accel_x > -0.877475 &&
    max_gyro_y > 0.023026 &&
    std_accel_smv > 1.030067 &&
    range_accel_x <= 1.066617
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 1.133082 &&
    min_gyro_smv <= 0.098452 &&
    mean_accel_z > 0.648083 &&
    mean_accel_y <= 7.517065 &&
    max_accel_x <= 6.268845 &&
    mean_magn_z > 8.694 &&
    max_gyro_x <= -0.003433 &&
    mean_magn_smv <= 31.333612
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 1.133082 &&
    min_gyro_smv <= 0.098452 &&
    mean_accel_z > 0.648083 &&
    mean_accel_y <= 7.517065 &&
    min_accel_x <= 4.629189 &&
    mean_magn_z > 9.0632 &&
    max_accel_smv > 10.140501 &&
    min_gyro_smv <= 0.000393 &&
    mean_magn_z <= 55.633392
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 1.133082 &&
    min_gyro_smv <= 0.098452 &&
    mean_accel_z > 0.648083 &&
    mean_accel_y <= 7.517065 &&
    min_accel_x <= 4.629189 &&
    min_accel_y <= -0.826553 &&
    min_gyro_x > -0.318108 &&
    max_magn_y > -58.434868 &&
    mean_magn_z > -52.081604 &&
    mean_magn_smv > 18.126957 &&
    std_gyro_z > 0.010534 &&
    max_magn_y <= 25.859999 &&
    min_accel_z <= 7.35379
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.133082 &&
    max_magn_smv <= 45.056034 &&
    max_accel_x > 6.268845 &&
    max_magn_smv > 20.534271 &&
    std_accel_z <= 0.225269 &&
    max_accel_x > 7.117962 &&
    max_accel_smv <= 10.824789 &&
    min_accel_x > 6.700173
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 1.133082 &&
    min_gyro_smv <= 0.098452 &&
    mean_magn_z <= 9.0632 &&
    max_accel_x <= 6.225114 &&
    mean_accel_y > 3.504154 &&
    mean_accel_y <= 7.722864 &&
    rms_gyro_x > 0.019262 &&
    mean_magn_smv <= 41.390273 &&
    min_accel_x <= -0.245406 &&
    std_accel_smv > 3.501227 &&
    std_gyro_z > 0.022208 &&
    rms_accel_x <= 1.830544 &&
    range_magn_z <= 3.489998 &&
    range_accel_z > 1.898602 &&
    mean_magn_smv > 21.409592 &&
    std_accel_smv > 4.271984 &&
    range_magn_z <= 3.379822 &&
    range_magn_z > 1.689148
  ) {
    return 'e';
  }

  if (
    entropy_accel <= 1.495163 &&
    min_accel_z > 4.100723 &&
    min_accel_x > 4.629189 &&
    max_accel_y > -0.071826 &&
    max_accel_y <= 3.871542
  ) {
    return 'd';
  }

  if (
    entropy_accel <= 1.495163 &&
    min_accel_z > 4.100723 &&
    mean_magn_z > 8.88 &&
    max_accel_y > 0.010774 &&
    mean_accel_y <= 7.369669 &&
    min_gyro_smv > 0.09032 &&
    max_gyro_x <= 1.64728 &&
    mean_magn_z > 10.976257 &&
    max_accel_z > 7.32506
  ) {
    return 'd';
  }

  if (
    entropy_accel <= 1.495163 &&
    min_accel_z > 4.100723 &&
    mean_magn_z > 8.88 &&
    min_accel_x <= 3.932373 &&
    mean_accel_y <= 7.369669 &&
    min_gyro_smv <= 0.105241 &&
    max_accel_smv > 10.156478 &&
    std_magn_z <= 3.490639 &&
    min_magn_y <= -28.893997 &&
    mean_magn_z <= 22.493999
  ) {
    return 'e';
  }

  if (
    entropy_accel <= 1.495163 &&
    min_accel_z > 4.100723 &&
    mean_magn_z <= 8.898621 &&
    mean_accel_z <= 8.79058 &&
    min_magn_y > -39.416504 &&
    mean_accel_smv > 9.841786 &&
    rms_gyro_x <= 0.013195 &&
    min_accel_y <= 4.710592
  ) {
    return 'd';
  }

  if (
    entropy_accel <= 1.495163 &&
    mean_magn_z <= 9.0632 &&
    min_gyro_smv <= 0.093285 &&
    min_accel_z > 4.103787 &&
    mean_accel_z <= 8.79058 &&
    mean_accel_smv > 9.841786 &&
    mean_magn_smv <= 9.093844 &&
    std_accel_z <= 0.948196
  ) {
    return 'f';
  }

  if (
    entropy_accel <= 1.495163 &&
    mean_magn_z <= 9.0632 &&
    min_gyro_smv <= 0.093285 &&
    min_accel_z > 4.103787 &&
    mean_accel_z <= 8.79058 &&
    mean_accel_smv > 9.841786 &&
    min_magn_y > -39.303589 &&
    max_accel_x > -0.921768 &&
    rms_accel_z > 7.199872 &&
    min_accel_x <= -0.578308 &&
    range_accel_x <= 2.705531 &&
    std_gyro_z > 0.012471 &&
    range_magn_z <= 4.167175 &&
    max_magn_smv > 22.859041
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 1.133082 &&
    min_gyro_smv <= 0.084542 &&
    mean_magn_z <= 9.0632 &&
    rms_accel_z > 1.976101 &&
    max_magn_smv <= 53.665796 &&
    mean_accel_z <= 4.697542 &&
    range_accel_x <= 1.503559 &&
    mean_accel_z > -8.916228 &&
    rms_accel_x > 2.729039 &&
    mean_accel_smv > 9.785868 &&
    mean_accel_smv <= 10.037055
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    mean_magn_z <= 8.77182 &&
    mean_accel_smv <= 9.877879 &&
    max_magn_smv <= 49.67394 &&
    std_gyro_z <= 0.022335 &&
    max_gyro_y > 0.037935 &&
    min_accel_z > 7.301118 &&
    std_magn_smv <= 17.519809 &&
    range_magn_z > 1.449585
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    mean_magn_z <= 6.8923 &&
    rms_accel_z <= 8.747181 &&
    min_magn_y > -35.34 &&
    mean_accel_smv > 9.855822 &&
    sma_gyro > 1.829965 &&
    min_accel_y > 4.501892
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    mean_magn_z <= 6.8923 &&
    rms_accel_z <= 8.747181 &&
    min_magn_y > -35.34 &&
    mean_accel_smv > 9.855822 &&
    max_accel_x > -1.142034 &&
    std_gyro_y <= 0.466607 &&
    std_gyro_z > 0.036399 &&
    sma_magn > 15.311101 &&
    min_accel_y > 2.248489 &&
    mean_accel_z > 7.03904 &&
    mean_magn_z > -39.577332 &&
    min_accel_x > -3.804503 &&
    min_accel_x <= -0.739831 &&
    range_magn_y <= 3.189659 &&
    std_gyro_z > 0.072969
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    min_gyro_smv <= 0.063293 &&
    max_magn_smv > 85.924291 &&
    mean_magn_z > -55.223351 &&
    range_magn_z <= 10.418999
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    mean_magn_z <= 9.0632 &&
    mean_accel_z <= 8.800726 &&
    min_magn_y > -35.131645 &&
    mean_magn_smv <= 41.390273 &&
    std_accel_z <= 0.535552 &&
    max_accel_x > 0.574626 &&
    mean_accel_smv <= 9.866196 &&
    rms_gyro_x > 0.008681 &&
    range_accel_y <= 1.778892 &&
    max_accel_y <= 7.850827 &&
    std_accel_z <= 0.32087 &&
    mean_accel_y > 4.82614
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_smv <= 10.52323 &&
    rms_gyro_x <= 0.019262 &&
    mean_accel_y > 1.525944 &&
    max_magn_smv <= 19.974233 &&
    min_accel_x <= -0.529135
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_smv <= 10.52323 &&
    rms_gyro_x <= 0.019262 &&
    mean_accel_y > 0.71012 &&
    min_accel_y <= 4.072769 &&
    std_gyro_y <= 0.060015 &&
    std_magn_smv > 3.43368 &&
    min_gyro_z > -0.02507 &&
    max_magn_smv > 33.11631
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_smv <= 10.52323 &&
    max_magn_y <= 23.039999 &&
    min_accel_z > -1.127669 &&
    mean_accel_y <= 7.676045 &&
    rms_gyro_x > 0.020293 &&
    mean_magn_z <= 5.226 &&
    mean_accel_z <= 8.672063 &&
    std_accel_smv <= 3.205298 &&
    min_accel_x <= -8.407239 &&
    min_accel_smv <= 9.443235
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    max_magn_smv <= 49.100167 &&
    sma_gyro > 0.041824 &&
    min_accel_y > 2.263947 &&
    mean_magn_z <= 7.55 &&
    max_accel_x <= -1.175553 &&
    max_accel_z <= 10.02916 &&
    std_magn_smv > 4.959978 &&
    mean_magn_z <= 2.4029 &&
    min_magn_y <= 6.318665 &&
    max_accel_x <= -1.46166
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    min_gyro_smv <= 0.063293 &&
    mean_magn_z <= 5.91 &&
    mean_magn_z <= -54.245758 &&
    min_accel_y <= 3.039439 &&
    std_magn_z <= 1.21328
  ) {
    return 'd';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    min_gyro_smv <= 0.063293 &&
    mean_magn_z <= 5.91 &&
    max_accel_y > 5.176264 &&
    min_magn_y > -39.761353 &&
    mean_accel_smv <= 9.977562 &&
    max_magn_y <= -27.700806 &&
    range_magn_y > 2.316284
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    mean_magn_z <= 5.338745 &&
    min_gyro_smv <= 0.063293 &&
    mean_accel_smv <= 9.866246 &&
    min_accel_z > 7.910684 &&
    max_magn_y <= -35.838318 &&
    max_gyro_x <= 0.08254
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.682567 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 6.03 &&
    mean_accel_z <= 8.699598 &&
    mean_magn_smv <= 41.390273 &&
    energy_accel > 9652.388274 &&
    range_magn_y <= 0.737953 &&
    mean_accel_y > 3.841018
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.679321 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 6.03 &&
    mean_accel_z <= 8.699598 &&
    mean_magn_smv <= 41.390273 &&
    range_magn_z <= 2.888489 &&
    range_magn_y <= 0.622368 &&
    mean_magn_z > -26.459999 &&
    mean_accel_smv <= 9.875683
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.679321 &&
    min_gyro_smv <= 0.063293 &&
    mean_magn_z <= 5.91 &&
    max_accel_y > 5.093664 &&
    min_magn_y > -38.490486 &&
    mean_magn_smv <= 41.390273 &&
    range_magn_z <= 2.64492 &&
    min_gyro_z <= -0.015129 &&
    max_accel_x > -1.127243 &&
    max_accel_x <= 2.135628 &&
    range_magn_z > 0.819206 &&
    max_accel_z > 9.490616 &&
    min_accel_z <= 8.303091 &&
    mean_magn_z <= -3.162
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.679321 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 6.03 &&
    mean_accel_z <= 8.699598 &&
    mean_magn_smv <= 41.390273 &&
    range_magn_z <= 2.888489 &&
    std_gyro_z > 0.011399 &&
    max_gyro_y <= 0.078425 &&
    range_accel_x > 0.20231 &&
    range_magn_y > 1.008606 &&
    min_gyro_z <= -0.006836 &&
    rms_accel_x <= 1.318547 &&
    mean_accel_smv > 9.457366 &&
    range_magn_x <= 4.277
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.679321 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 5.9783 &&
    mean_accel_smv <= 9.877879 &&
    max_gyro_z > 0.028735 &&
    mean_accel_smv > 9.461976 &&
    min_accel_z > 7.912837 &&
    mean_magn_smv <= 21.357458 &&
    sma_magn <= 33.42041 &&
    mean_magn_z > -11.335754
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.679321 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 5.9783 &&
    mean_accel_z <= 8.800726 &&
    mean_magn_smv <= 41.390273 &&
    std_gyro_z > 0.036408 &&
    std_gyro_y <= 0.222257 &&
    max_magn_y <= 21.24 &&
    std_gyro_y <= 0.068981 &&
    max_gyro_y <= 0.199474 &&
    range_magn_z > 3.891998 &&
    max_gyro_x <= 0.164937 &&
    std_gyro_y <= 0.044913
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.914357 &&
    mean_accel_smv <= 10.52323 &&
    mean_accel_y > 0.719305 &&
    mean_accel_y <= 7.081068 &&
    min_accel_z > -0.186753 &&
    rms_gyro_x > 0.028941 &&
    max_accel_y > 3.679001 &&
    mean_magn_z <= 5.226 &&
    std_gyro_z <= 0.039 &&
    mean_accel_z <= 9.034128 &&
    std_accel_x <= 1.356942 &&
    max_accel_x <= -0.914585 &&
    min_accel_z <= 8.303345 &&
    max_gyro_z <= 0.068473
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.679321 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 5.9783 &&
    rms_gyro_x > 0.030129 &&
    rms_accel_z <= 9.193612 &&
    mean_magn_smv <= 41.390273 &&
    std_accel_z > 0.586604 &&
    min_accel_x > -3.215511 &&
    std_accel_y <= 1.42456 &&
    mean_magn_z <= -0.0947 &&
    max_accel_z > 8.309077 &&
    min_gyro_y <= 0.001999 &&
    max_accel_x > -0.498009 &&
    min_accel_z <= 7.410281 &&
    mean_accel_y <= 6.853094 &&
    range_magn_z <= 11.340332 &&
    mean_accel_smv <= 9.981935 &&
    min_accel_x <= -0.29329 &&
    max_gyro_z > 0.029126 &&
    max_gyro_y <= 0.605988 &&
    range_magn_z <= 3.379822
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.681088 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 5.9783 &&
    mean_accel_z <= 8.800726 &&
    mean_accel_smv > 9.823548 &&
    range_magn_y <= 1.994324 &&
    range_magn_y > 0.689888 &&
    max_accel_smv <= 12.317462 &&
    range_magn_y <= 1.924133 &&
    max_gyro_z > 0.006104 &&
    min_magn_y > -30.296997 &&
    mean_magn_z > -17.280426
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.681088 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 5.9783 &&
    mean_accel_smv <= 9.866104 &&
    std_gyro_z <= 0.020879 &&
    max_accel_x > -1.996185 &&
    range_accel_x > 2.146393 &&
    rms_gyro_x > 0.006658
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_smv <= 10.52323 &&
    mean_accel_y > 0.719305 &&
    mean_accel_y <= 7.122737 &&
    rms_gyro_x > 0.033961 &&
    mean_accel_z > 0.559046 &&
    mean_magn_z <= 6.864 &&
    std_accel_smv <= 3.22197 &&
    std_accel_z > 0.107344 &&
    rms_accel_z <= 8.750825 &&
    mean_accel_smv <= 9.798276 &&
    std_magn_z > 1.209297 &&
    mean_magn_z <= 5.159912 &&
    mean_magn_smv <= 29.62239
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    mean_accel_smv <= 10.52323 &&
    max_magn_y <= 27.747002 &&
    sma_gyro <= 0.05365 &&
    min_gyro_z > 0.002932 &&
    max_accel_x <= 0.986441
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    mean_accel_smv <= 10.52323 &&
    mean_accel_y > 0.719305 &&
    mean_accel_y <= 7.122737 &&
    rms_gyro_x > 0.033961 &&
    mean_accel_z > 0.559046 &&
    mean_magn_z <= 6.864 &&
    max_accel_smv <= 13.450864 &&
    std_magn_smv > 5.321314 &&
    min_accel_z <= 8.106767 &&
    mean_accel_smv > 10.049531 &&
    mean_magn_smv <= 40.177193 &&
    min_accel_y > 2.256535 &&
    range_accel_y > 0.676362 &&
    range_accel_z > 1.843536 &&
    range_accel_z <= 4.295197
  ) {
    return 'e';
  }

  if (
    std_accel_smv > 7.052864 &&
    std_magn_z > 0.836155 &&
    mean_magn_smv > 39.161245 &&
    std_gyro_z > 0.663399 &&
    std_gyro_y <= 0.271184 &&
    mean_accel_y <= 7.61331
  ) {
    return 'c';
  }

  if (
    std_accel_smv > 7.052864 &&
    std_magn_z > 0.836155 &&
    mean_magn_smv > 39.161245 &&
    std_gyro_z > 0.663399 &&
    mean_magn_smv > 48.397008 &&
    entropy_gyro > 2.088113 &&
    min_gyro_smv > 0.030968 &&
    max_gyro_y > 0.310242 &&
    mean_magn_z <= -0.4351
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_smv <= 10.52323 &&
    max_magn_y <= 27.747002 &&
    sma_gyro <= 0.042213 &&
    mean_magn_z <= 24.551999 &&
    mean_accel_y <= 6.897287 &&
    rms_accel_z > 8.544116 &&
    max_accel_smv > 10.207317 &&
    mean_accel_y <= 4.915446 &&
    std_gyro_z <= 0.012913 &&
    std_magn_z <= 2.507461
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_smv <= 10.52323 &&
    mean_accel_y > 0.719305 &&
    mean_accel_y <= 6.949862 &&
    std_accel_smv <= 6.923187 &&
    max_accel_z > -8.256405 &&
    mean_magn_z <= 5.226 &&
    min_accel_x <= -0.584185 &&
    max_accel_y > 3.757699 &&
    std_magn_smv > 5.321314 &&
    mean_accel_smv <= 9.45754 &&
    mean_accel_smv > 8.812194 &&
    mean_magn_smv > 19.837713
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.681088 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    max_accel_smv <= 10.031086 &&
    mean_accel_smv <= 9.801296 &&
    range_accel_x <= 2.834821 &&
    min_accel_z <= 9.272476 &&
    mean_magn_z <= 16.53 &&
    max_magn_y > -14.636421
  ) {
    return 'f';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.681088 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 5.916 &&
    mean_accel_smv <= 9.977562 &&
    max_accel_smv > 10.029061 &&
    min_accel_y > 3.198653 &&
    min_magn_y > 18.867493 &&
    mean_magn_z > -17.156677 &&
    max_accel_z <= 10.106234
  ) {
    return 'f';
  }

  if (
    std_accel_smv > 7.161875 &&
    std_magn_z > 0.831579 &&
    mean_magn_smv > 39.161245 &&
    std_gyro_z > 0.663399 &&
    mean_magn_smv > 48.587394 &&
    sma_gyro > 2.569409 &&
    std_gyro_z <= 1.974706
  ) {
    return 'a';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.681088 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 1.878 &&
    rms_accel_z <= 8.813206 &&
    rms_gyro_x > 0.021044 &&
    min_accel_smv > 6.540058 &&
    std_magn_smv > 5.130615 &&
    mean_magn_smv <= 41.366888 &&
    min_accel_y <= 6.498184 &&
    min_accel_x <= -0.586597 &&
    min_accel_x > -2.916763 &&
    max_accel_x > -0.835576 &&
    range_accel_z > 2.985661 &&
    max_magn_y > -9.42 &&
    max_magn_y > -7.86 &&
    mean_accel_z > 6.658718 &&
    std_accel_y > 0.558266
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_z <= 1.681088 &&
    min_magn_y > -34.410095 &&
    min_gyro_smv <= 0.115214 &&
    mean_magn_z <= 4.9837 &&
    mean_accel_smv <= 9.977562 &&
    max_accel_smv > 10.029061 &&
    sma_magn > 85.575447
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.914357 &&
    mean_accel_smv > 10.52323 &&
    rms_accel_z <= 5.152897 &&
    min_accel_y <= 6.706159 &&
    std_accel_x > 1.227891 &&
    min_gyro_z > -1.73259 &&
    max_gyro_x > 0.135197 &&
    max_accel_z > 0.758698
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.914357 &&
    min_gyro_smv <= 0.075099 &&
    max_magn_y <= 27.747002 &&
    mean_accel_y <= 7.128474 &&
    mean_accel_z > -0.616068 &&
    mean_accel_z <= 9.03312 &&
    mean_accel_y > -2.595075 &&
    rms_gyro_x > 0.017851 &&
    max_accel_z <= 11.780669 &&
    mean_accel_z <= 0.733224 &&
    min_accel_y <= 5.194443 &&
    range_accel_x <= 5.112818 &&
    min_accel_x <= -7.039581
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.609786 &&
    min_gyro_smv <= 0.075099 &&
    max_magn_y <= 27.747002 &&
    mean_accel_z > 0.168796 &&
    mean_accel_y <= 7.358085 &&
    rms_accel_z <= 9.045557 &&
    mean_accel_y <= -3.644805 &&
    max_magn_smv <= 37.226633 &&
    min_accel_y <= -8.797494
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_y > 0.719305 &&
    max_accel_y <= 10.659317 &&
    mean_accel_z > 0.633745 &&
    rms_gyro_x <= 0.020293 &&
    entropy_accel > 1.243015 &&
    sma_magn > 30.701999 &&
    mean_accel_smv > 9.771887
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_y > 0.719305 &&
    max_accel_y <= 10.659317 &&
    mean_accel_z > 0.633745 &&
    max_accel_z <= 11.777079 &&
    mean_accel_y <= 7.358085 &&
    min_accel_z <= 8.334471 &&
    mean_magn_z <= 5.226 &&
    rms_gyro_x > 0.02697 &&
    std_accel_y <= 1.089551 &&
    max_magn_smv > 23.78853 &&
    mean_magn_smv <= 41.253284 &&
    range_magn_z <= 2.668762 &&
    max_gyro_x > 0.016328 &&
    min_accel_x <= -0.531513 &&
    max_accel_x > -7.817307 &&
    min_gyro_y > -0.153119 &&
    min_gyro_y <= -0.036957
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_y > 0.719305 &&
    max_accel_y <= 10.659317 &&
    mean_accel_z > 0.544561 &&
    max_accel_z <= 11.777079 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z > 4.9837 &&
    max_magn_y <= 8.889 &&
    max_gyro_x <= 0.008453 &&
    max_gyro_z > 0.039874
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_y > 0.719305 &&
    max_accel_y <= 10.659317 &&
    mean_accel_z > 0.544561 &&
    max_accel_z <= 11.777079 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z > 4.9837 &&
    max_magn_y <= 6.66 &&
    std_gyro_z <= 0.009921 &&
    max_accel_x <= 0.609324
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.609786 &&
    mean_accel_y > 0.719305 &&
    max_accel_y <= 10.659317 &&
    mean_accel_z > 0.633745 &&
    max_accel_z <= 11.777079 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z > 4.9837 &&
    min_magn_y <= -2.488998 &&
    mean_magn_z <= 21.0136 &&
    mean_magn_smv > 18.946002 &&
    range_accel_y > 0.433351 &&
    std_magn_smv <= 19.18476 &&
    min_magn_y <= -15.878998 &&
    range_magn_z <= 8.639999 &&
    range_accel_x <= 5.299565 &&
    max_accel_x <= 0.390267
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    min_gyro_smv <= 0.075099 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z <= 5.226 &&
    rms_gyro_x > 0.028501 &&
    std_magn_smv > 5.321314 &&
    max_accel_smv <= 13.587093 &&
    min_accel_z <= 8.108612 &&
    mean_accel_y > 3.238517 &&
    mean_accel_y <= 6.83733 &&
    std_accel_x <= 0.846651 &&
    max_accel_smv <= 10.588746 &&
    max_gyro_z > 0.169105 &&
    entropy_gyro <= 2.251355 &&
    entropy_gyro > 2.180887
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    min_gyro_smv <= 0.075099 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z <= 5.226 &&
    rms_gyro_x > 0.028501 &&
    std_magn_smv > 5.321314 &&
    max_accel_smv <= 13.587093 &&
    rms_accel_z <= 8.750825 &&
    min_accel_y > 2.24217 &&
    mean_accel_y <= 6.83733 &&
    max_accel_smv <= 10.588746 &&
    max_accel_x > 0.306396 &&
    min_gyro_smv > 0.024328
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.544291 &&
    min_gyro_smv <= 0.075099 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z <= 5.226 &&
    rms_gyro_x > 0.028501 &&
    std_magn_smv > 5.321314 &&
    max_accel_z <= 10.720963 &&
    min_accel_z <= 8.108612 &&
    min_accel_x <= -0.288501 &&
    mean_magn_z <= -0.0947 &&
    std_accel_z > 3.32707 &&
    max_accel_x > -0.428562
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    min_gyro_smv <= 0.075099 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z <= 5.226 &&
    rms_gyro_x > 0.028501 &&
    max_accel_smv <= 14.04989 &&
    std_magn_smv > 5.321314 &&
    rms_accel_z <= 8.750306 &&
    min_accel_y > 2.24217 &&
    mean_accel_smv > 10.122335 &&
    min_accel_y <= 5.535563 &&
    rms_accel_x > 0.891672
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    min_gyro_smv <= 0.075099 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 7.358085 &&
    mean_magn_z <= 5.226 &&
    rms_gyro_x > 0.028501 &&
    max_accel_smv <= 14.04989 &&
    std_magn_smv > 5.321314 &&
    rms_accel_z <= 8.750306 &&
    min_accel_x <= -0.288501 &&
    std_accel_x <= 0.784518 &&
    std_accel_smv > 3.596587 &&
    std_magn_smv > 7.27497 &&
    max_accel_x <= 1.389725 &&
    min_gyro_smv <= 0.051795 &&
    min_gyro_z <= -0.093815 &&
    std_gyro_y <= 0.80028 &&
    rms_gyro_x > 0.077467 &&
    std_gyro_y <= 0.224716 &&
    mean_accel_smv > 9.507062
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.914357 &&
    min_accel_y > -3.137601 &&
    max_accel_y <= 10.659317 &&
    mean_accel_z > 0.633745 &&
    min_gyro_smv <= 0.077222 &&
    mean_accel_y > 7.553826 &&
    min_magn_y > -41.578674 &&
    mean_accel_z <= 6.128369 &&
    mean_magn_z > -13.9978
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.914357 &&
    min_accel_y > -3.974496 &&
    max_accel_y <= 10.659317 &&
    mean_accel_z > 0.633745 &&
    std_accel_smv <= 6.931428 &&
    min_accel_z <= 8.334471 &&
    min_accel_y <= 6.268341 &&
    min_gyro_smv > 0.003666 &&
    mean_magn_z <= -0.204 &&
    max_gyro_y > 0.073471 &&
    mean_accel_smv > 10.236213 &&
    min_gyro_y <= -0.07943 &&
    min_accel_y <= 5.505467
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.914357 &&
    min_gyro_smv <= 0.075026 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.519661 &&
    max_accel_z <= 11.780669 &&
    mean_accel_y > 1.25585 &&
    mean_magn_z <= -0.222 &&
    rms_gyro_x > 0.019285 &&
    min_accel_x <= -0.337582 &&
    rms_accel_z > 9.323862 &&
    max_gyro_x > 0.018607 &&
    min_accel_y <= 2.352303 &&
    min_accel_x > -2.267378 &&
    min_gyro_smv <= 0.019381
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.914357 &&
    min_gyro_smv <= 0.075026 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.519661 &&
    max_accel_z <= 11.780669 &&
    mean_accel_y > 1.25585 &&
    rms_gyro_x <= 0.018118 &&
    mean_accel_y <= 4.751652 &&
    std_accel_x <= 1.119646 &&
    rms_accel_x <= 0.959027
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.914357 &&
    min_gyro_smv <= 0.075026 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.519661 &&
    max_accel_z <= 11.780669 &&
    max_accel_y > 1.367089 &&
    max_gyro_x <= 0.012619 &&
    max_gyro_x <= -0.00647
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 7.090723 &&
    min_accel_y <= -7.683548 &&
    max_accel_z > -3.561646 &&
    max_gyro_y > 0.576725
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 44.914357 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_magn_z <= -0.2 &&
    min_accel_x <= -0.337582 &&
    min_accel_z <= 8.921992 &&
    std_accel_y <= 1.089551 &&
    std_magn_smv > 5.121817 &&
    min_accel_y > 1.512589 &&
    mean_magn_z > -35.591999 &&
    max_gyro_z > 0.014885 &&
    std_accel_x > 1.173091 &&
    max_accel_smv <= 11.738863
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 7.090723 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_magn_z <= -0.222 &&
    min_accel_x <= -0.337582 &&
    min_accel_z <= 8.953117 &&
    std_magn_smv > 5.121817 &&
    range_magn_z <= 16.086998 &&
    mean_magn_z > -35.574 &&
    mean_accel_smv > 10.219679 &&
    max_gyro_z > 0.026102 &&
    mean_accel_y <= 6.585252 &&
    std_accel_x <= 2.457439
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.914357 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_magn_z <= -0.2 &&
    min_accel_x <= -0.337582 &&
    min_accel_z <= 8.921992 &&
    std_magn_smv > 4.904945 &&
    std_accel_y <= 1.089551 &&
    max_magn_y <= 20.143509 &&
    max_gyro_z > 0.016373 &&
    max_gyro_y <= 0.065892 &&
    sma_gyro > 0.41506 &&
    mean_accel_smv <= 9.752931
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.544291 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_magn_z <= -0.114 &&
    min_accel_x <= -0.337582 &&
    min_accel_z <= 8.921992 &&
    std_magn_smv > 4.904945 &&
    std_accel_y <= 1.089551 &&
    max_magn_y <= 20.143509 &&
    max_gyro_y > 0.065892 &&
    mean_magn_smv > 41.218202 &&
    range_magn_x <= 4.348755
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.544291 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_magn_z <= -0.114 &&
    min_accel_x <= -0.337582 &&
    min_accel_z <= 8.921992 &&
    std_magn_smv > 4.904945 &&
    std_accel_y <= 1.089551 &&
    max_magn_y <= 20.143509 &&
    max_gyro_y > 0.067673 &&
    std_magn_z <= 0.653118 &&
    max_gyro_x > 0.021591 &&
    std_accel_y > 0.248775 &&
    mean_accel_smv <= 10.065929 &&
    std_accel_x <= 0.680897 &&
    mean_magn_smv > 25.60871
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 27.641998 &&
    mean_accel_z > 0.528091 &&
    mean_magn_z <= -0.114 &&
    min_accel_x <= -0.337582 &&
    min_accel_z <= 8.921992 &&
    std_magn_smv > 5.121817 &&
    max_accel_smv <= 13.39187 &&
    mean_accel_smv > 9.475109 &&
    max_accel_y > 3.790665 &&
    max_gyro_z > 0.014885 &&
    max_gyro_y <= 0.070168 &&
    mean_accel_z <= 8.838315 &&
    std_gyro_y <= 0.247594 &&
    max_accel_x > -0.799688 &&
    std_accel_y <= 1.280637 &&
    max_gyro_z <= 0.105985 &&
    std_magn_smv > 6.151114
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 24.742126 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_magn_z <= -0.2 &&
    max_gyro_y > 0.067673 &&
    mean_accel_smv <= 10.077631 &&
    mean_accel_smv > 9.462656 &&
    std_accel_y <= 1.103261 &&
    std_gyro_z <= 0.060226 &&
    rms_accel_x <= 7.711626 &&
    range_magn_x <= 5.310059 &&
    min_magn_y > -9.332001 &&
    std_magn_z > 1.56904
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 24.742126 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_magn_z <= -0.2 &&
    max_gyro_y > 0.067673 &&
    mean_accel_smv <= 10.077631 &&
    std_accel_y <= 1.089551 &&
    max_accel_y > 5.044737 &&
    std_magn_smv <= 4.940111 &&
    min_gyro_smv > 0.007073 &&
    mean_accel_smv > 9.684192
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 24.742126 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_magn_z <= -0.2 &&
    max_gyro_y > 0.067673 &&
    mean_accel_smv <= 10.077631 &&
    std_accel_y <= 1.089551 &&
    range_magn_y > 1.989937 &&
    rms_accel_x > 0.34148 &&
    std_gyro_z <= 0.034028 &&
    max_magn_smv > 20.61965 &&
    std_magn_smv <= 9.482698
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    max_accel_smv <= 14.108888 &&
    max_magn_y <= 24.742126 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    std_gyro_z <= 0.021892 &&
    min_accel_x <= -2.726425 &&
    mean_magn_smv <= 38.306622
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 6.931428 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.25585 &&
    std_gyro_z <= 0.021779 &&
    min_accel_y <= 2.924118 &&
    max_magn_smv <= 33.708947
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 6.931428 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.25585 &&
    mean_magn_z <= -0.222 &&
    mean_accel_smv <= 9.972291 &&
    max_gyro_y > 0.055601 &&
    mean_accel_smv > 9.462656 &&
    range_magn_x <= 22.111511 &&
    mean_magn_z > -36.6 &&
    std_accel_y > 1.124932 &&
    std_gyro_z > 0.216427
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 6.710926 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    max_gyro_x <= 0.017609 &&
    min_gyro_smv <= 0.001818
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 6.601405 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.25585 &&
    min_accel_y <= 6.232758 &&
    mean_magn_z > 4.9837 &&
    std_gyro_z <= 0.917177 &&
    std_gyro_z > 0.010135 &&
    min_magn_y <= 11.16 &&
    mean_magn_z > 20.418 &&
    max_accel_z > 8.147469
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 6.601405 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.25585 &&
    min_accel_y <= 6.232758 &&
    mean_accel_smv <= 10.041107 &&
    mean_magn_z <= 4.9837 &&
    mean_accel_smv > 9.481354 &&
    max_gyro_z > 0.076175 &&
    max_accel_smv <= 13.233561 &&
    std_gyro_y <= 0.059142 &&
    range_magn_z > 3.189087 &&
    rms_gyro_x > 0.078195
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    std_accel_smv <= 6.601405 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.25585 &&
    min_accel_y <= 6.232758 &&
    mean_accel_smv <= 10.041107 &&
    mean_magn_z <= 4.9837 &&
    mean_accel_smv > 9.481281 &&
    std_accel_y <= 1.129213 &&
    std_magn_z > 0.912343 &&
    std_gyro_z > 0.018525 &&
    range_accel_z > 4.114435 &&
    rms_gyro_x > 0.033146 &&
    min_accel_x > -4.103394
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    std_accel_smv <= 6.601405 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.25585 &&
    min_accel_y <= 6.264023 &&
    mean_magn_z > 4.9837 &&
    min_magn_y <= 10.44 &&
    mean_magn_smv <= 18.946002 &&
    min_gyro_smv > 0.010294
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 44.544291 &&
    std_accel_smv <= 6.601405 &&
    max_magn_y <= 24.664307 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.25585 &&
    min_accel_y <= 6.264023 &&
    mean_magn_z > 4.9837 &&
    min_magn_y <= 10.44 &&
    entropy_accel > 0.773655 &&
    range_accel_x <= 4.942841 &&
    range_magn_z <= 9.378052
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.09421 &&
    std_accel_smv <= 6.447755 &&
    min_magn_y > -39.699997 &&
    min_gyro_smv <= 0.063132 &&
    mean_magn_z <= 2.1267 &&
    mean_accel_smv <= 9.867206 &&
    max_accel_z <= 10.63118 &&
    range_magn_y <= 18.055004 &&
    min_accel_z > 8.628966 &&
    max_accel_x > -2.025864 &&
    range_accel_z > 0.317232 &&
    mean_accel_y > -0.704635 &&
    min_gyro_y > -1.508361 &&
    range_accel_y <= 1.819649
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 6.710926 &&
    min_magn_y > 26.739998 &&
    mean_accel_y <= -6.11055 &&
    min_magn_y <= 30.811001
  ) {
    return 'c';
  }

  if (
    max_magn_smv <= 44.544291 &&
    max_accel_smv <= 13.413636 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.218019 &&
    mean_accel_smv <= 10.041107 &&
    min_accel_y <= 6.264023 &&
    min_accel_z <= 8.697586 &&
    min_accel_y > 1.937698 &&
    std_magn_z > 0.894463 &&
    mean_accel_y <= 6.781217 &&
    min_accel_x > -0.587479 &&
    mean_magn_z > -11.6385 &&
    rms_accel_x > 0.931176
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.544291 &&
    std_accel_smv <= 6.601405 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 6.833021 &&
    rms_accel_z <= 8.729743 &&
    max_magn_smv > 27.266468 &&
    mean_accel_smv > 9.471095 &&
    min_accel_y > 1.960851 &&
    min_gyro_smv > 0.128688 &&
    range_magn_z <= 18.784714
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 44.544291 &&
    std_accel_smv <= 6.601405 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 6.833021 &&
    rms_accel_z <= 8.729743 &&
    max_magn_smv > 27.266468 &&
    mean_accel_smv > 9.471095 &&
    max_gyro_y > 2.073912 &&
    min_gyro_smv <= 0.109177
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.544291 &&
    std_accel_smv <= 6.601405 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 6.833021 &&
    rms_accel_z <= 8.690171 &&
    max_magn_smv > 27.266468 &&
    mean_accel_smv > 9.467154 &&
    min_accel_y > 1.960851 &&
    mean_magn_z <= 10.662 &&
    min_gyro_z <= -0.146515 &&
    range_magn_z <= 20.019001 &&
    mean_accel_smv <= 10.050329 &&
    min_gyro_smv <= 0.011368 &&
    min_accel_x <= -1.606509 &&
    max_magn_smv <= 43.779809
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 44.914357 &&
    std_accel_smv <= 6.710926 &&
    mean_accel_z > 0.528091 &&
    mean_accel_y > 1.203893 &&
    mean_accel_y <= 6.833021 &&
    rms_accel_z <= 8.690171 &&
    max_magn_smv > 27.266468 &&
    mean_accel_smv > 9.458626 &&
    mean_magn_z > -36.755901 &&
    range_magn_y <= 18.626404 &&
    max_gyro_y <= 1.700018 &&
    min_gyro_z <= -0.146995 &&
    std_accel_smv > 3.780066 &&
    rms_gyro_x > 0.082169
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.229096 &&
    range_accel_z <= 3.965988 &&
    min_gyro_smv <= 0.114212 &&
    range_magn_y <= 28.430176 &&
    min_magn_y > -39.402771 &&
    min_accel_z <= 8.593052 &&
    mean_accel_y <= 6.605243 &&
    rms_accel_z <= 9.328466 &&
    max_magn_smv > 27.266468 &&
    mean_accel_smv <= 9.85935 &&
    entropy_gyro > 2.110583 &&
    sma_magn <= 75.725998 &&
    std_gyro_y > 0.29331 &&
    mean_accel_smv > 9.436119 &&
    max_accel_x > 0.342941 &&
    max_accel_z <= 9.68013 &&
    max_gyro_z > 0.079209
  ) {
    return 'f';
  }

  if (
    sma_gyro > 0.535013 &&
    max_magn_smv > 41.028111 &&
    std_accel_smv > 8.953491 &&
    mean_accel_y > -1.653555 &&
    std_accel_smv > 20.661296 &&
    min_gyro_x <= -1.396249 &&
    max_magn_y <= 2.593231
  ) {
    return 'b';
  }

  if (
    max_magn_smv <= 42.772132 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.887941 &&
    max_accel_y <= 2.825158 &&
    std_accel_y <= 0.479444
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 42.772132 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.887941 &&
    rms_accel_x <= 8.176261 &&
    mean_magn_z <= 6.972 &&
    max_gyro_y > 0.05736 &&
    std_magn_smv > 7.29064 &&
    rms_gyro_x > 0.029926 &&
    range_magn_z > 10.089001 &&
    range_magn_x <= 10.477638 &&
    sma_gyro > 0.143198 &&
    sma_magn <= 52.527901
  ) {
    return 'f';
  }

  if (
    sma_gyro > 0.535013 &&
    max_magn_smv > 41.028111 &&
    min_accel_z <= 6.677632 &&
    max_accel_z > 10.745505 &&
    sma_gyro <= 1.111798 &&
    min_gyro_x > -1.261536 &&
    std_accel_z > 1.682099 &&
    std_accel_z <= 6.459593 &&
    min_accel_x <= -0.39447 &&
    min_accel_smv > 1.106413 &&
    mean_magn_z > -35.369999
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.908562 &&
    max_magn_y > 20.542999 &&
    mean_accel_smv <= 9.860485 &&
    std_gyro_y > 0.066264
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_y <= 6.797346 &&
    mean_magn_z <= 10.578 &&
    max_gyro_z > 0.089974 &&
    sma_magn > 17.664 &&
    rms_gyro_x > 0.035407 &&
    std_gyro_z > 0.116244 &&
    std_gyro_z <= 0.41427 &&
    max_gyro_x <= 0.982064 &&
    range_magn_x <= 20.249557 &&
    mean_magn_smv <= 26.824948 &&
    range_magn_z <= 5.231094
  ) {
    return 'e';
  }

  if (
    sma_gyro > 0.525373 &&
    mean_magn_smv > 36.335376 &&
    min_accel_z <= 5.648094 &&
    max_accel_z > 9.804108 &&
    min_gyro_smv > 0.025684 &&
    mean_magn_smv > 48.380251 &&
    max_magn_smv <= 130.903467 &&
    max_accel_x <= 2.610877
  ) {
    return 'a';
  }

  if (
    sma_gyro > 0.525373 &&
    mean_magn_smv > 36.335376 &&
    std_accel_smv > 8.953491 &&
    mean_accel_y > -1.653555 &&
    rms_accel_z > 9.107622 &&
    min_gyro_x <= -0.557495 &&
    std_gyro_z <= 1.259577 &&
    min_accel_smv > 3.616053 &&
    min_gyro_y > -1.590907 &&
    mean_accel_y <= 4.752875 &&
    std_accel_y <= 2.981026
  ) {
    return 'b';
  }

  if (
    min_accel_z > 3.686707 &&
    sma_gyro <= 0.674047 &&
    min_magn_y > -31.700005 &&
    sma_magn <= 73.829999 &&
    mean_magn_z <= -31.658833 &&
    sma_magn <= 55.067999 &&
    range_accel_z > 1.63529 &&
    std_gyro_y <= 0.336522
  ) {
    return 'e';
  }

  if (
    min_accel_z > 3.686707 &&
    min_gyro_smv <= 0.051079 &&
    min_magn_y > -35.89325 &&
    max_accel_z <= 11.891403 &&
    mean_accel_y <= 6.736053 &&
    max_accel_smv > 10.030584 &&
    mean_magn_z <= -31.667999 &&
    mean_magn_smv > 48.928366 &&
    max_magn_y > -20.52
  ) {
    return 'e';
  }

  if (
    min_accel_z > 4.067873 &&
    std_gyro_z <= 0.225596 &&
    max_magn_smv <= 53.806489 &&
    mean_magn_z <= -31.658833 &&
    max_magn_y <= 14.513588 &&
    rms_accel_x <= 2.106691 &&
    min_gyro_smv <= 0.06981 &&
    max_magn_y > -19.128418 &&
    sma_magn > 54.671999
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.908562 &&
    range_magn_y > 18.321228 &&
    range_magn_y <= 29.023003
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.908562 &&
    range_magn_y <= 0.743103 &&
    std_accel_y <= 1.346125
  ) {
    return 'd';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.908562 &&
    range_magn_y <= 16.25824 &&
    min_accel_x <= -8.488642 &&
    mean_accel_smv <= 9.84947
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.908562 &&
    std_magn_smv > 17.140411 &&
    range_magn_y <= 17.34 &&
    max_gyro_z > 0.038541 &&
    max_magn_smv <= 41.037649
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.675604 &&
    mean_accel_smv <= 9.908562 &&
    std_magn_smv <= 17.748905 &&
    mean_magn_z <= 10.528831 &&
    mean_magn_smv > 21.828169 &&
    max_gyro_z > 0.011108 &&
    std_gyro_y > 0.163692 &&
    max_accel_y > 3.86065 &&
    mean_accel_smv <= 9.893095 &&
    sma_magn <= 60.02 &&
    max_gyro_z <= 0.194341 &&
    rms_accel_x > 0.313925
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 42.973781 &&
    std_accel_smv <= 6.706497 &&
    max_accel_y <= 1.451218 &&
    rms_accel_z <= 1.815503 &&
    mean_accel_y > -9.609967
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 42.973781 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.677901 &&
    max_accel_x <= -6.064698 &&
    mean_magn_smv > 33.901109
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 42.786352 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.677901 &&
    min_accel_x <= -0.268524 &&
    range_magn_x <= 15.400001 &&
    mean_magn_z <= 0.501709 &&
    max_gyro_y > 0.044451 &&
    mean_magn_z > -29.537999 &&
    sma_gyro <= 0.09939 &&
    max_gyro_y <= 0.090153 &&
    entropy_gyro <= 2.278875
  ) {
    return 'f';
  }

  if (
    max_magn_smv <= 42.786352 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    max_accel_z > 12.040808 &&
    max_gyro_y > 1.945007 &&
    mean_accel_smv <= 11.04739
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 42.786352 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.677901 &&
    min_accel_x <= -0.268524 &&
    range_magn_x <= 18.702 &&
    mean_magn_z <= 0.501709 &&
    max_gyro_y > 0.077499 &&
    mean_magn_smv > 26.81606 &&
    max_accel_y <= 4.564148 &&
    max_gyro_y <= 0.589497
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 42.786352 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    sma_gyro <= 0.677901 &&
    max_accel_z > 11.751101 &&
    mean_accel_y > 2.480861 &&
    mean_magn_smv > 13.186739 &&
    max_gyro_y <= 1.259659 &&
    entropy_gyro > 2.214173
  ) {
    return 'e';
  }

  if (
    max_magn_smv <= 42.786352 &&
    max_accel_y <= 10.659317 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.633745 &&
    max_accel_z <= 11.839689 &&
    min_accel_x > -0.281319 &&
    mean_accel_smv <= 9.844317 &&
    rms_accel_x <= 3.525383 &&
    max_accel_z <= 9.624542 &&
    range_magn_x > 2.822876
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro > 1.12029 &&
    range_magn_z > 6.700001 &&
    min_accel_z > 7.530962 &&
    min_gyro_smv <= 0.051808
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro > 1.12029 &&
    max_accel_y > 16.137253 &&
    std_gyro_y > 0.506941
  ) {
    return 'a';
  }

  if (
    max_magn_smv <= 42.786352 &&
    max_accel_smv <= 13.790337 &&
    max_accel_y <= 1.367089 &&
    std_gyro_y > 0.013651 &&
    max_magn_y <= 23.381001 &&
    mean_accel_z > -8.057566 &&
    max_magn_y > -1.026917 &&
    std_magn_z <= 4.991927
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 3.686707 &&
    mean_magn_z > 39.949856 &&
    min_accel_y > -10.074158 &&
    range_magn_x <= 58.244324 &&
    rms_accel_x <= 4.645347 &&
    max_accel_z <= 7.737503
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 3.686707 &&
    max_magn_smv > 42.633598 &&
    sma_gyro > 1.604829 &&
    mean_accel_y <= 0.399904 &&
    max_magn_y <= 36.886597 &&
    std_gyro_z <= 2.217823 &&
    range_accel_x <= 9.937134 &&
    std_gyro_z > 0.352917 &&
    entropy_gyro <= 2.283051
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.686707 &&
    mean_magn_smv > 38.563038 &&
    sma_gyro > 1.60557 &&
    mean_accel_y > -1.748195 &&
    mean_magn_smv <= 48.380251 &&
    rms_accel_x > 2.854109 &&
    min_accel_smv > 3.698226 &&
    range_accel_y <= 23.276428 &&
    range_magn_z <= 52.665997
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    min_gyro_x > -0.827965 &&
    max_accel_y > 1.748093 &&
    mean_accel_z > 0.519661 &&
    max_accel_z <= 11.791803 &&
    min_accel_x <= -0.281319 &&
    mean_accel_smv <= 9.36069 &&
    mean_magn_smv <= 35.003534
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 3.686707 &&
    mean_magn_smv > 39.019923 &&
    rms_accel_x > 7.751086 &&
    mean_accel_y > -1.748195 &&
    mean_magn_z > -79.362946 &&
    min_gyro_z > -1.694755 &&
    min_accel_x <= -0.013382 &&
    max_magn_smv > 46.216551 &&
    max_accel_z <= 12.747119 &&
    entropy_gyro <= 2.285371
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.686707 &&
    mean_magn_smv > 39.019923 &&
    min_accel_smv <= 3.698226 &&
    sma_magn <= 81.0745 &&
    mean_accel_y <= 0.325611 &&
    max_magn_y > 33.674 &&
    mean_accel_z > -2.582748 &&
    max_gyro_z <= 0.66624
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.686707 &&
    mean_magn_smv > 39.019923 &&
    min_accel_smv <= 3.698226 &&
    mean_magn_smv <= 48.604324 &&
    mean_accel_y <= 0.238103 &&
    max_accel_x <= 8.837265 &&
    mean_accel_z <= 4.538827 &&
    std_magn_z <= 11.459601
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.686707 &&
    mean_magn_smv > 39.019923 &&
    min_accel_smv > 3.698226 &&
    max_magn_smv > 84.031084 &&
    mean_accel_smv > 10.54297
  ) {
    return 'a';
  }

  if (
    min_accel_z > 4.09421 &&
    max_accel_z <= 11.439224 &&
    min_gyro_smv <= 0.093285 &&
    min_magn_y > -34.410095 &&
    min_accel_y > 2.244564 &&
    max_gyro_y <= 0.01532 &&
    entropy_gyro <= 2.225074
  ) {
    return 'd';
  }

  if (
    min_accel_z > 4.09421 &&
    max_accel_z <= 11.439224 &&
    min_gyro_smv <= 0.093285 &&
    min_magn_y > -34.410095 &&
    min_accel_y > 2.244564 &&
    max_accel_x > -1.312023 &&
    mean_accel_smv <= 10.058157 &&
    sma_magn <= 74.085101 &&
    mean_accel_y <= 6.601255 &&
    std_accel_x > 1.36575 &&
    entropy_accel <= 1.631869
  ) {
    return 'f';
  }

  if (
    min_accel_z > 3.686707 &&
    min_gyro_smv <= 0.063132 &&
    max_accel_z <= 11.852495 &&
    min_magn_y > -35.89325 &&
    rms_accel_z <= 9.323862 &&
    mean_accel_y <= 6.601255 &&
    mean_accel_smv > 9.411718 &&
    sma_magn <= 73.055999 &&
    range_magn_z <= 13.140001 &&
    min_accel_x <= -0.268524 &&
    mean_magn_smv > 21.869501 &&
    mean_magn_z <= 8.736 &&
    mean_accel_y > 3.283748 &&
    mean_magn_z > -33.887999 &&
    mean_magn_smv <= 43.449082 &&
    mean_magn_smv <= 42.542681 &&
    sma_magn > 52.3002 &&
    rms_accel_x > 0.265146 &&
    mean_magn_z > -16.87
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    std_accel_smv <= 6.805717 &&
    mean_accel_y > 1.203893 &&
    mean_accel_z > 0.528091 &&
    min_gyro_smv <= 0.078009 &&
    mean_accel_smv > 10.066802 &&
    std_gyro_y > 0.191236 &&
    max_accel_x > 0.353302 &&
    max_accel_x <= 3.305195 &&
    rms_gyro_x > 0.127138
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    min_gyro_x > -0.827965 &&
    max_accel_y > 1.789666 &&
    min_accel_x <= -8.063671 &&
    min_accel_x <= -10.719169
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    max_magn_y <= 23.639999 &&
    mean_accel_z > 0.519661 &&
    mean_accel_z <= 9.515685 &&
    max_accel_z > 12.061386 &&
    entropy_accel <= 1.844822
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    min_gyro_x > -0.826157 &&
    max_accel_y > 1.789666 &&
    mean_accel_z > 0.519661 &&
    sma_gyro <= 0.670728 &&
    min_accel_y > 7.118286 &&
    std_gyro_z <= 0.163329 &&
    max_accel_smv > 10.680338
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    min_gyro_x > -0.826157 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.236931 &&
    range_magn_x <= 26.165771 &&
    mean_magn_z <= 10.528831 &&
    min_accel_x <= -0.281319 &&
    max_accel_y <= 3.807978 &&
    std_gyro_z > 0.036786 &&
    max_gyro_x <= 0.738723 &&
    mean_magn_smv > 23.615073
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    min_gyro_x > -0.826157 &&
    mean_accel_y > 1.236931 &&
    mean_accel_z > 0.528091 &&
    range_magn_y <= 37.773003 &&
    mean_magn_z <= 10.528831 &&
    min_accel_x <= -0.281319 &&
    mean_magn_smv > 21.808946 &&
    mean_accel_smv <= 10.899961 &&
    mean_accel_smv > 9.420249 &&
    std_magn_smv <= 16.156342 &&
    range_magn_y > 13.298004 &&
    max_accel_y > 5.130774
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    min_gyro_x > -0.826157 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.236931 &&
    range_magn_x <= 26.165771 &&
    mean_magn_z <= 10.528831 &&
    min_accel_x <= -0.405243 &&
    mean_magn_smv > 21.95115 &&
    mean_accel_smv <= 10.572685 &&
    mean_accel_smv <= 9.405978 &&
    mean_accel_y <= 6.058473
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    min_accel_z > 0.017957 &&
    mean_accel_y > 1.236931 &&
    max_accel_x > 7.558495 &&
    mean_magn_z > -14.478302
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.236931 &&
    mean_accel_smv > 10.865621 &&
    min_gyro_smv > 0.008124 &&
    range_magn_y <= 5.426998
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_smv > 10.95808 &&
    mean_magn_z <= 7.842 &&
    max_accel_smv <= 19.838142
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.236931 &&
    mean_magn_z <= -0.0947 &&
    std_gyro_y > 0.044002 &&
    mean_accel_smv <= 10.128229 &&
    std_gyro_z <= 0.388088 &&
    max_accel_x > -0.838898 &&
    min_gyro_z > -0.314224 &&
    range_accel_x <= 2.248224 &&
    rms_accel_x <= 0.17795 &&
    std_accel_z <= 0.550315
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.236931 &&
    mean_magn_z <= -0.0947 &&
    std_gyro_y > 0.044002 &&
    mean_accel_smv <= 10.128229 &&
    std_gyro_z <= 0.388088 &&
    max_accel_x > -0.838898 &&
    min_gyro_z > -0.314224 &&
    range_accel_x <= 2.248224 &&
    min_magn_y <= 15.719999 &&
    mean_accel_smv > 9.508386 &&
    min_accel_x > -2.022018 &&
    max_accel_z <= 7.787141 &&
    rms_gyro_x <= 0.22143
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.236931 &&
    mean_magn_z <= -0.0947 &&
    min_accel_x <= -0.37589 &&
    min_magn_y > -2.670998 &&
    range_magn_y <= 17.485001 &&
    sma_magn <= 56.844499 &&
    mean_magn_z > -26.573999 &&
    mean_magn_smv <= 35.053781 &&
    min_gyro_z <= -0.314718 &&
    min_accel_z <= 8.083072 &&
    mean_magn_z <= -3.96244
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.225345 &&
    std_gyro_z <= 0.287271 &&
    max_magn_smv <= 51.595743 &&
    mean_accel_y > 3.286401 &&
    min_accel_y <= 6.201767 &&
    mean_magn_z > 10.528831 &&
    max_gyro_y > 0.062775 &&
    mean_accel_smv > 9.689117
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.236931 &&
    mean_magn_z <= -0.0947 &&
    min_accel_x <= -0.37589 &&
    min_magn_y > -2.279663 &&
    sma_magn <= 56.844499 &&
    mean_magn_z > -26.573999 &&
    rms_accel_x <= 3.919054 &&
    std_gyro_y > 0.094345 &&
    mean_accel_smv <= 9.799737
  ) {
    return 'f';
  }

  if (
    min_accel_z > 5.225345 &&
    std_gyro_z <= 0.287271 &&
    mean_magn_z <= -41.909999 &&
    sma_magn > 72.551998 &&
    mean_accel_y <= 6.675633
  ) {
    return 'd';
  }

  if (
    min_accel_z > 5.225345 &&
    std_gyro_z <= 0.287271 &&
    min_magn_y > -38.511658 &&
    max_accel_x > -1.475204 &&
    entropy_accel <= 1.547299 &&
    max_accel_smv <= 10.046766 &&
    mean_accel_smv <= 9.90714 &&
    mean_accel_z <= 9.073905
  ) {
    return 'f';
  }

  if (
    min_accel_z > 5.225345 &&
    std_gyro_z <= 0.287271 &&
    min_magn_y > -38.511658 &&
    max_accel_x > -1.475204 &&
    entropy_accel <= 1.547299 &&
    min_accel_y <= 6.201767 &&
    max_accel_smv > 10.06718 &&
    rms_accel_x > 0.277254 &&
    mean_accel_y > 0.682898 &&
    rms_accel_z <= 9.328466 &&
    mean_magn_smv > 21.917007 &&
    min_accel_smv > 9.623195 &&
    mean_magn_z <= -20.02
  ) {
    return 'd';
  }

  if (
    min_accel_z > 5.225345 &&
    std_gyro_z <= 0.287271 &&
    min_magn_y > -31.332397 &&
    max_accel_smv <= 10.06718 &&
    mean_accel_z <= 9.887694 &&
    std_magn_smv > 7.508887
  ) {
    return 'd';
  }

  if (
    min_accel_z > 5.225345 &&
    std_gyro_z <= 0.287271 &&
    rms_gyro_x <= 0.566108 &&
    min_magn_y > -31.332397 &&
    max_accel_x > -1.693898 &&
    mean_accel_y > 0.846677 &&
    mean_accel_y <= 6.601255 &&
    range_accel_z <= 7.07486 &&
    max_magn_smv > 21.858733 &&
    rms_gyro_x > 0.028603 &&
    min_accel_z > 9.071075 &&
    max_accel_x > -0.5435
  ) {
    return 'e';
  }

  if (
    min_accel_z > 5.225345 &&
    min_gyro_smv <= 0.063132 &&
    min_magn_y > -39.402771 &&
    std_accel_z <= 1.846672 &&
    mean_accel_y > 1.046355 &&
    min_magn_y > 29.342003 &&
    min_gyro_x <= -0.354796
  ) {
    return 'd';
  }

  if (
    min_accel_z > 5.225345 &&
    min_gyro_smv <= 0.063132 &&
    min_magn_y > -39.402771 &&
    std_accel_z <= 1.846672 &&
    mean_accel_y > 1.046355 &&
    min_accel_y <= 6.201767 &&
    range_magn_y <= 13.62 &&
    range_magn_z > 2.62661 &&
    mean_accel_z > 9.667124 &&
    rms_accel_x <= 1.853502
  ) {
    return 'd';
  }

  if (
    min_accel_z > 5.225345 &&
    std_gyro_z <= 0.287271 &&
    rms_gyro_x <= 0.566108 &&
    min_magn_y > -37.254997 &&
    max_accel_x > -1.693898 &&
    mean_accel_y > 0.846677 &&
    mean_magn_z > -36.4304 &&
    mean_accel_y <= 6.601255 &&
    std_magn_smv <= 24.614377 &&
    max_magn_smv > 21.858733 &&
    rms_accel_x > 0.25269 &&
    mean_accel_z <= 9.312416 &&
    std_gyro_z > 0.036971 &&
    std_gyro_y <= 0.04751
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.02312 &&
    range_magn_y <= 19.259999 &&
    mean_magn_z <= 1.9059 &&
    std_magn_smv > 7.37027 &&
    rms_accel_x > 0.407627 &&
    std_accel_z <= 0.573095 &&
    min_gyro_smv > 0.002852 &&
    range_magn_z > 12.42981 &&
    entropy_accel <= 0.926652
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 37.74843 &&
    sma_gyro <= 1.098174 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.02312 &&
    range_magn_y <= 19.259999 &&
    mean_magn_z <= 1.9059 &&
    std_magn_smv > 7.37027 &&
    range_magn_x <= 17.956999 &&
    max_gyro_z > 0.440916
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.941649 &&
    sma_gyro <= 1.098174 &&
    max_magn_y <= 23.639999 &&
    mean_accel_z > 1.03289 &&
    rms_accel_z <= 9.522872 &&
    std_gyro_y <= 0.47842 &&
    mean_magn_smv > 21.869501 &&
    min_magn_y > 16.148003 &&
    min_magn_y > 16.452026
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.941649 &&
    sma_gyro <= 1.098174 &&
    max_magn_y <= 23.639999 &&
    mean_accel_z > 1.03289 &&
    rms_accel_z <= 9.522872 &&
    std_gyro_y <= 0.47842 &&
    mean_magn_smv > 21.869501 &&
    range_magn_y <= 37.773003 &&
    rms_gyro_x > 0.023801 &&
    mean_accel_y <= 6.581143 &&
    sma_gyro > 0.646725 &&
    mean_magn_z <= 17.052
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.941649 &&
    min_gyro_x > -0.826157 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.098309 &&
    range_magn_y <= 37.439999 &&
    range_magn_z > 2.62661 &&
    entropy_gyro <= 2.150663 &&
    max_accel_z <= 9.419077
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.941649 &&
    min_gyro_x > -0.826157 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.098309 &&
    range_magn_y <= 37.439999 &&
    range_magn_z > 2.62661 &&
    entropy_gyro <= 2.161671 &&
    min_accel_y > 2.234589
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.515242 &&
    min_gyro_smv > 0.082233 &&
    mean_accel_smv <= 15.604801 &&
    range_magn_z > 6.825256 &&
    min_accel_z <= 7.332242 &&
    std_accel_z <= 6.355872 &&
    sma_gyro > 1.050327 &&
    max_accel_z > -0.6608 &&
    rms_accel_x > 4.917326 &&
    std_accel_y <= 3.535208
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.515242 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.098309 &&
    std_gyro_y <= 0.580901 &&
    range_magn_y <= 20.419312 &&
    range_magn_z > 2.62661 &&
    std_gyro_z <= 0.063407 &&
    range_magn_z > 12.780001
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.515242 &&
    mean_accel_z > 0.519661 &&
    mean_accel_y > 1.098309 &&
    std_gyro_y <= 0.580901 &&
    range_magn_y <= 20.419312 &&
    mean_magn_smv > 21.95115 &&
    sma_magn <= 32.897999
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.515242 &&
    mean_accel_z > 0.519661 &&
    max_accel_y > 2.278732 &&
    sma_gyro <= 1.131801 &&
    rms_gyro_x <= 0.430163 &&
    max_gyro_z <= 0.407013 &&
    std_gyro_y > 0.044002 &&
    mean_accel_smv <= 10.141331 &&
    mean_magn_z <= -22.83905 &&
    std_gyro_y <= 0.335709 &&
    range_magn_z <= 6.906128
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.515242 &&
    mean_accel_y > 1.098309 &&
    max_accel_y <= 11.626892 &&
    min_accel_x > -0.407027 &&
    mean_magn_z > 22.9288
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.515242 &&
    max_magn_y <= 18.099998 &&
    max_accel_y > 11.626892 &&
    std_accel_y <= 2.591424
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.509024 &&
    max_magn_y <= 18.099998 &&
    max_accel_y > 11.626892 &&
    mean_accel_smv > 12.211472 &&
    mean_accel_y > 7.446138
  ) {
    return 'b';
  }

  if (
    mean_magn_smv <= 36.509024 &&
    max_accel_z <= -7.208008 &&
    max_accel_x <= 3.028758
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    sma_gyro <= 1.131801 &&
    rms_accel_z <= 1.364615 &&
    sma_magn <= 47.551399 &&
    min_accel_y > 4.19105
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    min_gyro_smv > 0.070596 &&
    std_magn_z <= 1.826568 &&
    std_accel_z > 0.653842
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    min_gyro_smv <= 0.071015 &&
    rms_accel_x > 4.953108 &&
    max_magn_smv <= 26.969715 &&
    mean_accel_y > 3.368522
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    min_gyro_smv <= 0.071015 &&
    min_accel_x > 4.362503 &&
    mean_magn_smv > 31.931346
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    min_gyro_smv <= 0.071015 &&
    max_accel_x <= -2.562164 &&
    rms_accel_x > 6.7476 &&
    entropy_gyro > 2.213201 &&
    mean_accel_z <= 2.136466
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    min_gyro_smv <= 0.070951 &&
    max_accel_x > -2.562164 &&
    min_accel_z > -9.437332 &&
    range_magn_z <= 10.414001 &&
    std_magn_z > 0.686207 &&
    mean_magn_z <= 2.0505 &&
    mean_magn_z > -9.606 &&
    max_magn_y <= 12.934113 &&
    std_accel_y <= 1.591727 &&
    min_magn_y <= -15.711975 &&
    mean_accel_z <= 9.09818 &&
    sma_magn <= 40.819999
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    min_gyro_smv <= 0.070951 &&
    max_accel_x > -2.562164 &&
    range_magn_z <= 10.414001 &&
    std_magn_z > 0.702308 &&
    min_accel_z <= -9.437332
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.098309 &&
    min_gyro_smv <= 0.070951 &&
    max_accel_x > -2.562164 &&
    min_gyro_y > -0.515606 &&
    std_magn_smv > 6.779494 &&
    std_magn_z <= 14.168362 &&
    std_gyro_y <= 0.014529
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    min_gyro_smv > 0.070951 &&
    std_magn_z <= 1.594646 &&
    mean_accel_smv <= 10.063914 &&
    std_accel_z > 0.260811
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_gyro_smv > 0.070951 &&
    max_accel_y <= 1.22224 &&
    std_magn_smv <= 14.151677
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_gyro_smv > 0.070951 &&
    max_accel_y > 1.22224 &&
    max_magn_y <= -19.894409 &&
    std_accel_y <= 4.726078
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_gyro_smv > 0.070951 &&
    max_magn_y <= -18.287659 &&
    mean_accel_y <= -0.812062
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_gyro_smv > 0.070951 &&
    entropy_gyro <= 2.229202 &&
    max_magn_y <= 17.412186
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    max_accel_y > 1.525436 &&
    min_gyro_smv > 0.070951 &&
    min_magn_y > 7.051086
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    max_accel_y > 1.786407 &&
    sma_gyro > 1.273404 &&
    max_magn_y <= 27.099998 &&
    min_accel_z <= 8.324097 &&
    entropy_gyro > 2.226619 &&
    max_gyro_y <= 1.845974 &&
    mean_accel_smv > 9.73974
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    std_magn_z <= 4.594621 &&
    std_magn_z <= 0.686207 &&
    min_accel_x <= -2.714767 &&
    max_accel_y > 6.818895
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    std_magn_z <= 4.594621 &&
    mean_magn_z > 10.608 &&
    std_magn_smv <= 13.083832
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    std_magn_z <= 4.594621 &&
    mean_magn_z > 4.572 &&
    min_magn_y <= 3.099998 &&
    std_magn_smv > 9.592785
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    std_magn_z <= 4.569487 &&
    std_magn_z <= 0.702308 &&
    min_gyro_smv <= 0.002451 &&
    mean_accel_z <= 8.938837
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    std_magn_z <= 4.569487 &&
    std_magn_z <= 0.702308 &&
    range_magn_x <= 1.56 &&
    entropy_gyro <= 2.244964 &&
    max_gyro_y <= 0.330872
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    std_magn_z <= 4.569487 &&
    std_magn_z <= 0.702308 &&
    min_magn_y <= -16.898003
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    std_magn_z <= 4.569487 &&
    mean_magn_z > 4.572 &&
    mean_accel_y <= 6.429748
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    mean_magn_z > 4.332 &&
    mean_accel_y > 2.123243 &&
    min_magn_y > -1.527
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.02312 &&
    sma_gyro <= 1.295023 &&
    rms_accel_z > 2.165978 &&
    range_magn_x > 26.165771 &&
    rms_accel_z > 7.079581 &&
    mean_accel_y <= 4.969405 &&
    max_magn_smv > 38.087146
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.097382 &&
    max_accel_x > -2.562164 &&
    std_gyro_y <= 0.580901 &&
    sma_magn > 37.26 &&
    mean_accel_smv > 9.556959 &&
    max_gyro_z <= 0.018784 &&
    mean_accel_z <= 8.306936
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.097382 &&
    max_accel_x > -2.562164 &&
    range_magn_z <= 14.784241 &&
    std_magn_z <= 0.726867 &&
    max_gyro_z > 0.293335 &&
    std_accel_z > 0.325344
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.097382 &&
    max_accel_x > -2.562164 &&
    std_gyro_y <= 0.580901 &&
    std_magn_z <= 0.705407 &&
    mean_magn_z > -14.694 &&
    std_accel_z <= 1.201544 &&
    std_accel_x <= 0.901894 &&
    mean_magn_z <= -4.0003
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.097382 &&
    max_accel_x > -2.562164 &&
    std_gyro_y <= 0.580901 &&
    std_magn_z <= 0.688721 &&
    min_accel_z > 3.292027 &&
    std_accel_x > 0.167091 &&
    max_gyro_y <= 0.114244 &&
    min_magn_y <= 0.923157
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.097382 &&
    max_accel_x > -2.562164 &&
    std_gyro_y <= 0.580901 &&
    rms_gyro_x <= 0.559143 &&
    max_gyro_y <= 0.951129 &&
    range_accel_z <= 1.984787 &&
    max_gyro_z > 0.161122 &&
    min_gyro_y > -0.714081 &&
    mean_accel_smv > 9.825916
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.097382 &&
    max_accel_x > -2.562164 &&
    range_magn_z <= 14.784241 &&
    max_magn_smv > 26.411043 &&
    range_magn_z <= 2.34 &&
    range_magn_x > 2.139282
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y > 1.097382 &&
    max_accel_x > -2.562164 &&
    range_magn_z <= 14.784241 &&
    max_magn_smv > 26.411043 &&
    min_accel_x <= -0.773351 &&
    max_magn_y > 10.758003 &&
    range_accel_x > 0.817627 &&
    min_gyro_x > -0.816837
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    max_magn_y <= 18.099998 &&
    mean_accel_z > 9.515685 &&
    max_magn_y <= -7.800293 &&
    mean_magn_z <= -6.666
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_accel_y <= -6.263471 &&
    std_accel_x <= 2.004891 &&
    min_magn_y > -16.152 &&
    max_gyro_y > 0.145031
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_accel_x <= -6.660872 &&
    rms_accel_z > 1.727116 &&
    min_gyro_x > -1.151566 &&
    std_magn_smv > 5.158608 &&
    mean_magn_smv <= 36.385114
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_accel_x <= -6.660872 &&
    mean_accel_y <= 6.880816 &&
    mean_accel_smv > 9.773949 &&
    mean_accel_smv <= 11.482785
  ) {
    return 'f';
  }

  if (mean_magn_smv <= 36.501975 && min_accel_x <= -6.660872) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    mean_magn_z > 9.024 &&
    mean_accel_y > -3.858256 &&
    mean_magn_smv > 31.784956
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_accel_y > -5.461174 &&
    range_magn_x <= 28.38 &&
    max_accel_x <= -0.976864 &&
    mean_accel_smv > 9.635604 &&
    std_accel_smv <= 3.91121
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    min_accel_y > -5.461174 &&
    range_magn_x <= 28.38 &&
    max_accel_x > -0.976864 &&
    std_gyro_y > 0.046395 &&
    min_gyro_x > -0.370478 &&
    min_gyro_x > -0.031097
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.501975 &&
    range_accel_x > 7.078461 &&
    entropy_accel <= 2.144161 &&
    mean_accel_y > -5.863228 &&
    rms_accel_z > 3.068189
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_accel_x > 6.659472 &&
    std_gyro_z > 0.091852 &&
    max_accel_y <= 4.131195
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    max_accel_x <= -0.976864 &&
    mean_magn_smv <= 30.607009 &&
    entropy_accel <= 1.106046
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    max_accel_x > -1.018158 &&
    min_gyro_smv > 0.115368 &&
    mean_accel_z <= 6.316576
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    max_accel_x > -1.018158 &&
    range_magn_x <= 33.094 &&
    min_gyro_x > -0.860404 &&
    std_accel_z <= 0.315564 &&
    min_accel_x <= -1.046266 &&
    range_magn_x > 1.989746
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    max_accel_x > -1.018158 &&
    range_magn_x <= 33.094 &&
    min_gyro_x > -0.816837 &&
    std_gyro_y > 0.046395 &&
    max_gyro_z > 0.668941 &&
    mean_accel_smv > 9.681134 &&
    max_accel_x <= 1.941956
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    min_gyro_smv > 0.090806 &&
    std_accel_y <= 1.272878
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_y <= 39.361572 &&
    max_accel_x <= -1.018158 &&
    mean_accel_z <= 5.442426
  ) {
    return 'c';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_y <= 39.361572 &&
    std_gyro_y > 0.046395 &&
    std_gyro_z <= 0.098081 &&
    std_accel_x > 1.098962
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_x <= 33.094 &&
    std_gyro_y <= 0.046395 &&
    min_accel_y <= 4.800521 &&
    min_magn_y <= -4.877998
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_y <= 40.397003 &&
    min_gyro_z > -0.225328 &&
    max_accel_smv <= 10.515427 &&
    max_accel_x > -0.730232
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 5.444581 &&
    sma_gyro > 1.551483 &&
    mean_accel_y <= -1.381574 &&
    max_magn_y <= 36.731998 &&
    range_magn_x <= 7.48806 &&
    sma_magn <= 70.12 &&
    std_accel_y <= 4.408007
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 4.873397 &&
    sma_gyro > 1.551483 &&
    mean_magn_smv > 48.587394 &&
    max_magn_smv <= 109.573862 &&
    std_gyro_y > 1.051673 &&
    max_gyro_z <= 2.166592 &&
    mean_magn_smv > 49.055704
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.873397 &&
    sma_gyro > 1.551483 &&
    mean_magn_smv <= 48.587394 &&
    mean_accel_y <= -1.036003 &&
    max_magn_y > 36.731998 &&
    max_gyro_x > 1.014816
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.873397 &&
    min_accel_smv <= 3.698226 &&
    mean_magn_smv <= 48.615917 &&
    mean_accel_y <= 0.238103 &&
    mean_accel_y > -7.819223 &&
    max_magn_y > -17.256165 &&
    min_accel_x <= 0.276749
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.873397 &&
    min_accel_smv <= 3.698226 &&
    mean_magn_smv <= 48.615917 &&
    mean_accel_y <= -1.03313 &&
    max_accel_x > 8.372523 &&
    mean_accel_z <= -0.519781 &&
    max_magn_y <= 21.539999 &&
    mean_magn_z > 9.1245
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.873397 &&
    min_accel_smv <= 3.698226 &&
    mean_magn_smv <= 48.615917 &&
    mean_accel_y > -1.03313 &&
    max_magn_smv > 43.57983 &&
    sma_gyro <= 1.089334 &&
    mean_magn_smv > 39.510382 &&
    range_magn_y <= 13.880005
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.873397 &&
    sma_gyro > 1.117709 &&
    mean_accel_y > -1.305438 &&
    std_accel_x > 2.749229 &&
    mean_magn_smv <= 49.623826 &&
    mean_accel_z <= 1.387321 &&
    std_gyro_y <= 0.457889 &&
    std_magn_smv <= 27.256801
  ) {
    return 'b';
  }

  if (
    min_accel_z <= 4.873397 &&
    sma_gyro > 1.551483 &&
    mean_magn_smv > 48.587394 &&
    mean_magn_z <= 45.415192 &&
    max_gyro_z <= 4.671922 &&
    rms_accel_x <= 6.164289 &&
    sma_magn > 68.135998 &&
    std_magn_z > 1.804995 &&
    mean_magn_smv <= 56.728051
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 5.444581 &&
    sma_gyro > 1.551483 &&
    mean_accel_y > -0.344047 &&
    mean_magn_smv <= 37.925832 &&
    entropy_gyro <= 2.275403 &&
    min_gyro_y <= -0.805907
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 5.444581 &&
    sma_gyro > 1.551483 &&
    min_gyro_smv > 0.029073 &&
    mean_accel_y > -1.748195 &&
    mean_magn_smv > 38.035101 &&
    std_accel_z > 1.724097 &&
    min_gyro_z <= -0.801129 &&
    max_magn_y > 20.223 &&
    mean_accel_z > -1.315614
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.648605 &&
    sma_gyro > 1.575008 &&
    mean_accel_y > -1.748195 &&
    mean_magn_smv <= 37.836848 &&
    std_accel_y > 1.983168
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 3.631454 &&
    sma_gyro > 1.575008 &&
    mean_accel_y > -0.344047 &&
    min_accel_smv <= 3.698226 &&
    rms_gyro_x <= 2.07742 &&
    rms_accel_z > 9.030423 &&
    mean_accel_y <= 10.121477
  ) {
    return 'b';
  }

  if (
    min_accel_z <= 3.648605 &&
    sma_gyro > 1.575008 &&
    mean_accel_y > -0.344047 &&
    rms_gyro_x > 2.07742
  ) {
    return 'b';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_y <= 18.154007 &&
    mean_magn_z <= -0.2596 &&
    range_magn_z <= 1.449585 &&
    max_gyro_z > 0.094391
  ) {
    return 'e';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_y <= 18.154007 &&
    mean_magn_z <= -0.2596 &&
    range_magn_z > 1.449585 &&
    range_magn_x > 17.956999 &&
    mean_accel_z <= 7.634956
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 3.648605 &&
    sma_gyro > 1.552271 &&
    mean_accel_y > -0.344047 &&
    mean_magn_smv <= 38.035101 &&
    mean_accel_y <= 8.744191
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 3.648605 &&
    sma_gyro > 1.575008 &&
    mean_accel_y > -0.344047 &&
    std_accel_x > 3.002307 &&
    std_accel_x <= 8.157431 &&
    min_accel_z > -0.888519 &&
    entropy_gyro <= 2.269643
  ) {
    return 'b';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_x > 32.064 &&
    max_magn_y <= 15.280151
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 3.648605 &&
    min_accel_smv <= 2.694748 &&
    sma_gyro > 1.15428 &&
    mean_accel_y > -1.748195 &&
    std_magn_z <= 15.506526 &&
    std_gyro_z <= 0.542568
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_x <= 32.064 &&
    min_gyro_x <= -1.87882
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_x <= 32.064 &&
    mean_accel_smv <= 9.51898 &&
    mean_accel_smv > 9.335114
  ) {
    return 'd';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_x <= 32.064 &&
    max_gyro_y > 0.523254 &&
    mean_magn_smv > 28.735978 &&
    min_magn_y <= 4.834
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 3.648605 &&
    sma_gyro > 1.575008 &&
    max_accel_y > 5.916253 &&
    min_gyro_z <= -0.748208 &&
    entropy_accel > 1.912716 &&
    std_accel_x <= 8.157431 &&
    min_gyro_x > -1.725369 &&
    mean_magn_smv > 43.623913
  ) {
    return 'a';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_x <= 32.064 &&
    std_gyro_y > 0.314989 &&
    mean_magn_smv <= 32.131788 &&
    mean_accel_y > 4.645133 &&
    max_gyro_x > 0.289719 &&
    std_gyro_z > 0.13032
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 4.873397 &&
    min_gyro_x > -0.054363 &&
    mean_accel_y <= 2.088582 &&
    mean_accel_z > 3.4207 &&
    min_accel_x > -6.582858
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.873397 &&
    min_gyro_z <= -1.254249 &&
    std_gyro_y <= 0.32772 &&
    mean_accel_smv <= 11.084169
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 4.873397 &&
    min_gyro_z <= -1.254249 &&
    max_accel_y > 6.071881 &&
    range_magn_y <= 38.032005 &&
    min_accel_smv <= 6.900877 &&
    min_accel_y <= 2.260651 &&
    std_gyro_z <= 1.932761 &&
    mean_magn_smv > 43.479205 &&
    mean_magn_smv <= 46.441627
  ) {
    return 'b';
  }

  if (
    mean_magn_smv <= 36.489729 &&
    range_magn_x <= 32.064 &&
    std_gyro_y > 0.314989 &&
    max_accel_z > 7.932922
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 3.648605 &&
    max_magn_smv > 84.347908 &&
    max_accel_y > 4.43047 &&
    rms_accel_z > 2.169222
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 3.631454 &&
    std_gyro_y <= 0.030133 &&
    mean_accel_y <= 2.043691 &&
    mean_magn_smv > 36.18662 &&
    std_accel_z <= 3.426114
  ) {
    return 'a';
  }

  if (
    range_accel_y > 2.875524 &&
    rms_gyro_x > 0.080934 &&
    rms_accel_x > 7.556314 &&
    mean_accel_y <= -1.345182 &&
    max_accel_z <= 6.821289 &&
    mean_accel_z > -0.479199 &&
    min_magn_y <= 15.52124
  ) {
    return 'a';
  }

  if (
    range_accel_y > 2.875524 &&
    rms_gyro_x > 0.080934 &&
    rms_accel_x > 7.556314 &&
    mean_accel_y <= -1.345182 &&
    max_accel_z <= 6.821289 &&
    max_magn_smv <= 66.123816 &&
    std_magn_z <= 12.015363 &&
    std_magn_smv > 19.235254
  ) {
    return 'f';
  }

  if (
    range_accel_y > 2.875524 &&
    rms_gyro_x > 0.080934 &&
    max_magn_smv > 44.844329 &&
    sma_gyro > 1.538052 &&
    sma_magn <= 66.749999 &&
    max_accel_y > 2.03148 &&
    max_gyro_y > 1.089185 &&
    mean_magn_z > -40.016327 &&
    min_magn_y > -42.424011 &&
    rms_accel_z > 3.100924
  ) {
    return 'a';
  }

  if (
    range_accel_y > 2.875524 &&
    rms_gyro_x > 0.080934 &&
    max_magn_smv > 44.844329 &&
    sma_gyro <= 1.458461 &&
    mean_accel_y > 9.315208 &&
    max_magn_y <= -27.59552 &&
    mean_magn_z <= -4.377
  ) {
    return 'a';
  }

  if (
    range_accel_y > 2.875524 &&
    min_accel_y > 6.810307 &&
    max_accel_x <= 1.284489 &&
    min_gyro_z <= -0.031662 &&
    max_accel_z <= 3.717926 &&
    range_magn_z <= 12.853999
  ) {
    return 'c';
  }

  if (
    range_accel_y > 2.875524 &&
    min_accel_y > 6.810307 &&
    max_magn_y > -33.299999 &&
    mean_magn_smv > 38.400367 &&
    rms_accel_z <= 3.118365 &&
    min_accel_x > -3.34053
  ) {
    return 'd';
  }

  if (
    range_accel_y > 2.875524 &&
    rms_gyro_x > 0.080934 &&
    max_magn_smv > 44.844329 &&
    std_gyro_z > 0.675301 &&
    rms_gyro_x <= 0.503655 &&
    mean_accel_y <= 7.942046 &&
    rms_accel_x > 2.006839
  ) {
    return 'c';
  }

  if (
    range_accel_y > 2.875524 &&
    rms_gyro_x > 0.080934 &&
    std_gyro_z > 0.683158 &&
    range_magn_z <= 33.227999 &&
    max_accel_y > 5.579687 &&
    min_accel_y > -0.407562 &&
    sma_magn > 56.379603
  ) {
    return 'a';
  }

  if (
    range_accel_y > 2.875524 &&
    rms_gyro_x > 0.080934 &&
    std_gyro_z <= 0.675301 &&
    mean_magn_smv > 39.264881 &&
    max_accel_x <= -4.376601 &&
    min_accel_smv <= 7.675754
  ) {
    return 'a';
  }

  if (
    std_accel_y > 0.881056 &&
    rms_gyro_x > 0.080934 &&
    std_gyro_z <= 0.675301 &&
    mean_magn_smv > 39.264881 &&
    std_magn_smv <= 35.741467 &&
    rms_accel_x > 8.495451 &&
    mean_accel_y > -3.415089 &&
    max_accel_z <= 6.147705 &&
    std_magn_z <= 6.697925
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_accel_z <= -7.078457 &&
    rms_accel_x <= 4.568136 &&
    min_magn_y <= -14
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_accel_x <= -6.133945 &&
    mean_magn_smv <= 39.537016
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_gyro_x <= 0.029907 &&
    std_accel_y > 0.197185 &&
    max_magn_smv > 41.186666 &&
    min_gyro_y > -0.095252 &&
    max_accel_x > -1.344971 &&
    rms_accel_x <= 7.447846 &&
    mean_magn_smv > 37.621809
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_magn_smv > 45.048054 &&
    min_accel_x > 7.476715 &&
    max_accel_x > 9.026416 &&
    std_accel_x <= 2.238118 &&
    rms_gyro_x > 0.204612 &&
    mean_accel_y > -1.683073
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_magn_smv > 45.276571 &&
    sma_gyro <= 1.459483 &&
    std_gyro_z > 0.18797 &&
    min_accel_y > 7.68338 &&
    mean_magn_smv > 39.795517 &&
    entropy_gyro <= 2.269113
  ) {
    return 'd';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_magn_smv > 45.276571 &&
    min_accel_smv > 2.694748 &&
    min_accel_x <= 7.476715 &&
    rms_accel_z <= 7.509443 &&
    max_accel_x > -4.788549 &&
    sma_magn <= 78.8422 &&
    std_gyro_z > 0.192177 &&
    rms_gyro_x <= 0.251223 &&
    mean_accel_z > -2.253662 &&
    sma_gyro > 0.512289 &&
    min_accel_z <= 0.26337 &&
    max_gyro_y <= 1.0937
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.096604 &&
    std_gyro_z <= 0.675301 &&
    mean_magn_smv > 39.810584 &&
    rms_accel_z <= 7.509443 &&
    entropy_accel > 1.085912 &&
    sma_magn <= 78.8422 &&
    mean_accel_y > 7.354015 &&
    min_gyro_smv > 0.006593 &&
    min_magn_y > -33.773804 &&
    min_gyro_x > -1.943997 &&
    min_gyro_y <= -0.090139 &&
    mean_magn_smv <= 47.373171
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_magn_smv > 44.922854 &&
    std_gyro_z <= 0.675301 &&
    max_accel_x <= -4.788549 &&
    mean_accel_z > 0.78116
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_magn_smv > 44.922854 &&
    std_gyro_z <= 0.675301 &&
    rms_accel_z <= 7.509443 &&
    min_accel_x <= -7.9691 &&
    mean_accel_z <= 2.678954 &&
    mean_accel_y <= 6.995857 &&
    min_accel_z <= -0.627281
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_magn_smv > 44.922854 &&
    std_gyro_z <= 0.675301 &&
    min_accel_x <= 7.517166 &&
    mean_accel_z <= -6.291962 &&
    max_magn_smv <= 66.711312
  ) {
    return 'e';
  }

  if (
    min_accel_z <= 4.096604 &&
    max_magn_smv > 44.922854 &&
    std_gyro_z <= 0.675301 &&
    min_accel_x <= 7.517166 &&
    rms_accel_z <= 7.383114 &&
    sma_magn <= 79.4104 &&
    max_accel_y > -4.96524 &&
    range_accel_x <= 10.874796 &&
    min_accel_y <= 8.945068 &&
    entropy_gyro <= 2.231821 &&
    max_gyro_y <= 1.848952 &&
    rms_accel_x > 1.833926 &&
    std_accel_z <= 1.908708
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    range_accel_x <= 14.121002 &&
    min_accel_x <= 6.695385 &&
    rms_accel_z <= 7.631912 &&
    min_accel_smv > 1.640962 &&
    sma_magn <= 78.151102 &&
    max_gyro_x <= 0.033508 &&
    std_accel_x <= 0.878214
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    min_accel_x <= 6.695385 &&
    std_gyro_z <= 0.675301 &&
    rms_accel_z <= 7.629985 &&
    std_gyro_y > 0.437121 &&
    std_gyro_z <= 0.530118 &&
    min_accel_x > 4.182671 &&
    max_accel_z > 4.610035
  ) {
    return 'c';
  }

  if (
    min_accel_z <= 4.843618 &&
    max_magn_smv > 45.979865 &&
    min_accel_x > 6.71813 &&
    max_accel_y <= 1.789666 &&
    mean_accel_y <= -3.98874
  ) {
    return 'f';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    std_gyro_z <= 0.675301 &&
    min_accel_x <= 7.960721 &&
    std_gyro_y <= 0.437121 &&
    range_magn_x > 5.460001 &&
    min_accel_x > -9.261055 &&
    std_magn_smv <= 15.77885 &&
    max_accel_z <= 6.229903 &&
    min_accel_x <= -1.303643 &&
    sma_gyro <= 0.808068
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    std_gyro_z <= 0.675301 &&
    min_accel_x <= 7.960721 &&
    std_gyro_y <= 0.437121 &&
    entropy_accel <= 2.018553 &&
    range_magn_x > 5.319 &&
    min_accel_x <= -9.261055
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    std_gyro_z <= 0.675301 &&
    std_gyro_y <= 0.437121 &&
    min_accel_x > 8.416702 &&
    max_magn_y <= 32.200813
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    std_gyro_z <= 0.675301 &&
    std_gyro_y <= 0.437121 &&
    entropy_accel <= 2.018553 &&
    min_accel_x <= 8.374298 &&
    range_magn_x > 5.456999 &&
    mean_magn_smv <= 38.636742 &&
    rms_accel_x > 4.033938
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    std_gyro_z <= 0.675301 &&
    std_gyro_y <= 0.437121 &&
    entropy_accel <= 2.018553 &&
    min_accel_x <= 8.374298 &&
    range_magn_x > 5.456999 &&
    mean_accel_smv > 8.901273 &&
    range_magn_z > 4.872131 &&
    rms_accel_x > 3.443769 &&
    max_accel_smv > 10.141464 &&
    max_accel_z > -2.009003 &&
    std_gyro_z <= 0.308254 &&
    std_gyro_z <= 0.176153 &&
    mean_accel_z <= 2.003229
  ) {
    return 'c';
  }

  if (
    std_accel_y > 0.881056 &&
    max_magn_smv > 44.825128 &&
    sma_gyro > 1.054468 &&
    max_magn_smv > 105.639093 &&
    max_gyro_z <= 0.923905
  ) {
    return 'd';
  }

  if (
    std_accel_y > 0.881056 &&
    max_magn_smv > 44.825128 &&
    sma_gyro > 1.054468 &&
    std_gyro_z <= 0.694135 &&
    mean_accel_y > 7.798871 &&
    min_magn_y <= -33.992004 &&
    min_accel_x > -7.192551
  ) {
    return 'c';
  }

  if (
    std_accel_y > 0.881056 &&
    sma_gyro > 1.134998 &&
    min_accel_x <= -2.471191 &&
    sma_magn <= 79.880799 &&
    max_accel_x > 12.703634 &&
    mean_accel_z > -2.145085
  ) {
    return 'b';
  }

  if (
    range_accel_y > 2.851582 &&
    sma_gyro > 1.148405 &&
    min_accel_x <= -2.471191 &&
    sma_magn <= 79.880799 &&
    rms_accel_x <= 2.335626
  ) {
    return 'a';
  }

  if (
    min_accel_z <= 3.631454 &&
    max_magn_smv > 45.979865 &&
    std_gyro_y <= 0.435157 &&
    min_gyro_z <= -0.545631 &&
    min_gyro_z > -1.329994 &&
    mean_accel_y <= 7.995437 &&
    max_accel_z <= 9.971298 &&
    entropy_accel > 1.152532
  ) {
    return 'c';
  }

  if (
    mean_accel_y <= -6.366133 &&
    max_magn_y <= 1.900002 &&
    mean_accel_z <= 3.282072 &&
    max_accel_x <= 5.009872
  ) {
    return 'd';
  }

  if (
    mean_accel_y <= -6.402643 &&
    max_gyro_y > 0.978484 &&
    min_accel_x <= 1.325191 &&
    max_magn_smv <= 52.456934
  ) {
    return 'a';
  }

  if (
    mean_accel_y <= -6.402643 &&
    min_accel_x <= 1.291565 &&
    entropy_accel > 1.068329 &&
    sma_magn > 66.970062 &&
    std_magn_smv <= 44.985662 &&
    std_accel_z <= 2.470062
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 0.881056 &&
    mean_accel_z > 4.691581 &&
    min_gyro_smv <= 0.141384 &&
    min_accel_y > 6.564901 &&
    mean_magn_z > 5.837173
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.881056 &&
    mean_accel_z > 4.691581 &&
    min_gyro_smv <= 0.141384 &&
    sma_magn > 106.435738 &&
    min_accel_z <= 8.877151
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.881056 &&
    mean_accel_z > 4.691581 &&
    sma_gyro <= 1.139683 &&
    range_magn_y > 28.873997 &&
    range_magn_y <= 73.415005 &&
    std_accel_y <= 0.63706
  ) {
    return 'd';
  }

  if (
    std_accel_y <= 0.881056 &&
    mean_accel_z > 4.691581 &&
    mean_magn_z <= -44.014282 &&
    mean_accel_y <= 4.656722
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_accel_y > 9.838972 &&
    min_magn_y <= -33.732605 &&
    std_gyro_z > 0.022167
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 0.458211 &&
    mean_accel_y <= -6.06559 &&
    mean_magn_smv <= 44.064891 &&
    max_accel_x > 1.520365
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_accel_y <= -0.815226 &&
    min_accel_z <= 4.829252 &&
    mean_accel_z <= -2.532467
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 0.458211 &&
    range_magn_y > 23.880001 &&
    min_gyro_smv > 0.000338 &&
    std_magn_z > 11.959485 &&
    std_accel_x > 0.350409
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 0.458211 &&
    range_magn_y > 23.880001 &&
    min_gyro_x <= -0.01967 &&
    max_gyro_x > 0.021591
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 0.458211 &&
    min_accel_z > 1.192349 &&
    max_accel_x <= -1.604164 &&
    mean_accel_z <= 9.531723 &&
    std_accel_z <= 0.57993
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 0.458211 &&
    min_accel_z > 1.192349 &&
    min_magn_y > -41.168213 &&
    max_accel_x <= -1.647211 &&
    mean_accel_z <= 9.21724
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 0.458211 &&
    min_magn_y > -41.168213 &&
    min_accel_y <= -3.809291 &&
    mean_accel_y <= 0.814557 &&
    std_accel_x <= 4.957223
  ) {
    return 'a';
  }

  if (
    sma_gyro <= 0.458211 &&
    min_magn_y > -41.168213 &&
    min_accel_z > 1.150414 &&
    std_gyro_z <= 0.010378 &&
    std_magn_smv > 9.896435
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 0.458211 &&
    sma_magn <= 71.897221 &&
    min_accel_x > -4.066552 &&
    std_accel_x > 1.432493 &&
    min_magn_y <= -15.96
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 0.458211 &&
    min_magn_y > -41.168213 &&
    mean_magn_smv <= 48.972632 &&
    min_accel_x <= -0.509965 &&
    min_accel_x > -3.94841 &&
    max_accel_x <= 2.691165 &&
    max_gyro_y > 0.01358 &&
    max_magn_y > 7.86 &&
    mean_magn_smv > 30.15058
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 0.458211 &&
    min_magn_y > -41.168213 &&
    sma_magn <= 71.270752 &&
    range_accel_z <= 9.115004 &&
    max_magn_y <= -29.4 &&
    min_gyro_smv > 0.002972
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 0.458211 &&
    min_magn_y > -40.02 &&
    sma_magn <= 71.270752 &&
    range_accel_z <= 9.115004 &&
    min_magn_y > 14.985001 &&
    min_accel_z > 3.06398 &&
    mean_magn_z <= -14.633999
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 0.458211 &&
    mean_accel_smv <= 9.494552 &&
    max_accel_y <= 9.793482 &&
    std_magn_z > 1.86178
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_y > -25.627136 &&
    sma_magn <= 70.951538 &&
    range_accel_z > 9.115004 &&
    std_gyro_z > 0.10107
  ) {
    return 'a';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_accel_y > 10.225967 &&
    mean_magn_smv > 38.728512
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_y > -25.378418 &&
    sma_magn <= 65.331701 &&
    max_gyro_z > 0.014087 &&
    entropy_gyro <= 2.295513 &&
    min_gyro_z > -0.209262 &&
    max_accel_y <= 7.838913 &&
    min_gyro_x > -0.48764 &&
    mean_accel_smv <= 10.020838 &&
    max_magn_y <= 11.299 &&
    mean_magn_z > -35.987998 &&
    range_accel_x <= 2.293715 &&
    min_accel_smv <= 8.592693
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_y > -25.627136 &&
    sma_magn <= 65.331701 &&
    mean_accel_smv <= 9.741405 &&
    min_gyro_x > -0.095051
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_y > -25.627136 &&
    sma_magn <= 65.331701 &&
    entropy_gyro <= 2.295513 &&
    min_gyro_z > -0.203317 &&
    mean_accel_smv > 10.020838 &&
    max_accel_y <= 7.837419
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_y > -25.627136 &&
    sma_magn <= 65.331701 &&
    std_magn_smv > 4.939346 &&
    mean_magn_z <= -23.664 &&
    std_gyro_y <= 0.145725
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_smv <= 51.564999 &&
    max_accel_x > -1.389834 &&
    max_gyro_x <= 0.021088 &&
    mean_magn_smv > 34.238409
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_smv <= 51.564999 &&
    max_accel_x > -1.389834 &&
    std_magn_smv <= 7.263462 &&
    mean_magn_z > -14.59 &&
    max_accel_y > 6.869751
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 0.458211 &&
    max_magn_smv <= 51.564999 &&
    max_accel_x > -1.389834 &&
    mean_magn_z <= -25.260001 &&
    mean_accel_smv <= 10.188097
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.638212 &&
    min_accel_z > 2.724685 &&
    range_accel_x <= 0.126221
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 0.638212 &&
    min_accel_z > 2.724685 &&
    min_gyro_x <= -1.93576 &&
    mean_accel_y <= 4.474643
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 0.638212 &&
    min_accel_z > 2.724685 &&
    min_gyro_x > -2.033265 &&
    max_accel_x <= 1.71784 &&
    max_gyro_y > 0.03006 &&
    mean_magn_z <= 4.572 &&
    max_gyro_x <= 1.2798 &&
    rms_accel_x <= 0.520279 &&
    min_accel_y <= 4.11683
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 0.638212 &&
    min_accel_z > 2.724685 &&
    max_gyro_x > 1.2798 &&
    rms_accel_x <= 2.201617 &&
    max_gyro_y > 0.151611
  ) {
    return 'f';
  }

  if (
    mean_magn_smv <= 37.598419 &&
    min_gyro_y > -0.825878 &&
    mean_accel_smv > 9.486394 &&
    range_magn_x <= 26.547623 &&
    max_accel_x > -0.84635 &&
    mean_magn_z <= -0.2596 &&
    max_magn_y <= 13.099998 &&
    max_gyro_x > 0.222814 &&
    min_gyro_y <= -0.194695
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 0.638212 &&
    min_accel_z > 3.277115 &&
    min_gyro_x > -2.033265 &&
    max_accel_x <= 1.71784 &&
    max_accel_smv > 10.208307 &&
    min_magn_y > -31.25 &&
    mean_magn_z > 27.188599 &&
    mean_accel_y <= 1.108127
  ) {
    return 'e';
  }

  if (
    std_accel_y > 0.638212 &&
    sma_gyro > 1.150775 &&
    max_magn_y > 69.874001 &&
    mean_accel_y <= -3.696597
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 0.458211 &&
    sma_magn <= 62.256201 &&
    min_accel_x > -3.047485 &&
    std_accel_z <= 0.76693 &&
    max_accel_y > 0.657208 &&
    max_magn_y <= 7.38 &&
    range_magn_x > 3.167725 &&
    range_magn_y <= 14.904785 &&
    max_gyro_z > 0.076012
  ) {
    return 'e';
  }

  if (
    std_accel_y > 0.638212 &&
    sma_gyro > 1.150775 &&
    std_accel_z <= 0.705322 &&
    mean_accel_y > 3.144185
  ) {
    return 'c';
  }

  if (
    sma_gyro > 1.150775 &&
    std_accel_smv > 4.322842 &&
    min_accel_x > -2.499623 &&
    std_gyro_z <= 2.043123 &&
    max_accel_y <= 9.412262 &&
    max_accel_x > 15.006856 &&
    max_accel_x <= 22.742521
  ) {
    return 'f';
  }

  if (
    sma_gyro > 1.150775 &&
    std_accel_smv > 4.322842 &&
    std_accel_x <= 2.228525 &&
    max_accel_y <= 9.466963 &&
    min_accel_z <= 6.980942 &&
    min_accel_z > -4.012805 &&
    rms_gyro_x > 0.390306 &&
    sma_gyro > 1.184172
  ) {
    return 'a';
  }

  if (
    std_accel_smv > 7.459732 &&
    min_gyro_smv > 0.10671 &&
    sma_gyro <= 1.451887 &&
    min_gyro_smv <= 0.268665
  ) {
    return 'a';
  }

  if (
    sma_gyro > 1.463877 &&
    mean_magn_smv <= 61.178922 &&
    min_gyro_smv <= 0.077159 &&
    sma_magn > 64.707947 &&
    max_accel_x > 2.608368
  ) {
    return 'c';
  }

  if (
    sma_gyro > 1.463877 &&
    mean_magn_smv <= 61.178922 &&
    std_accel_x > 2.220728 &&
    min_gyro_smv > 0.075905 &&
    mean_magn_z > -33.689999 &&
    range_magn_z <= 28.204346 &&
    mean_magn_smv > 41.96956
  ) {
    return 'a';
  }

  if (
    sma_gyro <= 1.463877 &&
    mean_magn_smv <= 32.458565 &&
    sma_gyro <= 0.348565 &&
    min_accel_z > 6.908469 &&
    min_accel_smv <= 9.078846 &&
    range_magn_y > 3.410999
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 1.463877 &&
    mean_magn_smv <= 32.458565 &&
    std_gyro_z > 0.098081
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.463877 &&
    min_accel_z > 7.059304 &&
    rms_accel_z <= 9.312903 &&
    entropy_accel <= 0.447755 &&
    mean_accel_smv <= 9.841297
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.463877 &&
    min_accel_z > 7.059304 &&
    max_accel_y > 3.919428 &&
    range_magn_y > 13.510132 &&
    std_accel_z > 0.477435 &&
    std_accel_smv <= 5.573313
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 1.463877 &&
    mean_accel_y > 8.025931 &&
    mean_magn_smv <= 51.126343 &&
    std_magn_z > 0.447553 &&
    mean_magn_smv > 38.829238 &&
    max_gyro_x > 0.141569 &&
    range_magn_y > 2.089691
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 1.463877 &&
    min_accel_z > 7.059304 &&
    rms_accel_z <= 9.312903 &&
    std_gyro_z > 0.010624 &&
    max_magn_y <= -21.464539 &&
    mean_accel_y > 4.550779
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 1.463877 &&
    min_accel_z > 7.38731 &&
    min_magn_y <= -26.34 &&
    max_accel_y <= 5.879196 &&
    sma_magn <= 77.4876 &&
    std_gyro_z <= 0.314695
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.463877 &&
    std_accel_y <= 0.638212 &&
    mean_magn_z > 33.897915 &&
    mean_accel_y > -3.832518
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.463877 &&
    mean_magn_smv <= 36.489729 &&
    std_gyro_y <= 0.281406 &&
    max_gyro_z > 0.078007
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 1.463877 &&
    std_accel_y <= 0.638212 &&
    min_accel_y > 6.604004 &&
    max_accel_z <= 6.326416
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 1.463877 &&
    min_accel_z <= 5.699127 &&
    min_gyro_x <= -1.492556 &&
    max_accel_x > 6.320068
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 1.451563 &&
    min_accel_z <= 5.699127 &&
    rms_gyro_x <= 0.116403 &&
    mean_magn_smv > 44.756947 &&
    max_magn_y <= -25.730896
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.451563 &&
    min_accel_z <= 5.699127 &&
    min_gyro_z > -0.016799 &&
    min_gyro_y <= -0.012939
  ) {
    return 'd';
  }

  if (
    sma_gyro <= 1.451563 &&
    min_accel_z <= 5.699127 &&
    mean_accel_smv <= 8.966253
  ) {
    return 'a';
  }

  if (
    sma_gyro <= 1.450332 &&
    std_accel_y <= 0.638212 &&
    max_accel_z > 7.869981 &&
    max_gyro_y <= 0.030136
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 1.450332 &&
    std_accel_y <= 0.638212 &&
    mean_accel_y <= 7.082364 &&
    max_accel_z > 7.869981 &&
    max_accel_x > 1.732205 &&
    mean_accel_smv <= 9.908131
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 1.450332 &&
    std_accel_y <= 0.638212 &&
    mean_accel_y <= 7.082364 &&
    max_accel_z > 7.869981 &&
    max_accel_x <= 1.732205 &&
    std_gyro_z <= 0.50043 &&
    rms_gyro_x > 0.079922 &&
    max_magn_smv > 39.418035 &&
    entropy_gyro <= 2.265496
  ) {
    return 'e';
  }

  if (
    sma_gyro <= 1.450332 &&
    min_accel_z <= 6.763826 &&
    min_magn_y <= -34.121704 &&
    rms_gyro_x <= 0.855631 &&
    rms_accel_x > 6.577477 &&
    mean_magn_z <= 15.03
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 1.450332 &&
    min_accel_z <= 6.763826 &&
    mean_accel_y <= -6.391038 &&
    std_magn_z > 1.432203 &&
    max_accel_x > -2.236313 &&
    mean_accel_z > 1.156853
  ) {
    return 'a';
  }

  if (
    sma_gyro <= 1.450332 &&
    mean_accel_y <= -6.391038 &&
    std_gyro_y <= 0.362378
  ) {
    return 'c';
  }

  if (
    sma_gyro <= 1.450332 &&
    mean_accel_smv > 11.159099 &&
    range_magn_x > 6.156921
  ) {
    return 'a';
  }

  if (
    std_accel_x <= 2.228525 &&
    min_magn_y <= -33.952332 &&
    min_accel_y > 0.965515 &&
    mean_magn_z <= 27.03064 &&
    min_magn_y <= -34.121704 &&
    min_gyro_y > -0.056908 &&
    std_accel_y > 0.839403
  ) {
    return 'e';
  }

  if (
    std_accel_x <= 2.228525 &&
    min_magn_y <= -33.952332 &&
    min_accel_y > 0.965515 &&
    mean_magn_z <= 27.03064 &&
    min_magn_y <= -34.121704 &&
    min_gyro_smv <= 0.124703 &&
    max_accel_x <= 1.763901 &&
    sma_magn > 66.473999
  ) {
    return 'a';
  }

  if (
    sma_gyro <= 1.450332 &&
    std_gyro_z <= 0.043716 &&
    rms_accel_x > 0.526384
  ) {
    return 'f';
  }

  if (
    sma_gyro <= 1.450332 &&
    max_accel_smv > 17.181614 &&
    max_magn_y <= 9.828568 &&
    std_accel_smv <= 11.158714 &&
    mean_accel_y <= 3.280635
  ) {
    return 'd';
  }

  if (
    std_accel_x > 2.220728 &&
    min_gyro_smv > 0.104316 &&
    max_accel_z > 3.799714 &&
    min_accel_y > -6.044708 &&
    std_magn_z <= 17.725828
  ) {
    return 'b';
  }

  if (
    mean_accel_y > 7.8707 &&
    max_accel_x <= 2.221887 &&
    std_gyro_y > 0.12944
  ) {
    return 'c';
  }

  if (
    mean_accel_y > 7.877164 &&
    min_accel_x > -3.037979 &&
    max_magn_y > -32.847595
  ) {
    return 'd';
  }

  if (
    max_accel_y > 9.847687 &&
    mean_accel_y <= 7.72848 &&
    entropy_gyro <= 2.269561 &&
    max_accel_z <= 11.141418 &&
    entropy_gyro > 2.250953
  ) {
    return 'a';
  }

  if (
    max_accel_y > 9.847687 &&
    mean_accel_y <= 7.72848 &&
    entropy_gyro > 2.223713
  ) {
    return 'c';
  }

  if (
    entropy_accel > 2.075459 &&
    max_magn_smv > 44.386061 &&
    std_accel_z <= 5.122086
  ) {
    return 'a';
  }

  if (
    mean_magn_smv > 58.289065 &&
    mean_accel_z > -4.562032 &&
    mean_magn_z <= 43.274002
  ) {
    return 'e';
  }

  if (mean_magn_z > 27.8109 && mean_accel_z <= -0.835889) {
    return 'a';
  }

  if (mean_magn_z > 27.8109 && std_magn_z <= 2.354421) {
    return 'e';
  }

  if (
    mean_magn_z <= 27.8109 &&
    std_gyro_z <= 0.096579 &&
    max_accel_z > 8.087613 &&
    std_magn_z <= 5.122103 &&
    max_accel_x > -0.25592 &&
    mean_accel_y <= 6.54048
  ) {
    return 'e';
  }

  if (
    mean_magn_z <= 27.8109 &&
    sma_magn <= 48.419999 &&
    max_gyro_x <= 0.250218
  ) {
    return 'd';
  }

  if (
    mean_magn_z <= 27.8109 &&
    range_accel_y > 7.981072 &&
    entropy_gyro <= 2.208407
  ) {
    return 'c';
  }

  if (mean_magn_z > 27.8109) {
    return 'd';
  }

  if (range_accel_y > 7.854179 && mean_accel_y <= -3.469438) {
    return 'f';
  }

  if (range_accel_y > 7.379155 && mean_magn_z > -20.524597) {
    return 'e';
  }

  if (entropy_accel > 1.888298 && std_accel_y <= 2.428641) {
    return 'a';
  }

  if (
    std_accel_y <= 2.461446 &&
    range_magn_z <= 2.204895 &&
    mean_accel_y > 2.774866
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_magn_z > -42.115326 &&
    min_magn_y <= -34.98 &&
    std_accel_smv <= 7.045051 &&
    mean_magn_smv > 42.149021 &&
    range_accel_z <= 4.956009
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_magn_z > -42.115326 &&
    mean_accel_smv > 10.517529 &&
    std_accel_y <= 1.474727
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_smv <= 10.733615 &&
    min_magn_y <= -30.465698 &&
    mean_magn_z <= -3.4228 &&
    std_accel_z <= 1.919735 &&
    std_accel_y > 0.856435
  ) {
    return 'e';
  }

  if (std_accel_y <= 2.461446 && mean_accel_smv > 10.733615) {
    return 'c';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_z > 8.339498 &&
    range_accel_x > 5.226547 &&
    std_accel_y <= 1.73702
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_z > 8.339498 &&
    std_gyro_z <= 0.930221 &&
    min_accel_x > -4.113617 &&
    max_accel_x <= 0.377087 &&
    mean_magn_smv <= 46.107031
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_z > 8.339498 &&
    std_gyro_z <= 0.920678 &&
    std_accel_x <= 1.554248 &&
    max_accel_x > 0.262165 &&
    min_gyro_x > -0.734684 &&
    max_magn_smv <= 49.571242
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_magn_z > -44.429447 &&
    max_accel_z <= -0.081955 &&
    max_accel_x > 1.033098
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_z > -3.08038 &&
    mean_magn_z > -44.429447 &&
    max_gyro_y <= 0.122344 &&
    mean_accel_y <= 6.02046
  ) {
    return 'e';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_z > -3.08038 &&
    mean_magn_z > -44.429447 &&
    max_accel_x <= 1.987248 &&
    min_accel_smv <= 5.587044
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_z > -3.08038 &&
    min_gyro_smv <= 0.007711
  ) {
    return 'a';
  }

  if (std_accel_y <= 2.461446 && mean_accel_z <= -3.08038) {
    return 'c';
  }

  if (
    std_accel_y <= 2.461446 &&
    max_gyro_y <= 0.216033 &&
    std_accel_y > 0.916215
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 2.461446 &&
    max_accel_x <= 1.727417 &&
    min_gyro_x > -0.438296 &&
    mean_magn_smv > 40.331151 &&
    mean_accel_y <= 5.023428
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 2.461446 &&
    mean_accel_smv > 10.304673 &&
    mean_accel_y <= 1.431058
  ) {
    return 'c';
  }

  if (
    std_accel_y <= 2.461446 &&
    rms_accel_z <= 2.243579 &&
    max_accel_z > 1.460463
  ) {
    return 'a';
  }

  if (
    std_accel_y <= 2.461446 &&
    min_gyro_x > -0.452346 &&
    entropy_gyro > 2.208582 &&
    std_gyro_z <= 0.291412
  ) {
    return 'f';
  }

  if (
    std_accel_y <= 2.461446 &&
    sma_gyro <= 0.577946 &&
    max_accel_x > 1.899689
  ) {
    return 'c';
  }

  if (std_accel_y <= 2.461446 && min_magn_y <= -28.853035) {
    return 'a';
  }

  if (
    std_accel_y <= 2.386676 &&
    min_accel_smv <= 5.569756 &&
    mean_accel_y <= 4.370509
  ) {
    return 'f';
  }

  if (min_accel_smv <= 5.569756 && std_accel_y > 2.13706) {
    return 'd';
  }

  if (
    min_accel_smv > 5.569756 &&
    entropy_gyro > 2.188055 &&
    min_magn_y <= 4.445999 &&
    min_accel_z > 5.446975 &&
    mean_accel_z <= 9.531078
  ) {
    return 'f';
  }

  if (
    min_accel_smv > 5.569756 &&
    max_accel_z > 2.58519 &&
    entropy_gyro > 2.194031 &&
    std_accel_z > 0.632513
  ) {
    return 'e';
  }

  if (min_accel_x <= 5.142902 && min_gyro_x <= -0.712654) {
    return 'a';
  }

  if (mean_accel_y <= -0.127012) {
    return 'f';
  }
  return 'c';
};
