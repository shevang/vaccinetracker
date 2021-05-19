import React,{useEffect} from "react"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screen/home"
import Vaccineslots from "./screen/vaccineslots"
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();





const App = () => {
    return(
        <NavigationContainer >
        <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name = "Vaccineslots" component={Vaccineslots} />
        </Stack.Navigator>
        </NavigationContainer>
        
    )
}


export default App