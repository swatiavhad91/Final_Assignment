
import React from 'react';

class Jewelery extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://fakestoreapi.com/products/category/jewelery ';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>Jewelery Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default Jewelery;
