import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <form action="">
          <div>
            <input type="text" name="name" placeholder="enter your name" />
          </div>
          <div>
            <input type="text" name="email" placeholder="enter your email" />
          </div>
          <div>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
