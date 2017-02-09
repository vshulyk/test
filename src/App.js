import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LinearProgress from 'material-ui/LinearProgress';
import Paper from 'material-ui/Paper';

import Filter from './components/CompanyFilter';
import CompanyList from './components/CompanyList';
import { getCompanies, filterCompanies } from './actions';

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
                    carrier: x.carrier,
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
        return (
            <div>
                <Filter flights={this.getUniqCompanies()} filterList={this.props.filterCompanies} />
                <CompanyList flights={this.props.app.flights} filter={this.props.app.filterName} />
            </div>
        );
    }
}

App.propTypes = {
    app: React.PropTypes.object.isRequired,
    getCompanies: React.PropTypes.func.isRequired,
    filterCompanies: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        app: state.data,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCompanies, filterCompanies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
