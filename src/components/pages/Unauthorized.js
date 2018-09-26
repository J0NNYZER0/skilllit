import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <section>
      <h1>
        Unauthorized
      </h1>
        <Link className="button" to="/login"> Login </Link>
        <Link className="button" to="/"> Go back to homepage </Link>
    </section>
  );
};

export default Unauthorized;
