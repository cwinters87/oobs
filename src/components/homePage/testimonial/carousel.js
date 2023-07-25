import React, { useState } from "react"
import Card from "./card"

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length)
  }

  return (
    <Card {...cards[currentIndex]} prevCard={prevCard} nextCard={nextCard} />
  )
}

export default Carousel
