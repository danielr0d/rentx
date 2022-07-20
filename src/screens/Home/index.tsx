import React, { Component } from 'react'
import { Container, Header, HeaderContent, TotalCars } from './styles'

import { RFValue } from 'react-native-responsive-fontsize'

import { Car } from '../../components/Car'

import Logo from '../../assets/logo.svg'
import { StatusBar } from 'expo-status-bar'

export function Home() {
  const carData = {
    brand: 'VW',
    name: 'Fuscao',
    rent: {
      period: 'AO DIA',
      price: 120
    },
    thumbnail: 'https://autopecasabj.com.br/image/cache/data/CARROS/fusca-500x500.png'
  }

  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total: 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
    </Container>
  )
}
