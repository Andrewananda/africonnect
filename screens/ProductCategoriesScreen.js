import React, {useState,useEffect} from "react";
import {View, StyleSheet,ScrollView,SafeAreaView,ActivityIndicator} from "react-native";
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import ProductComponent from "../components/ProductComponent";
import {BASE_URL} from "../Util";

function ProductCategoriesScreen(props){

    const [products,setProducts] = useState([])
    const [categories,setCategories] = useState([])
    const [branches,setBranches] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(BASE_URL,{}).then(response => {
            return response.json()
        })
            .then((responseJson) => {
                setProducts(responseJson.products)
                setCategories(responseJson.categories)
                setBranches(responseJson.branches)
                setLoading(false)
            })
            .catch(function (error){
                alert(error)
                setLoading(false)
            })
    },[])

    if (loading) {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }
    return (
        <Container>
            <Tabs >
                {
                    categories ?
                        categories.map((item,index)=>(
                            <Tab activeTabStyle={{backgroundColor:'#ffc107' }} tabStyle={{backgroundColor: '#17a2b8'}}  heading={item.name}>
                                {
                                    products ?
                                        products.map((product, index) => {
                                            if (product.category_id === item.id) {
                                                return (
                                                    <View>
                                                        <ProductComponent onPress={() => props.navigation.navigate('SingleProductStack',{product: product})} price={product.price} description={product.description} title={product.name} src={{uri: product.picture }} />

                                                    </View>
                                                )
                                            }
                                        })
                                        :
                                        <ActivityIndicator />
                                }
                            </Tab>
                        ))
                        :
                        <View>

                        </View>
                }

            </Tabs>
        </Container>
    );
}
export default ProductCategoriesScreen;

const styles = StyleSheet.create({
    bodyStyle: {
        position:'relative',
        margin:15,
        top:-120,
        marginBottom: -120,
    },
});

