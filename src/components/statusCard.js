// import React, { useState, useEffect, useMemo } from 'react';

// const StatusCard = () => {
//   const [status, setStatus] = useState({});
//   const [error, setError] = useState(null);

//   const websites = useMemo(() => [
//     "https://tasksuite.com",
//     "https://crm.tasksuite.com",
//     "https://demo.tasksuite.com"
//   ], []);

//   useEffect(() => {
//     const checkStatus = async () => {
//       websites.forEach(async (website) => {
//         try {
//           const response = await fetch(website, { method: 'HEAD' });
//           console.log(response)

//           setStatus((prevStatus) => ({
//             ...prevStatus,
//             [website]: response.ok
//           }));
//         } catch (e) {
//           setError(e);
//         }
//       });
//     };

//     checkStatus();
//   }, [websites]);

//   if (error) {
//     console.log(error)
//     return <div>An error occurred: {error.message}</div>;
//   }

//   const areAllWebsitesUp = Object.values(status).every(val => val);

//   return (
//     <div>
//       {areAllWebsitesUp ? (
//         <div>All websites are up</div>
//       ) : (
//         <div>One or more websites are down</div>
//       )}
//     </div>
//   );
// };

// export default StatusCard;

import React, { useState, useEffect } from 'react';

const StatusCard = ({ websites }) => {
  console.log(websites)
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

