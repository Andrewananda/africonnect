import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {View,Text,ImageBackground,StyleSheet,Alert} from 'react-native';
import HorizontalLineComponent from "../components/HorizontalLineComponent";
import appStyles from "../AppStyle";


function SingleProductScreen(props) {
    const product = props.product
    return (
        <View>
            <View>
                <ImageBackground source={{ uri: product.picture }} style={appStyles.singlePropertyImage} >
                    <View style={appStyles.imageText}>
                        <Text style={appStyles.imageTextTitle}><Text style={[appStyles.titleImageBackground,]}>New!</Text></Text>
                        <Text style={appStyles.imageTextDescription}><FontAwesome name="user" /> Ajira Connect</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={appStyles.propertyDetails}>
                <Text style={ appStyles.customTitle }>{product.name}</Text>
                <Text style={appStyles.singlePropertyDescription} >{product.description? product.description: "No Description For This Property" }</Text>
            </View>
            <View style={appStyles.propertyDetails}>
                <Text style={appStyles.singlePropertySubTitle}>price</Text>
                <Text style={appStyles.singlePropertyDescription} >Kes. {product.price}</Text>
            </View>
            <View style={[appStyles.button,{width: 130,}]}>
                <Text button onPress={() => Alert.alert('Buy Product', 'Coming Soon...')} style={styles.customButton}>Buy</Text>
            </View>
            <View style={{ marginTop:30 }}>
                <HorizontalLineComponent />
            </View>
            <View style={[appStyles.button,{marginTop:10}]}>
                <Text button onPress={() => props.navigation.goBack()} style={styles.customButton}>Back To Products</Text>
            </View>
            <View style={{ marginTop:10 }}>
                <HorizontalLineComponent />
            </View>
        </View>
    )
}

export default SingleProductScreen;
const styles = StyleSheet.create({
    customButton: {
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})
