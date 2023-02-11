import LoginComponent from '../components/loginComponent/LoginComponent'
import { Navigate } from 'react-router-dom'



const Login = ({ login, loggedIn }) => {
  if (loggedIn) {
    return <Navigate to="/users" replace={true} />
  }
  return (
    <>
      <LoginComponent login={login} />
    </>
  )
}

export default Login
