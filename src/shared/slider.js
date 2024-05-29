import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../css/sliders.css';

const Sliders = (prop) => {
  let slideIndex = 1;

  const showImage = (n, className) => {
    let i;
    let x = document.getElementsByClassName(className);
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
  };

  const nextImage = (n, className) => {
    showImage((slideIndex += n), className);
  };

  return (
    <div id='slider'>
      <FontAwesomeIcon icon={faAngleLeft} className='slider-icon' id='icon-left' onClick={() => nextImage(-1, prop.className)} />
      <FontAwesomeIcon icon={faAngleRight} className='slider-icon' id='icon-right' onClick={() => nextImage(1, prop.className)} />
    </div>
  );
};

export default Sliders;
