import header from './header.module.css'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {SlUser} from 'react-icons/sl'
import {useState} from 'react'
import {loginValue} from '../../Recoil/Recoil'
import { useSetRecoilState } from 'recoil'

const Header = () => {  
    const [show , setShow] = useState(false)
    const isLogOut = useSetRecoilState(loginValue)
    const handleShow = () => {
        setShow(!show)
    }
    const logOut = () => {
        isLogOut(false)
    }

    return (
        <div className={header.main__Component}>
            <p className={header.sub__Heading}>Explore Premium</p>
            <p onClick={handleShow} className={header.sub__Heading2} ><span className={header.profilIcon__Wrapper}><SlUser /></span>
             user_123 <AiOutlineCaretDown /></p>
           {show &&  <div onClick={logOut} className={header.show_Component}>
                Log Out 
             </div>}
        </div>
    )
}

export default Header