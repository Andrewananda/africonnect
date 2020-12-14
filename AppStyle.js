import {StyleSheet} from "react-native";
import React from "react";

const appStyles = StyleSheet.create({

    container: {
        flex:1,
    },

    boldText: {
        fontWeight: 'bold',
        alignSelf:'center',
    },
    centerText: {
        textAlign:'center',
        fontSize:12,
        padding:5,
    },
    cardAlignment: {
        flexBasis:'50%',
        padding:10,
        justifyContent:'center',
    },
    iconStyling: {
        width: 40,
        alignSelf:'center',
        height: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize:20,
        alignSelf:'center',
        textTransform: 'uppercase'
    },
    description: {
        textAlign:'center',
        fontSize:13,
        padding:5,
    },
    highlightedText: {
        color: '#e85947',
        textTransform: 'uppercase'
    },
    tabItemStyle: {
        backgroundColor: '#e85947'
    },
    tabItemDescriptionStyle: {
        color: 'darkgray'
    },
    buttonPay: {
        borderRadius: 4,
        elevation:1,
        textAlign:'center',
        backgroundColor:'#e85947',
        color:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:10,
    },
    cardDetail: {
        marginLeft:30,
        fontSize:10,
        color: '#969696'
    },
    amountDescription: {
        marginLeft:30,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    cardId:{
        color: '#ffffff',
        margin:5,
    },
    cardView : {
        width:100,
        height:50,
        alignItems:'center',
    },
    typeStyle:{
        color:'#e85947',
        fontSize:10,
    },
    pickerStyle: {
        margin: 10,
        borderWidth:1,
        borderColor:'#CCC'
    },
    headerImageStyle: {
        height:50,
        width:100,
        justifyContent: 'center',
        alignSelf:'center',
        marginRight:50,
    },
    singlePropertyImage:{
        height:250,
        width:'100%',
        alignSelf:'center'
    },
    propertyDetails: {
        flexDirection: 'column',
        margin:12,
        padding:5

    },
    button: {
        borderRadius: 4,
        elevation:1,
        textAlign:'center',
        backgroundColor:'#20c997',
        color:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        height: 40,
        borderWidth: 2,
        borderColor: '#5D9CEC',

    },
    titleImageBackground:{
        backgroundColor:'#20c997',
        textAlign:'center',
        textTransform:'uppercase',
        justifyContent:'center',
    },
    imageText:{
        flexDirection:'column',
        justifyContent:'space-around',
        flex:1
    },
    imageTextDescription:{
        flex:1,
        color:'#CCC',
        margin:10
    },
    imageTextTitle:{
        flex:5,
        margin:15,
        color:'#fff'
    },
    singlePropertySubTitle:{
        padding:5,
        fontWeight: 'bold',
        fontSize:15
    },
    singlePropertyDescription : {
        color: '#666666'
    },
    customTitle: {
        fontWeight: 'bold',
        fontSize:18
    },
    cardHeader: {
        flexDirection:'row',
        flex:1,
        marginTop:50,
        justifyContent:'space-between',
        margin:10
    },
    cardBody:{
        flexDirection:'column',
        justifyContent:'space-between',
        margin:8, marginTop:0
    },
    cardLogo: {
        alignItems:'center',
        justifyContent:'center',
        marginLeft:50,
        margin:20
    },
    amountTitle: {
        fontWeight:'bold'
    },
    amountStyle: {
        fontWeight:'bold'
    }
})

export default appStyles;
