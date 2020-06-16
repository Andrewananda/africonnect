import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import QuickAccessComponent from "../components/QuickAccessComponent";
import UpcomingPaymentSubItem from "../components/UpcomingPaymentSubItem";
import PageInstructionComponent from "../components/PageInstructionComponent";
import ChatComponent from "../components/Chat";
import HeaderCard from "../components/HeaderCard";


const RepayScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Repay Loan' height={150}/>
                <View style={styles.bodyStyle}>
                    <PageInstructionComponent cardRadius={10} />
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default RepayScreen;

const styles = StyleSheet.create({
    bodyStyle: {
        position:'relative',
        margin:15,
        top:-70,
        marginBottom: -70,
    },
});

