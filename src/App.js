import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Contact from './components/Contact.jsx';
import Home from './components/Home';
import Navigation from './components/Navigation';
import PostList from './components/PostList';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    //fetch data from  https://jsonplaceholder.typicode.com/post
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/posts"
          render={(routerProps) => (
            <PostList {...routerProps} posts={this.state.posts} />
          )}
        />
        {/* <Route path="/posts">
          <PostList posts={this.state.posts} />
        </Route> */}
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
