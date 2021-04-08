import React from 'react'
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

//impotes dos icones das opções
import IconAccount from '../assets/icons/Icon-user.png'
import IconQrcode from '../assets/icons/icon-qrcode.png'
import IconMyAccount from '../assets/icons/icon-myaccount.png'
import IconLocker from '../assets/icons/icon-locker.png'
import IconNotifications from '../assets/icons/icon-notifications.png'
import IconMyCard from '../assets/icons/icon-my-card.png'
import IconPolitics from '../assets/icons/icon-politics.png'
import IconConfig from '../assets/icons/icon-config.png'
import IconHelp from '../assets/icons/icon-help.png'
import IconExit from '../assets/icons/icon-exit.png'


export default function Mais(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.optionsContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconAccount} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Perfil</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconQrcode} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Abrir/ Fechar Lockers</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconMyAccount} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Minha Conta</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconLocker} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Lockers em Uso</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconNotifications} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Notificações e Alertas</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconMyCard} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Adquira Clicks</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconPolitics} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Politica de Privacidade</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconConfig} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Configurações</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconHelp} style={styles.iconOptions}/>
                        <Text style={styles.itemText}>Ajuda</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={IconExit} style={styles.iconOptions}/>
                        <Text style={[styles.itemText, styles.red]}>Sair</Text>
                    </View>
                    <FontAwesome name='chevron-right' size={24} style={styles.iconArrow}/>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        width:'100%',
        height:'100%',
    },
    optionsContainer:{
        flex:1,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        
    },
    itemContainer:{
        width:'100%',
        height:55,
        flexDirection:'row',
        backgroundColor:'#DCDCDC',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    item:{
        width:'55%',            
        flexDirection:'row',
        marginLeft:9,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    iconArrow:{
        marginRight:10,
    },
    iconOptions:{
        width:39,
        height:42,
    },
    itemText:{
        fontSize:18,
        marginLeft:20,
    },
    red:{
        color:'red',
    },
})
