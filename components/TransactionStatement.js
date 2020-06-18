import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Container, Content, Text,View} from 'native-base';

export default class TransactionStatement extends Component{
    render() {
        return (
            <View>
                <Card style={{ borderRadius: this.props.cardRadius}}>
                    <View style={cardStyles.container}>
                        <View style={{ flexDirection: 'row', padding:10 }}>
                            <View style={{ backgroundColor: '#000',alignSelf: 'flex-start' }}>
                                <Text style={cardStyles.cardId}>005</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={cardStyles.cardDetail}>2020-02-06</Text>
                                <Text style={cardStyles.amountDescription}>Kes.1,080.00</Text>
                                <Text style={cardStyles.cardDetail}>Debit</Text>
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }

}
const cardStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    cardDetail: {
        fontFamily: 'serif',
        marginLeft:30,
        fontSize:10,
    },
    amountDescription: {
        marginLeft:30,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    cardId:{
        color: '#ffffff',
        margin:5,
        fontFamily: 'serif',
    }

})