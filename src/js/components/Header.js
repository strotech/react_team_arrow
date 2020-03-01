import React from "react";
import {Link} from 'react-router-dom';
import '../../css/custom.css';

class Header extends React.Component{
    render(){
        return (
            <nav className='nav'>
                <Link style={{color:'white'}} to="/">
                    <h3>The Green Arrow</h3>
                </Link>
                <ul className='nav-links' >
                    <Link style={{color:'white'}} to="/addmember">
                        <li>Add Member</li>
                    </Link>
                </ul>
            </nav>
        )
    }

}

export default Header