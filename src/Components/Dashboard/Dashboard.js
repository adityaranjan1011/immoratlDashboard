import React, { Component } from 'react';
import './Dashboard.css';
import { FaUserCircle } from 'react-icons/fa';
// import { BrowserRouter as Router, Route} from "react-router-dom";

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    };

    console.log("props",props);
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  logout = (event) =>{
    event.preventDefault();
    this.props.history.push("/" ,);
  }

  render() {
    return (
      <div className="Dashboard">        
        <div className="account-detail"> 
        <div className="section-heading">
            <span> <FaUserCircle className="icon"/> Kishore Pant</span>
          </div>
          <div className="account-section-detail">
           <div className="text">
             
           <span>Account Detail </span>
             </div> 
             <div className="text">
           <span>Setting </span>
             </div> 
             <div className="text">
           <span>My Calender </span>
             </div> 
             <div className="text">
           <span>My notification </span>
             </div> 
             <div className="text">
           <span>My Preferences </span>
             </div> 
             <div className="text">
           <span onClick={this.logout}>Logout </span>
             </div> 
          </div>
        </div>
        <div className="account-section">
          <div className="section-heading">
            <span>Account Detail</span>
          </div>
          <div className="section-detail">
            <span>Username - kishor.pant</span>
            <span>Unique Name - Kishore Pant</span>
            <span>Email -  kishor.pant@immortal-technologies.com</span>
            <span >Phone - 012345689</span>
          </div>
        </div>
       </div>
    );
  }
}

export default Dashboard;