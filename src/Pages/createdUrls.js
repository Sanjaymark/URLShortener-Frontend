import React, { useState, useEffect } from 'react';
import { API } from '../Services/api';


function URLList() {
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    fetch(`${API}/url/shortUrls/created`)
      .then(response => response.json())
      .then(data => setShortUrls(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="url-list-container">
      <h1 className='A'>Created Short URLs</h1>
      <table className="url-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {shortUrls.map((shortUrl, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <a href={`http://${shortUrl}`} target="_blank" rel="noopener noreferrer">
                  {shortUrl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default URLList;
