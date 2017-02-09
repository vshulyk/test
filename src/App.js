import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LinearProgress from 'material-ui/LinearProgress';
import Paper from 'material-ui/Paper';

import Filter from './components/CompanyFilter';
import getCompanies from './actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        props.getCompanies();
    }
    getUniqCompanies() {
        const uniq = {};
        return this.props.app.flights.reduce((acc, x) => {
            if (!uniq[x.carrier]) {
                uniq[x.carrier] = true;
                acc.push({
                    id: x.id,
                    name: x.carrier,
                });
            }
            return acc;
        }, []);
    }
    render() {
        const errorTextStyle = {
                color: 'red',
            },
            containerStyle = {
                padding: '20px',
            };

        if (this.props.app.isPending) {
            return <LinearProgress mode="indeterminate" />;
        }
        if (this.props.app.error) {
            return (
                <Paper style={containerStyle} zDepth={1} >
                    <span style={errorTextStyle}>Ooops! We&apos;ve an error: </span>
                    {this.props.app.error}
                </Paper>
            );
        }
        return <Filter flights={this.getUniqCompanies()} />;
    }
}

App.propTypes = {
    app: React.PropTypes.object.isRequired,
    getCompanies: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        app: state.data,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCompanies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
