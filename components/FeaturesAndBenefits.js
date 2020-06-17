import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

export default class FeaturesAndBenefits extends Component{
    render() {
        return(
            <View style={styles.container}>
               <View style={styles.feature}>
                    <View style={[styles.singleFeature,{ backgroundColor: 'pink', borderRadius: 10,height: 60, alignItems:'center', justifyContent: 'center' }]}>
                        <MaterialIcons name="attach-money" size={40} />
                        <Text style={styles.featureDescription}>Instant Loan Approval</Text>
                    </View>
               </View>
                <View style={styles.feature} >
                    <View style={[styles.singleFeature,{ backgroundColor: 'skyblue', borderRadius: 10,height: 60, alignItems:'center', justifyContent: 'center' }]}>
                        <MaterialCommunityIcons name="chart-line" size={40} />
                        <Text style={styles.featureDescription}>UpTo 2% Lower EMI</Text>
                    </View>
                </View>
                <View style={styles.feature}>
                    <View style={[styles.singleFeature,{ backgroundColor: 'lavender', borderRadius: 10,height: 60, alignItems:'center', justifyContent: 'center' }]}>
                        <MaterialCommunityIcons name="file-document-box" size={40} />
                        <Text style={styles.featureDescription}>Hassie Free documents</Text>
                    </View>
                </View>
                <View style={styles.feature}>
                    <View style={[styles.singleFeature,{ backgroundColor: '#bfe8c8', borderRadius: 10,height: 60, alignItems:'center', justifyContent: 'center' }]}>
                        <MaterialIcons name="attach-money" size={40} />
                        <Text style={styles.featureDescription}>Online Loan Account</Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    feature: {
        flexBasis: "50%",
        padding: 10,
    },

    singleFeature: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    featureDescription: {
        alignSelf:'center',
        textAlign: 'center',
        width:90,
    },

});