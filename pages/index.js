import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [jokeButtonState, setJokeButtonState] = useState('Get a joke');

  const handleClick = () => {
    if (jokeButtonState === 'Get a joke' || jokeButtonState === 'Get another joke') {
      getJoke().then((data) => {
        setJoke(data);
        setJokeButtonState('Show punch line');
      });
    } else if (jokeButtonState === 'Show punch line') {
      setJokeButtonState('Get another joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h2>{joke.setup}</h2>
      {jokeButtonState !== 'Show punch line' && <h2>{joke.delivery}</h2>}
      <button type="button" onClick={handleClick}>{jokeButtonState}</button>
    </div>
  );
}

export default Home;
