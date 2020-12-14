import React from 'react';
import SingleProductScreen from '../screens/SingleProductScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const HomeStack = createStackNavigator();

function SingleProductStack ({route,navigation}) {
    const product = route.params.product
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#17a2b8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="ProductCategory" component={() => <SingleProductScreen navigation={navigation} product={product} />} options={{
                title: 'Product Details',
                headerLeft: () => (
                    <Icon.Button name="ios-arrow-back" size={25} backgroundColor="#17a2b8"
                                 onPress={() => navigation.goBack()}></Icon.Button>
                ),
            }}/>
        </HomeStack.Navigator>
    )
}

export default SingleProductStack;
