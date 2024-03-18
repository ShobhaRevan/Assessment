import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup, Card } from 'react-bootstrap';
import { Person, Lock } from '@mui/icons-material';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginForm = () => {
    return (
        <Container style={{ padding: '10px' }}>
            <Card style={{
                width: '250px', height: '400px', border: '1px solid #dee2e6', borderRadius: '10px', padding: '20px',
                backgroundColor: 'lightgrey'}}>
                <Row className="justify-content-center" style={{display:'flex'}}>
                    <Col xs={12} md={6}>
                        <h2 className="text-center mb-4" style={{ textAlign: 'center' }}>Login</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><Person /></InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><Lock /></InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicForgotPassword" style={{ textAlign: 'right' }}>
                                <Form.Text className="text-right">
                                    <a href="/forgot-password">Forgot Password?</a>
                                </Form.Text>
                            </Form.Group>
                            <br />

                            <Button variant="primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>
                                Login
                            </Button>
                            <br />
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Form.Text className="mt-3">
                                    Or Sign Up Using
                                </Form.Text>
                            </div>


                            <div className="text-center mt-3" style={{ textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faFacebook} className="me-3" style={{ color: '#3b5998', marginRight: '10px' }} />
                                <FontAwesomeIcon icon={faTwitter} className="me-3" style={{ color: '#1DA1F2', marginRight: '10px' }} />
                                <FontAwesomeIcon icon={faGoogle} style={{ color: '#DB4437', marginRight: '10px' }} />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default LoginForm;
