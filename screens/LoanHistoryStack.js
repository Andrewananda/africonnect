import React from 'react';
import LoanHistoryScreen from './LoanHistoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const Stack = createStackNavigator();
const LoanHistoryStack = ({navigation}) => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#522F89',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <Stack.Screen name="LoanHistory" component={LoanHistoryScreen} options={{
            title:'Loan History',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#522F89"
                             onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </Stack.Navigator>
);

export default LoanHistoryStack;