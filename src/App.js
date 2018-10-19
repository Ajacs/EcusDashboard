import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Button, 
  Container, 
  Grid, 
  Image 
} from 'semantic-ui-react'
import PageHeader from './components/pageHeader/pageHeader';

class App extends Component {
  render() {
    return (
      <Container >
        <PageHeader />
        <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width="three">
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width="ten">
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width="three">
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
