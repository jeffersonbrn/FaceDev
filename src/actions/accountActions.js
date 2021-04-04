import authService from '../services/authService';

const signIn = (email, password) => {
    return async (dispatch) => {
        const user = await authService.signIN(email, password);

        dispatch({
            type: 'LOGIN_SUCESS',
            payload:{
                user: user
            }
        })
    }
}

export default signIn;