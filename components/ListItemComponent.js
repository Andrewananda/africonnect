import React from 'react';
import {StyleSheet, Image,TouchableOpacity} from 'react-native';
import {Card, Container, CardItem, Text,View} from 'native-base';
import HorizontalLineComponent from "./HorizontalLineComponent";

function ListItemComponent(props) {

    return(
        <View>
            <View style={[{borderRadius: props.cardRadius},{elevation: -1,}]}>
                <View style={{ flexDirection: 'row', padding:10, justifyContent:'space-between' }}>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Image
                            source={props.src}
                            style={cardStyles.imageStyle}
                        />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={cardStyles.amountDescription}>{props.title}</Text>
                        <Text style={[cardStyles.cardDetails,{justifyContent: 'center', textAlign: 'center'}]}>{props.city}</Text>
                        <Text style={[cardStyles.cardDetails,{justifyContent: 'center', textAlign: 'center'}]}>{props.date}</Text>
                    </View>
                    <View style={{ alignContent: 'flex-end' }}>
                        <Text style={cardStyles.cardDetails}>{"Quantity : "+props.quantity}</Text>
                        <Text style={cardStyles.cardDetails}>{"Status : "+props.status}</Text>
                        <Text style={cardStyles.cardDetails}>{"Price : Ksh: "+props.price}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default ListItemComponent;

const cardStyles = StyleSheet.create({

    cardDetail: {
        fontSize:10,
        color: '#989898'
    },
    imageStyle: {
        height: 50,
        width: 60
    },
    cardDetails: {
        marginLeft:30,
        fontSize:10,
        color: '#969696',
    },
    amountDescription: {
        marginLeft:30,
        fontSize: 13,
        width:180,
        fontWeight: 'bold',
    },
    cardId:{
        color: '#ffffff',
        margin:5,
        width:200
    }

})
