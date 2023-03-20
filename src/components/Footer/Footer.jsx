import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";  
import {Link} from "react-router-dom";  
import '../../styles/footer.css'


const quickLinks = [
  {
    path: '/about', 
    display: 'About'
  }, 
  {
    path: '#', 
    display: 'Privacy Policy'
  }, 
  {
    path: '/cars', 
    display: 'Car Listing'
  }, 
  {
    path: '/blogs', 
    display: 'Blog'
  }, 
  {
    path: '/contact', 
    display: 'Contact'
  }, 


]
const Footer = () => { 

  const date = new Date() 
  const year = date.getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col 
            lg="4" 
            md="4" 
            sm='12'
          >             
            <div className="logo footer__logo">
                <h1>
                  <Link to='/home' className='d-flex align-items-center gap-2'>
                    <i className="ri-car-line"></i> 
                    <span>Rent Car <br/> Serivce</span>
                  </Link>
                </h1>
            </div> 
            <p className="footer__logo-content">
            Our Rent Car Service offers hassle-free, convenient, and affordable transportation with a wide selection of high-quality vehicles to choose from, making it the perfect choice for any traveler. Trust us to make your rental experience smooth and stress-free with our easy booking system and top-notch customer service.
            </p> 
          </Col> 

          <Col lg='2' md='4' sm='6'>
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5> 
              <ListGroup>
                {
                  quickLinks.map((item, index) =>(
                    <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                      <Link to={item.path}>
                        {item.display}
                      </Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col> 

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Head Office</h5>  
              <p className="office__info">420 Astro, Houston</p>
              <p className="office__info">Phone: +16664201234</p>
              <p className="office__info">Email: lonestar@houstir.net</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col> 

          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5> 
              <p className="section__description">Subscribe To Our Newsletter</p> 
              <div className="newsletter">
                <input type="email" placeholder="Email" /> 
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col> 

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by User. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;