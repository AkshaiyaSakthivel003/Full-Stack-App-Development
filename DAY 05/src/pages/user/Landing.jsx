import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import '../../assets/css/Landing.css';
import videoSrc from '../../assets/vid2m.mov';
import carousel1 from '../../assets/images/carousel1.png';
import carousel2 from '../../assets/images/carousel2.png'; 
import carousel3 from '../../assets/images/carousel3.png';
import carousel4 from '../../assets/images/carousel4.png'; 
import backgroundImage from '../../assets/images/back.jpeg';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const options = [
  { value: '1', label: '1 Adult' },
  { value: '2', label: '2 Adults' },
  { value: '3', label: '3 Adults' },
  { value: '4', label: '4 Adults' },
  { value: '5', label: '5 Adults' }
];

const cardData = [
  [
    { id: 1, title: 'Exceptional Escapes', description: (
      <>
        Escape to azure skies, warm Dubai sunshine and unrivaled luxury <br></br> 
        <span className="diamond-symbol">◇</span> Save up to 20%, with resort credit .<br />
        <span className="diamond-symbol">◇</span> Wild Wadi Waterpark™ and KiDS Club.<br />
        <span className="diamond-symbol">◇</span> Access our private pools and beachscape.<br />
        <span className="diamond-symbol">◇</span> 30 complimentary spa minutes.
      </>
    ),
      imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/hotel-offers/jcom_hero_imagejumeirah-beach-hotel--lifestyle--beach--father-stand-up-paddle-escapes.jpg?w=337' },
    { id: 2, title: 'Exceptional Suite Escapes', description:
    ( 
      <>
      Escape to azure skies, warm Dubai sunshine and unrivaled luxury <br></br> 
        <span className="diamond-symbol">◇</span> Save up to 20%, with resort credit .<br />
        <span className="diamond-symbol">◇</span> Club privileges and lounge access.<br />
        <span className="diamond-symbol">◇</span> Wild Wadi Waterpark™ and KiDS Club.<br />
        <span className="diamond-symbol">◇</span> 30 complimentary spa minutes.
      </>
    ), imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/hotel-offers/jcom_hero_imagejumeirah-beach-hotel--lifestyle--executive-pool--family-play--escapes-clubs-n-suites.jpg?w=337' },
    { id: 3, title: 'Exceptional Villa Escapes', description: 
    ( 
      <>
      Escape to a secluded paradise with azure skies and warm Dubai sunshine <br></br> 
        <span className="diamond-symbol">◇</span> Save up to 20%, with resort credit .<br />
        <span className="diamond-symbol">◇</span> Butler service and private plunge pool.<br />
        <span className="diamond-symbol">◇</span> Complimentary return airport transfers.<br />
        <span className="diamond-symbol">◇</span> In-villa breakfast and Club privileges.
      </>
    ), 
    imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/hero/jcom_hero_imagejumeirah-beach-hotel--beit-al-bahar-villas--outdoor-plunge-pool.jpg?w=337' },
    { id: 4, title: 'AquaVoyage Flavours', description: 
    ( 
      <>
      Stay and dine at award-winning restaurants across Dubai <br></br> 
        <span className="diamond-symbol">◇</span> Daily breakfast and lunch or dinner.<br />
        <span className="diamond-symbol">◇</span> Wild Wadi Waterpark™ and KiDS Club.<br />
        <span className="diamond-symbol">◇</span> Access our chilled pools and beach.<br />
        <span className="diamond-symbol">◇</span> Talise Spa and J Club access.
      </>
    ), 
    imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/hotel-offers/jcomheroimagejumeirah-beach-hotel--lifestyle--fb--nuska--family-main--flavours.jpg?w=337' },
    { id: 5, title: 'AquaVoyage Breaks', description: 
    ( 
      <>
      Exclusive savings of up to 30% when you book Jumeirah Breaks Offer <br></br> 
        <span className="diamond-symbol">◇</span> Daily breakfast and lunch or dinner.<br />
        <span className="diamond-symbol">◇</span> Wild Wadi Waterpark™ and KiDS Club.<br />
        <span className="diamond-symbol">◇</span> Access our chilled pools and beach.<br />
        <span className="diamond-symbol">◇</span> Talise Spa and J Club access.
      </>
    )
    , imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/hotel-offers/jcom_hero_imagejumeirah-beach-hotel--accommodation--suite--terrace-day--gcc-breaks.jpg?w=337' },
    { id: 6, title: 'Semi Flexible Rate', description: 
    ( 
      <>
      Exclusive savings when your book in advance <br></br> 
        <span className="diamond-symbol">◇</span> 15% off our Jumeirah Flexible Rate.<br />
        <span className="diamond-symbol">◇</span> Wild Wadi Waterpark™ and Kids Club.<br />
        <span className="diamond-symbol">◇</span> Access our chilled pools and beach.<br />
        <span className="diamond-symbol">◇</span> Talise Spa and J Club access.
      </>
    ), imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/hotel-offers/jcom_hero_imagejumeirah-beach-hotel--lifestyle--suite--balcony-father-in-suit--visa.jpg?w=337' }
  ],
  [
    { id: 7, title: 'Seize The Sun', description: ( 
      <>
      Sun, Sand and Saturdays at Nuska Beach Brunch <br></br> 
        <span className="diamond-symbol">◇</span> Every Saturday, from 12:30 to 15:30.<br />
        <span className="diamond-symbol">◇</span> AED 445-Alcoholic & Non-Alcoholic Package.<br />
        <span className="diamond-symbol">◇</span> Resident DJ.<br />
      </>
    ), imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/restaurants/dubai/beach-hotel-nuska/image-gallery/nuska-jcom01.jpg?w=337' },
    { id: 8, title: 'Rosé Lunch ', description:
    ( 
      <>
      Sun, Sand and Rosé at Nuska Beach<br></br> 
        <span className="diamond-symbol">◇</span> Every Sunday to Friday, from 12:30 to 15:30.<br />
        <span className="diamond-symbol">◇</span> AED 345-Three-course menu with 3 hours free-flow.<br />
        <span className="diamond-symbol">◇</span> Ultimate Provence Rosé.<br />
      </>
    ) , imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/restaurants/dubai/beach-hotel-nuska/image-gallery/nuskalunch.png?w=337' },
    { id: 9, title: 'The Classics', description: 
    ( 
      <>
      Enjoy a different iconic British dish every weekday<br></br> 
        <span className="diamond-symbol">◇</span> Monday to Friday.<br />
        <span className="diamond-symbol">◇</span> From 12:00 to 22:30.<br />
        <span className="diamond-symbol">◇</span> Individually pricing.<br />
      </>
    ), imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/restaurants/dubai/beach-hotel-dna/restaurant-gallery/jumeirahbeachhoteldafriends64.jpg?w=337' },
    { id: 10, title: 'Visa Dining Offers', description: 
    ( 
      <>
      Exclusive cardholder savings across all our participating restaurants<br></br> 
        <span className="diamond-symbol">◇</span> 20% off on food and beverage.<br />
        <span className="diamond-symbol">◇</span> From 12:00 to 22:30.<br />
        <span className="diamond-symbol">◇</span> Collect exclusive Jumeirah One Points when you book direct through Jumeirah.<br />
      </>
    ), imageUrl: 'https://plus.unsplash.com/premium_photo-1674759866735-0392c4044355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QkVBQ0glMjBESU5FJTIwSU58ZW58MHx8MHx8fDA%3D' }
  ],
  [
    { id: 11, title: 'The Rose Ritual', description: ( 
      <>
      Uplift your senses and enrich your body<br></br> 
        <span className="diamond-symbol">◇</span> Exclusive Rose Hydrator facial treatment.<br />
        <span className="diamond-symbol">◇</span> Relaxing and nourishing body massage.<br />
        <span className="diamond-symbol">◇</span> Post-treatment aromatherapy.<br />
      </>
    ), imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/wellness/jumeirah-beach-hotel-talise-spa-lady-in-hammam__landscape.jpg?w=337' },
    { id: 12, title: 'Visa Spa Offer', description: 
    ( 
      <>
      As a Visa cardholder, enjoy unrivalled benefits at the AquaVoyage Beach Hotel<br></br> 
        <span className="diamond-symbol">◇</span> As a Visa card holder, benefit from an additional complimentary 30 minutes during every 60-minute spa treatment.<br />
        <span className="diamond-symbol">◇</span> This offer is valid until 30 September 2024.<br />
      </>
    ), imageUrl: 'https://images.pexels.com/photos/6621076/pexels-photo-6621076.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 13, title: 'DayDreamers', description: 
    ( 
      <>
      A day of head-to-toe rejuvenation at AquaVoyage Beach Hotel<br></br> 
        <span className="diamond-symbol">◇</span> Access to our pools & reimagined beachscape.<br />
        <span className="diamond-symbol">◇</span> 60-minute Revitalising Talise Spa treatment.<br />
        <span className="diamond-symbol">◇</span> Three-course meal at Nuska Beach.<br />
      </>
    ), imageUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/rejuvenate/wellness/jumeirah-beach-hotel/jumeirahbeachhoteltalisespaladiesonterracewithburjshot2__landscape.jpg?w=337' },
    { id: 14, title: 'Afternoon Indulgence', description: 
    ( 
      <>
      Discover the art of relaxation and self-care at AquaVoyage Beach Hotel<br></br> 
        <span className="diamond-symbol">◇</span> 60-minute Revitalising Talise Spa treatment.<br />
        <span className="diamond-symbol">◇</span> Featuring ancient therapeutic techniques.<br />
        <span className="diamond-symbol">◇</span> Afternoon delicacies at Pearl Lounge.<br />
      </>
    ), imageUrl: 'https://images.pexels.com/photos/6621191/pexels-photo-6621191.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ]
];
const carouselData = [
  { id: 1, title: '', description: (
    <>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '15px' }}>WELCOME TO AquaVoyage</h4>
      <h1 style={{ fontFamily: 'Candara', fontSize: '45px' }}>Redefining luxury</h1>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>We're leading luxury travel to something more emotional and inspiring. With our world-class hospitality and bold creative flair we create moments that stay with our guests for years to come.</h2>
    </>
  ), imageUrl: carousel1 },
  { id: 2, title: '', description: (
    <>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '15px' }}>DINING</h4>
      <h1 style={{ fontFamily: 'Candara', fontSize: '45px' }}>Signature cuisine</h1>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>Our spread of dining experiences are all carefully curated - from ingredients and menus, to lighting and decor. Whether you're served a poolside brunch, or a Michelin-star meal, you can guarantee culinary excellence from our dedicated chefs.</h2>
    </>
  ), imageUrl: carousel2 },
  { id: 3, title: '', description: (
    <>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '15px' }}>SERVICE</h4>
      <h1 style={{ fontFamily: 'Candara', fontSize: '45px' }}>World-renowned hospitality</h1>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>We want to make every moment precious for everyone who walks through our doors. With our warm, authentically Arabian hospitality, we exceed expectations to delight our guests at every opportunity.</h2>
    </>
  ), imageUrl: carousel4 },
  { id: 4, title: '', description: (
    <>
      <h4 style={{ fontFamily: 'Garamond', fontSize: '15px' }}>DESIGN</h4>
      <h1 style={{ fontFamily: 'Candara', fontSize: '45px' }}>The forefront of innovation</h1>
      <h2 style={{ fontFamily: 'Garamond', fontSize: '22px' }}>Our hotels dominate skylines, compliment natural beauty and adapt to our guests' every need. From Burj Al Arab's billowing sail, to Zaha Hadid's architectural masterpiece Jumeirah Nanjing, each element is designed with meticulous care and bold originality.</h2>
    </>
  ), imageUrl: carousel3 }
];

const LandingPage = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(options[0]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [bookedDates, setBookedDates] = useState([]);
  const [activeOption, setActiveOption] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const navigate = useNavigate();
  const handlePrevSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };
  
  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000); 
    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleAdultsChange = (selectedOption) => {
    setAdults(selectedOption);
  };

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  const checkAvailability = () => {
    const newBookedDates = generateBookedDates(); 
    setBookedDates(newBookedDates);

    const isAvailable = !isDateBooked(checkInDate, checkOutDate, newBookedDates);

    if (isAvailable) {
      alert("Rooms are available for the selected dates.");
    } else {
      alert("Sorry, rooms are not available for the selected dates.");
    }
  };

  const isDateBooked = (startDate, endDate, bookedDates) => {
    if (!startDate || !endDate) return false;

    const start = new Date(startDate);
    const end = new Date(endDate);

    for (let currentDate = start; currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
      if (bookedDates.includes(currentDate.toISOString().split('T')[0])) {
        return true;
      }
    }

    return false;
  };

  const generateBookedDates = () => {
    const booked = [];
    const today = new Date();
    booked.push(today.toISOString().split('T')[0]);
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);
    booked.push(futureDate.toISOString().split('T')[0]);
    return booked;
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setVideoOpacity(1 - position / window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleBookNowClick1 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/stay1");

  };
  const handleBookNowClick2 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/stay2");

  };
  const handleBookNowClick3 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/stay3");

  };
  const handleBookNowClick4 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/stay4");

  };
  const handleBookNowClick5 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/stay5");

  };
  const handleBookNowClick6 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/stay6");

  };
  const handleBookNowClick7 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/dine1");

  };
  const handleBookNowClick8 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/dine2");

  };
  const handleBookNowClick9 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/dine3");

  };
  const handleBookNowClick10 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/dine4");

  };
  const handleBookNowClick11 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/spa1");

  };
  const handleBookNowClick12 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/spa2");

  };
  const handleBookNowClick13 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/spa3");

  };
  const handleBookNowClick14 = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/spa4");

  };
  const handleElevateClick = (title) => {
    console.log('Book Now clicked for:', title);
    navigate("/stay1");

  };


  return (
    <div id='root'>
    <Navbar />
    <div className="landing-page">
      <section className="hero">
        <video autoPlay muted loop className="background-video" style={{ opacity: videoOpacity }}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Welcome to Aqua Voyage</h1>
          <p>Experience luxury like never before</p>
          <button onClick={() => navigate("/cruises")}>Book Now</button>
        </div>
      </section>
      <section className="content-section">
        <div className="search-container">
          <h2>Search Beach Resorts</h2>
          <div className="search-form">
            <div className="form-group">
              <label>Check-In Date:</label>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="Select Check-In Date"
              />
            </div>
            <div className="form-group">
              <label>Check-Out Date:</label>
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={checkInDate}
                placeholderText="Select Check-Out Date"
              />
            </div>
            <div className="form-group">
              <label>Adults:</label>
              <Select
                value={adults}
                onChange={handleAdultsChange}
                options={options}
              />
            </div>
            <button onClick={checkAvailability}>Check Availability</button>
          </div>
        </div>
        <div className="scrollable-section">
          <h2>Aqua Voyage Offers</h2>
          <h1>For Our Valued Guests</h1>
          <div className="options-container">
            <div className="options">
              <div className={`option ${activeOption === 0 ? 'active' : ''}`} onClick={() => handleOptionClick(0)}>STAY</div>
              <div className={`option ${activeOption === 1 ? 'active' : ''}`} onClick={() => handleOptionClick(1)}>DINE</div>
              <div className={`option ${activeOption === 2 ? 'active' : ''}`} onClick={() => handleOptionClick(2)}>SPA</div>
            </div>
          </div>
          <div className="cards-container">
            {cardData[activeOption].map((card) => (
            <div className="card" key={card.id}>
            <img src={card.imageUrl} alt={card.title} />
              <div className="card-content">
             <h3>{card.title}</h3>
              <div className="description">
              {card.description}
              </div>
              {card.id === 1 && <button onClick={handleBookNowClick1}>Book Now</button>}
              {card.id === 2 && <button onClick={handleBookNowClick2}>Book Now</button>}
              {card.id === 3 && <button onClick={handleBookNowClick3}>Book Now</button>}
              {card.id === 4 && <button onClick={handleBookNowClick4}>Book Now</button>}
              {card.id === 5 && <button onClick={handleBookNowClick5}>Book Now</button>}
              {card.id === 6 && <button onClick={handleBookNowClick6}>Book Now</button>}
              {card.id === 7 && <button onClick={handleBookNowClick7}>Book Now</button>}
              {card.id === 8 && <button onClick={handleBookNowClick8}>Book Now</button>}
              {card.id === 9 && <button onClick={handleBookNowClick9}>Book Now</button>}
              {card.id === 10 && <button onClick={handleBookNowClick10}>Book Now</button>}
              {card.id === 11 && <button onClick={handleBookNowClick11}>Book Now</button>}
              {card.id === 12 && <button onClick={handleBookNowClick12}>Book Now</button>}
              {card.id === 13 && <button onClick={handleBookNowClick13}>Book Now</button>}
              {card.id === 14 && <button onClick={handleBookNowClick14}>Book Now</button>}
            </div>
            </div>
            ))}
         </div>
         <div className="carousel">

          <img src={carouselData[activeSlideIndex].imageUrl} alt={carouselData[activeSlideIndex].title} />
          <div className="carousel-description">
            <h2>{carouselData[activeSlideIndex].title}</h2>
            <p>{carouselData[activeSlideIndex].description}</p>
          </div>
        </div>
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
  <div className="overlay">
    <button className="button1" onClick={handleElevateClick}> Elevate My Stay</button>
    <div className="description">
    <h4 style={{ fontFamily: 'Gourmand', fontSize: '15px' }}>LUXURIATE IN</h4>
    <h1 style={{ fontFamily: 'Candara', fontSize: '45px' }}>AquaVoyage</h1>
    </div>
  </div>
</div>
<div className="white-overlay"></div>

        </div>

      </section>
        <footer>
          <p>&copy; 2024 Aqua Voyage. All rights reserved.</p>
        </footer>
    </div>
    </div>
  );
};

export default LandingPage;
