import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchPost } from "../redux/postSlice"
import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const PostView = ()=>{
    const {id} = useParams()
    
    const dispatch = useDispatch()
    const {post,postLoading,postError} = useSelector(state=>state.posts)
    console.log(post);
    

    useEffect(()=>{
        if (id) {
            dispatch(fetchPost(id));
        }
    },[id, dispatch])
    
    return(
        <>
            {post && 
                <div>
                    <h2>Post Id : {post.id}</h2>
                    <h4>Post Title : {post.title}</h4>
                    <p>Body : {post.body}</p>
                    <Link to={"/"} >View All Posts</Link>
                    <hr />
                </div>
            }   
        </>
    )
}
export default PostView