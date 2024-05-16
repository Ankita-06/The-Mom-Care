/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TextInput } from 'react-native'; // Import Text and TextInput from react-native
import Navigation from './src/Navigation';

// Override default props for Text and TextInput
if (Text.defaultProps) {
  Text.defaultProps.allowFontScaling = false;
} else {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps) {
  TextInput.defaultProps.allowFontScaling = false;
} else {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

const App = () => {
  return (
    <Navigation />
  );
}

export default App;