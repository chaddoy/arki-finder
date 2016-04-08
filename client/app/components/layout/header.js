import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

	constructor( props ) {
		super( props );
	}

	render() {
		const { user } = this.props;

		return (
			<div>
				{ user.firstname }
			</div>
		);
	}

}

function select( state ) {
	return { };
}

export default connect( select )( Header );
