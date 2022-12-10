import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default function SearchForm() {
    return (
        <Form.Label className='search-form'>
            <div className='form-logo'></div>
            <Form.Control/>
            <Button>Найти</Button>
        </Form.Label>
    )
}