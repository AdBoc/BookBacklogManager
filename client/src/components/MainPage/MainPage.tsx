import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = (): JSX.Element => {

    return (
        <>
            <div>Make your own backlog lists from different categories</div>
            <Link to='/backlog'>Go to BacklogManager</Link>
            <Link to='/currentReads'>View Current Reads</Link>
            <Link to='/customization'>View customization</Link>
        </>
    )
}

export default MainPage;