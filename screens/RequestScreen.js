import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import HeaderCard from "../components/HeaderCard";
import LoanRequestFormComponent from "../components/LoanRequestComponent";
import FeaturesAndBenefits from "../components/FeaturesAndBenefits";

const RequestScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Request Loan' height={200}/>
                <View style={styles.bodyStyle}>
                    <LoanRequestFormComponent />
                    <FeaturesAndBenefits />
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
        top:-110,
        marginBottom: -110,
    },
});

