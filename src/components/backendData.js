import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby";

// const BackendData = () => {

// const data = useStaticQuery(graphql`
// query {
//     allRestApiData {
//         edges {
//           node {    
//             message
//           }
//         }
//       }
//     }
// `);

// console.log(data.allRestApiData.edges[0].node.message)

// return <p>{data.allRestApiData.edges[0].node.message}</p>;

// };


// export default BackendData;



const BackendData = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await fetch("http://localhost:3000/data")
          const json = await response.json()
          setData(json)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    }, [])
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    if (!data) return null

  
    return (
    //   <ul>
    //     {data.map(item => (
    //       <li key={item.id}>{item.name}</li>
    //     ))}
    //   </ul>
        // <p>{data.message}</p>
        <p>hi</p>

    )
  }
  
  export default BackendData


