import './App.css';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import cardImage from './assets/ally_of_justice.jpg';
import cardImage2 from './assets/arcana_triumph_joker.jpg';
import cardImage3 from './assets/gravekeeper.jpg';
import cardImage4 from './assets/gravekeepershaman.jpg';
import cardImage5 from './assets/gravekeeperheadman.jpg';
import cardImage6 from './assets/gravekeepertrap.jpg';
import cardImage7 from './assets/ally_of_justice_catastor.jpg';
import cardImage8 from './assets/arcana_knight_joker.jpg';
import './assets/ruddy_rose_dragon.jpg';

function App() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={`header ${isActive ? 'active' : ''}`}>
        <div className='leftsection'>
          <h5 className="hello">YO GI HU</h5> 
          <h1 className="headline">CARDS</h1>
          <div className="info">
            <p>collect em all!</p>
          </div>
          <div className='options'>
            <h5 className='opt'>Upload</h5>
            <h5 className='opt'>Stats</h5>
            <h5 className='opt'>Create</h5>
          </div>
        </div>
        {/* Search Bar */}
        <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
        </div>

        <button className='register'>Register</button>
        <button className='login'>Login</button>
      </div>

      <h1 className='infogroup'>Trending Cards</h1>
      <div className='container'>
        {[cardImage, cardImage2, cardImage3, cardImage4, cardImage5, cardImage6, cardImage7, cardImage8].map((image, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${image})` }}>
            <div className='main'>
              <img className='cardimage' alt='' />
            </div>
          </div>
        ))}
              <h1 className='infogroup2'>New Silver Cards</h1>
              <div className='midsection'>
              </div>
      </div>
    </>
  );
}

export default App;
