import React from 'react'

import { StyleSheet, View, Text, Image } from 'react-native'

import QrCode from '../assets/icon-qrcode-display.png'

import Estilo from './Estilos'


export default function Destravar(){
    return(
        <View style={styles.container}>
            <Text>Ligue o bluetooth, aponte o quadrado
                para o QR-code e DESTRAVE seu locker
            </Text>
            <Image source={QrCode}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
   
});