import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Botao from '../components/button'
import Link from '../components/Link'

import { FontAwesome } from '@expo/vector-icons'
import Google from '../assets/icons/icon-google.png'
import Face from '../assets/icons/icon-face.png'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    inputs:{
        fontFamily:'Roboto_300Light',
        fontSize:18,
        width: 304,
        height: 48, 
        borderRadius: 5,
        marginBottom: 16,
        backgroundColor: '#fff',
        padding:10,
    },   
    user:{
        marginBottom:22,
        color: '#dadadb',
        
    },
    cadastrado:{
        fontFamily:'Roboto_300Light',
        fontSize:18,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        color:'#4478B6',
        marginTop:23,
        
    },
    boxsociais:{
        alignContent:'center',
        justifyContent:'center',
    },   
    sociais:{
        flexDirection:'row',
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        
    }, 
    icon:{
        marginTop:7,
        marginRight:24,
        marginBottom:25,
        width:48,
        height:48,
    },
    redesSociais:{
        fontFamily:'Roboto_300Light',
        fontSize:18,
        marginTop:17,
    
    },
});

export default function Cadastro(){
    const navigation = useNavigation();

    function handleNavigateToLoginDetails(){
        navigation.navigate('Login');
    }
    function handleNavigateToEntradaDetails(){
        navigation.navigate('Entrada');
    }

    return (
        <View style={styles.container}>
            <FontAwesome name="user-circle" size={125} style={ styles.user }/>
            <View style={styles.box}>
                <TextInput placeholder="Nome"
                        style={styles.inputs} 
                />
                <TextInput placeholder="E-mail"
                        style={styles.inputs}
                />
                <TextInput placeholder="Senha"
                        style={styles.inputs} 
                        secureTextEntry/>
                <TextInput placeholder="Confirmar senha"
                        style={styles.inputs}
                        secureTextEntry/>
            </View>
            <Botao tittle="Cadastrar" onPress={handleNavigateToEntradaDetails} color="#4478B6"/>
            
            <Link tittle="Já sou cadastrado"  onPress={handleNavigateToLoginDetails} size={18}/>
            <View style={styles.boxsociais}>
                <Text style={styles.redesSociais}>Acesse com as Redes Sociais</Text>
                <View style={styles.sociais}>
                    <Image source={Face} style={styles.icon}/>
                    <Image source={Google} style={styles.icon}/>
                </View>
            </View>

        </View>
    );
}