import React from 'react';
import RepayScreen from './RepayScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const Stack = createStackNavigator();
const RepayStackScreen = ({navigation}) => (
    <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#522F89',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="RepayScreen" component={RepayScreen} options={{
            title:'Repay',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#522F89" 
                onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </Stack.Navigator>
    );

export default RepayStackScreen;