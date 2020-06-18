import React,{Component} from "react";
import {View,Text,StyleSheet,Button} from "react-native";
import {Card,Input} from 'native-base';

export default class RepayLoanComponent extends Component{
    render() {
        return(
            <View style={styles.container}>
               <Card style={styles.cardStyle}>
                   <Text style={styles.textLabel}>Amount To Pay</Text>
                   <Input style={styles.inputStyles} keyboardType="numeric" placeholder="Amount" />
                   <View style={{ padding: 10, width: 300,}}>
                       <Button
                           style={styles.buttonPay}
                           title="make payment"
                           color={"#ffc94f"}
                           onPress={this.props.onPress}
                       />
                   </View>
               </Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    cardStyle: {
        borderRadius:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    inputStyles: {
        backgroundColor: '#dfdfdf',
        width: 200,
        textAlign: 'center',
        borderRadius: 10,
        fontFamily: 'serif',
    },
    textLabel: {
        padding: 10,
        fontSize:20,
        fontFamily: 'serif',
    },
    buttonPay: {
        borderRadius: 20,
    }

});