import React, { useState, useEffect } from 'react';
import Sliders from '../shared/slider';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../css/work.css';

const Work = () => {
  const items = [
    <div id="map" className='work-item active'>
      <div className='info'>
        <p className='title'>Offline HTML5 Map</p>
        <p>
          The map is a Progressive Web Application (PWA) offering users a native app-like experience over the web.
          Leverages HTML5 technologies such as Cache API, Service Worker, and IndexedDB, to create an offline
          map. The map data is represented by vector-tiles based on OpenStreetMap data representation and rendered in real-time using OpenLayer, providing a faster and seamless experience.
          <br /><br />
          Furthermore, the application aspires to provide users with a private platform to record their experiences directly on the map, inspired by the feature of Google Maps. Additionally, the trips saved to the map can be shared with others for inspiration by downloading the selected trips as a pdf document.
          <br /><br />
          The application follows Software Engineering best practices, and provides a flexible design compatible for both mobile and desktop devices.
          <br /><br />
          <a href="https://offline-map-2o39.onrender.com/" className='link'>Visit the app</a>
          <a href="https://github.com/AndreeaGardelean/Offline-HTML5-Map" className='link'>Source code</a>
        </p>
      </div>
      <div className='imgs'>
        <img src='/pc.png' id='map1-img' className='offlinemap-imgs' />
        <img src='/phone2.png' id='map2-img' className='offlinemap-imgs' hidden />
        <img src='/tripPart2.png' id='map2-img' className='offlinemap-imgs' hidden />
        <img src='/selectTrip.png' id='map2-img' className='offlinemap-imgs' hidden />
        <img src='/savedTrips2.png' id='map2-img' className='offlinemap-imgs' hidden />
        <Sliders className={'offlinemap-imgs'} />
      </div>
    </div>,

    <div id="to-do" className='work-item active'>
      <div className='info'>
        <p className='title'>To-Do List</p>
        <p>
          Effortlessly manage your tasks, even without an internet connection. The To-Do List App is a Progressive Web Application (PWA) offers a seamless, native app-like experience directly from the web browser. he application can be added to the home screen for quick access, and enjoy full functionality offline with all your tasks securely stored locally. Experience the convenience of an app while leveraging the flexibility of the web.
          <br></br>
          The application leverages HTML5 technologies to achieve its goal.
          <br /><br />
          <a href="https://todolistpwa.onrender.com/" className='link'>Visit the app</a>
          <a href="https://github.com/AndreeaGardelean/ToDoListPWA" className='link'>Source code</a>
        </p>
      </div>
      <div className='imgs'>
        <img src='/todo1.png' className='todo-img' />
        <img src='/todo2.png' className='todo-img' hidden />
        <Sliders className={'todo-img'} />
      </div>
    </div>,

    <div id="calculator" className='work-item active'>
      <div className='info'>
        <p className='title'>Calculator</p>
        <p>The calculator boasts full functionality, effortlessly processing mathematical equations in both prefix and infix notations, ensuring precision in every result. It leverages advanced data structures like queues and stacks for streamlined computation. Crafted exclusively in Java, it upholds rigorous software engineering standards, embracing methodologies like unit testing, Test-Driven Development (TDD), and adhering to best practices such as version control, UML, and design patterns. Above all, the project serves as a testament to reinforcing software engineering methodologies, spotlighting the practical application of testing, version control, UML, and design patterns.
          <br /><br />
          <a href="https://github.com/AndreeaGardelean/calculator" className='link'>Source code</a>
        </p>
      </div>

      <div className='imgs'>
        <img src='/calculator1.png' id='calc1-img' className='calculator-imgs' />
        <img src='/calculator2.png' id='calc2-img' className='calculator-imgs' hidden />
        <img src='/calculator3.png' id='calc3-img' className='calculator-imgs' hidden />
        <img src='/calculator4.png' id='calc4-img' className='calculator-imgs' hidden />
        <Sliders className={'calculator-imgs'} />
      </div>
    </div>,

    <div id="App" className='work-item active'>
      <div className='info'>
        <p className='title'>Loyalty Application</p>
        <p>
          The Loyalty application prototype represents a reimagining of loyalty programs, crafted collaboratively within a team of six Software Engineer interns over a six-week period. It harnesses blockchain technology for secure transaction processing, utilizes React Native for the front-end, and employs Java Spring Boot to create a RESTful API.
          <br></br><br></br>

          Within the project, my responsibilities encompassed designing the personalized offers algorithm, developing the personalization quiz, constructing both the back-end and front-end of the user data page, participating in code reviews, implementing code design and feature design updates across various features.
          <br></br><br></br>

          Furthermore, I introduced the use of Google checkstyle for Java to enhance code documentation, facilitating clearer comprehension for team members.
        </p>
      </div>
      <div className='imgs'>
        <img src='/app1.png' id='app1-img' className='app-imgs' />
        <img src='/app2.png' id='app2-img' className='app-imgs' hidden />
        <img src='/app3.png' id='app3-img' className='app-imgs' hidden />
        <img src='/app4.png' id='app4-img' className='app-imgs' hidden />
        <img src='/app5.png' id='app4-img' className='app-imgs' hidden />
        <Sliders className={'app-imgs'} />
      </div>
    </div>
  ];

  const Gallery = () => (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={{
        0: { items: 1 },
        1024: { items: 1 },
      }}
      controlsStrategy="responsive"
      renderPrevButton={() => null}
      renderNextButton={() => null}
    // autoPlay
    // autoPlayInterval={3000}
    // infinite
    />
  );

  return (
    <div id="work">
      <div id="work-contents">
        <Gallery className='work-slider' />
      </div>
    </div>
  );
}

export default Work;
