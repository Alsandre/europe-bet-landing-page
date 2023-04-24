import {Outlet} from 'react-router-dom'

import { Header } from "./header"
import { MainNavigation } from './navigation'

export const Layout:React.FC = () => {
    return <>
    <MainNavigation />
    <Outlet />
    </>
}