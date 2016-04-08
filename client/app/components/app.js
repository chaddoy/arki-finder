import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import Header from './layout/header';

// actions
import { getCredentials } from '../actions';

class App extends Component {

	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		const { dispatch } = this.props;

		dispatch( getCredentials() );
	}

	render() {
		const { user } = this.props;

		return (
			<div className="container">
				<Header user={ user } />
				App?
			</div>
		);
	}

}

function select( state ) {
	return state;
}

export default connect( select )( App );
