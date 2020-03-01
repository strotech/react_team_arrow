import React from "react";
import ContactCard from "./ContactCard"
import '../../css/custom.css';

class Info extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading:false,
            teamMembers:[]
        }
    }

    componentDidMount(){
        this.setState({isLoading:true})
        fetch("http://localhost:9001/arrowteam")
        .then(response=>response.json())
        .then(details=>{
            this.setState({
                isLoading:false,
                teamMembers:details.data
            })
        })    
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
                <p style={inLineStyle}>Hi {`${firstName} ${lastName}, Good ${timeOfDay}, Welcome to Team Arrow`}</p>
                {this.state.isLoading?'Loading......':
                this.state.teamMembers.map(member=> <ContactCard key={member.id} contact={member}/>)}
            </div>
        )
    }
}

export default Info