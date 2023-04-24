import {Outlet} from 'react-router-dom'

import { MainNavigation } from './navigation'

const Layout:React.FC = () => {
    return <>
    <MainNavigation />
    <Outlet />
    </>
}

export default Layout