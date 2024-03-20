
import React from 'react';

import Footer from './Footer'; 
import '../../assets/css/CruiseEventPage.css';

function CruiseEventsPage() {
  return (
    <div className="cruise-events-page">
     
      
      <main>
        <section className="activity">
          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Sunset Cocktail Party</h1>
              <p>Indulge in elegance aboard the cruise ship, sipping exquisite cocktails against a backdrop of the setting sun and shimmering sea. Mingle with fellow passengers, creating memories in a relaxed atmosphere filled with breathtaking views and delightful refreshments.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/529496768/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=ec112cda56ca5b097bc0edf49a8f0c1f6793cfd77512032d03fdb73f441fd067" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Gourmet Dining Experience</h1>
              <p> Embark on a culinary journey with our expert chefs, savoring indulgent dishes bursting with exquisite flavors. From appetizers to desserts, every bite promises a gastronomic adventure like no other, ensuring a feast for the senses and unforgettable dining memories.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/452869553/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=4d5440c6c231e4d9edc897c5f60509752d72416c5f63ff7826697ea79fd93404" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Live Entertainment</h1>
              <p>Immerse yourself in captivating performances, from music concerts to theatrical productions, promising enchanting evenings filled with excitement and rhythm. Dance the night away or simply enjoy the show in our state-of-the-art entertainment venues, where every moment is a celebration of talent and creativity.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/494197345/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=c518a183fae2078ad91c442666f3cb6f0708cf7e35e89396c8223ddf70853f65" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Casino Night</h1>
              <p> Feel the thrill of our onboard casino, where games of chance await seasoned gamblers and novices alike. Spin the roulette wheel, play a hand of poker, or try your luck at blackjack, surrounded by the excitement of a vibrant gaming atmosphere and the possibility of winning big.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/409260257/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=d552db800594c657f8b7815350b9d2def8bfc6451247a761d5cd7d2445d42176" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Surprise Party</h1>
              <p>Join us for an unexpected celebration, where themed decor and live entertainment create an atmosphere of joy and delight. Sip on cocktails and mingle with fellow guests, reveling in the magic of the unexpected and creating cherished memories that will last a lifetime.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/476131893/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=5203d5f51bbbfc9642136b1397d91df364be3c0cffbd3c64b314647418b27fbc" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Wedding</h1>
              <p>Say "I do" surrounded by the beauty of the open sea, exchanging vows in a romantic ceremony tailored to your dreams. Whether you envision an intimate gathering or a grand celebration, our experienced planners will ensure every detail is perfect, creating a magical day filled with love and happiness.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/575741234/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=22f729729e6c6fa87b7534de26face81c3e9b84c248f6cd096232a7dca9e2ead" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Poolside Parties</h1>
              <p> Dive into fun and excitement at our poolside parties, where lively music and refreshing drinks set the stage for unforgettable moments. Splash in the pool, soak up the sun, and dance to the rhythm of summer, surrounded by laughter and good vibes.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/434492654/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=e025781707576849069dc9074e002f2457cd093464eda48fa56d6978d2bbf19c" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>

          <div className="ev-container-row">
            <div className="ev-container">
              <h1>Art Exhibitions</h1>
              <p>Immerse yourself in creativity and culture at our onboard art exhibitions, showcasing a diverse range of works by talented artists. From paintings to sculptures, each piece tells a unique story, inviting guests to explore and appreciate the beauty of artistic expression in a vibrant and inspiring setting.</p>
              <video className="activity-video medium-video" src="https://player.vimeo.com/progressive_redirect/playback/553290653/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=90cc501f6b3a93aa017dee99e4dd1aa6e6b3ae4b8c3f7ca174ea0f4dbb6b0791" autoPlay muted loop></video>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CruiseEventsPage;