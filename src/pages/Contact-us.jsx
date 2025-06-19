import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ContactCard from "./components/ContactCard.jsx";
import "./styling/contact-us.css"



function Contact_us() {
  return (
    <>
      <div className='contact-page-container'>
        <Header />
        <div className="contact-content">
          <h1>Connect with us</h1>
          <p>Feel free to reach out to us using the options below, and our<br /> dedicated team will respond to your inquiries promptly.</p>

          <div className="links-contact-page">
            <ul>
              <li><a href="">Acceuil</a></li>
              <li><a href="">Identité </a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Solutions</a></li>
            </ul>
          </div>
        </div>
        <div className='main-contact'>
          <div className='main-top'>
            <div className='formulaire-contact'>
              <h3>How can we help?</h3>
              <p>Have a question? Fill out the form below, and we'll get back to you as soon as possible.</p>
              <form action="">

                <input type="text" name="name" placeholder="Name" />
                <br />
                <input type="email" name="email" placeholder="Email" />
                <br />
                <textarea placeholder="Message"></textarea>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className='contact-card'>
              <div>
                <p>This software simplifies the website building process, making it a breeze to manage our online presence.</p>
                <div className='author'>
                  <p>Claire Olson</p>
                  <p>Founder & CEO</p>
                </div>
              </div>


            </div>

          </div>
          <div className="contacts-cards">
            <ContactCard />
          </div>
          <div className="google-map">
            {/* google map */}
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}
export default Contact_us