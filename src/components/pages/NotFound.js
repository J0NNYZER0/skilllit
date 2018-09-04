import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="notfound">
      <h1>
        Page Not Found
      </h1>
        <Link className="button" to="/"> Go back to homepage </Link>
    </section>
  );
};

export default NotFoundPage;
