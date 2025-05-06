import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CatFacts() {
  const [fact, setFact] = useState('');

  const fetchFact = () => {
    axios
      .get('https://catfact.ninja/fact')
      .then((response) => {
        setFact(response.data.fact);
      })
      .catch((error) => {
        console.error('Error fetching cat fact:', error);
        setFact('Oops! Failed to fetch cat fact.');
      });
  };

  useEffect(() => {
    fetchFact(); 
  }, []);

  return (
    <div>
      <h2>Wanna know some fun facts about cat?</h2>
      <p>{fact ? fact : 'Loading fact...'}</p>
      <button onClick={fetchFact}>Get Another Fact</button>
    </div>
  );
}

export default CatFacts;