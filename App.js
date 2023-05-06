// In App.js in a new project
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';

import { Feather, Ionicons, Entypo, AntDesign, Fontisto } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function App() {
  const Tab = createBottomTabNavigator();
  function BottomTabs(){
      return(
          <Tab.Navigator 
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
              backgroundColor:'#515151',
              borderTopRadius:10,
              borderTopColor:'#5A5A5A',
            },

          }}>
              <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false, tabBarIcon:({focused})=> focused ?
              (<Feather name="home" size={24} color="red" />):
              (<Feather name="home" size={24} color="white" />) }} />
              <Tab.Screen name="Calender" component={Profile} options={{headerShown:false, tabBarIcon:({focused})=> focused ?
              (<Ionicons name="calendar" size={24} color="red" />):
              (<Ionicons name="calendar" size={24} color="white" />)}} />
              <Tab.Screen name="anlytics" component={Profile} options={{headerShown:false,tabBarIcon:()=> 
                 (<View style={styles.plusButton}>
                  <AntDesign name="plus" size={40} color="white" />
                </View>)
            }} />
              <Tab.Screen name="plus" component={Profile} style={StyleSheet.plusButton} options={{headerShown:false,tabBarIcon:({focused})=> focused ?
              (<Entypo name="bar-graph" size={24} color="red" />):
              (<Entypo name="bar-graph" size={24} color="white" />)}} />
              <Tab.Screen name="Profile" component={Profile} options={{headerShown:false, tabBarIcon:({focused})=> focused ?
              (<Fontisto name="person" size={24} color="red" />):
              (<Fontisto name="person" size={24} color="white" />)}} />
          </Tab.Navigator>
      )
  }
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name='main' component={BottomTabs} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  plusButton:{
    position: 'absolute',
    left: '5%',
    top: -35,
    backgroundColor: 'red',
    padding:10,
    borderRadius: 40,
    width:80,
    fontSize:30,
    borderColor:'#515151',
    borderWidth:10,
  },
})