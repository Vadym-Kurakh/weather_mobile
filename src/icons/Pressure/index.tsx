import React from 'react';
import {Colors} from '../../styles/colors';
import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';

const Pressure = ({style}: SvgProps) => (
  <Svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={style}>
    <G clip-path="url(#clip0_36_31)">
      <Path
        d="M13.014 11.002C11.907 11.01 11.006 10.118 10.998 9.015C10.989 7.908 11.877 7.008 12.985 6.999C13.151 6.998 13.309 7.022 13.463 7.059C14.619 6.154 16.13 4.974 16.302 4.851C16.6 4.64 16.942 4.615 17.185 4.858C17.425 5.106 17.4 5.481 17.175 5.744C17.098 5.835 15.88 7.366 14.946 8.542C14.98 8.685 15.002 8.833 15.003 8.986C15.012 10.088 14.122 10.994 13.014 11.002ZM0 21C0 20.447 0.448 20 1 20H10V17.475C6.51 16.236 4 12.91 4 9C4 4.038 8.038 0 13 0C17.963 0 22 4.038 22 9C22 12.91 19.49 16.236 16 17.475V20H25C25.553 20 26 20.447 26 21C26 21.553 25.553 22 25 22H1C0.448 22 0 21.553 0 21ZM13 15C16.309 15 19 12.309 19 9C19 5.691 16.309 3 13 3C9.691 3 7 5.691 7 9C7 12.309 9.691 15 13 15ZM25 24H1C0.448 24 0 24.447 0 25C0 25.553 0.448 26 1 26H25C25.553 26 26 25.553 26 25C26 24.447 25.553 24 25 24Z"
        fill={Colors.white}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_36_31">
        <Rect width="26" height="26" fill={Colors.white} />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Pressure;
