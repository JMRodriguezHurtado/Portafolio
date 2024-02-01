import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import CNDHcertificate from '../../public/assets/CNDHcertificate.png'; 
import henrycertificate from '../../public/assets/henrycertificate.png';
import tituloedit from '../../public/assets/tituloedit.jpg';
import HenryCert from '../../public/assets/HenryCert.png';
import EFCERT from '../../public/assets/EFCERT.png';
import EFCERT2 from '../../public/assets/EFCERT2.png';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleDownload = () => {
    
    const pdfPath = '/JMRHCV.pdf';
    setDownloadLink(pdfPath);
    window.open(pdfPath, '_blank');
  };

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
      
        <div className="col-md-6">
          <h1 className='text-white text-center'>Juan Manuel Rodriguez Hurtado</h1>
          <p className="lead text-white">Hello! I'm a FullStack Developer with a passion for blending technology and creativity. My interests extend beyond coding – I have a knack for science, a love for all things fantasy, and a deep appreciation for the world of entertainment. Let's create something amazing together!</p>

          <Carousel className='aspect-ratio'>
          
          <Carousel.Item onClick={() => openModal(HenryCert)}>
              <img
                className="flex h-100 w-100 aspect-ratio"
                src={HenryCert}
                alt="Before First slide"
              />
            </Carousel.Item>
            <Carousel.Item onClick={() => openModal(henrycertificate)}>
              <img
                className="flex h-100 w-100 aspect-ratio"
                src={henrycertificate}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item onClick={() => openModal(EFCERT)}>
              <img
                className="flex h-100 w-100 aspect-ratio"
                src={EFCERT}
                alt="Secondish slide"
              />
              </Carousel.Item>
              <Carousel.Item onClick={() => openModal(EFCERT2)}>
              <img
                className="flex h-100 w-100 aspect-ratio"
                src={EFCERT2}
                alt="Secondishly slide"
              />
            </Carousel.Item>
            <Carousel.Item onClick={() => openModal(CNDHcertificate)}>
              <img
                className="flex h-100 w-100 aspect-ratio"
                src={CNDHcertificate}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item onClick={() => openModal(tituloedit)}>
              <img
                className="flex h-100 w-100 aspect-ratio"
                src={tituloedit}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
          <Button variant="primary" onClick={handleDownload}>
        Download CV
      </Button>
      </div>

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
          {downloadLink && (
      <Button variant="primary" onClick={() => window.open(downloadLink, '_blank')}>
        Download CV
      </Button>
    )}
  </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
}

export default Home;