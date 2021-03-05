/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

const App: () => React$Node = () => {
  return (

    <KeyboardAvoidingView behavior='height' enabled={false} style={{ flex: 1 }} >
      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: 34, fontWeight: '600', paddingTop: 80, marginLeft: 10, }}>Bem-vindo(a),</Text>
      </View >
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholder='CNPJ'
          keyboardType='number-pad'
          style={{
            // backgroundColor: 'rgba(220,220,220,.8)',
            marginHorizontal: 10,
            borderBottomWidth: 1,
            borderColor: 'red',
            // borderRadius: 8,
            minHeight: 50,
            flex: 1,
            fontSize: 18,
          }} />
      </View >
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            minHeight: 50,
            maxHeight: 50,
            marginHorizontal: 10,
            borderRadius: 8,
            flex: 1,
            justifyContent: 'center',
            // marginVertical: 10,

          }}
          onPress={() => Alert.alert('loggin in...')}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            minHeight: 50,
            maxHeight: 50,
            marginHorizontal: 10,
            borderRadius: 8,
            flex: 1,
            justifyContent: 'center',
            marginVertical: 10,

          }}
          onPress={() => Alert.alert('loggin in...')}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Sign up</Text>
        </TouchableOpacity>
      </View >
    </KeyboardAvoidingView>

  );
};


export default App;
