import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
           
          <ImageBackground url:'https://reactnative.dev/img/tiny_logo.png'
                            style={{
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
          }}>
          
          
         <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
      
          <StatusBar backgroundColor='#522F89' barStyle="light-content"/>
        <View style={styles.header}>

        {/**<Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={{width:200}}
            resizeMode="contain"
        />**/}

           
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                url:'https://reactnative.dev/img/tiny_logo.png'
            style={{width:200}}
            resizeMode="contain"
            />
             
            <Text style={[styles.title, {
                color: "#F6851F"
            }]}>Access credit when you need it!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}><LinearGradient
                    colors={['#522F89', '#633a80e0']}
                    style={styles.signIn}
                ><Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    /></LinearGradient></TouchableOpacity>
            </View>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#522F89'
  },
  header: {
      flex: 1.2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#522F89',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: '#fff',
      fontWeight: 'bold'
  }
});