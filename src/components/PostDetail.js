import React, { Component } from 'react';

import axios from 'axios';

class PostDetail extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    const postId = this.props.match.params.id;
    axios
      .get('http://jsonplaceholder.typicode.com/posts/' + postId)
      .then((res) => {
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  render() {
    const { post } = this.state;
    console.log(this.props);
    return (
      <div className="container mt-5 bg-light p-5">
        <h1 className="mb-3">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default PostDetail;
