/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {alignSelf: 'center', marginTop: hp(4)},
  addNotesText: {fontSize: hp(4), fontWeight: 'bold', color: 'black'},
  formView: {marginTop: hp(4)},
  titleInput: {
    borderWidth: hp(0.3),
    borderColor: 'orange',
    width: wp(92),
    borderRadius: hp(2),
    marginTop: hp(2),
  },
  topicInput: {
    borderWidth: hp(0.3),
    borderColor: 'orange',
    width: wp(92),
    borderRadius: hp(2),
  },
  noteDescriptionInput: {
    borderWidth: hp(0.3),
    borderColor: 'orange',
    width: wp(92),
    height: hp(15),
    marginTop: hp(2),
    borderRadius: hp(2),
  },
  buttonView: {
    alignSelf: 'center',
    marginTop: hp(4),
    width: wp(30),
    height: hp(6),
    borderRadius: hp(2),
    backgroundColor: 'orange',
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: hp(1.4),
    color: 'black',
    fontSize: hp(2),
  },
});
