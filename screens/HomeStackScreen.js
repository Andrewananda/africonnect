import React from 'react';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#17a2b8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={() => <HomeScreen navigation={navigation} />} options={{
            title:'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#17a2b8" onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            }} />
    </HomeStack.Navigator>
    );

export default HomeStackScreen;
