/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
  NativeAppEventEmitter,
  Platform,
} from 'react-native';
import Timer from 'react-native-background-timer-android';
function BackGroundTimer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const onStart = () => {
    var timer = 0;
    if (true) {
      timer = Timer.setInterval(() => {
        setSeconds(seconds => {
          setSeconds(seconds + 1);
          console.log(seconds);
          if (seconds === 59) {
            setMinutes(minutes => {
              setMinutes(minutes + 1);
            });
            setSeconds(0);
          }
        });
      }, 100);
    }
  };
  return (
    <View>
      <Text style={{alignSelf: 'center', fontSize: 30, marginTop: 80}}>
        {minutes}:{seconds}
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
