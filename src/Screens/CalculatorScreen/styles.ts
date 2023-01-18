/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  constainer: {
    flex: 1,
  },
  result: {
    backgroundColor: 'orange',
    flex: 2,
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: 'white',
    flex: 3,
  },
  operations: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultText: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: 'white',
    marginTop: hp(20),
    padding: hp(1),
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    color: 'black',
    fontSize: hp(4),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  operationButton: {
    color: 'black',
    fontSize: hp(4),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  firstRow: {
    width: wp(25),
    height: hp(14.6),
    elevation: hp(0.1),
    borderColor: '#C9D1CB',
  },
  secondRow: {
    borderWidth: hp(0.1),
    width: wp(25),
    height: hp(14),
    elevation: hp(0.1),
    borderColor: '#C9D1CB',
  },
  thirdRow: {
    borderWidth: hp(0.1),
    width: wp(25),
    height: hp(14),
    marginBottom: hp(1),
    elevation: hp(0.1),
    borderColor: '#C9D1CB',
  },
  fourthRow: {
    borderWidth: hp(0.1),
    width: wp(25),
    height: hp(14),
    marginBottom: hp(1.8),
    elevation: hp(0.1),
    borderColor: '#C9D1CB',
  },
  fifthRow: {
    borderWidth: hp(0.1),
    width: wp(50),
    height: hp(15),
    marginBottom: hp(1.6),
    elevation: hp(0.1),
    borderColor: '#C9D1CB',
  },
  zeroButton: {
    borderWidth: 0.9,
    width: wp(50),
    height: hp(15),
    marginBottom: hp(1.6),
    elevation: hp(0.1),
    borderColor: '#C9D1CB',
  },
});
