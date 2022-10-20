import React from 'react';
import {Colors} from '../../styles/colors';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

const Humidity = ({style}: SvgProps) => (
  <Svg width="18" height="25" viewBox="0 0 18 25" fill="none" style={style}>
    <Path
      d="M16.4761 10.9932L9.8472 0.436493C9.75103 0.301423 9.62396 0.191305 9.47659 0.115322C9.32921 0.0393396 9.16581 -0.000305176 9 -0.000305176C8.83419 -0.000305176 8.67079 0.0393396 8.52341 0.115322C8.37604 0.191305 8.24897 0.301423 8.1528 0.436493L1.4941 11.0444C0.569189 12.5362 0.0538451 14.2455 0 16C0 18.3869 0.948211 20.6761 2.63604 22.364C4.32387 24.0518 6.61305 25 9 25C11.3869 25 13.6761 24.0518 15.364 22.364C17.0518 20.6761 18 18.3869 18 16C17.9425 14.2259 17.4168 12.4985 16.4761 10.9932V10.9932ZM9 23.0005C7.14421 22.9981 5.3651 22.2599 4.05285 20.9476C2.74061 19.6354 2.00236 17.8563 2 16.0005C2.0531 14.6018 2.47327 13.2417 3.2183 12.0567L4.1533 10.5679L14.2271 20.6411C13.5727 21.3823 12.7683 21.9759 11.8672 22.3827C10.966 22.7894 9.9887 23 9 23.0005V23.0005Z"
      fill={Colors.white}
    />
  </Svg>
);

export default Humidity;