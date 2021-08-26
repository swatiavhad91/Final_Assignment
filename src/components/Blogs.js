import React, { Component } from 'react';
import axios from 'axios';

const URL1 = 'https://jsonplaceholder.typicode.com/posts';
const URL2= ' https://jsonplaceholder.typicode.com/comments';

class Blogs extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${URL1}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }
  render() {

    return (
      <div>
        <h1 style={{textAlign:"center"}}>Blogs</h1>
       
        <div className="col-xs-8"> 
        
        {this.state.users.map((user) => (
                 <div className="card" style={{width: ""}}>
             
           <div className="card-body">  
           <img src="../Assets/download.jpg" width="10%"  style={{borderRadius:"50%"}}/>       
               <h5 className="card-title">{"User ID : "+user.id}</h5>
              <h6 className="card-title ">{"Title : "+user.title}</h6>
              <h6 className="card-subtitle">{"Body : "+user.body}</h6>
              
            </div>
          </div>
          
         

        ))}
        </div>
        </div>
       
    );
  }
}
export default Blogs;