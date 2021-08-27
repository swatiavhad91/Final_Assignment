import React, { Component } from 'react';
import {Link} from "react-router-dom";

class articlePreview extends Component {

    render() {
        if (this.props.post) {
          return (
            <div className="article">
              <a href={"/blog/" + this.props.post.ID} className="blackLink">
                {this.props.post.featured_image ? (
                  <img
                    className="img-responsive webpic"
                    alt="article header"
                    src={this.props.post.featured_image}
                  />
                ) : (
                  ""
                )}
                <h1 className="text-center">{this.props.post.title}</h1>
                <div className="content"></div>
              </a>
              <Link to={"/blog/" + this.props.post.ID}>
                <button className="btn">Read More</button>
              </Link>
            </div>
          );
        } else {
          return null;
        }
      }
}

export default articlePreview;