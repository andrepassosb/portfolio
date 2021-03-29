/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Header } from 'semantic-ui-react';
import Box from '../../foundation/layout/Box';
import Card from '../Card';

export default function Projetos() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="50"
      height="720px"
      id="projetos"
    >
      <Header as="h1">Projetos</Header>
      <Card />
    </Box>
  );
}
