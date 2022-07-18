import { Home } from './screens/Home'
import React from 'react'

import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'

import AppLoading from 'expo-app-loading'
import { AppState } from 'react-native'
import theme from './styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
