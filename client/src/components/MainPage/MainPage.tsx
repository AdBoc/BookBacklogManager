import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = (): JSX.Element => {

    return (
        <>
            <div>Make your own backlog lists from different categories</div>
            <Link to='/backlog'>Go to BacklogManager</Link>
            <Link to='/currentReads'>View Current Reads</Link>
        </>
    )
}

export default MainPage;