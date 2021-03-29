/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { NextDotJs, Javascript } from '@styled-icons/simple-icons';
import { Html5 } from '@styled-icons/boxicons-logos';
import { Css3Alt, ReactLogo } from '@styled-icons/fa-brands';
import MoveTo from '../MoveTo';

const DivItens = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-content: space-around;
align-items: center;
width:100%;
padding:20px;
`;

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content : center;
height: 100vh;`;

function SkillsItens() {
  return (
    <DivItens>
      <ReactLogo size="120" />
      <NextDotJs size="120" />
      <Javascript size="120" />
      <Html5 size="120" />
      <Css3Alt size="120" />
    </DivItens>
  );
}

export default function Skills() {
  return (
    <Container id="skills">
      <Header as="h1">Skills</Header>
      <SkillsItens />
      <MoveTo element="projetos" />
    </Container>
  );
}
