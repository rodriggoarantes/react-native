import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';

export const Container: React.FC<{}> = (props) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        Platform.OS === 'android' ? styles.safeAndroid : {},
      ]}
    >
      {props.children}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  safeAndroid: {
    marginTop: 24,
  },
});
