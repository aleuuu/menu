import React from 'react';
import { Link } from 'react-router-dom';
import CardCategory from './cardCategory';

function Main() {
    return(
        <div className="row">
            <Link to="/cezar">
                <CardCategory title='Цезарь'></CardCategory>
            </Link>
            <Link to="/cezar">
                <CardCategory title='Филадельфия'></CardCategory>
            </Link>
        </div>
    )
}

export default Main()