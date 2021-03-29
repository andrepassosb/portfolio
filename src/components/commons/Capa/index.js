/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import styled from 'styled-components';
import Text from '../../foundation/Text';
import MoveTo from '../MoveTo';

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content : center;
height: 100vh;`;

const Avatar = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-image: url(https://react.semantic-ui.com/images/avatar/large/patrick.png);
background-repeat: no-repeat;
background-size: 150px 150px;
background-position: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  margin: {
    margin: theme.spacing(3),
  },

}));

export default function Capa() {
  const classes = useStyles();
  return (
    <Container id="capa">
      <Text variant="subTitle" tag="h3">&lt;/Hello Word&gt;</Text>
      <Text variant="title" tag="h1">Im André Passos Braga</Text>
      <Text variant="subTitle" tag="h3">Front end developer</Text>
      <Avatar />
      <ButtonGroup
        size="large"
        color="secondary"
        className={classes.margin}
      >
        <Button target="_blank" href="https://github.com/andrepassosb" alt="Link para gitHub">
          <GitHubIcon style={{ fontSize: 40 }} />
        </Button>
        <Button target="_blank" href="https://www.linkedin.com/in/andrepassosb/" alt="Link para Linkedin">
          <LinkedInIcon style={{ fontSize: 40 }} />
        </Button>
        <Button target="_blank" href="https://twitter.com/Andrepassosb" alt="Link para twitter">
          <TwitterIcon style={{ fontSize: 40 }} />
        </Button>
      </ButtonGroup>
      <MoveTo element="skills" />
    </Container>
  );
}
