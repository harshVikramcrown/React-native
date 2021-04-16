import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { SafeAreaView,Dimensions,StyleSheet, Text, View,ImageBackground,Image, Animated, TouchableOpacity } from 'react-native';



export default function App() {
 const value = useState(new Animated.ValueXY({x:0,y:0}))[0]
  function moveBall(){
    Animated.timing(value,{
      toValue:{x:-100,y:100},
      duration:1000,
      useNativeDriver:false
    }).start()
  }
  return (

     <View>
        <ImageBackground style={{ position: 'absolute',top: 0,left: 0,bottom: 0,right: 0,opacity: 0.6,height:850,width:400}} source={require("./p.jpg")}>
  </ImageBackground>
  <View style={{top:200,left:140,}}>
   
    <Animated.View style={value.getLayout()}>
    <Image style={{height:100,width:100}} source={require("./favicon.png")}/>
    </Animated.View>
    <TouchableOpacity onPress={moveBall}>
<Text style={{fontWeight:"bold",fontSize:36,left:10,}}>Basic</Text>
    </TouchableOpacity>
    
  </View>
    <View style={styles.loginButton}></View>
      <View style = {styles.registerButton}>
      
    </View>
</View>
  )}
const styles= StyleSheet.create({
  loginButton:{
    width:50,
    height:70,
    left:340,
    top:620,
    backgroundColor:"#fc5c65",
  },
  registerButton:{
    width:50,
    top:550,
    height:70,
    backgroundColor:"blue",
  }
})