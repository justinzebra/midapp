
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import GEM from '../json/album.json';
import first from '../components/first'
import { NavigationContainer } from '@react-navigation/native';






const Albumlist = ({ navigation }) => {
    console.log(navigation)
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="user name"
                style={styles.input}>

            </TextInput>
            <TextInput
                placeholder="password"
                secureTextEntry
                style={styles.input}>

            </TextInput>


            <TouchableOpacity onPress={() => navigation.navigate('My Book')} style={styles.bottomcontainer}>
                <Text style={styles.bottomtext}>login</Text>
            </TouchableOpacity>
        </View>



    );
};

const styles = StyleSheet.create({
    container: {
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
export default Albumlist;