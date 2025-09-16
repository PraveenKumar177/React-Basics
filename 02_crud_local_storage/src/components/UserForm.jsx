import { useEffect } from "react";
import { useForm } from "react-hook-form"
const UserForm = ({users,setUsers,updatingUser}) => {
    const {register,reset,handleSubmit,formState:{errors}} = useForm();
    
    useEffect(()=>{
        if (updatingUser) {
            reset(updatingUser)
        } else {
            reset({name:"",email:""})
        }
    },[updatingUser,reset])

    

    const formSubmit = (data)=>{
        if (updatingUser) {
            const updateUsers = users.map(u=>u.id == updatingUser.id?{...u,name:data.name,email:data.email}:u)
            setUsers(updateUsers)
        } else {
            setUsers(prev=>[...prev,{id:Date.now(), name:data.name,email:data.email }])
        }
        reset({name:"",email:""})
    }

    return (
    <>
        <div className="col-md-6">
            <h3>User Form</h3>
            <form onSubmit={handleSubmit(formSubmit)} >
            <div className='mb-3'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" 
                name="name" 
                id="name" 
                className='form-control'
                placeholder='Enter Your Name...'
                {...register("name",{required:"Name is Required"})}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p> }
            </div>
            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" 
                name="email" 
                id="email" 
                className='form-control'
                placeholder='Enter Your Email...'
                {...register("email",{required:"Email is Required"})}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p> }
            </div>
            <div className='d-flex justify-content-around'>
                <button type='submit'className='btn btn-success'>{updatingUser?"Update":"Submit"}</button>
                <button type='reset' className='btn btn-danger'>Reset</button>
            </div>
            </form>
        </div>
    </>
    )
}

export default UserForm