import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import QuickAccessComponent from "../components/QuickAccessComponent";
import UpcomingPaymentSubItem from "../components/UpcomingPaymentSubItem";
import PageInstructionComponent from "../components/PageInstructionComponent";
import ChatComponent from "../components/Chat";
import HeaderCard from "../components/HeaderCard";
import LoanRepayStack from "../stack/LoanRepayStack";
import {Text} from "native-base";


const HomeScreen = ({navigation}) =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Welcome Andrew!' height={220}/>
                <View style={styles.bodyStyle}>
                    <ChatComponent/>
                    <PageInstructionComponent
                        title="Your Active Loans "
                        amount="1,080.00"
                        description="You have the following active loans. Repay on time and increase your loan limit."
                        cardRadius={10}
                    />
                    <UpcomingPaymentSubItem cardRadius={10} onPress={()=>navigation.navigate("LoanRepayStack")}/>
                    <QuickAccessComponent cardRadius={10}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    bodyStyle: {
        position:'relative',
        margin:15,
        top:-120,
        marginBottom: -120,
    },
});

