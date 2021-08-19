import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products/category/jewelery';

class Jewelery extends Component {
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
        <h1 style={{textAlign:"center"}}>Jeweleries</h1>
       <div className="container">
        {/* <div className="col-xs-8"> */}
        
        {this.state.users.map((user) => (
                 <div className="card" style={{width: ""}}>
             
           <div className="card-body">
          
           <img  src={user.image} class="card-img-top"  alt="..." />
           
               <h5 className="card-title">{user.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{"Price : "+user.price}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{"Description : "+user.description}</h6>
              
            </div>
          </div>
          

        ))}
        </div>
       
       </div>
       
    );
  }
}
export default Jewelery;