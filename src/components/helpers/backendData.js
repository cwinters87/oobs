import React, { useState, useEffect } from "react"

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
    if (data) return (<p>{data.status}</p>)
  }
  
  export default BackendData


