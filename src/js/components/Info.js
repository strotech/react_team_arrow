import React from "react";
import ContactCard from "./ContactCard"
import {connect} from 'react-redux'
import {fetchUsers,allLiker} from '../../redux/index'
import '../../css/custom.css';

class Info extends React.Component{


        constructor(){
            super()
        }

        componentDidMount(){
           this.props.fetch()
        }

        render(){
     
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
                    <button style={{display:'none'}} onClick={this.props.fetch}>Fetch List</button>      
                    <p style={inLineStyle}>Hi {`${firstName} ${lastName}, Good ${timeOfDay}, Welcome to Team Arrow`}</p>
                    {this.props.isLoading?'Loading......':<button onClick={this.props.handleLike}>Like All</button>}                    
                    {this.props.isLoading?'Loading......':this.props.teamMembers.map(member=> <ContactCard key={member.id} contact={member}/>)}
                </div>
            )
        }
    
}

const mapStateToProps = state =>{
    return {
        isLoading:state.list.isLoading,
        teamMembers:state.list.teamMembers,
        error:state.list.error
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        fetch: ()=>dispatch(fetchUsers()),
        handleLike: ()=>dispatch(allLiker())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)