/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {padding: hp(15), alignSelf: 'center', marginTop: hp(20)},
  calculatorButton: {
    padding: hp(3.2),
    backgroundColor: 'orange',
    alignSelf: 'center',
    borderRadius: hp(1),
  },
  stopWatchButton: {
    padding: hp(3),
    backgroundColor: 'orange',
    marginTop: hp(3),
    alignSelf: 'center',
    borderRadius: hp(1),
  },
  notesButton: {
    padding: hp(3),
    backgroundColor: 'orange',
    marginTop: hp(3),
    alignSelf: 'center',
    width: wp(38),
    borderRadius: hp(1),
  },
  notesText: {alignSelf: 'center', fontSize: hp(2.5), color: 'black'},
});
