import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';
import MoveTo from '../MoveTo';

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content : center;
height: 100vh;
background-repeat: no-repeat;
background-position: center center;
//background-image: url(https://64.media.tumblr.com/43ff1ae84968ffd84606207e9995a78e/tumblr_py4mvbGe6h1tgo74ho1_1280.gif);
`;

export default function Cabecalho() {
  return (
    <Container id="cabecalho">
      <Text variant="subTitle" tag="h3">BEM-VINDO AO</Text>
      <Text variant="title" tag="h1">MEU PORTIFOLIO</Text>
      <MoveTo element="capa" />
    </Container>
  );
}
