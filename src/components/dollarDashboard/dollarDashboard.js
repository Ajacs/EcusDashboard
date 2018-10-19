import React, { Component } from 'react';
import { Grid, Segment, Item, Icon } from 'semantic-ui-react';
import DayPicker from './dayPicker/dayPicker';
import { LineChart } from 'react-chartkick';
import config from '../../config/config';
import moment from 'moment';
import { serviceCall } from '../../api/api';


class DollarDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDays: 1,
            dashboardData: [],
            average: 0
        }
        this.handleDayPickerChange = this.handleDayPickerChange.bind(this);
    }

    componentDidMount() {
        const { api: { default_currency } } = config;
        let date = moment(new Date());
        let endDate = date;
        serviceCall(date, endDate).end((err, res) => {
            if (err) {
                console.log('We need to do something with this error');
            }
            const values = Object.values(res.body[default_currency]).reduce((prev, current) => {
                return prev + current;
            });

            this.setState({
                average: Number(values/this.state.selectedDays).toFixed(2),
                dashboardData: res.body[default_currency]
            });
        });
    }

    handleDayPickerChange(event, { value }) {
        const { api: { default_currency } } = config;
        let date = moment(new Date());
        let endDate = date;
        if (value !== 1)  {
            date = date.subtract(value, 'days');
            endDate = moment(new Date());
        } 
        serviceCall(date, endDate).end((err, res) => {
            if (err) {
                console.log('We need to do something with this error');
            }
            const values = Object.values(res.body[default_currency]).reduce((prev, current) => {
                return prev + current;
            });
            const dataLength = value !== 1 ? value + 1 : value;
            this.setState({
                average: Number(values/(dataLength)).toFixed(2),
                selectedDays: value,
                dashboardData: res.body[default_currency]
            });
        })
    }

    render() {
        return (
            [
                <Grid.Column width="ten">
                    <LineChart data={this.state.dashboardData} />
                </Grid.Column>,
                <Grid.Column width="three">
                    <Segment>
                        <DayPicker
                            onChange={this.handleDayPickerChange}
                            selectedDays={this.state.selectedDays} />
                    </Segment>
                    <Segment>
                        <Item.Group>
                            <Item >
                                <Icon size='large' name='dollar sign' />
                                <Item.Content verticalAlign='middle'>
                                    <Item.Header>{this.state.average}</Item.Header>
                                    <Item.Meta>
                                        <span className='price'>Promedio</span>
                                    </Item.Meta>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                </Grid.Column>
            ]
        )
    }
}

export default DollarDashboard;