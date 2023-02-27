import signup from './signup.module.css'
import {BsSpotify} from 'react-icons/bs'
import Button from '../../Atoms/Button/Button'
import Input from '../../Atoms/Input/Input'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../FirebaseSetup/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [displayName , setProfileName] = useState('')
    const navigate = useNavigate()

    const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email,password,displayName)
    .then((userCredentials) => {
        console.log(userCredentials)
    })
    .catch((error) => {
        console.log(error)
    })
    }

    const redirectLogInPage = () => {
        navigate('/signin')
    }
    const emailCapture = (e) => {
        setEmail(e.target.value)
    }
    const passwordCapture = (e) => {
        setPassword(e.target.value)
    }
    const profileNameCapture = (e) => {
        setProfileName(e.target.value)
    }
    return (
        <div className={signup.main__Component}>
            <h1 className={signup.heading}> <BsSpotify className={signup.icon__Spotify} /> Spotify </h1>
          <div className={signup.login__Container}>
         <h2 className={signup.sub__Heading3}>Sign up for free to start listening.</h2>
          <button className={signup.google__Button}><img src='https://p7.hiclipart.com/preview/344/344/59/google-logo-g-suite-google.jpg' className={signup.google__Icon}/> Sign up with google </button>
          <button className={signup.google__Button}>Sign up with phone </button>
         <div className={signup.middle__divsion}></div>
         <p className={signup.sub__Heading}>What's your email?</p>
         <Input onChange={emailCapture} type='email' placeholder='Enter your email' />
         <p className={signup.sub__Heading}>Create a password</p>
         <Input onChange={passwordCapture} type='password' placeholder='Creat a password' />
         <p className={signup.sub__Heading}>What should we call you?</p>
         <Input onChange={profileNameCapture} type='text' placeholder='Enter a profile name.' />
         <p className={signup.sub__Heading2}>This appers on your profile.</p>
         <Button onClick={handleSignUp} name='Sign up' />
         </div>
         <p className={signup.sub__Heading4}>Have an account?</p>
         <button onClick={redirectLogInPage} className={signup.google__Button}>Login to SPOTIFY </button>
        </div>
    )
}
export default Signup