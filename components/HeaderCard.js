import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HeaderCard extends Component{
    render() {
        return (
            <View style={[styles.headerTitle, {height: this.props.height}]}>
                <Text style={styles.textHeader}>{this.props.title}</Text>
                <Text style={styles.description}>Your Personal loan is just one step away</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    headerTitle: {
        backgroundColor: '#522F89',
        height:'20%',
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,

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


