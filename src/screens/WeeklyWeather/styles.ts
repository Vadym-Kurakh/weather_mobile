import {IStylesProps} from './types';
import {Colors} from '../../styles/colors';
import {scale, ScaledSheet} from 'react-native-size-matters';

export default ({insets}: IStylesProps) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.darkBlue,
    },
    header: {
      width: '100%',
      paddingBottom: '14.94@s',
      paddingHorizontal: '22.4@s',
      borderBottomLeftRadius: '22.4@s',
      borderBottomRightRadius: '22.4@s',
      backgroundColor: Colors.lightBlue,
      paddingTop: insets.top + scale(14.94),
    },
    title: {
      fontWeight: '700',
      color: Colors.white,
      textAlign: 'center',
      fontSize: '20.54@s',
    },
    list: {
      width: '100%',
      flex: 1,
    },
    listContainer: {
      padding: '22.4@s',
    },
    sectionTitle: {
      fontWeight: '500',
      fontSize: '18.67@s',
      color: Colors.white,
      paddingBottom: '6@s',
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: '4.7@s',
      borderBottomWidth: '0.6@s',
      borderBottomColor: Colors.lightGray,
    },
    headerIcon: {
      width: '100@s',
      height: '100@s',
    },
    headerTemp: {
      fontWeight: '700',
      color: Colors.white,
      fontSize: '37.34@s',
    },
    headerTime: {
      color: Colors.white,
      fontSize: '14.94@s',
      marginRight: '6@s',
    },
    weatherDesc: {
      color: Colors.lightGray,
      textTransform: 'capitalize',
    },
    date: {
      flexDirection: 'row',
    },
    weatherDetails: {
      flexDirection: 'row',
      paddingTop: '14.94@s',
      justifyContent: 'space-around',
    },
    detailsBlock: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    value: {
      fontWeight: '600',
      textAlign: 'center',
      color: Colors.white,
      marginBottom: '3@s',
      width: '75@s',
    },
    label: {
      fontWeight: '500',
      textAlign: 'center',
      color: Colors.lightGray,
    },
    descIcon: {
      marginBottom: '9.4@s',
    },
  });
