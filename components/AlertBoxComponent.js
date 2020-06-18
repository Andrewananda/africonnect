import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text,View} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export default class AlertBoxComponent extends Component{
    render() {
        return (
            <View style={alertStyles.container}>
                <View style={{ flexBasis:'30%', padding:10, alignItems: 'center' }}>
                    <AntDesign name='infocirlce' style={{ fontSize: 90, color:'#ffffff' }}/>
                </View>
                <View style={{ flexBasis:'70%', marginTop:10}}>
                    <Text style={alertStyles.alertTitle}>{this.props.title}</Text>
                    <Text style={{ color:'#ffffff' }}>{this.props.description}</Text>
                </View>
            </View>
        );
    }

}
const alertStyles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flexWrap:'wrap',
        borderRadius: 10,
        backgroundColor:'#6c7fe3',
    },
    alertTitle: {
        color:'#ffffff',
        fontSize:18,
        fontWeight: 'bold',
    },
})