import React,{Component} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,} from "react-native";
import QuickAccessComponent from "../components/QuickAccessComponent";
import UpcomingPaymentSubItem from "../components/UpcomingPaymentSubItem";
import PageInstructionComponent from "../components/PageInstructionComponent";
import ChatComponent from "../components/Chat";
import HeaderCard from "../components/HeaderCard";


const HomeScreen = () =>{
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title='Welcome Andrew'/>
                <View style={styles.bodyStyle}>
                    <ChatComponent/>
                    <PageInstructionComponent cardRadius={10} />
                    <UpcomingPaymentSubItem cardRadius={10}/>
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
        top:-100,
    },
});

