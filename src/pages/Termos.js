import React from 'react'

import { View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native'

import Estilo from './Estilos'

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        padding:30,
        margin:25,
      },
    boxTermos:{
        backgroundColor:"#DCDCDC",
        borderRadius:20,
        marginHorizontal:15,
        paddingHorizontal:15,
        borderBottomColor:"#fff"    
    },
    tituloText:{
        fontSize:22,
        marginTop:33,
    },
    txt:{
        marginTop:14,
        fontSize:18,  
        marginRight:56,  
    },

});

export default function Termos(){
    return(
        <View style={Estilo.cont}>
            <ScrollView style={styles.boxTermos}>
                <Text style={styles.tituloText}>Termos e condições de uso</Text>
                <Text style={styles.txt}>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Donec eros elit, mollis id hendrerit sit amet, 
                    pharetra ut massa. Sed id sodales nibh. Ut rutrum urna vitae purus porttitor, 
                    eu malesuada sapien tempus. Aliquam sapien nunc, dictum ac lacus sit amet, tincidunt facilisis odio. Curabitur non libero ac arcu dignissim vulputate. 
                    Duis non justo felis. Sed ornare tellus eu molestie ullamcorper. Phasellus cursus mattis interdum. Quisque eu imperdiet lorem. Vivamus et dignissim augue, ut lacinia dolor. 
                    Mauris efficitur ex urna, vitae fermentum orci posuere in. In et sem scelerisque, convallis orci ac, euismod nisl.
                    Ut a condimentum dolor. Suspendisse et purus consequat, molestie mauris nec, semper purus. Vivamus sollicitudin augue risus, imperdiet molestie purus iaculis id. Nulla sem tortor, ullamcorper condimentum lectus ut, 
                    cursus rhoncus lacus. Donec volutpat varius tempor. Nulla lobortis neque ut elit condimentum vestibulum. Integer turpis sem, commodo sagittis ornare in, tincidunt non elit. Integer non faucibus odio. 
                    Vivamus porttitor id ex a luctus. In hac habitasse platea dictumst. Nulla nec interdum augue, in venenatis mauris. Praesent tempus ullamcorper feugiat. Nam posuere quis diam elementum volutpat. 
                    Quisque finibus ex nec augue mollis, at gravida eros malesuada.
                </Text>
            </ScrollView>

        </View>
    );
}