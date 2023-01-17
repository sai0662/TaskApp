/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  input: {
    height: hp(8),
    margin: hp(2),
    borderWidth: hp(0.3),
    padding: hp(2),
    width: wp(80),
    alignSelf: 'center',
    borderRadius: hp(10),
    fontSize: hp(2.4),
    fontWeight: 'bold',
    borderColor: '#B2BEB5',
  },
  notesView: {
    flexDirection: 'row',
    marginTop: hp(-1),
    marginLeft: wp(-1),
    height: hp(88),
    width: wp(100),
  },
  noteView: {
    width: wp(47.4),
    height: hp(30),
    padding: hp(2),
    marginLeft: wp(2.4),
    marginTop: hp(1.4),
    backgroundColor: '#C19A6B',
    borderRadius: hp(3),
  },
  notesNameText: {alignSelf: 'center', color: 'white'},
  notesDescriptionText: {alignSelf: 'center', color: 'white'},
  addButtonView: {
    width: wp(16),
    height: hp(8),
    borderRadius: hp(10),
    marginLeft: wp(80),
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: hp(90),
  },
  addButtonText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: hp(4),
    //marginTop: hp(1),
  },
  dateView: {flexDirection: 'row', marginLeft: 90, marginTop: 2},
  dateText: {color: 'white'},
  monthText: {marginLeft: 4, color: 'white'},
});
