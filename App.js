/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Counter from './src/components/Counter';
import IncreaseCounter from './src/components/IncreaseCounter';
import DecreaseCounter from './src/components/DecreaseCounter';
import IncreaseByTwoCounter from './src/components/IncreaseByTwoCounter';
 

const App=()=> {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.container}>
        <Counter />
        <IncreaseCounter />
        <DecreaseCounter />
        <IncreaseByTwoCounter />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container:{
    alignItems:'center',
    marginTop:200,
  }
});

export default App;
