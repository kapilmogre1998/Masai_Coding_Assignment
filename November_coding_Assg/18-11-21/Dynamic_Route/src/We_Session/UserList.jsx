import {useEffect} from 'react'
import { Link } from 'react-router-dom'

export const UserList = () => {
    const arr = [1,2,3,4]

    useEffect(async () => {
        const res = await fetch("https://reqres.in/api/users")
        const {data} = await res.json();
        console.log(data)
    }, [])
    return (
        <div>
            {
                arr.map(e =>
                    <Link >
                    <div key={e}>User {e} </div>
                    </Link>)
            }
        </div>
    )
}
