import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {Card} from 'native-base';

function ProductComponent(props) {
    return(
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Card style={{ borderRadius: 10 }}>
                    <Image source={props.src} style={{ height:120,width:undefined, borderRadius:10 }} />
                    <Text style={{ fontWeight:'bold', marginLeft:8, marginTop: 15 }}>{props.title}</Text>
                    <Text style={{ marginLeft:8,marginTop: 0  }} numberOfLines={1}>{props.description}</Text>
                    <Text style={{ fontWeight:'bold',marginBottom: 6, marginLeft: 10 }}>KSh {props.price}</Text>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

export default ProductComponent
