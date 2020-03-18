import {FETCH_TEAM_REQUEST} from './types'
import {FETCH_TEAM_SUCCESS} from './types'
import {FETCH_TEAM_FAILURE} from './types'

const initialState ={
    isLoading:false,
    teamMembers:[],
    error:''
}

export const listReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_TEAM_REQUEST:return {
            ...state,
            isLoading:true
        }
        case FETCH_TEAM_SUCCESS:return {
            isLoading:false,
            teamMembers:action.payload,
            error:''
        }
        case FETCH_TEAM_FAILURE:return {
            isLoading:false,
            teamMembers:[],
            error:action.payload
        }
        default: return state
    }
}

export default listReducer