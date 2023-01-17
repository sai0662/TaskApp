/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {padding: 100, alignSelf: 'center', marginTop: 150},
  calculatorButton: {
    padding: 20,
    backgroundColor: 'orange',
    alignSelf: 'center',
    borderRadius: 10,
  },
  stopWatchButton: {
    padding: 20,
    backgroundColor: 'orange',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  notesButton: {
    padding: 20,
    backgroundColor: 'orange',
    marginTop: 20,
    alignSelf: 'center',
    width: 150,
    borderRadius: 10,
  },
  notesText: {alignSelf: 'center', fontSize: 20, color: 'black'},
});
