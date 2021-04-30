import React, {useCallback} from 'react';
import LoginComponent from '../components/auth/LoginComponent'

function LoginContainer() {
    const loginUser = useCallback((data) => {
        console.log(data)
    }, [])
    return (
        <LoginComponent loginUser={loginUser}/>
    );
}

export default LoginContainer;