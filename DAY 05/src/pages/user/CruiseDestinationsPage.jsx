// CruiseDestinationsPage.jsx

import React from 'react'; 
import Footer from './Footer'; 
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import '../../assets/css/CruiseDestinationsPage.css';


function CruiseDestinationsPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <div className="cruise-destinations-page">
      
      <video className="header-video" src="/header-video.mp4" autoPlay muted loop></video>
      
      <main>
        <section className="destination-region">
          <h1>Caribbean</h1>
          <p>Embark on a journey to the epitome of tropical paradise on the Caribbean's sun-kissed beaches. Sink your toes into powdery white sands and dip into turquoise waters teeming with colorful marine life. From the laid-back vibes of Jamaica to the exclusive luxury of the Cayman Islands, each beach destination offers its own slice of Caribbean charm. Savor fresh seafood delicacies, sway to the rhythms of reggae, and let the gentle sea breeze whisk your worries away in this idyllic haven of relaxation and adventure.</p>
          <div className="image-slider">
            <Slider {...sliderSettings}>
              <div className="image-slide">
                <img src="https://www.travelandleisure.com/thmb/mEEStoglkK-sy7Gv1YUzi4Gft5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hilton-aruba-FAMBCHRESCARIB0423-7bc188d10b5a4458b76945bd9fcee397.jpg" alt="Caribbean Image 1" />
              </div>
              <div className="image-slide">
                <img src="https://cdn.boatinternational.com/bi_prd/bi/library_images/tZ33n9s5SS2ovyhuT9lL_Caribbean-bucket-list-Stingray-city-SS-Ann-Snover.jpg" alt="Caribbean Image 2" />
              </div>
              <div className="image-slide">
                <img src="https://www.my-island-jamaica.com/images/flamingo_beach_aruba_fodors.jpg" alt="Caribbean Image 3" />
              </div>
              <div className="image-slide">
                <img src="https://imageio.forbes.com/specials-images/imageserve/648f06a6152abcf5ef5e44a9/e125175d2a6f8fed0c71b983c4d1368d/960x0.jpg?format=jpg&width=960" alt="Caribbean Image 4" />
              </div>
              <div className="image-slide">
                <img src="https://www.disneytouristblog.com/wp-content/uploads/2019/03/skyliner-caribbean-beach-riviera-resort-disney-world-532.jpg" alt="Caribbean Image 5" />
              </div>
            </Slider>
          </div>

          <h1>Bali</h1>
          <p>Step into paradise on Bali's enchanting beaches, where lush jungles meet pristine shores and vibrant coral reefs. From the bustling shores of Kuta to the secluded tranquility of Nusa Dua, Bali offers a beach experience for every traveler's taste. Surf legendary breaks, immerse yourself in local culture at beachside temples, or simply relax with a massage under swaying palms. With its magical sunsets and warm hospitality, Bali beckons you to unwind and rejuvenate in tropical bliss.</p>
          <div className="image-slider">
            <Slider {...sliderSettings}>
              <div className="image-slide">
                <img src="https://w0.peakpx.com/wallpaper/616/578/HD-wallpaper-resort-in-bali-beach-nature-bali-resort.jpg" alt="Bali Image 1" />
              </div>
              <div className="image-slide">
                <img src="https://balicheapesttours.com/dummy/edge.jpg" alt="Bali Image 2" />
              </div>
              <div className="image-slide">
                <img src="https://www.balimandira.com/wp-content/uploads/2023/01/hero-2023-1280x630.jpg" alt="Bali Image 3" />
              </div>
              <div className="image-slide">
                <img src="https://www.shutterstock.com/image-photo/family-vacation-lifestyle-happy-woman-600nw-685333252.jpg" alt="Bali Image 4" />
              </div>
              <div className="image-slide">
                <img src="https://baliwatersporttour.com/wp-content/uploads/parasailing-baliwatersporttour.jpg" alt="Bali Image 5" />
              </div>
            </Slider>
          </div>
          <h1>Sydney</h1>
          <p>Discover the epitome of coastal living on Sydney's iconic beaches. From the world-famous Bondi Beach to the tranquil shores of Manly, each stretch of sand invites you to unwind and embrace the laid-back Australian lifestyle. Surfers carve through azure waves, while sun-seekers soak up the Southern Hemisphere sun. With buzzing promenades, trendy cafes, and breathtaking coastal walks, Sydney's beaches offer an unparalleled fusion of urban excitement and natural beauty.</p>
          <div className="image-slider">
            <Slider {...sliderSettings}>
              <div className="image-slide">
                <img src="https://images.squarespace-cdn.com/content/v1/5856bc666a49634cd55b0ba9/1621444468615-MNT0IP8WCP39DWVB3KK6/outdoor-activities-sydney-itinerary+.jpeg" alt="Sydney Image 1" />
              </div>
              <div className="image-slide">
                <img src="https://images.rove.me/w_1920,q_85/oyne5nsha4aw1csralpt/sydney-festival-of-the-winds.jpg" alt="Sydney  Image 2" />
              </div>
              <div className="image-slide">
                <img src="https://media.timeout.com/images/105737850/image.jpg" alt="Sydney  Image 3" />
              </div>
              <div className="image-slide">
                <img src="https://media.destinationnsw.com.au/sites/default/files/lookatmedam/149177l3.jpg" alt="Sydney  Image 4" />
              </div>
              <div className="image-slide">
                <img src="https://t24hs.com/wp-content/uploads/2022/11/b1e36771-city-2258-163f4d7f814.jpg" alt="Sydney  Image 5" />
              </div>
            </Slider>
          </div>
          <h1>Mexico</h1>
          <p>Explore Mexico's diverse coastline, where sandy beaches meet vibrant culture and breathtaking landscapes. From the lively shores of Cancun to the secluded coves of Tulum, each beach offers its own charm and allure. Immerse yourself in rich history and indulge in authentic cuisine, all while basking in the warm embrace of the Mexican sun. Whether seeking adventure or relaxation, Mexico's beaches promise endless possibilities for every traveler's dream vacation.</p>
          <div className="image-slider">
            <Slider {...sliderSettings}>
              <div className="image-slide">
                <img src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2016/03/four-seasons-punta-mita-riviera-nayarit.jpg?ssl=1" alt="Mexico Image 1" />
              </div>
              <div className="image-slide">
                <img src="https://www.travelandleisure.com/thmb/mFP6G5okfH-WLE9GqbpI83_x-nY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/resort-at-pedregal-01-MXRESORTSWB19-b17ce132dc6240ca9bce4bfd10dbd334.jpg" alt="Mexico Image 2" />
              </div>
              <div className="image-slide">
                <img src="https://www.travelandleisure.com/thmb/pCU_Y9fbQe4CT5Q73J9k2Bqd_bI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-grand-velas-los-cabos-MXALLINC0222-46d3772ad56f4493a83e1bcb49e119f9.jpg" alt="Mexico Image 3" />
              </div>
              <div className="image-slide">
                <img src="https://a.cdn-hotels.com/gdcs/production181/d1921/4f10ed20-827a-4e75-b34d-9a2d37b0b83e.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="Mexico Image 4" />
              </div>
              <div className="image-slide">
                <img src="https://www.eleconomista.com.mx/__export/1691541933398/sites/eleconomista/img/2022/08/02/cancun_shutterstock_1018139.jpg_185051853.jpg" alt="Mexico Image 5" />
              </div>
            </Slider>
          </div>
          <h1>Dubai</h1>
          <p>A land of rugged mountains, coastal forests and diverse wildlife, Alaska is the ultimate cruise destination for intrepid explorers. Whether you're watching whales splash in the Pacific Ocean or gazing up at Hubbard Glacier, Alaska cruises are all about wild natural wonder.</p>
          <div className="image-slider">
            <Slider {...sliderSettings}>
              <div className="image-slide">
                <img src="https://hblimg.mmtcdn.com/content/hubble/img/DestMainImgLscape/mmt/activities/m_Dubai_8_l_927_1391.jpg" alt="dubai Image 1" />
              </div>
              <div className="image-slide">
                <img src="https://i.pinimg.com/736x/0f/b5/24/0fb524592eedc447dcdd179a00962555.jpg" alt="dubai Image 2" />
              </div>
              <div className="image-slide">
                <img src="https://i.pinimg.com/736x/0c/29/d8/0c29d8b1b7dadc14c3af5ce873cba4ef.jpg" alt="dubai Image 3" />
              </div>
              <div className="image-slide">
                <img src="https://deih43ym53wif.cloudfront.net/large_webp-net-resizeimage_49520c7611.jpeg" alt="dubai Image 4" />
              </div>
              <div className="image-slide">
                <img src="https://thumbs.dreamstime.com/b/ain-dubai-riesenrad-auf-bluewaters-insel-uae-und-dubairiesenrad-vogelperspektive-vereinigter-arabischer-emirate-neue-freizeit-204364992.jpg" alt="dubai Image 5" />
              </div>
            </Slider>
          </div>

          <h1>Singapore</h1>
          <p>Singapore, a dynamic city-state at the heart of Asia, offers a captivating blend of modernity and tradition. Explore bustling streets filled with diverse cuisines and vibrant culture. Discover lush parks, iconic landmarks, and world-class shopping. From historic neighborhoods to pristine beaches, Singapore invites you to indulge in unforgettable experiences at every turn.</p>
          <div className="image-slider">
            <Slider {...sliderSettings}>
              <div className="image-slide">
                <img src="https://media.timeout.com/images/105570602/image.jpg" alt="dubai Image 1" />
              </div>
              <div className="image-slide">
                <img src="https://www.hospitalitynet.org/picture/xxl_153137526.jpg?t=1644312363" alt="dubai Image 2" />
              </div>
              <div className="image-slide">
                <img src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/1_nus.jpg.webp" alt="dubai Image 3" />
              </div>
              <div className="image-slide">
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/9f/2d.jpg" alt="dubai Image 4" />
              </div>
              <div className="image-slide">
                <img src="https://a.cdn-hotels.com/gdcs/production93/d422/118f3050-41af-4c7b-9651-3428a0e894d9.jpg" alt="dubai Image 5" />
              </div>
            </Slider>
            </div>

            <h1>South Korea</h1>
          <p>South Korea, a land of dynamic contrasts and boundless energy, beckons with its vibrant culture, breathtaking landscapes, and cutting-edge innovation. Nestled on the Korean Peninsula, this captivating nation seamlessly blends ancient traditions with modernity, creating a unique tapestry of experiences for travelers.Immerse yourself in the bustling streets of Seoul, the pulsating heart of South Korea, where gleaming skyscrapers stand alongside historic palaces and traditional hanok villages. Explore the vibrant neighborhoods of Hongdae and Gangnam, where trendy boutiques, chic cafes, and bustling markets offer a glimpse into the city's vibrant lifestyle.</p>
          <div className="image-slider">
            <Slider {...sliderSettings}>
              <div className="image-slide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/63/a2/b4/caption.jpg" alt="dubai Image 1" />
              </div>
              <div className="image-slide">
                <img src="https://ik.imagekit.io/tvlk/blog/2018/09/N-Seoul-Tower.jpg?tr=dpr-2,w-675" alt="dubai Image 2" />
              </div>
              <div className="image-slide">
                <img src="https://www.thoughtco.com/thmb/rn4UnyqlJMWo5mqpEOYbenaOjWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fortress-gate-with-light-trails-at-downtown-455242307-58dea6143df78c5162e1ff3d.jpg" alt="dubai Image 3" />
              </div>
              <div className="image-slide">
                <img src="https://a.cdn-hotels.com/gdcs/production110/d428/ec82f6c7-98e3-4f24-a6d0-90e5330ee777.jpg" alt="dubai Image 4" />
              </div>
              <div className="image-slide">
                <img src="https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2019/02/Hand-Luggage-Only-11-1.jpg?resize=1000%2C667&ssl=1" alt="dubai Image 5" />
              </div>
            </Slider>
            </div>

            

        </section>
        
      </main>
      <Footer />
    </div>
  );
}

export default CruiseDestinationsPage;