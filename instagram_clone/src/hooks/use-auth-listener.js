// for check if user is logged in/out

import FirebaseContext from '../context/firebase';
import { useState, useEffect, useContext, React } from 'react';

export default function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(()=> {
        const listener = firebase.auth().onAuthStateChanged((authUser)=>{
            if (authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            }else{
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return ()=> listener();
    }, [firebase]);

    return { user };
}