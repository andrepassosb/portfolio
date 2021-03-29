import React from 'react';
import Container from './styles';

export default function ModelSection(
  {
    modelName,
    overlayNode,
    children,
    ...props
  },
) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...props}>
      {children}
    </Container>
  );
}
