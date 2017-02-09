import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'All',
        };
    }
    handleChange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <SelectField
              value={this.state.value}
              onChange={(e, k, v) => this.handleChange(v)}
            >
                {this.props.flights.map(f => <MenuItem value={f.id} primaryText={f.name} />)}
                <MenuItem value="All" primaryText="All" />
            </SelectField>
        );
    }
}

Filter.propTypes = {
    flights: React.PropTypes.array,
};
Filter.defaultProps = {
    flights: [],
};

export default Filter;
