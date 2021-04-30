import React, {useCallback} from 'react';
import RegisterComponent from '../components/auth/RegisterComponent'

function RegisterContainer() {
    const registerUser = useCallback((data) => {
        console.log(data)
    }, [])
    return (
        <RegisterComponent registerUser={registerUser}/>
    );
}

export default RegisterContainer;