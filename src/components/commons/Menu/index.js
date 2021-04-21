import React from 'react';

import Text from '../../foundation/Text';
import { Button } from '../Button';
import MenuWrapper from './styles/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Repositorios',
    url: '/repositorios',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu({ isOpen, onClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {/* <Logo /> */}
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button
          variant="primary.main"
          isOpen={isOpen}
          onClick={() => {
            onClick();
          }}
        >
          Contato
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
