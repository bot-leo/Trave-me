import React from 'react'
import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native'

import BannerClicks from '../assets/Banner-Clicks.png'

export default function Clicks(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.contentBox}>
                <Text style={styles.contentText}>
                    Non Justo Felis. Sed Ornare Tellus 
                    Sed Ornare Tellus Eu Molestie Ullamcorper. 
                    Phasellus Cursus Mattis Interdum. Quisque Eu Imperdie
                </Text>
                <Image source={BannerClicks} style={styles.banner}/>
                <Text style={styles.contentTextInfo}>
                    Entenda:  Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. sapien vel 
                    orcino blandit ullamco
                </Text>
                <Text style={styles.contentTextLink}>
                    Para obter mais informações consulte nossos 
                    Termos de serviço e Política de privacidade
                </Text>
            </View>
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    contentBox:{
        alignItems:'center',
        width:'100%',
        height:'100%',
        justifyContent:'space-around',

    },
    contentText:{
        fontFamily:'Roboto_400Regular',
        width:342,
        fontSize:18,
        textAlign:'center',
    },
    contentTextInfo:{
        fontFamily:'Roboto_300Light',
        width:349,
        fontSize:14,
        textAlign:'center',
    },
    contentTextLink:{
        fontFamily:'Roboto_300Light',
        width:224,
        fontSize:11,
        textAlign:'center',
        
    },
    banner:{
        width:350,
        height:282,
        
    },
    
})