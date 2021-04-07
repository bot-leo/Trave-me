import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import LoginDuasFases from './pages/LoginDuasFases'
import Cadastro from './pages/Cadastro'
import Entrada from './pages/Entrada'
import Destravar from './pages/Destravar'
import Termos from './pages/Termos'
import Home from './pages/Home'
import RoutesTab from './routes/RoutesTab'

const { Navigator, Screen} = createStackNavigator();

export default function Routes() {
   return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="LoginDuasFases" component={LoginDuasFases} />
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="Entrada" component={Entrada} />
            <Screen name="RoutesTab" component={RoutesTab} />
            <Screen name="Destravar" component={Destravar} options={{headerShown:true}} />
            <Screen name="Termos" component={Termos}  />
            <Screen name="Home" component={Home}  options={{headerShown:true}}/>
        </Navigator>
    </NavigationContainer>
   );
}