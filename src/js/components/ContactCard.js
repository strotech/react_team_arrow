import React from "react";
import {Link} from 'react-router-dom';
import '../../css/custom.css';

class ContactCard extends React.Component{

    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleMouseEnter=this.handleMouseEnter.bind(this)
        this.handleMouseLeave=this.handleMouseLeave.bind(this)
        this.handleLike=this.handleLike.bind(this)
    }

    handleMouseEnter(){
        document.getElementById(this.props.contact.name).setAttribute('src',this.props.contact.altImgUrl)
    }
    handleMouseLeave(){
        document.getElementById(this.props.contact.name).setAttribute('src',this.props.contact.imgUrl)
    }
    handleLike(){
        this.setState(prevState=>{
            return {count:prevState.count+1}
            
        })
    }

    render(){
        return (
            <div style={{display: !this.props.contact.name && "none"}}>
                <Link style={{color:'black'}} to={`/member/${this.props.contact.name}`}>
                    <img id={this.props.contact.name} className='contact'  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} src={this.props.contact.imgUrl} />
                </Link>
                <h3 style ={{margin:0}}>{this.props.contact.name} <img onClick={this.handleLike} style={{height:'20px',width:'20px',cursor:'pointer'}} src="https://image.freepik.com/free-vector/facebook-like-icon_1017-8081.jpg" /> {this.state.count}</h3>
                <h6 style={{color: this.props.contact.gender=="male"?"blue":"#db0b2f", margin:"0px 0px 10px 0px"}}>{this.props.contact.alterEgo ? this.props.contact.alterEgo:"NA"}</h6>
            </div>
        )
    }
    
}

export default ContactCard