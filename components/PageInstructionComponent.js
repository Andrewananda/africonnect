import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {Card, Text} from 'native-base';

export default class PageInstructionComponent extends Component{
    render() {
        return (
            <View>
                <Card style={{ borderRadius: this.props.cardRadius }}>
                    <View style={cardStyles.container}>
                        <View style={cardStyles.cardAlignment}>
                            <Text style={cardStyles.cardTitle}>Your Active Loans </Text>
                        </View>
                        <View style={ cardStyles.cardAlignment }>
                            <Text style={ cardStyles.cardAmountDescription }>1,080.00</Text>
                        </View>
                        <View style={{ width:'100%'}}>
                            <Text style={cardStyles.cardTextDescription}> You have the following active loans. Repay on time and increase your loan limit.</Text>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }

}
const cardStyles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent: 'center',
        alignContent:'center',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize:20,
        padding:5,
        fontFamily: 'serif',
    },
    cardTextDescription: {
        textAlign:'center',
        fontSize:12,
        padding:5,
        fontFamily: 'serif',
    },
    cardTextTitle: {
        width: 50,
    },
    cardAlignment:{
        width: '100%',
        alignItems:'center',
    },
    cardAmountDescription:{
        fontWeight: 'bold',
        fontSize:15,
        color:'#b1b1b1',
        padding:5,
        fontFamily: 'serif',
    }
})