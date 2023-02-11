import './App.css'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './pages/Users'
import { useState } from 'react'

function App() {
  const localStorageCreds = JSON.parse(localStorage.getItem("user"))
  const [credentials, setCredentials] = useState(localStorageCreds)

  const loggedIn = credentials !== null

  function login(credentials) {
    localStorage.setItem('user', JSON.stringify(credentials))
    setCredentials(credentials)
  }

  function logout() {
    localStorage.removeItem('user')
    setCredentials(null)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login login={login} loggedIn={loggedIn} />
    },
    {
      path: "/users",
      element:  <Users logout={logout} loggedIn={loggedIn} />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
