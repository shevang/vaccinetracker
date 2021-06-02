import React,{useEffect,useState} from "react"
import {View,FlatList, Text, Image,Dimensions,Linking,TouchableOpacity} from "react-native"
import { Title,Paragraph,Card,Caption,Divider,TouchableRipple} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import D7 from "../functions/get7dates"
import get_date from "../functions/getdate"

const windowwidth = Dimensions.get('window').width;










var Data = []

var date = get_date()


const Vaccineslots = ({route}) => {
    const pincode = route.params
    var [loading,setloading] = useState(true)
    var [centererror,setcentererror] = useState(false)
   
    



    useEffect(function(){
       

        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,{
            method:"get",
            headers: { 'Content-Type': 'application/json',"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36" }
        })
          .then(function(res){return res.json()})
         .then(function(data){
            if(data.centers == 0){
               setloading(false)
               setcentererror(true)
            }
            else {
                Data = data.centers
                setloading(false)
            }
             

        })
         .catch((err)=>console.log(err))
        

    },[])


   if(centererror){
       return(
           <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
           <Image style={{width:200,height:200}} source={require("../assets/centernotfound.png")}></Image>
           <Text style={{fontSize:20}}>No centers found....</Text>
           </View>
       )
   }

  

   



    if(loading){
        return(
            <View style={{flex:1,}}>
            <LottieView source={require("../assets/vaccineloader")} autoPlay loop 
            style={{width:150,height:150,alignSelf:"center",justifyContent:"center"}} 
            /> 
            <Text style={{textAlign:"center",fontSize:16,elevation:1,shadowColor:"orange"}}>Loading Centers....</Text>
            </View>
        )
    }
     
    else{
  return(
    <FlatList
    keyExtractor = {(x,y)=> y}
    data = {Data}
    renderItem={({item})=>
    <Card style={{marginTop:8,borderBottomWidth:1,borderBottomColor:"grey",borderRadius:20}}>
    <Card.Content>
    <View style={{marginBottom:100}}>
    <Title style={{fontSize:20}}>{item.name}</Title>
    <Caption>{item.address}</Caption>
    <Divider></Divider>
    </View>
    <View style={{flexDirection:"row"}}>
    <Paragraph style={{borderWidth:1,backgroundColor:"#FFCFDC",borderRadius:9,elevation:10,width:60,height:20,textAlign:"center",bottom:25,fontSize:10}}>{`Price:${item.fee_type}`}</Paragraph>
  
    
     
     <Paragraph style={{borderWidth:1,backgroundColor:"#8BE78B",borderRadius:9,elevation:10,width:60,height:20,textAlign:"center",bottom:25,fontSize:10,left:60}} onPress={()=>{Linking.openURL("https://selfregistration.cowin.gov.in/")}}>Book now</Paragraph>
   
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-evenly",marginBottom:50}}>
    <Paragraph style={{borderWidth:1,backgroundColor:"#AEE3E3",borderRadius:3,elevation:10,width:windowwidth/7.9,height:20,textAlign:"center",fontSize:11}}>{D7(0)}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#AEE3E3",borderRadius:3,elevation:10,width:windowwidth/7.9,height:20,textAlign:"center",fontSize:11}}>{D7(1)}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#AEE3E3",borderRadius:3,elevation:10,width:windowwidth/7.9,height:20,textAlign:"center",fontSize:11}}>{D7(2)}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#AEE3E3",borderRadius:3,elevation:10,width:windowwidth/7.9,height:20,textAlign:"center",fontSize:11}}>{D7(3)}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#AEE3E3",borderRadius:3,elevation:10,width:windowwidth/7.9,height:20,textAlign:"center",fontSize:11}}>{D7(4)}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#AEE3E3",borderRadius:3,elevation:10,width:windowwidth/7.9,height:20,textAlign:"center",fontSize:11}}>{D7(5)}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#AEE3E3",borderRadius:3,elevation:10,width:windowwidth/7.9,height:20,textAlign:"center",fontSize:11}}>{D7(6)}</Paragraph>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-around",bottom:40}}>
    <Text style={{borderWidth:1,backgroundColor:"#FFFFC2",borderRadius:3,elevation:10,fontSize:8,width:windowwidth/7.9,height:22,textAlign:"center"}}>{(item.sessions.length >=1 ? `${item.sessions[0].vaccine}\n${item.sessions[0].min_age_limit}+` : "N/A")}</Text>
    <Text style={{borderWidth:1,backgroundColor:"#FFFFC2",borderRadius:3,elevation:10,fontSize:8,width:windowwidth/7.9,height:22,textAlign:"center"}}>{(item.sessions.length >=2 ? `${item.sessions[0].vaccine}\n${item.sessions[0].min_age_limit}+` : "N/A")}</Text>
    <Text style={{borderWidth:1,backgroundColor:"#FFFFC2",borderRadius:3,elevation:10,fontSize:8,width:windowwidth/7.9,height:22,textAlign:"center"}}>{(item.sessions.length >=3 ? `${item.sessions[0].vaccine}\n${item.sessions[0].min_age_limit}+` : "N/A")}</Text>
    <Text style={{borderWidth:1,backgroundColor:"#FFFFC2",borderRadius:3,elevation:10,fontSize:8,width:windowwidth/7.9,height:22,textAlign:"center"}}>{(item.sessions.length >=4 ? `${item.sessions[0].vaccine}\n${item.sessions[0].min_age_limit}+` : "N/A")}</Text>
    <Text style={{borderWidth:1,backgroundColor:"#FFFFC2",borderRadius:3,elevation:10,fontSize:8,width:windowwidth/7.9,height:22,textAlign:"center"}}>{(item.sessions.length >=5 ? `${item.sessions[0].vaccine}\n${item.sessions[0].min_age_limit}+` : "N/A")}</Text>
    <Text style={{borderWidth:1,backgroundColor:"#FFFFC2",borderRadius:3,elevation:10,fontSize:8,width:windowwidth/7.9,height:22,textAlign:"center"}}>{(item.sessions.length >=6 ? `${item.sessions[0].vaccine}\n${item.sessions[0].min_age_limit}+` : "N/A")}</Text>
    <Text style={{borderWidth:1,backgroundColor:"#FFFFC2",borderRadius:3,elevation:10,fontSize:8,width:windowwidth/7.9,height:22,textAlign:"center"}}>{(item.sessions.length >=7 ? `${item.sessions[0].vaccine}\n${item.sessions[0].min_age_limit}+` : "N/A")}</Text>  
    </View>

    <View style={{flexDirection:"row",justifyContent:"space-around",bottom:40}}>
    <Paragraph style={{borderWidth:1,backgroundColor:"#CFFDBC",borderRadius:3,elevation:10,fontSize:9,width:windowwidth/7.9,height:20,textAlign:"center"}}>{(item.sessions.length >=1 ? item.sessions[0].available_capacity : "N/A")}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#CFFDBC",borderRadius:3,elevation:10,fontSize:9,width:windowwidth/7.9,height:20,textAlign:"center"}}>{(item.sessions.length >=2 ? item.sessions[1].available_capacity : "N/A")}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#CFFDBC",borderRadius:3,elevation:10,fontSize:9,width:windowwidth/7.9,height:20,textAlign:"center"}}>{(item.sessions.length >=3 ? item.sessions[2].available_capacity : "N/A")}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#CFFDBC",borderRadius:3,elevation:10,fontSize:9,width:windowwidth/7.9,height:20,textAlign:"center"}}>{(item.sessions.length >=4 ? item.sessions[3].available_capacity : "N/A")}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#CFFDBC",borderRadius:3,elevation:10,fontSize:9,width:windowwidth/7.9,height:20,textAlign:"center"}}>{(item.sessions.length >=5 ? item.sessions[4].available_capacity : "N/A")}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#CFFDBC",borderRadius:3,elevation:10,fontSize:9,width:windowwidth/7.9,height:20,textAlign:"center"}}>{(item.sessions.length >=6 ? item.sessions[5].available_capacity : "N/A")}</Paragraph>
    <Paragraph style={{borderWidth:1,backgroundColor:"#CFFDBC",borderRadius:3,elevation:10,fontSize:9,width:windowwidth/7.9,height:20,textAlign:"center"}}>{(item.sessions.length >=7 ? item.sessions[6].available_capacity : "N/A")}</Paragraph>  
    

    </View>
     

    
    </Card.Content>
    </Card>
}
    />
    
   
  )
}
}


module.exports = Vaccineslots