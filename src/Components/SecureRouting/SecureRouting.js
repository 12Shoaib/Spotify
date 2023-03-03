import {loginValue} from '../../Recoil/Recoil'
import { useRecoilValue } from 'recoil'
import { Outlet, Navigate } from 'react-router-dom'


const SecureRouting = () => {
      const logInStatus = useRecoilValue(loginValue)

    return (
        <div>
            {
                logInStatus ?
                <Outlet />
                :
                <Navigate to='/signin' />
            }

        </div>
    )
}

export default SecureRouting