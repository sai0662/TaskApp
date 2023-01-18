/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF5EE'},
  notesText: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  titleText: {padding: hp(3), marginTop: hp(4)},
  descriptionText: {padding: hp(3)},
});
