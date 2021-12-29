/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProgressBarWithSteps from './components/ProgressBarWithSteps';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View // spacer
        style={{
          height: 50,
        }}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#f00'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#0f0'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#00f'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#f00'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#0f0'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#00f'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#f00'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#0f0'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#00f'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
      <ProgressBarWithSteps
        height={32}
        checkedColor={'#f00'}
        uncheckedColor={'#ccc'}
        progress={0.5}
        steps={Array.from({length: 5}, _ => {
          const val = Math.random();
          return {
            label: (val * 100).toFixed(0),
            position: val,
          };
        })}
      />
    </SafeAreaView>
  );
};

export default App;
