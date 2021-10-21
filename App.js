import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function App(){

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FontAwesome5.Button name={'galactic-republic'} size={20} backgroundColor='gray'>
        <Text style={{fontSize: 10}}>ICONS</Text>
      </FontAwesome5.Button>
    </View>
  )
}