import { useState } from 'react';
import '../css/infoIcon.css';

const InfoIcon = (prop) => {
  const [infoVisible, setInfoVisible] = useState(false);

  const projectInfo = () => {
    const info = document.getElementById(prop.id);
    setInfoVisible(!infoVisible);
    if (infoVisible) {
      info.style.display = 'flex';
    } else {
      info.style.display = 'none';
    }
  }

  return(
    <section id="info-icon" onClick={() => projectInfo()}>
      <p>i</p>
    </section>
  )
}

export default InfoIcon;