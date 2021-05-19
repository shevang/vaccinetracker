import React ,{useState,useEffect} from "react"
import {View,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Linking, TouchableOpacity,} from "react-native"
import { Title,Button, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
const windowwidth = Dimensions.get('window').width;
import SplashScreen from 'react-native-splash-screen'









const Home = ({navigation})=>{  
    useEffect(()=>{
        SplashScreen.hide()
    })
const [pincode,setpincode] = useState("")

    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1}}>
        <View style={{flexDirection:"row",alignSelf:"center"}}>
        <Title style={{color:"#455A63"}} >Vaccine tracker</Title>
        <Icon name="location-outline" size={20} color="#FF715E" style={{marginTop:10}} />
        </View>
        <LottieView source={require("../assets/apply_vacc.json")} autoPlay loop 
        style={{width:windowwidth,alignSelf:"center"}} 
        />
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={33}>
        <View style={{marginTop:160}}>
        <TextInput placeholder="Enter 6 digit pincode" keyboardType="numeric" maxLength={6} selectionColor="#FF715E"


        underlineColorAndroid="#FF715E" style={{marginTop:0}} onChangeText = {(pin)=>(setpincode(pin))} value={pincode}
        
       
        >
        </TextInput>
        <View style={{paddingHorizontal:50,marginTop:30}}>
        <Button mode="outlined" color="#FF715E" style={{elevation:1,shadowColor:"#FF715E",borderColor:"purple",}}
        icon={()=>(<Icon name="search" size={20} color="#FF715E" />)}
        onPress={()=>{navigation.navigate("Vaccineslots",pincode)}}
        disabled={pincode.length==6?false:true}
        >Search</Button>
        </View>
        </View>
       </KeyboardAvoidingView> 
       
       <View style={{justifyContent:"flex-end",flex:1,alignItems:"center"}}>
       <TouchableOpacity onPress={async ()=>{
          await Linking.openURL("https://wa.me/916397839308?text=Hello%20there...%20")
       }}>
       <Caption style={{color:"black"}}>Developed by:Shevang</Caption>
       </TouchableOpacity>
       </View>
       
        </View>
        </TouchableWithoutFeedback>
       
    )
}


module.exports = Home