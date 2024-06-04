import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AddPost from '../screens/AddPost';


const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      // tabBarActiveTintColor:'#000'
    }}>
        <Tab.Screen name='home' component={HomeScreen} options={{
          tabBarLabel: ({color}) => (
            <Text style={{color:color, fontSize: 12, marginBottom:3}}>Home</Text>
          ),
          tabBarIcon: ({color,size})=> (
            <FontAwesome name="home" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='explore' component={ExploreScreen} options={{
          tabBarLabel: ({color}) => (
            <Text style={{color:color, fontSize: 12, marginBottom:3}}>Explore</Text>
          ),
          tabBarIcon: ({color,size})=> (
            <FontAwesome name="globe" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='addpost' component={AddPost} options={{
          tabBarLabel: ({color}) => (
            <Text style={{color:color, fontSize: 12, marginBottom:3}}>AddPost</Text>
          ),
          tabBarIcon: ({color,size})=> (
            <Ionicons name="camera" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='chat' component={CommunityScreen} options={{
          tabBarLabel: ({color}) => (
            <Text style={{color:color, fontSize: 12, marginBottom:3}}>Community</Text>
          ),
          tabBarIcon: ({color,size})=> (
            <Ionicons name="chatbox-ellipses" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='profile' component={ProfileScreen} options={{
          tabBarLabel: ({color}) => (
            <Text style={{color:color, fontSize: 12, marginBottom:3}}>Profile</Text>
          ),
          tabBarIcon: ({color,size})=> (
            <Ionicons name="person-circle" size={size} color={color} />
          )
        }}/>
    </Tab.Navigator>
  )
}