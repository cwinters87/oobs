import React, { useState } from "react"
// import { Swipeable } from 'react-swipeable';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import SlackImg from "../../images/toolCarousel/slack.png"
import CreditsafeImg from "../../images/toolCarousel/creditsafe.png"
import ExperianImg from "../../images/toolCarousel/experian.png"
import OcrolusImg from "../../images/toolCarousel/ocrolus.png"
import PlaidImg from "../../images/toolCarousel/plaid.png"
import TransUnionImg from "../../images/toolCarousel/transunion.png"
import EquifaxImg from "../../images/toolCarousel/equifax.png"
import SalesforceImg from "../../images/toolCarousel/salesforce.png"
import "./toolsCarousel.css"

const ToolsCarousel = () => {
  const data = [
    { image: SlackImg, title: "Slack" },
    { image: CreditsafeImg, title: "Creditsafe" },
    { image: ExperianImg, title: "Experian" },
    { image: OcrolusImg, title: "Ocrolus" },
    { image: PlaidImg, title: "Plaid" },
    { image: TransUnionImg, title: "TransUnion" },
    { image: EquifaxImg, title: "Equifax" },
    { image: SalesforceImg, title: "Salesforce" },
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  }

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item-wrapper"
      >
        {data.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ToolsCarousel
