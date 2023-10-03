import React, { useEffect } from "react";

import HeronImg from "../../images/toolCarousel/heron.png"
import TwilioImg from "../../images/toolCarousel/twilio.svg"
import FlinksImg from "../../images/toolCarousel/flinks.svg"
import ExperianImg from "../../images/toolCarousel/experian.png"
import OcrolusImg from "../../images/toolCarousel/ocrolus.png"
import UsioImg from "../../images/toolCarousel/usio.png"
import PlaidImg from "../../images/toolCarousel/plaid.png"
import TransUnionImg from "../../images/toolCarousel/transunion.png"
import EquifaxImg from "../../images/toolCarousel/equifax.png"
import ProveImg from "../../images/toolCarousel/prove.png"

import "./carouselTools.css"

const CarouselTools = () => {
  const data = [
    { image: HeronImg, title: "Heron Data" },
    { image: TwilioImg, title: "Twilio" },
    { image: FlinksImg, title: "Flinks" },
    { image: ExperianImg, title: "Experian" },
    { image: UsioImg, title: "Usio" },
    { image: OcrolusImg, title: "Ocrolus" },
    { image: PlaidImg, title: "Plaid" },
    { image: TransUnionImg, title: "TransUnion" },
    { image: EquifaxImg, title: "Equifax" },
    { image: ProveImg, title: "Prove" },
  ]

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach(scroller => {
          scroller.setAttribute('data-animated', true);

          const scrollerInner = scroller.querySelector('.scroller_inner');
          const scrollerContent = Array.from(scrollerInner.children);

          // Run duplication logic thrice
          for (let i = 0; i < 3; i++) {
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
          }
      });
    }
}, []);


  return (
    <div className="scroller" data-speed="slow" data-direction="left">
        <ul className="card-container scroller_inner">
            {data.map((item, index) => (
                <li key={index} className="card">
                    <img className="card-img" src={item.image} alt={item.title} loading="lazy" />
                    <p className="card-title">{item.title}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CarouselTools
