import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Card} from "native-base";

export default class ReceiptComponent extends Component{
    render() {
        return(
          <View>
              <Card style={styles.receiptCard}>
                <View style={styles.cardTop}>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={styles.receiptDetails}>2020-06-18</Text>
                        <Text style={styles.receiptDetails}>0723546707</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.receiptDetails}>Ksh 1</Text>
                        <Text style={styles.receiptDetails}>Payment Complete</Text>
                    </View>
                </View>
                  <View
                      style={{
                          borderBottomColor: '#e8e7e7',
                          borderBottomWidth: 1,
                      }}
                  />
                  <View style={styles.userDetails}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.paymentTitle}>Payment By:</Text>
                        <Text style={styles.paymentDetails}>Andrew Ananda</Text>
                        <Text></Text>
                        <Text style={styles.paymentTitle}>For:</Text>
                        <Text style={styles.paymentDetails}>Andrew Ananda Loan</Text>
                        <Text></Text>
                        <Text style={styles.paymentTitle}>Payment Status:</Text>
                        <Text style={styles.paymentDetails}>Payment Complete</Text>
                    </View>
                      <View style={{ flexDirection: 'column' }}>
                          <Text style={styles.paymentTitle}>Amount:</Text>
                          <Text style={styles.paymentDetails}>1.00</Text>
                          <Text></Text>
                          <Text style={styles.paymentTitle}>Payment Receipt:</Text>
                          <Text style={styles.paymentDetails}>2073533619</Text>
                          <Text></Text>
                          <Text style={styles.paymentTitle}>Payment Type</Text>
                          <Text style={styles.paymentDetails}>MPESA</Text>
                      </View>
                  </View>
                  <View
                      style={{
                          borderBottomColor: '#e8e7e7',
                          borderBottomWidth: 1,
                      }}
                  />
                  <View style={{ padding:10,fontFamily: 'serif', }}>
                      <Button onPress={this.props.onPress} color={'#ffc94f'}  title="Close"/>
                  </View>

              </Card>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    receiptCard:{
        borderRadius: 10,
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    userDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
    },
    paymentDetails: {
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    paymentTitle: {
        color:'#b1b1b1',
        fontFamily: 'serif',
    },
    receiptDetails: {
        fontFamily: 'serif',
    }

});