import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <section className="not_found">
      <h1>404 Page Not Found</h1>
      <p>
        <Link to="/"> Go back to homepage </Link>
      </p>
    </section>);
};

export default NotFoundPage;
