import '../css/contact.css'

const Contact = () => {
  return (
    <div id="contact">
      <div className='contact-container'>
        <div className='linkedin'>
          <p id="contact-greeting">Do you have something on your mind? </p>
          <p id="contact-message">If you have any questions or would like to share some
            thoughts you can connect with me via LinkedIn or GitHub, alternatively send an
            email using the  provided form.</p>
          <div className='connect'>
            <p id="connect-greeting">Connect with me</p>
            <a href="https://www.linkedin.com/in/andreeagardelean/">
              <img className='icons' src="./linkedIn.png"></img>
            </a>
            <a href="https://github.com/AndreeaGardelean">
              <img className='icons' src="./github-mark.png"></img>
            </a>
          </div>
        </div>

        <div className='email'>
          <p id="email-greeting">Send a message</p>
          <form>
            <div className='sender-details'>
              <label className='name-label'>Name:
                <input className="input-text" type="text" required />
              </label>
                      
              <label className='email-label'>Email:
                <input className="input-text" type="text" required />
              </label>
            </div>

            <div className='message'>
              <label>Message:</label>
              <textarea id="message" rows='5' required></textarea>
            </div>
          </form>
          <div id="send-email" onClick={handleSendEmailClick}>Send</div>
        </div>
      </div>
    </div>
  )
};

const handleSendEmailClick = () => {
  alert("submit was clicked")
};

export default Contact;