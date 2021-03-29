import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import Container from './styles';

export default function UniqueOverlay({ isOpen, onClick }) {
  return (
    <Container>
      <Menu
        isOpen={isOpen}
        onClick={() => {
          onClick()
          console.log("Clicou");
        }}
      />
      <Footer />
    </Container>
  );
}
