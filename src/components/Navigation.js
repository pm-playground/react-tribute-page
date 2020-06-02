import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
return(
  <nav>
    <div className="main-nav nav">
      <Link to='/'>Disturbed</Link>
    </div>
    <div className="second-nav nav">
      <Link to='/guitars'>Guitars</Link>
      <Link to='/drums'>Drums</Link>
      <Link to='/vocal'>Vocal </Link>
      <Link to='/bass'>Bass</Link>
    </div>
  </nav>
)

}

export default Navigation;
