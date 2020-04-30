import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button, Linking, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';

import BB from '../components/BB';
import CC from '../components/CC';
import DD from '../components/DD';
import EE from '../components/EE';
import LL from '../components/LL';
import Albumlist from '../components/CC';
const Stack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => {
  return (


    <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          title: "GGGG",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 65
          },
        }}
      />

      <Stack.Screen name="BB" component={BB}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          title: "GGGG",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 65
          },
        }}
      />


      <Stack.Screen name="CC" component={CC}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          title: "GGGG",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 65
          },
        }}
      />

      <Stack.Screen name="DD" component={DD}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          title: "GGGG",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 65
          },
        }}
      />

      <Stack.Screen name="EE" component={EE}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          title: "GGGG",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 65
          },
        }}
      />


      <Stack.Screen name="LL" component={LL}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          title: "GGGG",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 65
          },
        }}
      />



    </Stack.Navigator>


  );
};


const styles = StyleSheet.create({
  headdd: {
    marginTop: 5,
    width: 36,
    height: 36,
    left: 4
  },
});

export default HomeStackScreen;



/*用來設定第一頁上的HEADER */