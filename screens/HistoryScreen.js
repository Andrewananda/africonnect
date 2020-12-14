import React,{useEffect,useState} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import ListItemComponent from "../components/ListItemComponent";
import {BASE_URL} from "../Util";
import AsyncStorage from "@react-native-community/async-storage";
import HorizontalLineComponent from "../components/HorizontalLineComponent";

function HistoryScreen() {
    const [user, setUser] = useState('');
    const [products,setProducts] = useState([])
    const [categories,setCategories] = useState([])
    const [branches,setBranches] = useState([])
    const [orders,setOrders] = useState([])
    const [loading,setLoading] = useState(true)

    AsyncStorage.getItem('userToken').then((userToken) => {
        setUser(userToken)
    });


    useEffect(() => {
        setLoading(true)
        fetch(BASE_URL,{}).then(response => {
            return response.json()
        })
            .then((responseJson) => {
                setProducts(responseJson.products)
                setCategories(responseJson.categories)
                setBranches(responseJson.company.branches)
                setOrders(responseJson.orders)
                setLoading(false)
            })
            .catch(function (error){
                alert(error)
                setLoading(false)
            })
    },[])

    if (loading) {
        return (
            <View style={{ justifyContent: 'center', alignSelf:'center' }}>
                <ActivityIndicator />
            </View>
        )
    }

    return(
        <View>
            {
                orders ?
                    orders.map((item, index) => {
                        if (item.user_id == user) {
                           if (products) {
                               return (
                                   products.map((product, index) => {
                                       if (item.product_id == product.id) {
                                           return (
                                               branches.map((branch, index) => {
                                                   if (item.branch_id == branch.id) {
                                                       return (
                                                           <View>
                                                               <ListItemComponent city={branch.city} src={{uri : product.picture}} price={product.price} quantity={item.quantity} date={item.date} status={item.status} title={product.name} />
                                                               <HorizontalLineComponent />
                                                           </View>
                                                       )
                                                   }
                                               })

                                           )
                                       }
                                   })
                               )
                           }
                        }
                    })
                    :
                    <View>

                    </View>
            }
        </View>
    )
}

export default HistoryScreen;
