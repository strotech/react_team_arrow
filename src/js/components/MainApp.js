import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


import Header from "./Header"
import Footer from "./Footer"
import Info from "./Info"
import AddMember from "./AddMember"
import MemberDetail from "./MemberDetail"


class MainApp extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading: false
            }                
            )
        },1500)
    }


    render(){
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        {this.state.isLoading?<h1>Loading....Hardcoded 1.5s wait</h1>:<Route path='/' exact component={Info}  />}
                        <Route path="/addmember" component={AddMember}  /> 
                        <Route path="/member/:name" component={MemberDetail}  />  
                    </Switch>                
                    <Footer />                    
                </div>
            </Router>
        )
    }
    
}

export default MainApp