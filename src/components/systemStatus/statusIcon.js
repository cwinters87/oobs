import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as styles from "./statusIcon.module.css"

const StatusIcon = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
  if (loading) return <p className={styles.text}>Loading...</p>
  if (error) return <p className={styles.text}>Error: {error.message}</p>
  if (!data) return null
  if (data) {
    const status = data.instances[0].status
    const statusColor = data.instances[0].backgroundColor
    const statusStyle = {
      height: "15px",
      width: "15px",
      backgroundColor: statusColor,
      borderRadius: "50%",
      display: "inline-block",
    }

    return (
      <div className={styles.container}>
        <span style={statusStyle}></span>
        <Link className={styles.text} to="/">
          Status: <span className={styles.statusWrapper}>{status}</span>
        </Link>
      </div>
    )
  }
}

export default StatusIcon
