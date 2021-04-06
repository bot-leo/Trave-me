import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import Estilo from './Estilos'

const styles = StyleSheet.create({
   
});

export default function Destravar(){
    return(
        <View style={Estilo.container}>
            <Text>Ligue o bluetooth, aponte o quadrado
                para o QR-code e DESTRAVE seu locker
            </Text>

        </View>
    );
}