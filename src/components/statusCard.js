import React, { useState, useEffect } from "react"

const StatusCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      // .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ?
        <div>
          <h1>{data}</h1>
          <p>{data}</p>
        </div>
        :
        <p>Loading...</p>
      }
    </div>
  );
};

export default StatusCard;

