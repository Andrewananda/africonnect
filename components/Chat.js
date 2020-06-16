import React,{Component} from 'react';
import {View,Text,Card} from "native-base";
import {StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default class ChatComponent extends Component{
    render() {
        return(
            <View style={ styles.alignments }>
                <Card style={{ borderRadius:10 }}>
                    <View style={styles.alignments}>
                        <View style={ styles.paddingStyle }>
                            <Text style={ styles.chatTitle }>Your current loan rating is Good, you can proceed to borrow a loan.</Text>
                        </View>
                        <ProgressCircle radius={90} color={'green'} percent={40} style={styles.progressBar}  borderWidth={12}>
                            <Text>Good Rating</Text>
                            <Text style={styles.progressBarRating}>{'Ksh.100'}</Text>
                            <Text style={{ fontSize:10,fontFamily: 'serif', }}>You Qualify To Get Ksh:1000</Text>
                        </ProgressCircle>
                    </View>
                    <View style={{ marginTop: 10 }}></View>
                    <View style={styles.cardItems}>
                        <View style={styles.paddingStyle}>
                            <Text style={styles.cardTextDescription}>1300</Text>
                            <Text style={styles.cardTextDescription}>Instalments</Text>
                        </View>
                        <View style={ styles.separatorLine }>
                        </View>
                        <View style={styles.paddingStyle}>
                            <Text style={styles.cardTextDescription}>2020-04-01</Text>
                            <Text style={styles.cardTextDescription}>Next Repay Date</Text>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    cardItems: {
        justifyContent:'space-between',
        flexDirection:'row',
    },
    progressBar: {
        justifyContent:'center',
        alignContent:'center',
    },
    progressBarRating: {
        fontSize: 20,
        textDecorationLine:'underline',
        color:'green',
        fontFamily: 'serif',
    },
    paddingStyle: {
        padding:10
    },
    separatorLine: {
        height: 50,
        width: 3,
        backgroundColor: '#ece4e4',
    },
    alignments: {
        alignItems:'center'
    },
    chatTitle: {
        textAlign:'center',
        fontSize:15,
        fontFamily: 'serif',
    },
    cardTextDescription:{
        fontFamily: 'serif',
    }
});