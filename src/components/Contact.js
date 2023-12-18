import React from 'react';
import '../css/contact.css';

const Contact = () => {
  const handleSendEmail = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('https://personal-portfolio-v1-0-0.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    }).then(response => response.json())
    .then(data => {
      if (data.msg === 'success') {
        const responseElement = document.getElementById('confirmation-email');
        responseElement.innerHTML = 'Email sent.';

        document.getElementById('contact-form').reset();
      } else if (data.msg === 'fail') {
        console.error("An error occurred, could not send email")
      }
    })
  };

  return (
    <div id="contact">
      <div className='contact-container'>
        <div className='linkedin'>
          <div id='question-message'>
            <p id="contact-greeting">Do you have something on your mind? </p>
            <p id="contact-message">If you have any questions or would like to share some
              thoughts you can connect with me via LinkedIn or GitHub, alternatively send an
              email using the provided form.</p>
          </div>
          <div className='connect'>
            <p id="connect-greeting">Connect with me</p>
            <a href="https://www.linkedin.com/in/andreeagardelean/">
              <img className='icons' src="./linkedIn.png" alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/AndreeaGardelean">
              <img className='icons' src="./github-mark.png" alt="GitHub"></img>
            </a>
          </div>
        </div>

        <div className='email'>
          <p id="email-greeting">Send a message</p>
          <p id='confirmation-email'></p>
          <form id='contact-form'>
            <div className='sender-details'>
              <label className='name-label'>Name:
                <input className="input-text" id="name" type="text" required />
              </label>

              <label className='email-label'>Email:
                <input className="input-text" id='email' type="text" required />
              </label>
            </div>

            <div className='message'>
              <label>Message:</label>
              <textarea id="message" rows='5' required></textarea>
            </div>
          </form>
          <div id="send-email" onClick={handleSendEmail}>Send</div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
