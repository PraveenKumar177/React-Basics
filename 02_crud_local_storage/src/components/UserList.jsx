

const UserList = ({users,setUsers,setUpdatingUser})=>{

    const handleDelete = (id)=>{
        // const index = users.findIndex(u=>u.id == id)
        // users.splice(index,1) 
        const updatedusers = users.filter(u=>u.id != id)
        setUsers(updatedusers)
     }

    return(
        <>
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
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>setUpdatingUser(user)}>Edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
                </table>
            </div>
        </>
    )
}

export default UserList