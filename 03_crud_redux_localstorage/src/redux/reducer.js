
const counterReducer = (state = {current_count : 1},action)=>{


    if (action.type == 'INCREMENT') {
        return state = {current_count : state.current_count + 1}
    }
    return state
} 

export default counterReducer