import Navbar from '../components/navbar/Navbar'
import UsersComponent from '../components/usersComponent/UsersComponent'
import { Navigate } from 'react-router-dom'

const Users = ({ logout, loggedIn }) => {
  if (!loggedIn) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <>
      <Navbar logout={logout} />
      <UsersComponent />
    </>
  )
}

export default Users
