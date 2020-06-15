import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {Card,CardItem, Container, Content, Text, Header} from 'native-base';

export default class PageInstructionComponent extends Component{
    render() {
        return (
            <View>
                <Card style={{ borderRadius: this.props.cardRadius }}>
                    <View style={cardStyles.container}>
                        <View style={{ width: '100%', alignItems:'center'}}>
                            <Text style={{ fontWeight: 'bold',fontSize: 24 }}>Your Active Loans </Text>
                        </View>
                        <View style={{ width: '100%',alignItems:'center' }}>
                            <Text style={{ fontWeight: 'bold',fontSize: 20, color:'#b1b1b1',padding:5 }}>1,080.00</Text>
                        </View>
                        <View style={{ width:'100%'}}>
                            <Text style={{textAlign:'center',padding:5, fontSize: 15}}> You have the following active loans. Repay on time and increase your loan limit.</Text>
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
        fontSize:20,
        alignContent: 'center',
    },
    containerText: {

    },
    cardTextTitle: {
        width: 50,
    }
})