import { useDispatch,useSelector } from "react-redux"
import { fetchAllPosts } from "../redux/postSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const Post = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAllPosts())
    },[])


    const {posts,loading,error} = useSelector(state=>state.posts)

    
    return(
        <>
            <div>
                {posts.map((post)=>(
                    <div key={post.id} >
                        <h2>ID : {post.id}</h2>
                        <h4>Title : {post.title}</h4>
                        <p>Body : {post.body}</p>
                        <Link to={`/post/${post.id}`}>View Post</Link>
                        <hr />
                    </div>
                ))}
            </div>
            
        </>
        

    )
}
export default Post