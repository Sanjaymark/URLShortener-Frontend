import React, { useState } from 'react';
import { API } from '../Services/api';

function URLShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShortenClick = async () => {
    try 
    {
      const response = await fetch(`${API}/url/shorteningUrl`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: longUrl }),
      });

      const data = await response.json();
      setShortUrl(data.data.shortUrl);
    } 
    catch(error)
    {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter Long URL"
        value={longUrl}
        onChange={e => setLongUrl(e.target.value)}
      />
      <button onClick={handleShortenClick}>Shorten</button>
      {shortUrl && (
        <div>
          <p>Short URL:</p>
          <a href={`//${longUrl}`} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default URLShortener;
