import { useSelector,useDispatch } from "react-redux"

const UserList = ({setSelecteduser})=>{
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)

    const handleDelete = (id)=>{
        dispatch({type:"DELETE",payload:id})
        
        
    }
    
    return(
        <>
            {users.length > 0 ?
            <div className="col-12 mt-4">
                <h3>User List</h3>
                <table className='table table-bordered table-striped table-hover'>
                <tbody>
                    <tr >
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    {users && 
                        users.map((user)=>(
                            <tr key={user.id} >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={()=>setSelecteduser(user)}>Edit</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        
                    }
                </tbody>
                </table>
            </div>
            : <p>Users Not Found</p>
                    }
        </>
    )
}

export default UserList