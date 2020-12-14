import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { DrawerContent } from './screens/DrawerContent';
import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';
import HomeStackScreen from "./screens/HomeStackScreen";
import ProductCategoriesStack from "./stack/ProductCategoriesStack";
import HistoryStack from "./stack/HistoryStack";
import SingleProductStack from "./stack/SingleProductStack";

const Drawer = createDrawerNavigator();

const App = () => {

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch( action.type ) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
        signIn: async(foundUser) => {
            const userToken = String(foundUser.id);
            const userName = foundUser.username;

            try {
                await AsyncStorage.setItem('userToken', userToken);
                await AsyncStorage.setItem('username', userName);
                await AsyncStorage.setItem('user', JSON.stringify(foundUser));
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async() => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
    }), []);

    useEffect(() => {
        setTimeout(async() => {
            // setIsLoading(false);
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch(e) {
                console.log(e);
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    if( loginState.isLoading ) {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
    return (
        //Navigation Stack for the whole
        <PaperProvider>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    { loginState.userToken !== null ? (
                            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                                <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} />
                                <Drawer.Screen name="ProductCategoriesStack" component={ProductCategoriesStack} />
                                <Drawer.Screen name="HistoryStack" component={HistoryStack} />
                                <Drawer.Screen name="SingleProductStack" component={SingleProductStack} />
                            </Drawer.Navigator>
                        )
                        :
                        <RootStackScreen/>
                    }
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    );
}

export default App;
