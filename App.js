import React,{Component} from 'react';
import {View,Text} from 'react-native';
import HomeStackScreen from "./HomeStackScreen";

export default class App extends Component{
    render() {
        return(
            <View>
                <HomeStackScreen />
            </View>
        )
    }
}