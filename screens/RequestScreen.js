import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import UpcomingPaymentSubItem from "../components/UpcomingPaymentSubItem";
import PageInstructionComponent from "../components/PageInstructionComponent";
import HeaderCard from "../components/HeaderCard";


const RequestScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Request Loan' height={150}/>
                <View style={styles.bodyStyle}>
                    <PageInstructionComponent cardRadius={10} />
                    <UpcomingPaymentSubItem cardRadius={10}/>
                    <UpcomingPaymentSubItem cardRadius={10}/>
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

