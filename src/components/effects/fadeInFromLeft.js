import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as styles from "./fadeInFromLeft.module.css"

const FadeInFromLeft = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.1,
    })

    const currentElement = elementRef.current // Copy the ref value to a variable

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={`${styles.fadeInFromLeft} ${
        isVisible ? styles.isVisible : ""
      }`}
    >
      {children}
    </div>
  )
}

FadeInFromLeft.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default FadeInFromLeft
