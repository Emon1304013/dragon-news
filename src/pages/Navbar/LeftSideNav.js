import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    return (
        <div>
            <ul className='list-none'>
                <li>
                    <Link>Lorem</Link>
                </li>
                <li>
                    ipsum
                </li>
                <li>
                    dolor
                </li>
            </ul>
        </div>
    );
};

export default LeftSideNav;