import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import Botao from '../components/button'
import Link from '../components/Link'

import { useNavigation } from '@react-navigation/core'

import Estilo from './Estilos'



import UserPerfil from '../assets/imgs/user.jpg'

const styles = StyleSheet.create({
    boxLinks:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    boxText1:{
        justifyContent:'center',
        margin:20,
    },
    Text1:{
        textAlign:'center',
        fontSize:12,
        fontFamily:'Roboto_300Light',
        margin:5,
    }, 
    UserPerfil:{
        width:150,
        height:150,
        borderRadius:90,
        marginBottom:20,
        marginTop:50,
    },
    boasVindas:{
        fontFamily:'Roboto_500Medium',
        fontSize: 20,
    },
    creditos:{
        margin:35   ,
        textAlign:'center',
        fontSize:18,
        fontFamily:'Roboto_300Light',
    },
    boxInfo:{
        alignItems:'center',
        justifyContent:'flex-start',
        marginHorizontal:50,
        
    },
    barra:{
        margin:30,
    },
    user:{
        
    },
    info:{
        fontFamily:'Roboto_300Light',
        fontSize:12,
    },
    politica:{
        fontSize:11,
    },

});

export default function Entrada(){
    const navigation = useNavigation();
    
    function handleNavigateToDestravarDetails(){
        navigation.navigate('RoutesTab');
    }
    function handleNavigateToTermosDetails(){
        navigation.navigate('Termos');
    }
    function handleNavigateToHomeDetails(){
        navigation.navigate('Home');
    }

    return (
        <View style={Estilo.container}>
            <View style={styles.user}>
                <Image source={UserPerfil} style={styles.UserPerfil}/>
            </View>
            
            <Text style={styles.boasVindas}>Olá Jane Doe</Text>
            <Text style={styles.creditos}>Você já pode adquirir créditos para
                usar no Trave ME através do mundo, usando moedaloca.
                Gostaria de adquirir agora?
            </Text>
            <Botao tittle="Destravar Locker" onPress={handleNavigateToDestravarDetails} color="#4478B6"/>

            <View style={styles.boxLinks}>
                <Link tittle="Adquirir Clicks" size={18}/>
                <Text style={styles.barra}>|</Text>
                <Link tittle="Ir para Home" size={18} onPress={handleNavigateToHomeDetails}/>
            </View>
            <View style={styles.boxText1}>
                <Text style={styles.Text1}>Entenda: O câmbio será calculado com base na cotação
                    do dia da transação na modalidade TURISMO, sujeito aos impostos
                    e acrescido da taxa de conveniencia.
                </Text>
            </View>
            <View style={styles.boxInfo}>
                <Text style={styles.info}>Para mais informações consulte nossos</Text>
                <Link tittle="Termos de serviços e Politica de Privacidade" size={10} onPress={handleNavigateToTermosDetails}/>
            </View>
            
        </View>
    );
}