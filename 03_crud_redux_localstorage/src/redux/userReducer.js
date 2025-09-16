
const initialState = JSON.parse(localStorage.getItem("users")) || [] 
console.log(initialState);

const userReducer = (state = initialState,action)=>{


    if (action.type == "CREATE") { 
        return [...state,action.payload]
    }else if(action.type == "DELETE"){
        return state.filter(u=>u.id != action.payload)
    }else if(action.type == "UPDATE"){
        return state.map(u=>u.id == action.payload.id?{...u,name:action.payload.name,email:action.payload.email}:u)
    }
    
    
    return state
}

export default userReducer