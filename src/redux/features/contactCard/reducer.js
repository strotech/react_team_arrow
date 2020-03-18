import {ALL_LIKE} from './types'

const initialState ={
    allLike:0
}

export const contactReducer=(state=initialState,action)=>{
    switch(action.type){
        case ALL_LIKE:return {
            ...state,
            allLike:state.allLike + 1
        }
        default: return state
    }
}

export default contactReducer