import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

export default function App() {

  return (
  <>  
      <View style={styles.container}>
      <Text style={{fontSize: 30}}>Hello word!</Text>  
      </View>
    </>    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
