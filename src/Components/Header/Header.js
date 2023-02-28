import header from './header.module.css'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {SlUser} from 'react-icons/sl'

const Header = () => {  

    return (
        <div className={header.main__Component}>
            <p className={header.sub__Heading}>Explore Premium</p>
            <p className={header.sub__Heading2} ><span className={header.profilIcon__Wrapper}><SlUser /></span>
             user_123 <AiOutlineCaretDown /></p>
        </div>
    )
}

export default Header