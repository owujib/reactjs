import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardList({ id, title, body }) {
  console.log({ id, title, body });
  return (
    <Card className="p-2">
      <h1 className="card-header">
        <Link to={`/post/${id}`}>{title.slice(0, 30)}</Link>
      </h1>
      <p className="card-body">{body}</p>
      <Link className="btn btn-primary" to={`/post/${id}`}>
        read more
      </Link>
    </Card>
  );
}
