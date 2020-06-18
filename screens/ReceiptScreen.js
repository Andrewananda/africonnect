import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderCard from "../components/HeaderCard";
import PageInstructionComponent from "../components/PageInstructionComponent";
import ReceiptComponent from "../components/ReceiptComponent";

const ReceiptScreen = ({navigation}) => {
    return(
      <View>
          <HeaderCard height={180} title="Successfully Completed Payment!"/>
          <View style={styles.bodyStyle}>
              <PageInstructionComponent cardRadius={10} title="Payment Complete" amount="Here is a receipt for the payment."/>
              <ReceiptComponent />
          </View>
      </View>
    );
}

export default ReceiptScreen;
const styles = StyleSheet.create({
    bodyStyle: {
        position:'relative',
        margin:15,
        top:-80,
        marginBottom: -80,
    },
});
