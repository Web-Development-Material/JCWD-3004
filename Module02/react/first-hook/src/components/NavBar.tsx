import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {RootState} from '../app/store'

const Navbar: React.FC = () => {
    const userCount = useSelector((state:RootState)=> state.user.users.length)

    return (
        <nav className="bg-teal flex p-4 justify-between">
            <div className="text-lg">Network Call Practice</div>
            <div className="flex space-x-4">
                <Link to="/users">Users</Link>
                <Link to="/register">Register</Link>
            </div>
            <div>Users Count: {userCount}</div>
        </nav>
    )
}
export default Navbar