import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  Card,
  Container,
  Dropdown,
  Grid,
  Image,
  Icon,
  Segment,
  Label,
  Statistic,
  Item
} from 'semantic-ui-react';
import { AreaChart, LineChart } from 'react-chartkick';
import PageHeader from './components/pageHeader/pageHeader';

class App extends Component {
  render() {
    const friendOptions = [
      {
        text: '1 día',
        value: 1
      },
      {
        text: '2 días',
        value: 1
      },
      {
        text: '3 días',
        value: 1
      },
      {
        text: '4 días',
        value: 1
      },
      {
        text: '5 días',
        value: 1
      },
      {
        text: '6 días',
        value: 1
      },
      {
        text: '7 días',
        value: 1
      },

    ]
    return (
      <Container >
        <PageHeader />
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width="three">
              <Segment>
                <Button color='grey' fluid>
                  <Icon name='chart bar' /> Inicio
                </Button>
              </Segment>
            </Grid.Column>
            <Grid.Column width="ten">
              <LineChart data={{ "2017-01-01": 19, "2017-01-02": 18, "2017-01-03": 18, "2017-01-04": 19, "2017-01-05": 18.5 }} />
            </Grid.Column>
            <Grid.Column width="three">
            <Segment>
            <span>
    Valores desde {' '}
    <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
  </span>
            </Segment>
              <Segment>
                <Item.Group>
                <Item >
                  <Icon size='large' name='dollar sign' />
                  <Item.Content verticalAlign='middle'>
                    <Item.Header>19.99</Item.Header>
                    <Item.Meta>
                      <span className='price'>Promedio</span>
                    </Item.Meta>
                  </Item.Content>
                </Item>
                </Item.Group>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
