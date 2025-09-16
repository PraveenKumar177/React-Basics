import { useSelector,useDispatch } from "react-redux"
import { deleteUser } from "../redux/userSlice"

const UserList = ({setSelecetdUser})=>{
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)

    const handleDelete = (id)=>{
        dispatch(deleteUser(id))
    }    
    return(
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
               {users.map((user)=>(
                <tr key={user.id} >
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className='btn btn-primary' onClick={()=>setSelecetdUser(user)}>Edit</button>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>handleDelete(user.id)} >Delete</button>
                    </td>
                </tr>
               ))} 
                
                    
            </tbody>
            </table>
        </div>
    )
}

export default UserList