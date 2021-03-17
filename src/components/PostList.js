import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions/postAction';

import { Container, Row, Col } from 'react-bootstrap';
import CardList from './CardList';

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    // const { posts } = this.props;

    // const items = posts.slice(0, 10).map((post) => {
    //   return (
    //     <Col md={4} className=" mb-2">
    //       <CardList {...post} />
    //     </Col>
    //   );
    // });
    console.log(this.props);
    return (
      <div className="bg-light">
        <h1>PostList</h1>
        {/* <Container>
          <Row className="my-5">{items}</Row>
        </Container> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.posts,
});

export default connect(mapStateToProps, { getPosts })(PostList);
