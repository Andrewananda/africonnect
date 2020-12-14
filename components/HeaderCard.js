import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HeaderCard extends Component{
    render() {
        return (
            <View style={[styles.headerTitle, {height: this.props.height}]}>
                <Text style={styles.textHeader}>{this.props.title}</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    headerTitle: {
        backgroundColor: '#17a2b8',
        height:'20%',
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,

    },
    textHeader: {
        color: '#fff',
        fontSize:24,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop:30,
        fontFamily: 'serif',
    },
    description: {
        textAlign: 'center',
        color: '#fff',
        padding:10,
        fontFamily: 'serif',
    }

});


