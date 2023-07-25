import React, { useState, useEffect } from "react"

const WebsiteStatus = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const prodEnv = process.env.GATSBY_API_STATUS
        const response = await fetch(prodEnv)
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 60000)
    return () => clearInterval(intervalId)
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return null
  if (data) {
    const status = data.instances[0].status
    const statusColor = data.instances[0].backgroundColor
    const fontColor = data.instances[0].fontColor
    const statusStyle = {
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "4px",
      backgroundColor: statusColor,
      padding: "10px 20px",
      fontWeight: "bold",
      color: fontColor,
    }

    return (
      <div style={statusStyle}>
        <div>{status}</div>
        <div>
          Refreshed{" "}
          {time >= 1
            ? `${time} minute${time === 1 ? "" : "s"}`
            : "less than 1 minute"}{" "}
          ago
        </div>
      </div>
    )
  }
}

export default WebsiteStatus
