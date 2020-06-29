import React from 'react'
import tw from 'twin.macro'
import Logo from '../assets/images/react-logo.svg'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
${tw`m-auto`}
animation: ${rotate} 20s linear infinite;
height: 25vmin;
width: 25vmin;
`;

const ReactLogo = () => (
  <Img src={Logo} alt='ReactJS Logo' />
)


export default ReactLogo