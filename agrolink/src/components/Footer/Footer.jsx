import React from 'react'
import  './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Footer() {

  const year = new Date().getFullYear();
  return ( 
   <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
            <div className='logo-f'>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1 className='text-white'>Agro Link</h1>
            </div>
          </div>
          <p className='footer_text mt-4'>
           Website that helps you find any kind of product in one place.
          </p>
        </Col>
        
        <Col lg='2' md='3' className='mb-4'>
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'> Avaliable Products</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
           </ListGroup>   
          </div>

        </Col>
        <Col lg='3' md='4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>Kathmandu Nepal</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
              <p>+977-9860914588</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
              <p>agrolink@gmail.com</p>
              </ListGroupItem>
           </ListGroup>   
          </div>
        </Col>
         <Col lg='12'>
          <p className="footer__copyright">Copyright {year}, Agrolink  All right reserved.</p>
         </Col>
      </Row>
    </Container>
  </footer>
 )
}

export default Footer;