import { Alert } from '@mui/material';
import { useState } from 'react'
import './loginComponent.css'

const LoginComponent = ({ login }) => {
    const [alertContents, setAlertContents] = useState(null);

    const [value, setValue] = useState({
        username: undefined,
        password: undefined
    })

    const handleChange = (e) => {
        setValue((prev) => (
            { ...prev, [e.target.id]: e.target.value }
        ))
    }

    const credentials = {
        username: "admin@frejun",
        password: "12345678"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (!(value.username === credentials.username)) {
                setAlertContents("Wrong credentials!")
                return
            }

            if (!(value.password === credentials.password)) {
                setAlertContents("Wrong credentials!!")
                return
            }

            login(credentials);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="loginSection">

                <form onSubmit={handleSubmit} className="loginContainer">
                    {alertContents ? <Alert severity="error" onClose={() => setAlertContents(null)}>{alertContents}</Alert>: (<></>)}
                    <h1 className="loginTitle">Log in</h1>

                    <div className="loginInputContainer">
                        <label>Username</label>
                        <input type="text" id="username" placeholder="Enter your username" value={value.username || ""} onChange={handleChange} autoFocus />
                    </div>

                    <div className="loginInputContainer">
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Enter your password" value={value.password || ""} onChange={handleChange} />
                    </div>

                    <div className="loginSubmit">
                        <button type="submit" disabled={!(value.username && value.password)}>Login</button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default LoginComponent
