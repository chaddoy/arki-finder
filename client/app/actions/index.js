// action types
export const GET_CREDENTIALS = 'GET_CREDENTIALS';

let user = {
	'id'        : 69,
	'firstname' : 'Chad',
	'lastname'  : 'Dumadag'
}

export function getCredentials () {
	return {
		'type'    : GET_CREDENTIALS,
		'payload' : {
			'user' : user
		}
	}
}