import './usersComponent.css'
import { CiSearch } from 'react-icons/ci'
import { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import TableComponent from '../tableComponent/TableComponent'
import { Backdrop, CircularProgress } from '@mui/material'

const UsersComponent = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [searchData, setSearchData] = useState(null)


    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP Error!, status is: ${res.status}`)
                }
                return res.json()
            })
            .then((actualData) => {
                setData(actualData.users)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    const searchItem = (query) => {
        if (!query) {
            setSearchData(data)
            return
        }

        const fuse = new Fuse(data, {
            keys: ["firstName", "lastName", "email"]
        })
        const result = fuse.search(query)
        setSearchData(result.map(item => item.item))
    }


    return (
        <>
            <div className="usersComponentContainer">

                <div className="search">
                    <CiSearch className="searchIcon" />
                    <input type="text" placeholder="Search" onChange={(e) => searchItem(e.target.value)} />
                </div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>

                {!loading && <TableComponent searchData={searchData ?? data} />}


            </div>
        </>
    )
}

export default UsersComponent