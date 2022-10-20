import {Colors} from '../../styles/colors';
import {ScaledSheet} from 'react-native-size-matters';

export default () =>
  ScaledSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    time: {
      color: Colors.gray,
      width: '70@s',
      fontSize: '14.94@s',
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '120@s',
    },
    icon: {
      width: '50@s',
      height: '50@s',
    },
    title: {
      fontSize: '14.94@s',
      color: Colors.gray,
      marginLeft: '2@s',
    },
    temperature: {
      fontSize: '16.8@s',
      color: Colors.white,
      width: '50@s',
      textAlign: 'right',
    },
  });
