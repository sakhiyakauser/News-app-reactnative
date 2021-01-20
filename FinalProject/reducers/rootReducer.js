import { combineReducers } from 'redux'
import { LOGIN, SIGNUP, EMAIL, PASSWORD} from '../actions/action'

const user = (state = {}, action) => {
	switch (action.type) {
		case LOGIN:
			return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
		case SIGNUP:
			return Object.assign({}, state, {
                isLoggedIn: false,
                username: action.username,
                password: action.password
			});
		case EMAIL:
			return { ...state, email: action.payload }
		case PASSWORD:
			return { ...state, password: action.payload }
		default:
			return state
	}
}

const rootReducer = combineReducers({
	user
})

export default rootReducer