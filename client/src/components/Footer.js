import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        content
                    </Col>
                    <Col className="text-center py-3">
                        content 2
                    </Col>
                </Row>
                <Row>
                  <Col className='text-center py-3'>
                      Copyright &copy; LancasterHouse
                  </Col>
                </Row>
            </Container>            
        </footer>
    )
}

export default Footer


