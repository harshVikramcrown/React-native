import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home'
import Detail from './Detail'
import Fav from './Fav'
import Profile from './Profile'
import {Image} from 'react-native'

const Tab=createBottomTabNavigator();
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator tabbarOptions={{
            style:{
                height:65,
                justifyContent:"center",
                paddingVertical:15,
                backgroundColor:"#eff4f0",
                elevation:2
            }
        }}
        >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color,size})=>(
                    <Image
                    source={require("./p.jpg")}
                    style={{height:20,width:20}}
                    />
                )
            }}
/>
<Tab.Screen
            name="Fav"
            component={Fav}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color,size})=>(
                    <Image
                    source={require("./p.jpg")}
                    style={{height:20,width:20}}
                    />
                )
            }}
/>
<Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color,size})=>(
                    <Image
                    source={require("./p.jpg")}
                    style={{height:20,width:20}}
                    />
                )
            }}
/>
        </Tab.Navigator>
        
    );
};

const Stack = createStackNavigator();
const screenOptionStyle ={
    headerShown:false
}

const HomeStackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Fav" component={BottomTabNavigator}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator