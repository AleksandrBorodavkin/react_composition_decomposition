import React from 'react';

export default function NewsList(props) {
    return (
        <ul className='news-list'>{props.children(props.items)}</ul>
    )

}