import './App.css';

const App = () => {
  return <>
    <div className='wrapper'>
      <div className='hero-img-wrapper'>
        <img className='hero-img' src="/joshua.png" alt="Joshua Saavedra portrait" />
      </div>
      <div className='info-wrapper'>
        <div>
          <p className='greeting'><span className='line'></span>Hello</p>
          <h1 className='intro'>I am <span className='highlight-bold'>Joshua</span> Saavedra</h1>
          <h2 className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eaque quia hic ratione id dolorum impedit quae nesciunt cum molestias.</h2>
          <button className='dl-cv'>Download CV</button>
        </div>
      </div>
    </div>
  </>
}

export default App;
