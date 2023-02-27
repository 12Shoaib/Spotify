import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../FirebaseSetup/Firebase'
import {useState , useEffect } from 'react'

const AuthDetails = () => {
    const [authUser , setAuthUser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth , (user) => {
            if(user) {
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })

    },[])
    return(
        <div>
            {authUser ?  <h3>No user found..!</h3>
            :
            <h3>Sign in sucessfull</h3>
           
            }

        </div>
    )
}

export default AuthDetails