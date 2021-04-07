import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions} from 'react-native'
import MapView from 'react-native-maps'


export default function Locais(){
    return(
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map}
                     initialRegion={{
                         latitude:-23.6307505,
                         longitude:-46.6889475,
                         latitudeDelta: 0.008,
                         longitudeDelta: 0.008,
                     }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});