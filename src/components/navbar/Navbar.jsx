import './navbar.css'

const Navbar = ({ logout }) => {

    return (
        <>
            <div className="navbarContainer">

                <div className="brandName">
                    <h1>FreJun Task</h1>
                </div>

                <div className="logoutButton">
                    <button onClick={logout}>Logout</button>
                </div>

            </div>
        </>
    )
}

export default Navbar
