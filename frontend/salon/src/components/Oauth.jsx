import React from 'react'
import { GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth'
//import { get } from 'mongoose';
import { app } from '../firebase'
import {useNavigate} from 'react-router-dom'
import GoogleButton from 'react-google-button'
export const Oauth = () => {
const navigate=useNavigate();
    const auth=getAuth(app);
    const HandleClick = async () => {
        //const navigate=useNavigate();
        const provider=new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
    })
     try {
        const resultsFromGoogle=await signInWithPopup(auth, provider);
        console.log(resultsFromGoogle);
        
        navigate('/');

     } catch (error) {
        console.log(error);
     }
    }

    
    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-10 text-center w-96">
                <h1 className="text-2xl font-bold mb-4">Welcome to SalonEase</h1>
                <p className="text-gray-600 mb-6">Sign in to continue</p>
              <div className='px-8'>
                <GoogleButton
                    onClick={HandleClick}
                    className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition "
                >
                    
                    Sign in with Google
                </GoogleButton>
               </div>
                
            </div>
        </div>
    );
}

//export default Oauth
