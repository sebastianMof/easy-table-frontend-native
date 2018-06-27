import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
          source={require('./salty.gif')}
        />
        <Text>Easy Table!</Text>
        <Text>JOJO this APP</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
