import React from 'react';
import HistoryScreen from '../screens/HistoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const HomeStack = createStackNavigator();
const HistoryStack = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#17a2b8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="HistoryScreen" component={HistoryScreen} options={{
            title:'History',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#17a2b8" onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
        }} />
    </HomeStack.Navigator>
);

export default HistoryStack;
