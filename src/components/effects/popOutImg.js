import React, { useState, useEffect, useRef } from "react"

const ScrollFadeInImage = ({ src, alt, style }) => {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const currentRef = imgRef.current

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // set timout at .25 seconds
        setTimeout(() => {
          setIsVisible(true)
        }, 250)
      } else {
        setIsVisible(false)
      }
    })

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        ...style,
      }}
    />
  )
}

export default ScrollFadeInImage
