import '../css/work.css';
import InfoIcon from '../shared/infoIcon';
import Sliders from '../shared/slider';

const Work = () => {

  return (
    <div id="work">
      <div id="work-contents">
        <div id="map">
          <InfoIcon id={'map-info'} />
          <img src='/map1.png' id='map1-img' className='offlinemap-imgs'/>
          <img src='/image16.png' id='map2-img' className='offlinemap-imgs'/>
          <Sliders className={'offlinemap-imgs'}/>

          <div id='map-info'>
            <p className='title'>OMap</p>
            <p>
            The map is a Progressive Web Application (PWA) offering users a native-app-like experience on the web. 
            It utilizes HTML5 technologies, including Cache API, Service Worker, and IndexedDB, to create an offline
            map based on vector tiles using OpenStreetMap data representation. It adheres to a comprehensive Software
            Engineering methodology.</p>
          </div>
        </div>

        <div id="to-do">
          <InfoIcon id={'toDo-info'} />
          <img src='/to-do.jpeg' id='todo-img'/>

          <div id='toDo-info'>
          <p className='title'>To-Do List</p>
          <p>The To-Do List is a Progressive Web Application (PWA) that allows users to add it as a shortcut
             to their home screen from the browser. It ensures full offline functionality by storing data in
              the browser's database and assets in the cache, leveraging HTML5 technologies.</p>
          </div>
        </div>

        <div id="restaurant">
          <InfoIcon id={'restaurant-info'} />
          <img src='/calculator2.png' id='restaurant1-img' className='restaurant-imgs'/>
          <img src='/calculator3.png' id='restaurant2-img' className='restaurant-imgs'/>
          <Sliders className={'restaurant-imgs'}/>

          <div id='restaurant-info'>
          <p className='title'>Restaurant Website</p>
          <p>This website was a collaborative effort, involving both front-end and back-end development to create a platform for
            the restaurant Oxaca. The application serves four distinct entities, each with unique capabilities. Customers
            can place orders through the website and monitor their progress. Waiters handle order reception and respond
            to customer assistance requests. Kitchen staff receive and process orders from waiters, providing real-time
            updates via web sockets. Additionally, a managerial entity is 
            responsible for assigning waiters to tables, creating and deleting accounts, and overall application management.
          </p>
          </div>
        </div>

        <div id="calculator">
          <InfoIcon id={'calculator-info'}/>
          <img src='/calculator1.png' id='calc1-img' className='calculator-imgs'/>
          <img src='/calculator2.png' id='calc2-img' className='calculator-imgs'/>
          <img src='/calculator3.png' id='calc3-img' className='calculator-imgs'/>
          <img src='/calculator4.png' id='calc4-img' className='calculator-imgs'/>
          <Sliders className={'calculator-imgs'}/>

          <div id='calculator-info'>
            <p className='title'>Calculator</p>
            <p>The calculator is fully functional, accepting mathematical equations in both prefix
              and infix notations and providing accurate results. The application utilizes queues
              and stacks for efficient computation. Developed entirely in Java, it adheres to a
              comprehensive software engineering methodology, incorporating unit testing, 
              Test-Driven Development (TDD), and following best practices such as version control, 
              UML, and design patterns. The primary goal of the application was to reinforce software
              engineering methodologies, emphasizing testing, version control, UML, and design patterns in a practical context.
            </p>
          </div>
        </div>

        {/* <div id="App">
        <InfoIcon id={'app-info'}/>
          <img src='/app1.png' id='app1-img' className='app-imgs'/>
          <img src='/app2.png' id='app2-img' className='app-imgs'/>
          <img src='/app3.png' id='app3-img' className='app-imgs'/>
          <img src='/app4.png' id='app4-img' className='app-imgs'/>
          <img src='/app5.png' id='app4-img' className='app-imgs'/>
          <Sliders className={'app-imgs'}/>

          <div id='app-info'>
            <p className='title'>Loyalty Application</p>
            <p>
            The application, developed by a team of six over six weeks, utilizes blockchain for transaction execution, 
            reimagining loyalty applications. Beyond decentralized development, the team introduced a groundbreaking 
            concept: a cross-branding loyalty program. The mobile application, built with React Native, MongoDB, and 
            blockchain, underwent my contributions as a full-stack developer. This involved low-fidelity design to coding 
            in front-end, design to build in backend, creating blockchain contracts, and handling DevOps for continuous 
            integration and build processes.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Work;