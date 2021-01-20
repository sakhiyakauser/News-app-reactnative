
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import MainNavigator from './navigation/MainNavigator'
import rootReducer from './reducers/rootReducer'
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, middleware)
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		)
	}
}

