import {FETCH_TEAM_REQUEST} from './types'
import {FETCH_TEAM_SUCCESS} from './types'
import {FETCH_TEAM_FAILURE} from './types'

const axios=require('axios')

const fetchUsersRequest=()=>{
    return {
        type:FETCH_TEAM_REQUEST
    }
}

const fetchUsersSuccess=(users)=>{
    return {
        type:FETCH_TEAM_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure=(error)=>{
    return {
        type:FETCH_TEAM_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest)
 //       axios.get("http://localhost:9001/arrowteam")
        fetch("http://localhost:9001/arrowteam")
        .then(response=>response.json())
        .then(details=>dispatch(fetchUsersSuccess(details.data)))
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}