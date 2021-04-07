import React from 'react';

//importe do appLoading que seria o splash de carregamento do app.
import { AppLoading } from 'expo';

import Routes from './src/routes'

//importe das fontes do projeto após dua instalação
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

export default function App() {
  //Carregamento das fontes que iram ser usadas do projeto.
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });
//se as fontes não forem carregadas então ele ira permancer na tela de carregamento do app
//caso elas forem carregadas ira se iniciar o sistema de navegação normalmente.
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
      return <Routes />
    }
}

