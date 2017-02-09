import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    handleChange( value, name ) {
        this.setState({ value });
        this.props.filterList( /all/i.test(name) ? false : name );
    }
    render() {
        const selectorS = {
            marginLeft: '1%',
        };
        return (
            <SelectField
                style={selectorS}
                value={this.state.value}
                onChange={(e,_,v) => this.handleChange(v, e.target.innerHTML)}
            >
                {this.props.flights.map((f,i) => <MenuItem key={i} value={f.id} primaryText={f.carrier} />)}
                <MenuItem value="" primaryText="All" />
            </SelectField>
        );
    }
}

Filter.propTypes = {
    flights: React.PropTypes.array,
    filterList: React.PropTypes.func.isRequired
};
Filter.defaultProps = {
    flights: [],
};

export default Filter;
