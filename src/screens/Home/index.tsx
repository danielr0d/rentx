import React, { Component } from 'react'
import { Container, Header, HeaderContent, TotalCars } from './styles'

import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { StatusBar } from 'expo-status-bar'

export function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total: 12 carros</TotalCars>
        </HeaderContent>
      </Header>
    </Container>
  )
}
