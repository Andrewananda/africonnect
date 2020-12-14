import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-community/async-storage";


import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    const paperTheme = useTheme();
    const [user, setUser] = useState({});
    AsyncStorage.getItem('user').then((user) => {
        const convert = JSON.parse(user);
        setUser(convert)
    });
    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: user.picture
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{user.username}</Title>
                                <Text style={styles.caption}>{user.email}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection} title="Navigation">
                        <DrawerItem style={{backgroundColor:"#F6851F",color:"#fff",opacity:0.6}}
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Products"
                            onPress={() => {props.navigation.navigate('ProductCategoriesStack')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Purchases"
                            onPress={() => {props.navigation.navigate('HistoryStack')}}
                        />


                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sign Out"
                            onPress={() => {signOut()}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 10,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
