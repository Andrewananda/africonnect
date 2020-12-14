import React from 'react';
import ProductCategory from '../screens/ProductCategoriesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';
const HomeStack = createStackNavigator();
function ProductCategoriesStack({navigation}) {
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
            <HomeStack.Screen name="ProductCategory" component={() => <ProductCategory navigation={navigation} />} options={{
                title:'Products',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#17a2b8" onPress={() => navigation.openDrawer()}></Icon.Button>
                ),
            }} />
        </HomeStack.Navigator>
    )
}

export default ProductCategoriesStack;
