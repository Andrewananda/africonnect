import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import QuickAccessComponent from "../components/QuickAccessComponent";
import UpcomingPaymentSubItem from "../components/UpcomingPaymentSubItem";
import PageInstructionComponent from "../components/PageInstructionComponent";
import ChatComponent from "../components/Chat";
import HeaderCard from "../components/HeaderCard";
import TransactionStatement from "../components/TransactionStatement";


const LoanHistoryScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Loan History' height={150}/>
                <View style={styles.bodyStyle}>
                    <PageInstructionComponent amount="View your transactions history." title="Transactions" cardRadius={10} />
                    <TransactionStatement cardRadius={10}/>
                    <TransactionStatement cardRadius={10}/>
                    <TransactionStatement cardRadius={10}/>
                    <TransactionStatement cardRadius={10}/>
                    <TransactionStatement cardRadius={10}/>
                    <TransactionStatement cardRadius={10}/>
                    <TransactionStatement cardRadius={10}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default LoanHistoryScreen;

const styles = StyleSheet.create({
    bodyStyle: {
        position:'relative',
        margin:15,
        top:-70,
        marginBottom: -70,
    },
});

