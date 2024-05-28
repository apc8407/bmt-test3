import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScAr0xjKybkSSym5GL6x1ShFS9uml1ADp8rOJ-iPUqQIjtUdg/viewform?embedded=true" 
          width="640" 
          height="480" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0">
          Loading…
        </iframe>
      </Container>
      <Container fluid>
        <div className='contact-info'>
        <ul>
            <li>
              <i className="fas fa-envelope"></i>
              BMTservicesinc2020@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              (914) 879-0017
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              10 Delongis Ct, Sparkill <br /> New York, 10976, USA
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
export default AppContact;