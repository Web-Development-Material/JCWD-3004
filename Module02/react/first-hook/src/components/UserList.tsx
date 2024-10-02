import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../app/store'
import axios from 'axios'
import {displayUsers} from '../features/userSlice'
import {useDispatch} from 'react-redux'

const UserList:React.FC = () => {
    const users = useSelector((state: RootState) => state.user.users)
    const dispatch = useDispatch()

    useEffect( () => {
        const fetchUsers = async () => {
            const response = await axios.get('')
            dispatch(displayUsers(response.data))
        }
        fetchUsers()
    }, [dispatch])

    return (
        <duv>
            <h2>User List</h2>
            <table border="0" >
                <thead>
                    <tr><th>Name</th><th>Email</th><th>Password</th></tr>
                </thead>
                <tbody>
                    {
                        users.map( user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList