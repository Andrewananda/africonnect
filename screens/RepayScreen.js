import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import QuickAccessComponent from "../components/QuickAccessComponent";
import UpcomingPaymentSubItem from "../components/UpcomingPaymentSubItem";
import PageInstructionComponent from "../components/PageInstructionComponent";
import ChatComponent from "../components/Chat";
import HeaderCard from "../components/HeaderCard";


const RepayScreen = ({navigation}) =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Repay Loan' height={150}/>
                <View style={styles.bodyStyle}>
                    <PageInstructionComponent title="Your Active Loans" description="You have the following active loans. Repay on time and increase your loan limit." amount="1079.00" cardRadius={10} />
                    <UpcomingPaymentSubItem onPress={()=>navigation.navigate("LoanRepayStack")} cardRadius={10}/>
                    <UpcomingPaymentSubItem onPress={()=>navigation.navigate("LoanRepayStack")} cardRadius={10}/>
                    <UpcomingPaymentSubItem onPress={()=>navigation.navigate("LoanRepayStack")} cardRadius={10}/>
                    <UpcomingPaymentSubItem onPress={()=>navigation.navigate("LoanRepayStack")} cardRadius={10}/>
                    <UpcomingPaymentSubItem onPress={()=>navigation.navigate("LoanRepayStack")} cardRadius={10}/>
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

