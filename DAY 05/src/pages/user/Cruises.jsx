// App.js
import React,{ useState} from 'react';
import '../../assets/css/Cruises.css';
import cruiseImage from '../../assets/images/Cruises.jpg'; // Import the cruise image
import { useNavigate } from 'react-router-dom';

function Cruises() {
  // Sample data for cruises
  const cruises = [
    {
      place: 'Mumbai',
      date: 'Mar 25th 2024 - Mar 30th 2024 (5N/6D)',
      price: '$1000',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/472000/472956-Bandra-Worli-Sea-Link.jpg', // Replace with actual image URL
    },
    {
      place: 'Goa',
      date: 'Apr 1st 2024 - Apr 5th 2024 (5N/6D)',
      price: '$1200',
      image: 'https://t3.ftcdn.net/jpg/01/40/51/56/360_F_140515612_0MMpqpsIvs6xno5YXmPVy9FUmZ4uLnFB.jpg', // Replace with actual image URL
    },
    {
      place: 'Lakshadweep',
      date: 'Apr 1st 2024 - Apr 5th 2024 (5N/6D)',
      price: '$2500',
      image: 'https://conveniencetours.com/images/lakshadweep-bnr-1.jpg', 
    },
    {
      place: 'Kochi',
      date: 'Apr 1st 2024 - Apr 5th 2024 (5N/6D)',
      price: '$1300',
      image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/f05a7-beaches-in-kochi.jpg?fit=1000%2C660&ssl=1', // Replace with actual image URL
    },
    {
      place: 'Andaman',
      date: 'Apr 1st 2024 - Apr 5th 2024 (5N/6D)',
      price: '$1200',
      image: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_100,w_1920,h_1080,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/symphony-resorts/best_beaches_in_Andaman_', // Replace with actual image URL
    },
    {
      place: 'Sri Lanka',
      date: 'Apr 1st 2024 - Apr 5th 2024 (5N/6D)',
      price: '$1200',
      image: 'https://www.hlimg.com/images/stories/738X538/sri-lanka-beach-fb-ad1_1541159321m.jpg', // Replace with actual image URL
    },
  ];

  const galleryImages = [
    'https://images.cordeliacruises.com/cordelia_v2/public/images/gallery-image-01.webp',
    'https://images.cordeliacruises.com/cordelia_v2/public/images/gallery-image-02.webp',
    'https://images.cordeliacruises.com/cordelia_v2/public/images/photo03.webp',
    'https://images.cordeliacruises.com/cordelia_v2/public/images/photo05.webp',
    'https://i.pinimg.com/originals/69/a5/78/69a578808ffbf5d351b79cc83a0025c7.jpg',
    'https://images.hindustantimes.com/img/2021/09/30/1600x900/miguel-angel-sanz-ktBAwOsmFek-unsplash_1632975812065_1632975864427.jpg',
    'https://media.cnn.com/api/v1/images/stellar/prod/220411142026-14-most-luxurious-cruise-cabins-disney.jpg?c=original&q=h_618,c_fill',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2022-08/12/full/1660282079-2965.jpg?im=FeatureCrop,size=(826,465)',
    'https://c1.wallpaperflare.com/preview/1000/871/633/cruise-bord-restaurant-travel.jpg',
    'https://w0.peakpx.com/wallpaper/366/726/HD-wallpaper-cruise-boat-lit-up-at-night-cruise-harbour-princess-ship-thumbnail.jpg',
    'https://eatsleepcruise.com/wp-content/uploads/2021/09/Sky-Princess-Pool-Deck.jpg.optimal.jpg',
    'https://images.pexels.com/photos/16886666/pexels-photo-16886666/free-photo-of-view-of-a-passenger-ship-in-one-of-the-ports-on-the-bosporus-in-istanbul-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    
  ];
  const [zoomedIndex, setZoomedIndex] = useState(null);
 const navigate = useNavigate();
  

  return (
    <div className="cruises">
      <h1>Find Your Cruise</h1>
      <img src={cruiseImage} alt="Cruise" className="cruise-image" />
      <div className="cruise-list">
        {cruises.map((cruise, index) => (
          <div
            className={`cruise-card ${zoomedIndex === index ? 'zoomed' : ''}`}
            key={index}
            onMouseEnter={() => setZoomedIndex(index)}
            onMouseLeave={() => setZoomedIndex(null)}
          >
            <img src={cruise.image} alt={cruise.place} className="cruise-card-image" />
            <h2>{cruise.place}</h2>
            <p>{cruise.date}</p>
            <p>Price: {cruise.price}</p>
            <button className="view-button">View</button>
          </div>
        ))}
      </div>
      <button className="c-book-now-button" onClick={() => navigate("/cruizebook")}>Book Your Cruises</button>
      <h1>Gallery</h1>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <img src={image} alt={`Gallery Image ${index}`} key={index} className="gallery-image" />
        ))}
      </div>
    </div>
  );
}

export default Cruises;