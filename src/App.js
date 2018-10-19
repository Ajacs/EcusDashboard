import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Container,
  Grid,
  Icon,
  Segment
} from 'semantic-ui-react';
import PageHeader from './components/pageHeader/pageHeader';
import DollarDashboard from './components/dollarDashboard/dollarDashboard';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDays: 1
    }
  }

  render() {
    return (
      <Container >
        <PageHeader />
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width="three">
              <Segment>
                <Button color='grey' fluid>
                  <Icon  as="a" href="locahost:3000" name='chart bar' /> Inicio
                </Button>
              </Segment>
            </Grid.Column>
            <DollarDashboard />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
