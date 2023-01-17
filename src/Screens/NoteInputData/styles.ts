/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {alignSelf: 'center', marginTop: 30},
  addNotesText: {fontSize: 30, fontWeight: 'bold', color: 'black'},
  formView: {marginTop: 30},
  titleInput: {
    borderWidth: 2,
    borderColor: 'orange',
    width: 380,
    borderRadius: 10,
  },
  noteDescriptionInput: {
    borderWidth: 2,
    borderColor: 'orange',
    width: 380,
    height: 100,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonView: {
    alignSelf: 'center',
    marginTop: 50,
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: 12,
    color: 'black',
    fontSize: 16,
  }
});
