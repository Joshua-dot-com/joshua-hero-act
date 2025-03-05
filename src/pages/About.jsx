import './../css/About.css';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-card'>
        <img src='/pic.jpg' alt='Joshua Saavedra' className='about-img' />
        <div className='about-content'>
          <h1>Joshua Saavedra <span className='wave-icon'>👋</span></h1>
          <h2>BSIT Student at Western Mindanao State University</h2>
          <h3>Aspiring Web Developer</h3>
          <p>
            Passionate about building modern web applications that enhance user experiences and make a positive impact on the world. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
