import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const CardWrapper = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-content: center;
padding:50px;
`;

CardWrapper.Item = styled.li`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
  },
});

export default function Cards() {
  const classes = useStyles();
  const projetos = [
    {
      image: './images/text_adventure.PNG',
      title: 'Text Adventure',
      description: 'O text adventure "Kolb e o Dragão" de Skyrim desenvolvido durante a Imersão React edição NextJS da Alura! ',
      url: 'https://text-adventure-alura.andrepassosb.vercel.app/',
      urlgit: 'https://text-adventure-alura.andrepassosb.vercel.app/',

    },
    {
      image: './images/instalura.png',
      title: 'InstaAlura',
      description: 'Projeto desenvolvido durante o Bootcamp JAMStack da Alura.',
      url: 'https://instalura.andrepassosb.vercel.app/',
      urlgit: 'https://instalura.andrepassosb.vercel.app/',
    },
  ];

  return (

    <CardWrapper>
      {projetos.map((projeto) => (
        <Card className={classes.root}>
          <CardActionArea key={projeto.title}>
            <CardMedia
              className={classes.media}
              image={projeto.image}
              title={projeto.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {projeto.title}
              </Typography>
              <CardWrapper.Item>
                <Typography variant="body2" color="textSecondary" component="p">
                  {projeto.description}
                </Typography>
              </CardWrapper.Item>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" target="_blank" href={projeto.url}>
              Vercel
            </Button>
            <Button size="small" color="primary" target="_blank" href={projeto.urlgit}>
              GitHub
            </Button>
          </CardActions>
        </Card>
      ))}
    </CardWrapper>

  );
}
