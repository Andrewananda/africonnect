import React, {useState,useEffect} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,ActivityIndicator} from "react-native";
import HeaderCard from "../components/HeaderCard";
import AsyncStorage from "@react-native-community/async-storage";
import ProductComponent from "../components/ProductComponent";
import {BASE_URL} from "../Util";

function HomeScreen(props){

    const [user, setUser] = useState('');
    const [products,setProducts] = useState([])
    const [categories,setCategories] = useState([])
    const [branches,setBranches] = useState([])
    const [loading,setLoading] = useState(true)
    AsyncStorage.getItem('username').then((username) => {
        setUser(username)
    });

    useEffect(() => {
        setLoading(true)
        fetch(BASE_URL,{}).then(response => {
            return response.json()
        })
            .then((responseJson) => {
                //Set all data to the right state
                setProducts(responseJson.products)
                setCategories(responseJson.categories)
                setBranches(responseJson.branches)
                //stop loading animator
                setLoading(false)
            })
            .catch(function (error){
                alert(error)
                setLoading(false)
            })
    },[])

    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderCard title={'Welcome back ' + user + '!'} height={100}/>
                <View >
                    {
                        loading ?
                            <ActivityIndicator />
                            :
                            <View>
                                {
                                    products ?
                                        products.map((item,index)=>{
                                            if (item.new) {
                                                return (
                                                    <ProductComponent onPress={() => props.navigation.navigate('SingleProductStack',{product: item})} price={item.price} description={item.description} title={item.name} src={{uri: item.picture }} />
                                                )
                                            }
                                        })
                                        :
                                        <View></View>
                                }
                            </View>

                    }
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

