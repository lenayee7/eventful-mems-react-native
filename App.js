import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...'])
console.disableYellowBox = true

export default function App() {
  return (
    <Main />
  );
}
