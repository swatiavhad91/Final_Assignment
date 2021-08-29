import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const API_URL = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';

class Support extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }
  render() {

    return (
      <div>
          <Header/>
         <h1 style={{textAlign:"center"}}>Customer Support</h1>
       
         <div className="women_container">
       
        {this.state.users.map((user) => (
          
                 <div className="card" style={{width: "30%", marginLeft:"1%"}}>
             
           <div className="card-body">
          
           
           
               
              <h3 className="card-subtitle mb-2 ">{"Name :  "+user.name}</h3>
              <h6 className="card-subtitle mb-2 ">{"City : "+user.city}</h6>
              
            </div>
          </div>
          
          
        ))}
        </div>
        <Footer/>
        </div>
     
    );
  }
}
export default Support;