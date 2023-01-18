/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
  NativeAppEventEmitter,
  Platform,
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

function BackGroundTimer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState(true);

  const onStart = () => {
    var timeoutId = 0;
    timeoutId = BackgroundTimer.setInterval(() => {
      if (start) {
        setSeconds(seconds => {
          setSeconds(seconds + 1);
          if (seconds === 59) {
            setSeconds(0);
            setMinutes(minutes => {
              setMinutes(minutes + 1);
              if (minutes === 59) {
                setMinutes(0);
              }
            });
            setHours(hours => {
              setHours(hours + 1);
              if (hours === 59) {
                setHours(0);
              }
            });
          }
        });
      }
      console.log('tic');
    }, 1);
  };

  return (
    <View>
      <Text style={{alignSelf: 'center', fontSize: 30, marginTop: 80}}>
        {hours < 10 ? '0' + hours : hours}:
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <TouchableOpacity
        onPress={onStart}
        style={{
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 30,
          width: 80,
          height: 50,
          backgroundColor: 'orange',
        }}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BackGroundTimer;
