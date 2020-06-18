import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
import RequestScreen from '../screens/RequestScreen';
const Stack = createStackNavigator();
const RequestStack = ({navigation}) => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#522F89',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <Stack.Screen name="RequestScreen" component={RequestScreen} options={{
            title:'Request Loan',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#522F89"
                             onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </Stack.Navigator>
);

export default RequestStack;