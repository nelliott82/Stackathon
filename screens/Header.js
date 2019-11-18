import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TestComponent() {
  return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>how are you?</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#48d1cc',
    height: 70,
    justifyContent: 'flex-end',
    borderBottomColor: '#00ced1',
    borderBottomWidth: 1,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: 'grey',
    shadowRadius: 2,
    shadowOpacity: 0.4,
    marginBottom: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
