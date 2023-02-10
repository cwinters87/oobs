import React, { useState, useEffect, useCallback } from 'react';

function WebsiteStatus({ url }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const checkWebsite = useCallback(async () => {
    setStatus(null);
    setError(null);

    try {
      console.log("test")
      const response = await fetch(url, {
        method: 'GET',
        // mode: 'no-cors',
        cache: 'no-cache',
      });
      if (response.ok) {
        setStatus(true);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      setError(err.message);
      setStatus(false);
    }
  }, [url, setStatus, setError]);

  useEffect(() => {
    checkWebsite();
  }, [url, checkWebsite]);

  return (
    
    <div>
      {status === null && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {status !== null && (
        <p>
          Website {url} is{' '}
          <b style={{ color: status ? 'green' : 'red' }}>
            {status ? 'up' : 'down'}
          </b>
        </p>
      )}
    </div>
  );
}

export default WebsiteStatus;