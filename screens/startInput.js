import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function startInput() {
  return (
    <View style={styles.container}>
      <Text>This is the Next Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
