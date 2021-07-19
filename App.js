import React from 'react';
import {StyleSheet, View} from 'react-native';
import FilterResults from './src/screens/FilterResults';

const App = () => {
  return (
    <View style={styles.container}>
      <FilterResults />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
