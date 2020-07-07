import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const MainPage: React.FC = (): JSX.Element => {

    return (
        <div className="MainPage">
            <div>Make your own backlog lists from different categories</div>
            <Link className="MainPage__link" to='/backlog'>My Backlog</Link>
            <Link className="MainPage__link" to='/currentReads'>Current Reads</Link>
        </div>
    )
}

export default MainPage;