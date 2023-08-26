import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const quotesFetch = await fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'GZDTbliwsEhcjqbDy6PgYA==ZPoFVCTEyv9xsIsq',
        'Content-Type': 'application/json',
      },
    });

    const quotesJson = await quotesFetch.json();
    if (!quotesJson.ok) {
      setError('Something went wrong');
    }
    setQuotes(quotesJson);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p>
        : (
          <div>
            <p>{quotes[0].quote}</p>
            <small>{quotes[0].author}</small>
          </div>
        )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Quote;
