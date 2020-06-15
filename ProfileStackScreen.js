import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ProfileScreen from './ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const Stack = createStackNavigator();
const ProfileStackScreen = ({navigation}) => (
    <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#522F89',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="Home" component={ProfileScreen} options={{
            title:'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#522F89" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </Stack.Navigator>
    );

export default ProfileStackScreen;