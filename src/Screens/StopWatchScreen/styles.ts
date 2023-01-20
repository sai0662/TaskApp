/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f8f6f0'},
  animationView: {
    marginTop: 30,
    marginLeft: 140,
  },
  timerView: {alignSelf: 'center', marginTop: hp(2)},
  timerText: {fontSize: hp(8), color: 'black', fontWeight: 'bold'},
  lapsView: {
    borderColor: 'orange',
    width: hp(50),
    height: hp(39),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  secondLapsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lapView: {
    width: wp(96),
    height: hp(10),
    marginLeft: wp(3),
    marginTop: hp(3),
  },
  indexView: {
    marginTop: hp(5),
    borderColor: 'orange',
    borderWidth: 3,
    width: hp(5),
    height: hp(5),
    borderRadius: hp(6),
    marginLeft: wp(2),
  },
  indexText: {alignSelf: 'center', marginTop: hp(0.8), color: 'orange'},
  lapTimerView: {marginTop: hp(-4.8)},
  lapTimerText: {fontSize: hp(3.4), marginLeft: wp(62)},
  borderLineView: {
    borderWidth: 0.1,
    marginTop: 28,
    width: 440,
    marginLeft: -24,
    elevation: hp(0.2),
    shadowColor: 'orange',
  },
  buttonsView: {
    width: wp(100),
    height: hp(10),
    alignSelf: 'center',
    marginTop: hp(6),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(10),
    backgroundColor: 'white',
    width: wp(100),
    height: hp(10),
  },
  buttonText: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: hp(3.4),
    fontSize: hp(2.2),
  },
});
