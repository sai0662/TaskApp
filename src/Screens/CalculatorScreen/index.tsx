/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-eval */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Calculator = () => {
  const [results, setResults] = useState('');

  const enterValue = (value: string | number) => {
    console.log(value);
    if (value === '=') {
      return Calculations();
    }
    setResults(results + value);
  };

  const Calculations = () => {
    setResults(eval(results));
  };

  const onOperationClick = (value: number | string) => {
    if (value === 'AC') {
      setResults('');
    }
  };

  return (
    <View style={styles.constainer}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{results}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onOperationClick('AC')}
              style={styles.firstRow}>
              <Text style={styles.operationButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue('%')}
              style={styles.firstRow}>
              <Text style={styles.operationButton}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue('/')}
              style={styles.firstRow}>
              <Text style={styles.operationButton}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue('*')}
              style={styles.firstRow}>
              <Text style={styles.operationButton}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => enterValue(7)}
              style={styles.secondRow}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue(8)}
              style={styles.secondRow}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue(9)}
              style={styles.secondRow}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue('-')}
              style={styles.secondRow}>
              <Text style={styles.operationButton}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => enterValue(4)}
              style={styles.thirdRow}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue(5)}
              style={styles.thirdRow}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue(6)}
              style={styles.thirdRow}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue('+')}
              style={styles.thirdRow}>
              <Text style={styles.operationButton}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => enterValue(1)}
              style={styles.fourthRow}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue(2)}
              style={styles.fourthRow}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue(3)}
              style={styles.fourthRow}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue('=')}
              style={styles.fourthRow}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => enterValue(0)}
              style={styles.fifthRow}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => enterValue('.')}
              style={styles.zeroButton}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calculator;
