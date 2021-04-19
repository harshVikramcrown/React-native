import React from 'react'
import {View,Text,Image,ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'
const Home=(navigation)=>{
    return(
        <View style={{
     background:"#FFF",       
flex:1}}>
    <View style={{
        backgroundColor:'#00a46c',
        height:"28%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:20
    }}>
        <Image
        source={require('./a.png')}
        style={{height:10,width:20,marginTop:50}}/>

        <View style={{
            flexDirection:"row",
            alignItems:"center",
            marginTop:25,
            width:"100%"
        }}>

            <View style={{width:"50%"}}>
                <Text style={{fontSize:28,color:"#FFF",fontWeight:"bold"}}>Hi Bro</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
            <Image
            source={require("./b.png")}
            style={{height:60,width:60}}/>
        </View>
    </View>
    </View>
<LinearGradient
colors={["rgba(0,164,109,0.4","transparent"]}
style={{
    left:0,
    right:0,
    height:90,
    margin:-45
}}>
    <View style={{
        backgroundColor:"#FFF",
        paddingVertical:8,
        paddingHorizontal:20,
        marginHorizontal:20,
        borderRadius:15,
        marginTop:25,
        flexDirection:"row",
        alignItems:"center"
    }}>
        <TextInput
        placeholder="Search"
        placeholderTextColor="#b1e5d3"
        style={{
            left:10,
            fontWeight:"bold",
        fontSize:18,
    width:260
        }}
        />
        
        <Image
        source={require('./c.png')}
        style={{height:20,width:20,left:50}}/>
        </View>
        </LinearGradient>

        <View styles={{
            flexDirection:"row",
            paddingHorizontal:20,
            width:"100%",
            alignItems:"center"
        }}>
            <View style={{width:"50%"}}>
                <Text style={{left:50,
                    fontWeight:"bold",
                    fontSize:17,
                    color:"#585a61",
                    top:43,
                    left:10,
                }}>Recommended</Text>
<View style={{
height:4,
backgroundColor:"#b1e5d3",
width:115,
marginTop:-5
}}>

</View>

        </View>
        <View style={{width:"50%",alignItems:"flex-end"}}>
            <View style={{
                backgroundColor:"#00a46c",
                paddingHorizontal:20,
                paddingVertical:5,
                borderRadius:15,
                top:25,
                right:-180,
            }}>
                <Text style={{
                    fontWeight:"bold",
                    fontSize:13,
                    color:"#FFF"
                }}>More</Text>
            </View>
        </View>
    </View>

        <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{height:400}}
    >
        <LinearGradient
        colors={["rgba(0,164,109,0.09)", "transparent"]}
        style={{
            position:"absolute",
            left:0,
            right:0,
            height:100,
            marginTop:220,
            top:0
        }}
        />
        <TouchableOpacity
        onPress={()=>navigation.navigate("Details")}
        style={{
            height:250,
            elevation:2,
            backgroundColor:"#FFF",
            marginLeft:20,
            marginTop:20,
            borderRadius:15,
            marginBottom:10,
            width:160
        }}>
            <Image
            source={require("./p.jpg")}
            style={{
            height:200,
            width:200,
            }}/>
            <View style={{
           flexDirection:"row",
           paddingTop:10,
           paddingHorizontal:10
            }}>
    <Text style={{
        fontWeight:"bold"
    }}>OFFICE</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
        
        
        
        <View styles={{
            flexDirection:"row",
            paddingHorizontal:20,
            width:"100%",
            alignItems:"center",
            
        }}>
            <View style={{width:"50%"}}>
                <Text style={{left:50,
                    fontWeight:"bold",
                    fontSize:17,
                    color:"#585a61",
                    left:10,
                }}>Featured</Text>
<View style={{
height:4,
backgroundColor:"#b1e5d3",
width:115,
marginTop:-5
}}>

</View>

        </View>
        <View style={{width:"50%",alignItems:"flex-end"}}>
            <View style={{
                backgroundColor:"#00a46c",
                paddingHorizontal:20,
                paddingVertical:5,
                borderRadius:15,
                left:180,
                top:-25
            }}>
                <Text style={{
                    fontWeight:"bold",
                    fontSize:13,
                    color:"#FFF",
                }}>More</Text>
            </View>
        </View>
    </View>
    
</View>
    )

}
export default Home;