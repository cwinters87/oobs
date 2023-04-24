import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import SlackImg from '../../images/toolCarousel/slack.png'
import CreditsafeImg from '../../images/toolCarousel/creditsafe.png'
import ExperianImg from '../../images/toolCarousel/experian.png'
import OcrolusImg from '../../images/toolCarousel/ocrolus.png'
import PlaidImg from '../../images/toolCarousel/plaid.png'
import TransUnionImg from '../../images/toolCarousel/transunion.png'
import EquifaxImg from '../../images/toolCarousel/equifax.png'
import SalesforceImg from '../../images/toolCarousel/salesforce.png'

import "./toolsCarousel.css";

const cardData = [
  { src: SlackImg, title: "Slack" },
  { src: CreditsafeImg, title: "Creditsafe" },
  { src: ExperianImg, title: "Experian" },
  { src: OcrolusImg, title: "Ocrolus" },
  { src: PlaidImg, title: "Plaid" },
  { src: TransUnionImg, title: "TransUnion" },
  { src: EquifaxImg, title: "Equifax" },
  { src: SalesforceImg, title: "Salesforce" },
];

const Card = ({ image, title }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

const ToolsCarousel = () => {
  const cards = cardData.map((card, index) => (
    <Card key={index} image={card.src} title={card.title} />
  ));

  return (
    <div className="scrolling-cards-container">
      <ScrollMenu
        data={cards}
        wheel={true}
        alignCenter={false}
        dragging={false}
        onClick={(item, event) => event.preventDefault()}
      />
    </div>
  );
};

export default ToolsCarousel;