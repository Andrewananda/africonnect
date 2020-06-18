import React from 'react';
import ReceiptScreen from '../screens/ReceiptScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const Stack = createStackNavigator();
const ReceiptStack = ({navigation}) => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#522F89',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} options={{
            title:'Receipt',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#522F89"
                             onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </Stack.Navigator>
);

export default ReceiptStack;