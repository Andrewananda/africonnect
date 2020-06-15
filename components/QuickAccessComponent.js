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
                            <View style={{ flexBasis:'50%',padding:10 }}>
                                <MaterialIcons name="attach-money" size={40} color={'green'} style={{ width: 40, alignSelf:'center', height: 40 }}/>
                                <Text style={{ alignSelf:'center' }}>Apply Loan</Text>
                                <Text style={cardStyles.descriptionStyle}>Apply, get loan and increase your limits</Text>
                            </View>
                            <View style={{ flexBasis:'50%',padding:10 }}>
                                <MaterialIcons name="credit-card" size={40} color={'darkblue'} style={{ width: 40,alignSelf:'center', height: 40}}/>
                                <Text style={{ alignSelf:'center'}}>Transactions</Text>
                                <Text style={ cardStyles.descriptionStyle }>Review your transactions</Text>
                            </View>
                            <View style={{ flexBasis:'50%',padding:10 }}>
                                <MaterialIcons name="account-circle" size={40} color={'red'} style={{ width: 40,alignSelf:'center', height: 40 }}/>
                                <Text style={{ alignSelf:'center'}}>My Profile</Text>
                                <Text style={cardStyles.descriptionStyle}>View and update your Profile</Text>
                            </View>
                            <View style={{ flexBasis:'50%',padding:10 }}>
                                <MaterialIcons name="share" size={40} color={'orange'} style={{ width: 40, alignSelf:'center', height: 40 }}/>
                                <Text style={{ alignSelf:'center' }}>Invite Friend</Text>
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
        padding:2
    }
})