import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button, Linking, TouchableOpacity } from 'react-native';
// import GEM from '../json/albums.json'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import Albumlist from '../components/Albumlist';
import HomeStackScreen from '../screens/HomeStackScreen'
import chat from '../components/chat'
const Stack = createStackNavigator();
function StackScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Book" component={Albumlist}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          headerRight: () => <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
            <Image style={styles.headd} source={require('../img/btn_search.png')} />
          </TouchableOpacity>,
          title: "My Book",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 50
          },


        }}
      />
    </Stack.Navigator>
  )
}
function StackScreen2({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="chat" component={chat}
        options={{
          headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.headdd} source={require('../img/bt0.jpg')} />
          </TouchableOpacity>,
          headerRight: () => <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
            <Image style={styles.headd} source={require('../img/btn_search.png')} />
          </TouchableOpacity>,
          title: "My Book",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#ffffff', opacity: 1, elevation: 0,
            shadowOpacity: 0, height: 50
          },


        }}
      />
    </Stack.Navigator>
  )
}




const Tab = createBottomTabNavigator();
const MybookStackScreen = ({ navigation }) => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require("../img/bt1.png")
              : require("../img/bt1-0.png");
          }
          else if (route.name === 'My Book') {
            iconName = focused
              ? require("../img/bt2.png")
              : require("../img/bt2-0.png");
          }
          else if (route.name === 'Favorites') {
            iconName = focused
              ? require("../img/bt3.png")
              : require("../img/bt3-0.png");
          }
          return <Image source={iconName} style={{ width: 30, height: 30,position:'absolute',bottom:0}} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: 'transparent',
        inactiveTintColor: '#818181',
        activeTintColor: '#00b49f',
       



        style: {   
          backgroundColor:'transparent',
        borderTopWidth: 0,
        position: 'absolute',
        left: 50,
        right: 50,
        bottom: 0,
        height:70,
        borderRadius: 20,
     
      },


        labelStyle: {
          bottom: 5

        }
      }}


    >
      <Tab.Screen name="Home" component={HomeStackScreen}options={{title:""}}/>
      <Tab.Screen name="My Book" component={StackScreen}options={{title:""}} />
      <Tab.Screen name="Favorites" component={StackScreen2}options={{title:""}} />
    </Tab.Navigator>




  );
};


const styles = StyleSheet.create({
  headdd: {
    marginTop: 20,
    width: 36,
    height: 36,
    left: 4
  },
  headd: {
    width: 50,
    height: 50,
    right: 4
  }
});

export default MybookStackScreen;