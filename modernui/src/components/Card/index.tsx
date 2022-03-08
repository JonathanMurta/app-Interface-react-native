import React from 'react'
import {TextInputProps} from 'react-native'

import unitedImg from '../../assets/united.png'
import {Container, Image, Title, Fundation} from './styles'


export function Card()
{
    return (
        <Container animation="slideInDown" duration={2000}>
            <Image source={unitedImg} resizeMode="contain" animation="pulse" delay={100} duration={500} direction="alternate" iterationCount="infinite" />
            <Title>Manchester United</Title>
            <Fundation>1878</Fundation>
        </Container>
    )
}