import Sliders from '../shared/slider';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../css/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../css/sliders.css';

const Work = () => {
	let slideIndex = 1;

	const showImage = (n, containerId) => {
		let i;
		let container = document.getElementById(containerId);
		if (!container) return;

		let x = container.getElementsByClassName('slider-image');
		if (x.length === 0) return;

		if (n > x.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = x.length;
		}

		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}

		x[slideIndex - 1].style.display = 'block';
		console.log(x[slideIndex - 1]);
	};

	const nextImage = (n, containerId) => {
		showImage((slideIndex += n), containerId);
	};

	useEffect((containerId) => {
		showImage(slideIndex, containerId);
	});

	const items = [
		<div id="map" className="work-item active">
			<div className="info">
				<p className="title">Offline HTML5 Map</p>
				<p>
					The map is a Progressive Web Application (PWA) offering users a native app-like experience
					over the web. Leverages HTML5 technologies such as Cache API, Service Worker, and
					IndexedDB, to create an offline map. The map data is represented by vector-tiles based on
					OpenStreetMap data representation and rendered in real-time using OpenLayer, providing a
					faster and seamless experience.
					<br />
					<br />
					Furthermore, the application aspires to provide users with a private platform to record
					their experiences directly on the map, inspired by the feature of Google Maps.
					Additionally, the trips saved to the map can be shared with others for inspiration by
					downloading the selected trips as a pdf document.
					<br />
					<br />
					The application follows Software Engineering best practices, and provides a flexible
					design compatible for both mobile and desktop devices.
					<br />
					<br />
					<a href="https://offline-map.onrender.com/" className="link">
						Visit the app
					</a>
					<a href="https://github.com/AndreeaGardelean/Offline-HTML5-Map" className="link">
						Source code
					</a>
					<a href="https://www.youtube.com/watch?v=Oj3teGtO1kM&feature=youtu.be" className="link">
						Demo
					</a>
				</p>
			</div>
			<div className="imgs offlinemap-container" id="offline-map-container">
				<img alt="" src="/pc.png" className="slider-image offlinemap" />
				<img alt="" src="/phone2.png" className="slider-image offlinemap" hidden />
				<img alt="" src="/tripPart2.png" className="slider-image offlinemap" hidden />
				<img alt="" src="/selectTrip.png" className="slider-image offlinemap" hidden />
				<img alt="" src="/savedTrips2.png" className="slider-image offlinemap" hidden />
				<Sliders className="offlinemap-container" containerId="offline-map-container" />
			</div>
		</div>,
		<div id="app" className="work-item active">
			<div className="info">
				<p className="title">Loyalty Application</p>
				<p>
					The Loyalty application prototype represents a re-imagining of loyalty programs, crafted
					collaboratively within a team of six Software Engineer interns over a six-week period. It
					harnesses blockchain technology for secure transaction processing, utilizes React Native
					for the front-end, and employs Java Spring Boot to create a RESTful API.
					<br></br>
					<br></br>
					Within the project, my responsibilities encompassed designing the personalized offers
					algorithm, developing the personalization quiz, constructing both the back-end and
					front-end of the user data page, implemented points transaction page. Participated in code
					reviews, implementing code design and feature design updates across various features.
					<br></br>
					<br></br>
					Furthermore, I introduced the use of Google checkstyle for Java to enhance code
					documentation, facilitating clearer comprehension for team members.
				</p>
			</div>
			<div className="imgs" id="loyalty-imgs">
				<img alt="" src="/app1.png" id="app1-img" className="slider-image loyaltyapp" />
				<img alt="" src="/app2.png" id="app2-img" className="slider-image loyaltyapp" hidden />
				<img alt="" src="/app3.png" id="app3-img" className="slider-image loyaltyapp" hidden />
				<img alt="" src="/app4.png" id="app4-img" className="slider-image loyaltyapp" hidden />
				<img alt="" src="/app5.png" id="app5-img" className="slider-image loyaltyapp" hidden />
				<img alt="" src="/app6.png" id="app6-img" className="slider-image loyaltyapp" hidden />
				<img alt="" src="/app7.png" id="app7-img" className="slider-image loyaltyapp" hidden />
				<Sliders containerId="loyalty-imgs" />
			</div>
		</div>,

		<div id="calculator" className="work-item active">
			<div className="info">
				<p className="title">Calculator</p>
				<p>
					The calculator boasts full functionality, effortlessly processing mathematical equations
					in both prefix and infix notations, ensuring precision in every result. It leverages
					advanced data structures like queues and stacks for streamlined computation. Crafted
					exclusively in Java, it upholds rigorous software engineering standards, embracing
					methodologies like unit testing, Test-Driven Development (TDD), and adhering to best
					practices such as version control, UML, and design patterns. Above all, the project serves
					as a testament to reinforcing software engineering methodologies, spotlighting the
					practical application of testing, version control, UML, and design patterns.
					<br />
					<br />
					<a href="https://github.com/AndreeaGardelean/calculator" className="link">
						Source code
					</a>
				</p>
			</div>

			<div className="imgs" id="calculator-imgs">
				<img alt="" src="/calculator1.png" id="calc1-img" className="slider-image calculator" />
				<img
					alt=""
					src="/calculator2.png"
					id="calc2-img"
					className="slider-image calculator"
					hidden
				/>
				<img
					alt=""
					src="/calculator3.png"
					id="calc3-img"
					className="slider-image calculator"
					hidden
				/>
				<img
					alt=""
					src="/calculator4.png"
					id="calc4-img"
					className="slider-image calculator"
					hidden
				/>
				<Sliders containerId="calculator-imgs" />
			</div>
		</div>,
		<div id="to-do" className="work-item active">
			<div className="info">
				<p className="title">To-Do List</p>
				<p>
					Effortlessly manage your tasks, even without an internet connection. The To-Do List App is
					a Progressive Web Application (PWA) offers a seamless, native app-like experience directly
					from the web browser. he application can be added to the home screen for quick access, and
					enjoy full functionality offline with all your tasks securely stored locally. Experience
					the convenience of an app while leveraging the flexibility of the web.
					<br></br>
					The application leverages HTML5 technologies to achieve its goal.
					<br />
					<br />
					<a href="https://todolistpwa.onrender.com/" className="link">
						Visit the app
					</a>
					<a href="https://github.com/AndreeaGardelean/ToDoListPWA" className="link">
						Source code
					</a>
				</p>
			</div>
			<div className="imgs" id="todo-imgs-container">
				<img alt="" src="/todo1.png" className="slider-image" />
			</div>
		</div>,
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
			infinite
		/>
	);

	return (
		<div id="work">
			<div id="work-contents">
				<Gallery className="work-slider" />
			</div>
		</div>
	);
};

export default Work;
