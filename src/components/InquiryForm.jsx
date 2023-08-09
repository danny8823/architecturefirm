import React from "react";
import { Form, Button } from "react-bootstrap";
export const Inquire = () => {
    return (
        <div id = 'inquire-container'>
            <h2 className = 'inquire-title'>Contact us for any information</h2>
            <Form className = 'inquire-form'>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group><Form.Group className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control as="input" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control as="input" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}