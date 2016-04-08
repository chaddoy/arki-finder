import { GET_CREDENTIALS } from '../actions';

export default userReducer;

const initialState = { };

function userReducer ( state = initialState, action ) {

	switch ( action.type ) {
		case GET_CREDENTIALS:
			return Object.assign( { }, action.payload.user );

		default:
			return state;
	}

	return state;
}
