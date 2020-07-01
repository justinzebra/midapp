import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { StoreContext } from '../stores/progressstore'

const DetailScreen = ({ navigation }) => {
    const { meState } = useContext(StoreContext);
    const [me, setMe] = meState
    console.log(navigation)
    return (

        <ScrollView >





            <View style={styles.RR}>

                <View style={styles.textbox03}
                >
                    <Text style={styles.textword}>{me} 歡迎回來</Text>
                </View>



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
                    onPress={() => navigation.navigate('DD')}
                    style={styles.button}
                >
                    <Image source={{ uri: 'https://upload.cc/i1/2020/04/29/irHh4u.jpg' }} style={{ width: 280, height: 160, borderRadius: 20 }} />

                </TouchableOpacity>
            </View>

        </ScrollView>

    );

};


const styles = StyleSheet.create({


    textbox03: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
     
    },

    textword:{
fontWeight:"700"
    },

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



});

export default DetailScreen;








