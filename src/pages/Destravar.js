import React from 'react'

import { StyleSheet, View, Text, Image } from 'react-native'

import QrCode from '../assets/icon-qrcode-display.png'

export default function Destravar(){
    return(
        <View style={styles.container}>
            <Text style={styles.textInfo}>Ligue o bluetooth, aponte o quadrado
                para o QR-code e <Text style={styles.textBold}>DESTRAVE</Text> seu locker
            </Text>
            <Image source={QrCode} style={styles.qrCode}/>
            <Text style={styles.text}>Em instantes o locker se abrirá .
                  Lembre-se de ter seu smartphone junto a você, 
                  sem ele não será possível trancar  o locker.
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-evenly',
        
    },
    textInfo:{
        width:290,
        fontSize:18,
        textAlign:'center',
        fontFamily:'Roboto_400Regular',
        },
    textBold:{
        fontFamily:'Roboto_700Bold',
    },
    qrCode:{
        width:200,
        height:200,
    },
    text:{
        width:290,
        fontFamily:'Roboto_300Light',
        fontSize:18,
        textAlign:'center', 
    },
   
});