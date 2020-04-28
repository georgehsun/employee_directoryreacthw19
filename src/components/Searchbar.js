import React from 'react';
import { Form } from 'react-bootstrap';

function Searchbar(props) {
    return (
        <Form>
            <Form.Group>
                <Form.Label for="exampleEmail"></Form.Label>
                <Form.Control onChange={(e) => props.filter(e.target.value)} type="text" placeholder="Filter by First Name" />
            </Form.Group>
        </Form>
    )
};


export default Searchbar