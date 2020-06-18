import React,{Component} from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';
import {Card} from "react-native-paper";

export default class ManualPaymentInstructions extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Card style={styles.paymentCard}>
                    <Text style={styles.instructionTitle}>MANUAL PAYMENT INSTRUCTIONS</Text>
                    <Text style={styles.instructionDescription}>1. Go to your MPESA Menu</Text>
                    <Text style={styles.instructionDescription}>2. Click LipaNaMpesa</Text>
                    <Text style={styles.instructionDescription}>3. Click on Paybill</Text>
                    <Text style={styles.instructionDescription}>4. Enter Business No : 760715</Text>
                    <Text style={styles.instructionDescription}>5. Enter Account No : 6</Text>
                    <Text style={styles.instructionDescription}>6. Enter Amount : 1080</Text>
                    <Text style={styles.instructionDescription}>7. Confirm Payment.</Text>
                    <Button color={'#ffc94f'} title="Confirm" />
                </Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container: {
       flexDirection: 'column',
       padding: 10,
   },
    paymentCard: {
       padding: 10,
        borderRadius:10,
    },
    instructionTitle: {
       fontWeight: 'bold',
       fontSize: 18,
       padding: 2,
        fontFamily: 'serif',
    },
    instructionDescription:{
        fontFamily: 'serif',
        margin: 8,
        fontSize: 15,
    }

});