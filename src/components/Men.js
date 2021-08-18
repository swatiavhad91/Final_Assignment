

import React from 'react';

class Men extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://fakestoreapi.com/products ';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>Men clothing Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default Men;