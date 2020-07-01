
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, Linking, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'
const LoginScreen = ({ navigation }) => {
  console.log(navigation)
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../img/app.001.jpg')} />
        <Text></Text>
      </View>



      <View style={styles.formcontainer}>
      <LoginForm />

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  logocontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {

    width: 300,
    height: 300,

  },
formcontainer:{
flex:1
}
});
export default LoginScreen;