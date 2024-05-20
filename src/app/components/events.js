"use client"
import React, { useState } from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import event_1 from '@/app/images/event_1.png';
import event_2 from '@/app/images/event_2.png';
import event_3 from '@/app/images/event_3.png';
import event_4 from '@/app/images/event_4.png';
import collection_1 from '@/app/images/collection_1.png';
import collection_2 from '@/app/images/collection_2.png';
import collection_3 from '@/app/images/collection_3.png';
import collection_4 from '@/app/images/collection_4.png';
import artist_1 from '@/app/images/artist_1.png';
import artist_2 from '@/app/images/artist_2.png';
import artist_3 from '@/app/images/artist_3.png';
// import collectible from '@/app/images/collectible.png';
import Collectible from '@/resuable/Collectible';
import ReusableSlider from '@/resuable/ReusableSlider';
import people from '@/app/images/people.png';
import qr from '@/app/images/qr.png';

const Events = () => {
  const [view, setView] = useState('events');

  const settings = { 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };
    const EventsImages = [
      { src: event_1, alt: 'Event 1' },
      { src: event_2, alt: 'Event 2' },
      { src: event_3, alt: 'Event 3' },
      { src: event_4, alt: 'Event 4' },
    ];
    const CollectionImages = [
      { src: collection_1, alt: 'Event 1' },
      { src: collection_2, alt: 'Event 2' },
      { src: collection_3, alt: 'Event 3' },
      { src: collection_4, alt: 'Event 4' },
    ];
  const toggleView = () => {
    setView(view === 'events' ? 'collections' : 'events');
  };

  return (
    <div className="events">
      {view === 'events' ? (
        <div className="row">
          <div className="col-md-6">
            <div className='events_left_wrapper'>
              <div className='events_text'>
                <h1>ASTR <br />IX <br /> <br />EVE <br />NTS</h1>
              </div>
              <div className="events_slider">
              <ReusableSlider images={EventsImages} settings={settings} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='row'>
              <div className='col-md-2'>
                <div class="marquee-container">
                  <p class="marquee rotated">Event : Oasis Bus tour , JLN Stadium , Delhi <span style={{fontSize:'50px'}}>*</span> Collection Live : Meta Lives , live on astrix</p>
                </div>
              </div>
              <div className='col-md-10'>
                <div className='events_right_wrapper'>
                  <div className='events_right_content_top'>
                    <p>Explore Your First <br /> Event</p>
                  </div>
                  <div className='events_right_content_head'>
                    <h2>Event Name</h2>
                    <div className='place'>
                      <p>Venue</p>
                      <p>04/3/2024 @19:00</p>
                      <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</p>
                    </div>
                  </div>
                  <div className='artist'>
                    <h2>Artist Lineup</h2>
                    <div className='artist_img flex mt-5'>
                      <Image src={artist_1} alt="Artist 1"/>
                      <Image className='scale_img' src={artist_2} alt="Artist 2"/>
                      <Image src={artist_3} alt="Artist 3"/>
                    </div>
                  </div> 
                  <div className='join mt-4 flex justify-between'>
                    <Image src={qr} alt="qr"/>
                    <div style={{margin:' auto'}}>
                      <button className='join_btn'>Join Waitlist</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="collections">
          {/* Render collection marquee here */}
          <div className="row">
          <div className="col-md-6">
            <div className='events_left_wrapper'>
              <div className='events_text'>
                <h1>ASTR <br />IX <br /> <br />EVE <br />NTS</h1>
              </div>
              <div className="events_slider">
              <ReusableSlider images={CollectionImages} settings={settings} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='row'>
              <div className='col-md-2'>
                <div class="marquee-container">
                  <p class="marquee rotated">Event : Oasis Bus tour , JLN Stadium , Delhi <span style={{fontSize:'50px'}}>*</span> Collection Live : Meta Lives , live on astrix</p>
                </div>
              </div>
              <div className='col-md-10'>
                <div className='events_right_wrapper'>
                  <div className='events_right_content_top'>
                    <p>Explore Your First <br /> Collectible</p>
                  </div>
                  <div className='events_right_content_head'>
                    <h2>Meta <br />Lives</h2>
                    <div className='place'>
                      <p>Live in Astrix</p> 
                      <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</p> 
                    </div>
                    <div className='people place flex align-center'>
                    <Image src={people} alt="people"/>
                    <p className='m-0'>22k people interested</p>
                    </div>
                  </div>
                  <div className='artist mt-3'>
                    <h2>Collectibles</h2>
                    <div className='artist_img flex mt-5 gap-2'> 
                    <Collectible/>
                    <Collectible/>
                    <Collectible/>
                    </div>
                  </div> 
                  <div className='join mt-4 flex justify-end'>  
                      <button className='join_btn mr-5'>Join Waitlist</button> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
       <div className='pb-4 ml-3 toogle_btn'>
       <button onClick={toggleView} className={view === 'events' ? 'toggle_btn_events active' : 'toggle_btn_events'}>
        Events
      </button>
      <button onClick={toggleView} className={view === 'collections' ? 'toggle_btn_collections active' : 'toggle_btn_collections'}>
        Collections
      </button>
       </div>
     
    </div>
  );
};

export default Events;
