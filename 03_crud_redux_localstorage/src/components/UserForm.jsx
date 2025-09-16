import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

const UserForm = ({selectedUser,setSelecteduser})=>{
    const dispatch = useDispatch()
    const {register,reset,handleSubmit,formState:errors} = useForm()


    useEffect(()=>{
        if (selectedUser) {
            reset(selectedUser)
        } else {
            reset({name:"",email:""})
        }
    },[selectedUser,reset])

    const formSubmit = (data)=>{

        if (selectedUser) {
            dispatch({type:"UPDATE",payload:{id:selectedUser.id,name:data.name,email:data.email}})
        } else {
            dispatch({type:"CREATE",payload:{id:Date.now(),name:data.name,email:data.email}})    
        }
        reset({name:'',email:''})
    }
    return(
        <>
            <div className="col-md-6">
                <h3>User Form</h3>
                <form  onSubmit={handleSubmit(formSubmit)} >
                <div className='mb-3'>
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" 
                    name="name" 
                    id="name" 
                    className='form-control'
                    placeholder='Enter Your Name...'
                    {...register('name',{required:"Name is Required"})}
                    />
                    
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    className='form-control'
                    placeholder='Enter Your Email...'
                    {...register('email',{required:"Email is Required"})}
                    />
                    
                </div>
                <div className='d-flex justify-content-around'>
                    <button type='submit'className='btn btn-success'>Submit</button>
                    <button type='reset' className='btn btn-danger'>Reset</button>
                </div>
                </form>
            </div>
        </>
    )
}


export default UserForm