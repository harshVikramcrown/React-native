import React from 'react'
import {Image,StyleSheet,Text,View} from 'react-native'
import Swiper from 'react-native-swiper'

const SwiperComponent=()=>{
    return(
        <Swiper
        style={StyleSheet.wrapper}
        dotStyles={{
            marginTop:-200,
            width:15,
            height:5,
            borderRadius:10,
            backgroundColor:"#FFF",
        }}
        activeDotColor="#FFF"
        activeDotstyle={{
            marginTop:-200,
            width:30,
            height:6,
            borderRadius:10,
            backgroundColor:"#FFF",
            activateDotColor:"#FFF"
        }}

        >
   <View style={StyleSheet.slide}>

   </View>
        </Swiper>
    )
}
const styles=StyleSheet.create({
    wrapper:{},
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    }
})
export default SwiperComponent; 