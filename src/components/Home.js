import React from 'react';
import CardList from './CardList';

export default function Home(props) {
  console.log(props);

  const { posts } = props;
  const PostList = posts.slice(0, 3).map((post) => {
    return (
      <div className="col-md-4">
        <CardList {...post} />
      </div>
    );
  });
  return (
    <div className="container my-5">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae non
        quae mollitia debitis porro minima dolor aut odio. Optio soluta, iste a
        tenetur inventore enim porro tempore, cumque, voluptate facere
        asperiores error quibusdam beatae deserunt. Quos aliquid delectus ipsa
        mollitia soluta suscipit harum unde sapiente eius officiis neque numquam
        sed nisi, voluptatem autem deleniti necessitatibus assumenda? Animi
        necessitatibus quisquam aliquam, autem enim unde perspiciatis, dolor
        dicta, maxime aliquid architecto. Aliquam fugit consequatur voluptas
        deleniti alias quidem doloribus ipsa! Adipisci voluptatem at fuga.
        Placeat dolores ducimus at alias excepturi similique velit recusandae ea
        aperiam quae. Id, illum praesentium! Quas, dignissimos similique.
      </p>
      <h3>My Latest post</h3>

      <div className="row">{PostList}</div>
    </div>
  );
}
