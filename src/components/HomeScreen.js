import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, Linking, TouchableOpacity, KeyboardAvoidingView,TextInput } from 'react-native';
import LoginForm from '../screens/LoginForm'
import LoginScreen from '../screens/LoginScreen'
import {StoreContext}from'../stores/progressstore'




const DetailScreen = ({ navigation }) => {
  const {meState} = useContext(StoreContext);
const [me, setMe] = meState
  console.log(navigation)
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../img/app.001.jpg')} />
        <Text></Text>
      </View>



      <View style={styles.formcontainer}>



        <View style={styles.container01}>
        <TextInput placeholder="user name" style={styles.input} onChangeText={text => setMe(text)}/>
          <TextInput
            placeholder="password"
            secureTextEntry
            style={styles.input}>

          </TextInput>


          <TouchableOpacity onPress={() => navigation.navigate('first')} style={styles.bottomcontainer}>
            <Text style={styles.bottomtext}>login</Text>
          </TouchableOpacity>
        </View>




      </View>
    </KeyboardAvoidingView>

    /*<ScrollView >





      <View style={styles.RR}>

        <TouchableOpacity
          onPress={() => navigation.navigate('EE')}
          style={styles.button}
        >
          <Image source={{ uri: 'https://upload.cc/i1/2020/04/29/U7hgsb.jpg' }} style={{ width: 280, height: 160, borderRadius: 20 }} />

        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('LL')}
          style={styles.button}
        >
          <Image source={{ uri: 'https://upload.cc/i1/2020/04/29/TnQk8y.jpg' }} style={{ width: 280, height: 160, borderRadius: 20 }} />

        </TouchableOpacity>


        <TouchableOpacity
          onPress={() =>  navigation.navigate('DD')}
          style={styles.button}
        >
          <Image source={{ uri: 'https://upload.cc/i1/2020/04/29/irHh4u.jpg' }} style={{ width: 280, height: 160, borderRadius: 20 }} />

        </TouchableOpacity>
      </View>

    </ScrollView>*/

  );

};


const styles = StyleSheet.create({

  whitebox: {
    backgroundColor: "#ffffff",
    width: 200,
    height: 200
  },



  RR: {
    flex: 1,
    backgroundColor: "#ffffff",
    height: 575
  },


  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10
  },

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
  formcontainer: {
    flex: 1
  },



  container01: {
    padding: 20
},
input: {
    height: 40,
    width: 300,
    //top: 80,
    marginBottom: 20,
    backgroundColor: '#ededed',
    paddingHorizontal: 10,
},
bottomcontainer: {
    backgroundColor: '#ededed',
    paddingVertical: 15
},
bottomtext: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700'
}

});

export default DetailScreen;








