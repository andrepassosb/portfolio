import React from 'react';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Skills from '../src/components/commons/Skills';
import Projetos from '../src/components/commons/Projetos';
import Box from '../src/components/foundation/layout/Box';
import { ModelSection, ModelsWrapper } from '../src/components/commons/Model';
import UniqueOverlay from '../src/components/commons/UniqueOverlay';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <Box>
      <ModelsWrapper>
        <div>
          <ModelSection key="cabecalho">
            <Cabecalho />
          </ModelSection>
          <ModelSection key="capa">
            <Capa />
          </ModelSection>
          <ModelSection key="skills">
            <Skills />
          </ModelSection>
          <ModelSection key="projetos">
            <Projetos />

            {/* <Body
        isOpen={isModalOpen}
        onClick={() => {
          setModalState(!isModalOpen);
        }}
      /> */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => {
                setModalState(false);
              }}
            >
              {(propsDoModal) => (
                <FormCadastro propsDoModal={propsDoModal} />
              )}
            </Modal>
          </ModelSection>
        </div>
        <UniqueOverlay
          isOpen={isModalOpen}
          onClick={() => {
            setModalState(!isModalOpen);
          }}
        />
      </ModelsWrapper>
    </Box>
  );
}
