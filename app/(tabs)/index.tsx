
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Slider from '@react-native-community/slider'
import { useState } from 'react'

let charset = "abcdefghijklmnopqrstuvwxyz12345678910ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default function App (){
    const [size, setSize] = useState(10)

    function generationPassword(){

        let password = "a";
        for (let i = 0, n = charset.length; i < size; i++){

            password += charset.charAt(Math.floor(Math.random() * n)) 
            
        }
        console.log(password)
    }
    
    return(

        <View style = {styles.container}>
        <Image
        source={require("@/src/assets/logo.png")}
        style = {styles.logo}
        />

        <Text style = {styles.title}>{size} Caracteres</Text>

        <View style = {styles.area}>
            <Slider 
            style = {{height:50}}
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor='#ff0000'
            minimumTrackTintColor='#000'
            thumbTintColor='#392de9'
            value={size}
            onValueChange={ (value) => setSize(value.toFixed(0)) }
            />
        </View>

        <TouchableOpacity style = {styles.button} onPress={generationPassword}>
            <Text style = {styles.buttonText}> Gerar Senha</Text>
        </TouchableOpacity>

        
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "F3F3FF",
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    logo:{
        marginBottom: 60,

    },

    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "FFF",
        borderRadius: 8,
        padding: 8,


    },

    button:{
        backgroundColor: '#392de9',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
        marginBottom:18
            },


    buttonText:{
        color: '#FFF',
        fontSize: 20,

    },

    title:{
        fontSize:30,
        fontWeight: 'bold',
        
    }

})