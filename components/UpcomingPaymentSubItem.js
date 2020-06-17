import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import {Card, Text,View} from 'native-base';

export default class UpcomingPaymentSubItem extends Component{
    render() {
        return (
            <View>
                <Card style={{ borderRadius: this.props.cardRadius }}>
                    <View style={cardStyles.container}>

                        <View style={cardStyles.cardView}>
                            <Text style={cardStyles.cardTextDescription}>2020-02-06</Text>
                            <Text style={cardStyles.cardTextDescription}>One Week</Text>
                        </View>
                        <View style={cardStyles.cardView}>
                            <Text style={cardStyles.cardTextDescription}>Kes.1,080.00</Text>
                        </View>
                        <View style={cardStyles.cardView}>
                            <Text button onPress={this.props.onPress} style={cardStyles.buttonPay}>PAY</Text>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }

}
const cardStyles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent: 'space-between'
    },
    cardView : {
        width:100,
        height:50,
        alignItems:'center',
    },
    buttonPay: {
        borderRadius: 4,
        elevation:1,
        width: 50,
        textAlign:'center',
        backgroundColor:'#ffc94f',
        color:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        fontFamily: 'serif',
        marginTop:10,
        marginLeft:10,
    },
    cardTextDescription: {
        fontFamily: 'serif',
        fontSize:15,
        padding:5,
    },
    cardViewNumber:{
        width: 30,
        justifyContent: 'space-between'
    }
})