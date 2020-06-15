import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NotificationsScreen from './NotificationsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const Stack = createStackNavigator();
const NotificationsStackScreen = ({navigation}) => (
    <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#522F89',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="Home" component={NotificationsScreen} options={{
            title:'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#522F89" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </Stack.Navigator>
    );

export default NotificationsStackScreen;