import React,{Component} from "react";
import {View, StyleSheet} from "react-native";
import HeaderCard from "../components/HeaderCard";
import AlertBoxComponent from "../components/AlertBoxComponent";
import PageInstructionComponent from "../components/PageInstructionComponent";
import ManualPaymentInstructions from "../components/ManualPaymentInstructions";

const PaymentInstructionScreen = ({navigation}) =>{
    return (
        <View>
            <HeaderCard title='Loan Payment' height={200}/>
            <View style={styles.bodyStyle}>
                <PageInstructionComponent
                    cardRadius={10}
                    title="PAYMENT INSTRUCTIONS :"
                    amount="Complete payment with the instructions highlighted."
                />
                <AlertBoxComponent
                    title="Validate Failed! Use the instructions below to pay."
                />
                <ManualPaymentInstructions onPress={()=>navigation.navigate("ReceiptStack")}/>
            </View>
        </View>
    );
}
export default PaymentInstructionScreen;

const styles = StyleSheet.create({
    bodyStyle: {
        position:'relative',
        margin:15,
        top:-110,
        marginBottom: -110,
    },
});

