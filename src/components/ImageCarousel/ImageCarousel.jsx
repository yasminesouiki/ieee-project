import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselStyles.css';

// Remplacez ces chemins par vos propres images
const slideImages = [
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide2-1100x300.jpg',
    title: 'Sidi Bousaid, Tunisia',
    
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide3.jpg',
    title: 'Panoramic view of ancient Carthage, Tunis'
   
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide1.jpg',
    title: 'Satellite night view of the Mediterranean countries, by NASA',
   
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide6-1100x300.jpg',
    title: 'City of Culture, Tunis',
   
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide7-1100x300.jpg',
    title: 'Enjoy your summer holiday in Tunisia',
    
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide4-1100x300.jpg',
    title: 'National Bardo Museum presents to you an impressive and unique collection of the ancient art',
   
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide5-1100x300.jpg',
    title: 'I love Tunis and Ibn Khaldūn Status (1332-1406)',
    
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide10-1096x299.jpg',
    title: 'City center of Tunis',
   
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide9-1100x300.jpg',
    title: 'Star Wars movie was here, South of Tunisia',
    
  },
  {
    image: 'https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide8.jpg',
    title: 'Amphitheatre of El Jem, UNESCO World Heritage Centre',
   
  },
  
];

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Carousel 
        fade 
        interval={3000}
        prevIcon={<span aria-hidden="true" className="custom-prev-icon" />}
        nextIcon={<span aria-hidden="true" className="custom-next-icon" />}
      >
        {slideImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="image-wrapper">
              <img
                className="d-block w-100"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
            </div>
            <Carousel.Caption className="custom-caption">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;