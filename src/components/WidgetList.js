import React from 'react';

export default function WidgetList(props) {
    return (
        <ul className='widget-list'>{props.children}</ul>
    )

}