/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Timer from 'react-native-background-timer-android';
import styles from './styles';

interface Lap {
  hours: number;
  minutes: number;
  seconds: number;
}
const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [stop, setStop] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [newLaps, setNewLaps] = useState<Lap[]>([]);
  const [isStartClicked, setIsStartClicked] = useState(false);
  const [rotate, setRotate] = useState(true);

  const onStart = () => {
    setStop(false);
    setIsPlaying(true);
    setIsStartClicked(true);
  };

  const onClear = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setStop(true);
    setNewLaps([]);
    setIsStartClicked(false);
  };

  const onStop = () => {
    setStop(true);
    setIsStartClicked(false);
  };

  useEffect(() => {
    let timer = 0;
    if (!stop) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
        }
      }, 912);
    } else {
      clearInterval(timer);
    }
    console.log(seconds);
    return () => {
      clearInterval(timer);
    };
  });

  const lapsRecord = () => {
    if (!stop) {
      setNewLaps([
        ...newLaps,
        {
          hours: hours,
          minutes,
          seconds,
        },
      ]);
    }
  };
  console.log(newLaps);

  return (
    <View style={styles.container}>
      <View style={styles.animationView}>
        <View
          style={{
            width: 120,
            borderWidth: 5,
            height: 120,
            borderRadius: 60,
            borderColor: 'orange',
            marginLeft: 10,
          }}>
          {rotate && (
            <View
              style={{
                width: 1,
                height: 110,
                borderWidth: 2,
                position: 'absolute',
                marginLeft: 52,
                marginTop: 0,
                backgroundColor: 'orange',
                borderColor: 'orange',
                transform: seconds
                  ? [{rotate: `${seconds}deg`}]
                  : [{rotate: '180deg'}],
              }}>
              <View
                style={{
                  width: 8,
                  height: 56,
                  backgroundColor: '#f8f6f0',
                  alignSelf: 'center',
                  borderRadius: 1,
                  marginTop: 52,
                }}
              />
            </View>
          )}
        </View>
      </View>
      <View style={styles.timerView}>
        <Text style={styles.timerText}>
          {hours < 10 ? '0' + hours : hours}:
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </Text>
      </View>
      <View style={styles.lapsView}>
        <FlatList
          data={newLaps}
          renderItem={({item, index}) => {
            return (
              <View style={styles.lapView}>
                <View style={styles.indexView}>
                  <Text style={styles.indexText}>{index + 1}</Text>
                </View>
                <View style={styles.lapTimerView}>
                  <Text style={styles.lapTimerText}>
                    {item.hours < 10 ? '0' + item.hours : item.hours}:
                    {item.minutes < 10 ? '0' + item.minutes : item.minutes}:
                    {item.seconds < 10 ? '0' + item.seconds : item.seconds}
                  </Text>
                </View>
                <View style={styles.borderLineView} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.buttonsView}>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={onClear}>
            <Text style={styles.buttonText}>CLEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={lapsRecord}>
            <Text style={styles.buttonText}>LAP</Text>
          </TouchableOpacity>
          {isStartClicked ? (
            <TouchableOpacity onPress={onStop}>
              <Text style={styles.buttonText}>STOP</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onStart}>
              <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default StopWatch;

{
  /* <View style={styles.lapsView}>
        <View style={styles.secondLapsView}>
          {newLaps.map((lap, index) => (
            <View style={styles.lapView}>
              <View style={styles.indexView}>
                <Text style={styles.indexText}>{index + 1}</Text>
              </View>
              <View style={styles.lapTimerView}>
                <Text style={styles.lapTimerText}>
                  {`${lap.hours < 10 ? '0' + lap.hours : lap.hours} : ${
                    lap.minutes < 10 ? '0' + lap.minutes : lap.minutes
                  } : ${lap.seconds < 10 ? '0' + lap.seconds : lap.seconds}`}
                </Text>
              </View>
              <View style={styles.borderLineView} />
            </View>
          ))}
        </View>
      </View> */
}
