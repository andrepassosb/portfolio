import React, { useState } from 'react';
import Container from './styles';

export default function ModelsWrapper(props) {
  return (
    <Container>{props.children}</Container>
  );
}
