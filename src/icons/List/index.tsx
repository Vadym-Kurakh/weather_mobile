import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const List = ({fill}: SvgProps) => (
  <Svg width="13.5" height="18" viewBox="0 0 15 20" fill="none">
    <Path
      d="M10.7818 11.25H4.01307C3.85255 11.25 3.71878 11.3044 3.61177 11.4132C3.50475 11.522 3.45125 11.6573 3.45125 11.819C3.45125 11.9807 3.50475 12.1176 3.61177 12.2294C3.71878 12.3414 3.85255 12.3974 4.01307 12.3974H10.7818C10.9363 12.3974 11.0656 12.3414 11.1697 12.2294C11.2737 12.1176 11.3257 11.9807 11.3257 11.819C11.3257 11.6573 11.2737 11.522 11.1697 11.4132C11.0656 11.3044 10.9363 11.25 10.7818 11.25ZM10.7818 14.5056H4.01307C3.85255 14.5056 3.71878 14.5615 3.61177 14.6735C3.50475 14.7854 3.45125 14.9254 3.45125 15.0933C3.45125 15.2487 3.50475 15.3809 3.61177 15.4897C3.71878 15.5985 3.85255 15.653 4.01307 15.653H10.7818C10.9363 15.653 11.0656 15.5985 11.1697 15.4897C11.2737 15.3809 11.3257 15.2487 11.3257 15.0933C11.3257 14.9254 11.2737 14.7854 11.1697 14.6735C11.0656 14.5615 10.9363 14.5056 10.7818 14.5056ZM2.76456 20H12.2354C13.1569 20 13.8481 19.7559 14.3088 19.2677C14.7696 18.7795 15 18.0504 15 17.0803V8.61007C15 8.20585 14.9792 7.86692 14.9375 7.59328C14.896 7.31965 14.8142 7.06934 14.6923 6.84235C14.5705 6.61536 14.3906 6.37438 14.1527 6.1194L9.239 0.886194C9.01307 0.643657 8.79309 0.458644 8.57906 0.331157C8.36503 0.203669 8.13168 0.116604 7.879 0.0699627C7.62633 0.0233209 7.33352 0 7.00059 0H2.76456C1.84304 0 1.1519 0.245647 0.691141 0.73694C0.23038 1.22823 0 1.95896 0 2.92911V17.0803C0 18.0566 0.23038 18.7873 0.691141 19.2724C1.1519 19.7575 1.84304 20 2.76456 20ZM2.82699 18.4981C2.3692 18.4981 2.02289 18.3737 1.78805 18.125C1.55321 17.8762 1.43579 17.5187 1.43579 17.0523V2.95709C1.43579 2.49689 1.55321 2.13931 1.78805 1.88433C2.02289 1.62936 2.37217 1.50187 2.83591 1.50187H6.80439V6.92164C6.80439 7.50622 6.94411 7.94465 7.22354 8.23694C7.50296 8.52923 7.92211 8.67537 8.48097 8.67537H13.5642V17.0523C13.5642 17.5187 13.4468 17.8762 13.212 18.125C12.9771 18.3737 12.6278 18.4981 12.1641 18.4981H2.82699ZM8.64149 7.26679C8.46313 7.26679 8.33679 7.22637 8.26247 7.14552C8.18816 7.06468 8.151 6.93097 8.151 6.74441V1.79104L13.2878 7.26679H8.64149Z"
      fill={fill}
    />
  </Svg>
);

export default List;
