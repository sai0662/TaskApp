/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.calculatorButton}
        onPress={() => navigation.navigate('calculator')}>
        <Text style={styles.notesText}>Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.stopWatchButton}
        onPress={() => navigation.navigate('stopwatch')}>
        <Text style={styles.notesText}>StopWatch</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.notesButton}
        onPress={() => navigation.navigate('notes')}>
        <Text style={styles.notesText}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.notesButton}
        onPress={() => navigation.navigate('Background')}>
        <Text style={styles.notesText}>BackgrndTimer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
