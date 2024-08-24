import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../css/sliders.css';

const Sliders = ({ containerId }) => {
  let slideIndex = 1;

  const showImage = (n) => {
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
    console.log(x[slideIndex-1])
  };

  const nextImage = (n) => {
    showImage((slideIndex += n));
  };

useEffect(() => {
  showImage(slideIndex);
});


  return (
    <div id='slider'>
      <FontAwesomeIcon icon={faAngleLeft} className='slider-icon' id='icon-left' onClick={() => nextImage(-1)} />
      <FontAwesomeIcon icon={faAngleRight} className='slider-icon' id='icon-right' onClick={() => nextImage(1)} />
    </div>
  );
};

export default Sliders;
