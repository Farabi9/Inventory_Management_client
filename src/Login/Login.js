import React from 'react';
import auth from '../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
             
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline uppercase">Continue With google</button>

        </div>
    );
};

export default Login;