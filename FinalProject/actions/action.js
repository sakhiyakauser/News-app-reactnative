import Firebase from '../user/Firebase.js'
export const EMAIL = 'UPDATE_EMAIL'
export const PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const updateEmail = email => {
	return {
		type: EMAIL,
		payload: email
	}
}
export const updatePassword = password => {
	return {
		type: PASSWORD,
		payload: password
	       }
      }
export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
			dispatch(getUser(response.user.uid))
			} 
		catch (error) 
		{
			console.log('error')
		}
	}
 }
export const getUser = (uid)=> {
	return async (dispatch) => {
		try {
		     dispatch({ type: LOGIN, payload: user.UID() })
		} catch (error) {
			alert(error)
		}
	}
}
export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email
				}
              dispatch({ type: SIGNUP, payload: user })
			    }
		     } 
		catch (error) {
			alert(error)
		}
	}
}
