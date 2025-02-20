import './../css/Hero.css'

const Hero = () => {
  return (
    <div className='wrapper'>
      <div className='hero-img-wrapper'>
        <img className='hero-img' src="/josh.png" alt="Joshua Saavedra portrait" />
      </div>
      <div className='info-wrapper'>
        <div>
          <p className='greeting'><span className='line'></span>Hello</p>
          <h1 className='intro'>I am <span className='highlight-bold'>Joshua</span> Saavedra</h1>
          <h2 className='desc'>I’m passionate about designing solutions that prioritize sustainability, innovation, and community impact. Through thoughtful, eco-conscious projects, I strive to reduce environmental footprints while inspiring a more conscious way of living and working.</h2>
          <button className='dl-cv'>download cv</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
