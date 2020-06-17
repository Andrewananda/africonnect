import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import UpcomingPaymentSubItem from "../components/UpcomingPaymentSubItem";
import PageInstructionComponent from "../components/PageInstructionComponent";
import HeaderCard from "../components/HeaderCard";
import LoanRequestFormComponent from "../components/LoanRequestComponent";


const RequestScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Request Loan' height={150}/>
                <View style={styles.bodyStyle}>
                    <LoanRequestFormComponent />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default RequestScreen;

const styles = StyleSheet.create({
    bodyStyle: {
        position:'relative',
        margin:15,
        top:-70,
        marginBottom: -70,
    },
});

