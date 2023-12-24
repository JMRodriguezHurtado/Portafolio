import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CNDHcertificate from '../assets/CNDHcertificate.png'; 
import CV from '../assets/CV.png';
import henrycertificate from '../assets/henrycertificate.png';
import tituloedit from '../assets/tituloedit.jpg';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-white'>JMRH</h1>
          <p className="lead text-white">Hello! I'm a FullStack Developer with a passion for blending technology and creativity. My interests extend beyond coding – I have a knack for science, a love for all things fantasy, and a deep appreciation for the world of entertainment. Let's create something amazing together!</p>
        </div>
        </div>
        <div className='row'>
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item onClick={() => openModal(henrycertificate)}>
              <img
                className="d-block w-100"
                src={henrycertificate}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item onClick={() => openModal(CNDHcertificate)}>
              <img
                className="d-block w-100"
                src={CNDHcertificate}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item onClick={() => openModal(CV)}>
              <img
                className="d-block w-100"
                src={CV}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item onClick={() => openModal(tituloedit)}>
              <img
                className="d-block w-100"
                src={tituloedit}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Image Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="d-block w-100"
            src={selectedImage}
            alt="Preview"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;