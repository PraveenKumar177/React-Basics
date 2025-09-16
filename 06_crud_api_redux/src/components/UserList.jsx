import { useEffect } from "react"
import { fetchUsers,deleteUser } from "../redux/userSlice"
import { useDispatch,useSelector } from "react-redux"

const UserList = ({setSelectedUser})=>{
    const dispatch = useDispatch()

    const {lists,error,loading} = useSelector(state=>state.users)


    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    const handleDelete = (id)=>{
        dispatch(deleteUser(id))
    }

    return(
        <>
            {loading && <p className="text-center text-success">Loading...</p> }
            {lists.length > 0 ?
            <div className="col-12 mt-4">
                <h3>User List</h3>
                
                <table className='table table-bordered table-striped table-hover'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    
                    {lists.map((user)=>(
                        <tr key={user.id} >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-primary'onClick={()=>setSelectedUser(user)} >Edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>handleDelete(user.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                        
                    
                </tbody>
                </table>
            </div>
            : <h3 className="text-center text-secondary">Users Not Found</h3>}
        </>
    )
}

export default UserList