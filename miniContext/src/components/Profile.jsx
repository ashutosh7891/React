import {React , useContext} from 'react'
import userContext from '../Context/userContext'

function Profile() {
    const {user} = useContext(userContext)

    // checking if user is there 
    if (!user) return <div>Please Login</div>
    else {
        return <div>Welcome {user.userName}</div>
    }
    
}

export default Profile