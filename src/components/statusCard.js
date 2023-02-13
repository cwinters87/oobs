import React, { useState, useEffect } from 'react';

const StatusCard = ({ websites }) => {
  // console.log(websites)
  const [websiteStatuses, setWebsiteStatuses] = useState({});

  useEffect(() => {
    const checkWebsiteStatus = async website => {
      try {
        const response = await fetch(website, { method: 'GET', cache: 'no-cache' });
        console.log(response)
        setWebsiteStatuses(prevStatuses => ({
          ...prevStatuses,
          [website]: response.ok
        }));
      } catch (error) {
        console.log(error)
        setWebsiteStatuses(prevStatuses => ({
          ...prevStatuses,
          [website]: false
        }));
      }
    };

    websites.forEach(website => checkWebsiteStatus(website));
  }, [websites]);

  const allActive = websites.every(website => websiteStatuses[website]);
  const someActive = websites.some(website => websiteStatuses[website]);
  const noneActive = !someActive;

  return (
    <div>
      {allActive && <div>All websites are active</div>}
      {someActive && !allActive && <div>Some websites are active</div>}
      {noneActive && <div>None of the websites are active</div>}
    </div>
  );
};

export default StatusCard;

