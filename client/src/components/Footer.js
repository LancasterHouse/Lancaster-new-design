import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import logo from '../images/lhlogo.png';

const Footer = () => {
    return (
        <footer>
            <Container className="container-fluid">
                <Row>
                    <Container className="nested-container">
                    <Col className="text-center py-3">
                        <div className="footer-contact-info"> 
                            <img src={logo} alt="Lancaster House logo" />
                            <p>1881 Yonge Street, Suite 200, Toronto, ON M4S 3C4 ( <a href="https://www.google.com/maps/place/Lancaster+House/@43.6977325,-79.3981531,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34b254bcb2b1:0x1f9f078f7e165755!8m2!3d43.6977286!4d-79.3959644">See map</a> )
                                <br />(416) 977-6618
                                <br /><a
                                href="mailto:customerservice@lancasterhouse.com">customerservice@lancasterhouse.com</a>
                             </p>
                             <a href="#">< FaTwitterSquare /></a>
                             <a href="#"><FaLinkedin /></a>
                        </div>
                      
                    </Col>
                    <Col className="text-center py-3">
                        <div class="footer-links-container">
                            <div class="footer-links">
                                <h4><a href="#">Legal</a></h4>
                                <ul>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                    <li><a href="#">Legal Notices</a></li>
                                    <li><a href="#"><em>AODA</em> Policy</a></li>
                                </ul>
                            </div>
                            <div class="footer-links">
                                <h4><a href="#">First Resort&#8482;</a></h4>
                                <ul>
                                    <li><a href="#">eAlerts</a></li>
                                    <li><a href="#">Headlines</a></li>
                                    <li><a href="#"><em>Collective Agreements</em> eText</a></li>
                                    <li><a href="#"><em>Leading Cases</em> eText</a></li>
                                    <li><a href="#"><em>Wrongful Dismissal</em> eText</a></li>
                                    <li><a href="#">Supreme Court Decisions</a></li>
                                    <li><a href="#"><em>CLELJ</em> Academic Journal</a></li>
                                </ul>
                            </div>
                            <div class="footer-links">
                                <h4><a href="#">Site Map</a></h4>
                                <ul>
                                    <li><a href="#">Training/Events</a></li>
                                    <li><a href="#">Publications</a></li>
                                    <li><a href="#">Resources</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    </Container>
                    
                </Row>
                
            </Container>            
        </footer>
    )
}

export default Footer


