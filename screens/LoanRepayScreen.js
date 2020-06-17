import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import HeaderCard from "../components/HeaderCard";
import PageInstructionComponent from "../components/PageInstructionComponent";
import RepayLoanComponent from "../components/RepayLoanComponent";

const RequestScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Repay Loan' height={180}/>
                <View style={styles.bodyStyle}>
                   <PageInstructionComponent cardRadius={10} />
                   <RepayLoanComponent />
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
        top:-90,
        marginBottom: -90,
    },
});

