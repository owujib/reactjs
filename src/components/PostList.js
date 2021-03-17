import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import CardList from './CardList';

class PostList extends Component {
  render() {
    const { posts } = this.props;

    const items = posts.slice(0, 10).map((post) => {
      return (
        <Col md={4} className=" mb-2">
          <CardList {...post} />
        </Col>
      );
    });
    return (
      <div className="bg-light">
        <h1>PostList</h1>
        <Container>
          <Row className="my-5">{items}</Row>
        </Container>
      </div>
    );
  }
}

export default PostList;
