import React from "react";
import ContactCard from "./ContactCard"
import {connect} from 'react-redux'
import {fetchUsers} from '../../redux/index'
import '../../css/custom.css';

function Info (props){

        console.log(props)
     
        const firstName="Sijil"
        const lastName="Salim"
    
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
    
        const inLineStyle={
            fontSize:30,
            margin:"10px 0px 10px 0px"
        }
    
        if(hours<12){
            timeOfDay='Morning'
            inLineStyle.color='#66cdaa'
        }else if(hours>=12 && hours<=15){
            timeOfDay='Afternoon'
            inLineStyle.color='#ffff66'
        }else{
            timeOfDay='Evening'
            inLineStyle.color='#999966'
        }

        
        return (
            <div className='info'>     
                <button onClick={props.fetch}>Fetch List</button>      
                <p style={inLineStyle}>Hi {`${firstName} ${lastName}, Good ${timeOfDay}, Welcome to Team Arrow`}</p>
                {props.isLoading?'Loading......':
                 props.teamMembers.map(member=> <ContactCard key={member.id} contact={member}/>)}
            </div>
        )
    
}

const mapStateToProps = state =>{
    return {
        isLoading:state.isLoading,
        teamMembers:state.teamMembers,
        error:state.error
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        fetch: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)