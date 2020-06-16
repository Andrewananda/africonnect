import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Card,Text,View} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default class QuickAccessComponent extends Component{
    render() {
        return (
                <View>
                    <Card style={{ borderRadius: this.props.cardRadius }}>
                        <View style={cardStyles.container}>
                            <View style={cardStyles.cardAlignment}>
                                <MaterialIcons name="attach-money" size={40} color={'green'} style={cardStyles.iconStyling}/>
                                <Text style={cardStyles.iconTitle}>Apply Loan</Text>
                                <Text style={cardStyles.descriptionStyle}>Apply, get loan and increase your limits</Text>
                            </View>
                            <View style={cardStyles.cardAlignment}>
                                <MaterialIcons name="credit-card" size={40} color={'darkblue'} style={cardStyles.iconStyling}/>
                                <Text style={cardStyles.iconTitle}>Transactions</Text>
                                <Text style={ cardStyles.descriptionStyle }>Review your transactions</Text>
                            </View>
                            <View style={cardStyles.cardAlignment}>
                                <MaterialIcons name="account-circle" size={40} color={'red'} style={cardStyles.iconStyling}/>
                                <Text style={cardStyles.iconTitle}>My Profile</Text>
                                <Text style={cardStyles.descriptionStyle}>View and update your Profile</Text>
                            </View>
                            <View style={cardStyles.cardAlignment}>
                                <MaterialIcons name="share" size={40} color={'orange'} style={cardStyles.iconStyling}/>
                                <Text style={cardStyles.iconTitle}>Invite Friend</Text>
                                <Text style={cardStyles.descriptionStyle}>Tell a friend to tell a friend</Text>
                            </View>
                        </View>
                    </Card>
                </View>
        );
    }

}
const cardStyles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    descriptionStyle: {
        textAlign:'center',
        fontSize:15,
        padding:2,
        fontFamily: 'serif',
    },
    cardAlignment: {
        flexBasis:'50%',
        padding:10
    },
    iconStyling: {
        width: 40,
        alignSelf:'center',
        height: 40
    },
    iconTitle:{
        alignSelf:'center',
        fontFamily: 'serif',
        fontWeight: 'bold'
    }
})