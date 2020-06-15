import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
