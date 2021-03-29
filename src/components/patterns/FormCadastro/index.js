import React from 'react';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [messageInfo, setMessageInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setMessageInfo({
      ...messageInfo,
      [fieldName]: event.target.value,
    });
  }

  function reset() {
    setMessageInfo({
      name: '',
      email: '',
      message: '',
    });
  }

  const isFormInvalid = messageInfo.name.length === 0
  || messageInfo.email.length === 0
  || messageInfo.message.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        // Data Transfer Object
        const messageDTO = {
          name: messageInfo.name,
          email: messageInfo.email,
          message: messageInfo.message,
        };
        setSubmissionStatus(formStates.LOADING);
        setTimeout(() => {
          fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageDTO),
          })
            .then((respostaDoServidor) => {
              if (respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }

              throw new Error('Não foi possível cadastrar o usuário agora :(');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);
              // eslint-disable-next-line no-console
              console.log(respostaConvertidaEmObjeto);
              reset();
            })
            .catch((error) => {
              setSubmissionStatus(formStates.ERROR);
              // eslint-disable-next-line no-console
              console.error(error);
            });
        }, 2000);
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Contato
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Envie uma messagem!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="name"
          value={messageInfo.name}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={messageInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Mensagem"
          name="message"
          value={messageInfo.message}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Enviar
      </Button>

      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box>
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
          <p>Mensagem enviada com sucesso!</p>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
          <p>Eita, deu erro...</p>
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
