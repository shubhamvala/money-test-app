import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface {{$name}}Props {};

export const {{$name}}: React.FC<{{$name}}Props> = (props) => {
  return <View style={StyleSheet.flatten([styles.container])}></View>;
};

const styles = StyleSheet.create({
  container: {},
});
