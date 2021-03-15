import React, { Component } from 'react';

class PostList extends Component {
  render() {
    const { posts } = this.props;

    const items = posts.slice(0, 10).map((post) => {
      return (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>PostList</h1>
        <div>{items}</div>
      </div>
    );
  }
}

export default PostList;
