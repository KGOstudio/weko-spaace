import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video } from 'expo-av';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}> 
        <Text style={{fontSize: 30, fontWeight: '700', color: 'rgba(0,180,5,1)', marginTop: 8, marginLeft: 8}}>space-do</Text>
      <Text style={styles.textHeader}>let's make <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'dotted', textDecorationColor: 'rgba(0,180,5,1)'}}>to do</Text> once's a time</Text>

        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/13862/13862274.png'}} style={{width: 150, height: 150, alignSelf: 'center', position: 'absolute', top: '38%'}}/>
        <View style={{position: 'absolute', top: '58%', backgroundColor: "black", width: "100%", height: '70%'}}>
            <Video source={require("../assets/Untitled video - Made with Clipchamp.mp4")} style={{width: "70%", height: 150}} isLooping isMuted shouldPlay/>
        </View>
        <TouchableOpacity style={styles.footerButton}>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'white', letterSpacing: 1, padding: 0}}>let's start</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    textHeader: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 5,
        marginLeft: 8
    },
    footerButton: {
        backgroundColor: 'rgba(0,200,30,1)',
        padding: 15,
         alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 8,
        position: 'absolute',
        bottom: 30
    }
})

export default Home;