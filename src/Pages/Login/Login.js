import login from './login.module.css'
import {BsSpotify} from 'react-icons/bs'
import Button from '../../Atoms/Button/Button'
import Input from '../../Atoms/Input/Input'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth , provider} from '../../FirebaseSetup/Firebase'
import { signInWithEmailAndPassword , signInWithPopup } from 'firebase/auth'
import {loginValue} from '../../Recoil/Recoil'
import { useRecoilState } from 'recoil'


const Login = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginValue)
    const navigate = useNavigate()

    const loginWithGoogle = () => {
        signInWithPopup(auth,provider)
        .then((user) => {
            console.log(user)
            navigate('/')
            setIsLoggedIn(true)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth , email , password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/')            
        })
        .catch((error) => {
            console.log(error)
            setError(`"No user found"`)
        })
    }
    const redirectSignupPage = () => {
        navigate('/signup')
    }
    const emailCapture = (e) => {
        setEmail(e.target.value)
    }
    const passwordCapture = (e) => {
        setPassword(e.target.value)
    }
    return(
        <div className={login.main__Component}>
         <h1 className={login.heading}> <BsSpotify className={login.icon__Spotify} /> Spotify </h1>
          <div className={login.login__Container}>
         <p className={login.sub__Heading3}>To continue, log in to Spotify.</p>
          <button onClick={loginWithGoogle} className={login.google__Button}><img src='https://p7.hiclipart.com/preview/344/344/59/google-logo-g-suite-google.jpg' className={login.google__Icon}/> Continue with google </button>
          <button className={login.google__Button}>Continue with phone </button>
         <div className={login.middle__divsion}></div>
         <p className={login.sub__Heading}>Email address or username</p>
         <Input onChange={emailCapture} type='email' placeholder='Email adress or user name' />
         <p className={login.sub__Heading}>Password</p>
         <Input onChange={passwordCapture} type='password' placeholder='Password' />
         <p className={login.sub__Heading2}>Forgot your password?</p>
         <h4 className={login.login__Error}>{error}</h4>
         <Button onClick={handleLogIn} name='Log-in' />
         </div>
         <p className={login.sub__Heading4}>Don't have an account?</p>
         <button onClick={redirectSignupPage} className={login.google__Button}>SIGNUP FOR SPOTIFY </button>
        </div>
    )
}

export default Login