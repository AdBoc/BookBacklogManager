import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export const Home: React.FC = (): JSX.Element => {
  return (
    <div className="Home">
      <div className="Home__frontText">Make your own backlog lists from different categories</div>
      <Link className="Home__link" to='/backlog'>My Backlog</Link>
      <Link className="Home__link" to='/currentReads'>Current Reads</Link>
    </div>
  )
} 