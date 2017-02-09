import React from 'react';

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    getTimeString(date) {
        const d = new Date(date);
        return <span>{`${ this.format(d.getDate())} ${this.format(d.getMonth()+1)} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`}</span>
    }
    format(d) {
        return ('0'+d).slice(-2)
    }
    renderCard(flight, key) {
        const cardS = {
            width: '23%',
            margin: '1%'
        },
        titleS = {
            paddingBottom: '20px'
        };
        return (
            <Card key={key} style={cardS}>
                <CardMedia
                    overlay={<CardTitle title={flight.carrier} />}
                >
                    <img src="/src/images/back.jpg" />
                </CardMedia>
                <CardText>
                    <div style={titleS}>From: {flight.direction.from} at {this.getTimeString(flight.departure)}</div>
                    <div>To: {flight.direction.to} at {this.getTimeString(flight.arrival)}</div>
                </CardText>
            </Card>
        )
    }

    render() {
        const listStyles = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
        },
        filteredList = this.props.filter ? this.props.flights.filter(f=>f.carrier === this.props.filter) : this.props.flights;
        return (
            <div style={listStyles}>
                {filteredList.map((f,i) => this.renderCard(f,i))}
            </div>
        );
    }
}

List.propTypes = {
    flights: React.PropTypes.array,
};
List.defaultProps = {
    flights: [],
};

export default List;
