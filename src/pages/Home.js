import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'

import Botao from '../components/button'

//importes das imagens do logo e banners.                                          '
import Logo from '../assets/logo-trave.png'
import BannerPrimary from '../assets/imgs/PrimeiroBanner.png'
import BannerSecundary from '../assets/imgs/BANER-TRAVEME.png'


//importes dos icones
import QrCode from '../assets/qrcode_icon.png'
import Clicks from '../assets/clicks_icon.png'
import Local from '../assets/local_icon.png'


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    boxContainer:{
        flex:1,
        width:'100%',
        alignItems:'center',
       
    },
    logo:{
        width:190,
        height:89,
        marginVertical:30,
    },
    boxWhite:{
        backgroundColor:"#fff",
        width:365,
        height:350,
        borderRadius:14,
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:25,
    },
    boxGrey:{
        backgroundColor:'#DCDCDC',
        width:365,
        height:350,
        borderRadius:14,
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:25,
    },
    boxBanner:{
        width:365,
        height:350,
        borderRadius:14,  
    },
    boxText:{
        position:'absolute',
        top:185,
    },
    imgBanner:{
        width:'100%',
        height:277,
        resizeMode:'contain',
        overflow:'hidden',
  
    },
    acssFast:{
        fontFamily:'Roboto_500Medium',
        fontSize:18,
    },
    boxIcons:{
        flexDirection:'row', 
    },
    iconsRapidos:{
        flex:1,
        width:90,
        height:110,
        justifyContent:'space-evenly',
        
    },
    textMyacc:{
        fontFamily:'Roboto_300Light',
        fontSize:16,
        marginHorizontal:25,
        textAlign:'center',
    },
    textBlue:{
        color:'#4478B6',
        fontFamily:'Roboto_500Medium',
    },

    textDes:{
        fontFamily:'Roboto_300Light',
        fontSize:22,
        color:'#fff',
        textAlign:'center',
    },

})

export default function Home(){


    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.boxContainer}>
                    <Image source={Logo} style={styles.logo}/>
                    <View style={styles.boxWhite}>
                        <Text style={styles.acssFast}>Acesso Rápido</Text>
                        <View style={styles.boxIcons}>
                            <Image source={QrCode} style={styles.iconsRapidos}/>
                            <Image source={Clicks} style={styles.iconsRapidos}/>
                            <Image source={Local} style={styles.iconsRapidos}/>
                        </View>
                        <Text style={styles.textMyacc}>Em <Text style={styles.textBlue}>Minha Conta</Text> você poderá gerenciar os gastos de seus Clicks</Text>
                    </View>
                    
                    <View style={styles.boxBanner}> 
                        <Image source={BannerPrimary} style={styles.imgBanner}/>
                        <View style={styles.boxText}>
                          <Text style={styles.textDes}>Suspendisse ac dolor vel eros interdum tempus vel in enim</Text>
                        </View>
                    </View>

                    <View style={styles.boxGrey}>
                        <Text style={styles.acssFast}>Acesso Rápido</Text>
                        <View style={styles.boxAccInfo}>
                            <Text>Você possui:...............................0008</Text>
                            <Text>Você possui:...............................0008</Text>
                            <Text>Você possui:...............................0008</Text>
                        </View>
                        <Botao tittle='Ir para Minha Conta'
                               color='#4478B6'/>
                    </View>

                    <View style={styles.boxBanner}> 
                        <Image source={BannerSecundary} style={styles.imgBanner}/>
                        <View style={styles.boxText}>
                          <Text style={styles.textDes}>Suspendisse ac dolor vel eros interdum tempus vel in enim</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>

    );
}